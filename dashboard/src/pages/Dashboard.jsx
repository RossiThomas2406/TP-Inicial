import Header from '../components/Header';
import KPICard from '../components/KPICard';
import GraficoProduccionPorTipo from '../components/graficos/GraficoProduccionPorTipo';
import GraficoEficienciaPorProducto from '../components/graficos/GraficoEficienciaPorProducto';
import GraficoCumplimientoPlanPlanta from '../components/graficos/GraficoCumplimientoPlanPlanta';
import GraficoOEE from '../components/graficos/GraficoOEE';
import GraficoDesperdicioProductos from '../components/graficos/GraficoDesperdicioProductos';
import TablaDepartamentos from '../components/TablaDepartamentos';
import GraficoNoConformidades from '../components/graficos/GraficoNoConformidades';

import './Dashboard.css';


//import de los datos de ejemplo
import {produccionPorTipo,datosNoConformidades,eficienciaPorProducto,cumplimientoPlanData,oeePromedio,desperdicioProductosData,ausentismoPorDepartamento} from '../data/Mockdata';

const kpiCardsData = [
  {
    title: "Cumplimiento Plan",
    value: "94.8",
    suffix: "%",
    icon: "🎯",
    color: "#64a37fff",
    descripcion: "Promedio de cumplimiento del plan de producción"
  },

  {
    title: "Tasa de Desperdicio",
    value: "11.0",
    suffix: "%",
    icon: "🗑️",
    color: "#e0ab47ff",
    descripcion: "Productos fuera de especificación"
  },
  
  {
    title: "Tasa de No Conformidades",
    value: "5.6",
    suffix: "%",
    icon: "⛔",
    color: "#FF8042",
    descripcion: "Eficiencia general de equipos"
  },

  {
    title: "Tasa de Ausentismo",
    value: "8.4",
    suffix: "%",
    icon: "👥",
    color: "#cc493dff",
    descripcion: "Tasa promedio de ausencias"
  },

    {
    title: "Tardanza Promedio",
    value: "12.5",
    suffix: "min",
    icon: "⏱️",
    color: "#8b83beff",
    descripcion: "Tasa promedio de ausencias"
  }
];


export default function BakeryDashboard() {

  return (

    <div>
      <Header /> 
      
      <div className='contenidoDashboard'>

        {/* Cartas KPIS */}
        <div className='gridKPICards'>
          {kpiCardsData.map((kpi, index) => (
            <KPICard
              key={index}
              title={kpi.title}
              value={kpi.value}
              suffix={kpi.suffix}
              icon={kpi.icon}
              color={kpi.color}
            />
          ))}
        </div>
        
        {/* Gráficos */}
        <div className='graficosProductos'>

            <GraficoOEE oeePromedio={oeePromedio} />

            <GraficoCumplimientoPlanPlanta cumplimientoPlanData={cumplimientoPlanData} />

            <GraficoDesperdicioProductos data={desperdicioProductosData} />

            <GraficoNoConformidades data={datosNoConformidades} />

            <TablaDepartamentos datos={ausentismoPorDepartamento}/>

            <GraficoProduccionPorTipo produccionPorTipo={produccionPorTipo}/>

            <GraficoEficienciaPorProducto eficienciaPorProducto={eficienciaPorProducto}/>

        </div>
      </div>


    </div>
  );
}