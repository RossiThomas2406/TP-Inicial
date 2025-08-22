import React from 'react';
import './GraficoOEE.css';

const GraficoOEE = ({ oeePromedio }) => {
  // Determinar el estado y color del semáforo
  const getOEEStatus = (value) => {
    if (value >= 85) return { status: 'Excelente', color: '#7AC499', class: 'excelente' };
    if (value >= 75) return { status: 'Aceptable', color: '#FFC355', class: 'aceptable' };
    return { status: 'Necesita mejora', color: '#E3322D', class: 'mejora' };
  };

  const oeeStatus = getOEEStatus(oeePromedio.oee);

  return (
    <div className="oee-simple-container">
      <h3 className="oee-simple-title">Eficiencia General (OEE)</h3>
      
      <div className="oee-main-card">
        <div className="oee-value-circle" style={{ borderColor: oeeStatus.color }}>
          <span className="oee-percentage">{oeePromedio.oee}%</span>
          <span className="oee-label">OEE General</span>
        </div>
        
        <div className={`oee-status ${oeeStatus.class}`}>
          {oeeStatus.status}
        </div>
      </div>

      <div className="oee-components">
        <div className="oee-component">
          <div className="component-title">Disponibilidad</div>
          <div className="component-value">{oeePromedio.disponibilidad}%</div>
          <div className="component-bar">
            <div 
              className="component-bar-fill disponibilidad" 
              style={{ width: `${oeePromedio.disponibilidad}%` }}
            ></div>
          </div>
        </div>
        
        <div className="oee-component">
          <div className="component-title">Rendimiento</div>
          <div className="component-value">{oeePromedio.rendimiento}%</div>
          <div className="component-bar">
            <div 
              className="component-bar-fill rendimiento" 
              style={{ width: `${oeePromedio.rendimiento}%` }}
            ></div>
          </div>
        </div>
        
        <div className="oee-component">
          <div className="component-title">Calidad</div>
          <div className="component-value">{oeePromedio.calidad}%</div>
          <div className="component-bar">
            <div 
              className="component-bar-fill calidad" 
              style={{ width: `${oeePromedio.calidad}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="oee-legend">
        <div className="legend-item">
          <div className="legend-color excelente"></div>
          <span>Excelente (≥85%)</span>
        </div>
        <div className="legend-item">
          <div className="legend-color aceptable"></div>
          <span>Aceptable (75-84%)</span>
        </div>
        <div className="legend-item">
          <div className="legend-color mejora"></div>
          <span>Necesita mejora ({'<'}75%)</span>
        </div>
      </div>
    </div>
  );
};

export default GraficoOEE;