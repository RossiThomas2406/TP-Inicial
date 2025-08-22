import React, { useState } from "react";
import { jsPDF } from "jspdf";
import "./Header.css";

const Header = () => {
  const [fechaDesde, setFechaDesde] = useState("");
  const [fechaHasta, setFechaHasta] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <header className="pyme-header">
      <div className="nombre-pyme">
        <span>Panaderia El Sol</span>
        <h1>Dashboard de Producción</h1>
      </div>

      {/* Botón Hamburguesa */}
      <div
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Controles */}
      <div className={`header-controls ${menuOpen ? "show" : ""}`}>
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
        <button>Visualizar Estadística</button>
        <button onClick={handleGenerarReporte}>Generar Reporte</button>
      </div>
    </header>
  );
};

export default Header;
