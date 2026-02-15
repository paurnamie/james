const FlipCard = ({ icon, title, features, details, description }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">

        {/* FRONT */}
        <div className="flip-card-front">
          <div className="card-top">
            <div className="card-icon">{icon}</div>
            <h3>{title}</h3>
          </div>

          <p className="card-subtitle">What you’ll learn</p>

          <ul className="card-feats">
            {features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        {/* BACK */}
        <div className="flip-card-back">
          <div className="back-content">
            <h3 className="back-title">{title} — Details</h3>

            <div className="program-details">
              {details.map((d, i) => (
                <div key={i}>
                  <div className="label">{d.label}</div>
                  <div className="value">{d.value}</div>
                </div>
              ))}
            </div>

            <p className="program-desc">{description}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FlipCard;
