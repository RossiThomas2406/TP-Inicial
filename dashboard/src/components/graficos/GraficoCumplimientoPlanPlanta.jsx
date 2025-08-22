import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';
import './GraficoCumplimientoPlanPlanta.css';
const GraficoCumplimientoPlanPlanta = ({ cumplimientoPlanData }) => {
  // Función para calcular el color según el cumplimiento
  const getCumplimientoColor = (cumplimiento) => {
    if (cumplimiento >= 100) return '#52c41a'; // Excelente (verde)
    if (cumplimiento >= 90) return '#faad14';  // Aceptable (naranja)
    return '#f5222d';                         // Necesita mejora (rojo)
  };

  // Custom tooltip para mostrar información detallada
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const planificado = payload.find(p => p.dataKey === 'planificado')?.value || 0;
      const real = payload.find(p => p.dataKey === 'real')?.value || 0;
      const cumplimiento = ((real / planificado) * 100).toFixed(1);
      
      return (
        <div className="custom-tooltip" style={{
          backgroundColor: 'white',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px'
        }}>
          <p style={{ fontWeight: 'bold' }}>{label}</p>
          <p style={{ color: '#8884d8' }}>Planificado: {planificado} unidades</p>
          <p style={{ color: '#82ca9d' }}>Real: {real} unidades</p>
          <p style={{ 
            fontWeight: 'bold', 
            color: getCumplimientoColor(cumplimiento) 
          }}>
            Cumplimiento: {cumplimiento}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className='grafico-cumplimiento-plan-planta'>
      <h3 className='titulo'>Produccion Planificada vs Produccion Real - Por Producto</h3>
      
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={cumplimientoPlanData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          barGap={0}
          barCategoryGap="20%"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="producto" 
            tick={{ fontSize: 12 }}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis 
            label={{ 
              value: 'Unidades', 
              angle: -90, 
              position: 'insideLeft',
              style: { textAnchor: 'middle' }
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          
          {/* Barra de Planificado */}
          <Bar 
            dataKey="planificado" 
            name="Planificado" 
            fill="#8884d8"
            radius={[4, 4, 0, 0]}
          />
          
          {/* Barra de Real */}
          <Bar 
            dataKey="real" 
            name="Real" 
            fill="#82ca9d"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>

      {/* Leyenda personalizada */}
      <div className="leyenda-cumplimiento">
        <div className="leyenda-item-cumplimiento">
          <div className="leyenda-color-cumplimiento leyenda-planificado"></div>
          <span>Planificado</span>
        </div>
        <div className="leyenda-item-cumplimiento">
          <div className="leyenda-color-cumplimiento leyenda-real"></div>
          <span>Real Producción</span>
        </div>
      </div>
    </div>
  );
};

export default GraficoCumplimientoPlanPlanta;