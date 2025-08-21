import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const GraficoProduccionPorTipo = ({ produccionPorTipo }) => {
  return (
    <div>
      <h3 className='titulo'>Producción por Tipo de Producto</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          layout="vertical"
          data={produccionPorTipo}
          margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="tipo" type="category" width={120} />
          <Tooltip />
          <Bar dataKey="produccion" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoProduccionPorTipo;


