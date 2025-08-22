import React, { useState } from "react";
import { jsPDF } from "jspdf";
import "./Header.css";

const Header = () => {
  const [fechaDesde, setFechaDesde] = useState("");
  const [fechaHasta, setFechaHasta] = useState("");
  const [menuAbierto, setMenuAbierto] = useState(false);

  const handleGenerarReporte = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Reporte de Producción - Panadería El Sol", 20, 20);
    doc.setFontSize(12);
    doc.text(
      `Rango de fechas: ${fechaDesde || "N/A"} a ${fechaHasta || "N/A"}`,
      20,
      40
    );
    doc.text("Aquí puedes agregar datos de producción, estadísticas, etc.", 20, 60);
    doc.save(`reporte_produccion_${fechaDesde}_a_${fechaHasta}.pdf`);
  };

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (

      <div className="header-contenedor">
        <div className="header-nav">
          <div className="nombre-pyme">
            <span>Panaderia El Sol</span>
            <h1>Dashboard de Producción</h1>
          </div>

          <button 
            className={`hamburguesa-btn ${menuAbierto ? 'activo' : ''}`}
            onClick={toggleMenu}
            aria-label="Abrir menú de opciones"
          >
            <span className="hamburguesa-linea"></span>
            <span className="hamburguesa-linea"></span>
            <span className="hamburguesa-linea"></span>
          </button>
        </div>

        {/* Controles - ahora con clase condicional para mostrar/ocultar */}
        <div className={`opcionesMenu ${menuAbierto ? 'menu-abierto' : ''}`}>
          <div className="opciones-fecha">
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
          </div>
          <div className="opciones-botones">
            <button className="btn-estadistica">Visualizar Estadística</button>
            <button className="btn-reporte" onClick={handleGenerarReporte}>Generar Reporte</button>
          </div>
        </div>
      </div>

  );
};

export default Header;