import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [fechaDesde, setFechaDesde] = useState('');
  const [fechaHasta, setFechaHasta] = useState('');

  const handleVisualizar = () => {
    console.log("Visualizar estadísticas desde:", fechaDesde, "hasta:", fechaHasta);
    // Aquí puedes llamar a una función que cargue los datos del dashboard filtrados por rango de fechas
  };

  const handleGenerarReporte = () => {
    console.log("Generar reporte desde:", fechaDesde, "hasta:", fechaHasta);
    // Aquí puedes implementar la lógica para generar y descargar el reporte
  };

  return (
    <header className="pyme-header">
      <div className='nombre-pyme'>
        <span>Panaderia El Sol</span>
        <h1>Dashboard de Producción</h1>
      </div>


      <div className="header-controls">
        <label className='fecha'>
          Desde:
          <input
            type="date"
            value={fechaDesde}
            onChange={(e) => setFechaDesde(e.target.value)}
          />
        </label>
        <label className='fecha'>
          Hasta:
          <input
            type="date"
            value={fechaHasta}
            onChange={(e) => setFechaHasta(e.target.value)}
          />
        </label>
        <button onClick={handleVisualizar}>Visualizar Estadística</button>
        <button onClick={handleGenerarReporte}>Generar Reporte</button>
      </div>
    </header>
  );
};

export default Header;
