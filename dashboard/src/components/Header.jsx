import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import './Header.css';

const Header = () => {
  const [fechaDesde, setFechaDesde] = useState('');
  const [fechaHasta, setFechaHasta] = useState('');

  const handleVisualizar = () => {
    console.log("Visualizar estadísticas desde:", fechaDesde, "hasta:", fechaHasta);
    // Aquí podrías filtrar tus estadísticas en pantalla
  };

  const handleGenerarReporte = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Reporte de Producción - Panadería El Sol", 20, 20);

    doc.setFontSize(12);
    doc.text(`Rango de fechas: ${fechaDesde || "N/A"} a ${fechaHasta || "N/A"}`, 20, 40);

    doc.text("Aquí puedes agregar datos de producción, estadísticas, etc.", 20, 60);

    // Guarda y descarga automáticamente el PDF
    doc.save(`reporte_produccion_${fechaDesde}_a_${fechaHasta}.pdf`);
  };

  return (
    <header className="pyme-header">
      <div className='nombre-pyme'>
        <span>Panaderia El Sol</span>
        <h1>Dashboard de Producción</h1>
      </div>


      <div className="header-controls">
        <label>
          Desde:
          <input
            type="date"
            value={fechaDesde}
            onChange={(e) => setFechaDesde(e.target.value)}
          />
        </label>
        <label>
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
