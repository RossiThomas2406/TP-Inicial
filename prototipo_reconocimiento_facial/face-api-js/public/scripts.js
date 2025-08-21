const run = async()=>{

    //pide al usuario permiso para usar la camara
    const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
    })

    const videoFeedEL = document.getElementById('video-feed')
    videoFeedEL.srcObject = stream

    //necesitamos cargar los modelos
    //Aprendizaje automático preentrenado para detección facial
    await Promise.all([
        faceapi.nets.ssdMobilenetv1.loadFromUri('./modelos'),
        faceapi.nets.faceLandmark68Net.loadFromUri('./modelos'),
        faceapi.nets.faceRecognitionNet.loadFromUri('./modelos'),
        faceapi.nets.ageGenderNet.loadFromUri('./modelos'),
        faceapi.nets.faceExpressionNet.loadFromUri('./modelos'),
    ])

    //Hace que el canvas tenga el mismo tamaño y este en la misma ubicación que la transmisión de video.
    const canvas = document.getElementById('canvas')
    canvas.height = videoFeedEL.height
    canvas.width = videoFeedEL.width

    //Thomas Rossi
    const refFace = await faceapi.fetchImage('./empleados/thomas.jpg')

    //Tomamos una imagen de referencia y se la entregamos a detectAllFaces
    let refFaceAiData = await faceapi.detectAllFaces(refFace).withFaceLandmarks().withFaceDescriptors()

    //Creamos un faceMatcher con los datos de la cara de referencia
    let faceMatcher = new faceapi.FaceMatcher(refFaceAiData)
    
    //detección facial con puntos
    setInterval(async() => {

        //Obtener la señal de video y entregarla al método detectAllFaces
        //faceAIData es una matriz de objetos, uno por cada rostro detectado.
        let faceAIData = await faceapi.detectAllFaces(videoFeedEL).withFaceLandmarks().withFaceDescriptors().withAgeAndGender().withFaceExpressions()
        //console.log(faceAIData);
        //Ahora tenemos muchísimos datos faciales de calidad


        //dibujar en nuestra cara/canvas
        //Primero, limpiamos el canvas
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)

        //dibuja nuestro cuadro delimitador
        faceAIData = faceapi.resizeResults(faceAIData,videoFeedEL)
        faceapi.draw.drawDetections(canvas,faceAIData)
        faceapi.draw.drawFaceLandmarks(canvas,faceAIData)
        faceapi.draw.drawFaceExpressions(canvas,faceAIData)

        //pedimos a la IA que adivine la edad y el género con un nivel de confianza
        faceAIData.forEach(face=>{
            const {age,gender,genderProbability, detection, descriptor} = face
            const genderText =`${gender}- ${Math.round(genderProbability*100)/100*100}`
            const ageText = ` ${Math.round(age*100)/100} years`
            const textField = new faceapi.draw.DrawTextField([genderText,ageText],face.detection.box.topRight)
            textField.draw(canvas)

            let label = faceMatcher.findBestMatch(descriptor).toString()
            
            let options ={label:"Thomas",}

            if (label.includes("unknown")) {
                options = {label:"Unknown subject",}
            }

            const drawBox = new faceapi.draw.DrawBox(detection.box,options)
            drawBox.draw(canvas);
        })
    }, 200);
}

run()