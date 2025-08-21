import KPICard from '../components/KPICard';
import GraficoProduccionPorTipo from '../components/graficos/GraficoProduccionPorTipo';
import GraficoEficienciaPorProducto from '../components/graficos/GraficoEficienciaPorProducto';
import GraficoCumplimientoPlanPlanta from '../components/graficos/GraficoCumplimientoPlanPlanta';
import GraficoOEE from '../components/graficos/GraficoOEE';
import GraficoDesperdicioProductos from '../components/graficos/GraficoDesperdicioProductos';
import GraficoCalidadDonut from '../components/graficos/GraficoCalidadDonut';
import GraficoAusentismo from '../components/graficos/GraficoAusentismo';
import GraficoTardanza from '../components/graficos/GraficoTardanza';
import TablaDepartamentos from '../components/TablaDepartamentos';

import './Dashboard.css';


//import de los datos de ejemplo
import {kpiCardsData,produccionPorTipo,eficienciaPorProducto,cumplimientoPlanData,oeePromedio,desperdicioProductosData,calidadData,ausentismoData,tardanzaData,statsAsistencia,ausentismoPorDepartamento} from '../data/Mockdata';


export default function BakeryDashboard() {

  return (  
    <div>
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

      {/* Produccion por Tipo */}
      <div className='graficosProductos'>
          <GraficoProduccionPorTipo produccionPorTipo={produccionPorTipo}/>

          <GraficoEficienciaPorProducto eficienciaPorProducto={eficienciaPorProducto}/>

          <GraficoCumplimientoPlanPlanta cumplimientoPlanData={cumplimientoPlanData} />

          <GraficoOEE oeePromedio={oeePromedio} />

          <GraficoDesperdicioProductos data={desperdicioProductosData} />

          <GraficoCalidadDonut data={calidadData}/>

          <GraficoAusentismo data={ausentismoData} stats={statsAsistencia}/>
        
          <GraficoTardanza data={tardanzaData} stats={statsAsistencia}/>
      
          <TablaDepartamentos datos={ausentismoPorDepartamento}/>
      </div>

    </div>
  );
}