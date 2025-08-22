import KPICard from '../components/KPICard';
import GraficoProduccionPorTipo from '../components/graficos/GraficoProduccionPorTipo';
import GraficoEficienciaPorProducto from '../components/graficos/GraficoEficienciaPorProducto';
import GraficoCumplimientoPlanPlanta from '../components/graficos/GraficoCumplimientoPlanPlanta';
import GraficoOEE from '../components/graficos/GraficoOEE';
import GraficoDesperdicioProductos from '../components/graficos/GraficoDesperdicioProductos';
import GraficoAusentismo from '../components/graficos/GraficoAusentismo';
import GraficoTardanza from '../components/graficos/GraficoTardanza';
import TablaDepartamentos from '../components/TablaDepartamentos';
import GraficoNoConformidades from '../components/graficos/GraficoNoConformidades';

import './Dashboard.css';


//import de los datos de ejemplo
import {kpiCardsData,produccionPorTipo,datosNoConformidades,eficienciaPorProducto,cumplimientoPlanData,oeePromedio,desperdicioProductosData,ausentismoData,tardanzaData,statsAsistencia,ausentismoPorDepartamento} from '../data/Mockdata';


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

          <GraficoOEE oeePromedio={oeePromedio} />

          <GraficoCumplimientoPlanPlanta cumplimientoPlanData={cumplimientoPlanData} />

          <GraficoDesperdicioProductos data={desperdicioProductosData} />

          <GraficoNoConformidades data={datosNoConformidades} />

          <TablaDepartamentos datos={ausentismoPorDepartamento}/>

          <GraficoProduccionPorTipo produccionPorTipo={produccionPorTipo}/>

          <GraficoEficienciaPorProducto eficienciaPorProducto={eficienciaPorProducto}/>

      </div>

    </div>
  );
}