import './KPICard.css';

const KPICard = ({ title, value, icon, color, suffix }) => {
  return (
    <div 
      className="kpi-card"
      style={{ backgroundColor: color }}
    >
      <div className="card-content">
        <div className="text-container">
          <p className="kpi-title">{title}</p>
          <p className="kpi-value">
            {value}
            {suffix && <span className="kpi-suffix">{suffix}</span>}
          </p>
        </div>
        <div className="icon-container">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default KPICard;