import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList, ReferenceLine } from 'recharts';

const GraficoEficienciaPorProducto = ({ eficienciaPorProducto }) => {
  return (
    <div>
      <h3 className='titulo'>Eficiencia por Producto (%)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          layout="vertical"
          data={eficienciaPorProducto}
          margin={{ top: 20, right: 30, left: 80, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 110]} />
          <YAxis dataKey="nombre" type="category" width={120} />
          <Tooltip formatter={(value) => `${value}%`} />

          {/* Línea de referencia en 100% */}
          <ReferenceLine x={100} stroke="green" strokeDasharray="3 3" label="Planificado (100%)" />
          <Bar dataKey="eficiencia" fill="#4A90E2">
            <LabelList dataKey="eficiencia" position="right" formatter={(value) => `${value}%`} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoEficienciaPorProducto;
