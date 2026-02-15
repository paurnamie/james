const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container about-grid">
        
        {/* LEFT CONTENT */}
        <div className="about-content">
          <span className="about-tag">ABOUT US</span>

          <h2 className="about-title">
            
            <span className="text-5xl font-extrabold text-[#111827]">Building Champions <br />On & Off the Court</span>
          </h2>

          <p className="about-text">
            James Badminton Academy is a high-performance training center dedicated
            to nurturing badminton talent at every level. Our mission is to provide
            structured, professional coaching that transforms passion into excellence.
          </p>

          <p className="about-text">
            With experienced coaches, modern training methodologies, and a strong
            focus on discipline and fitness, we help players unlock their true
            potential and compete with confidence.
          </p>

          <ul className="about-points">
            <li>✔ Certified & experienced coaching staff</li>
            <li>✔ Professional training for all age groups</li>
            <li>✔ Focus on technique, fitness & mindset</li>
            <li>✔ Proven success in competitive tournaments</li>
          </ul>
        </div>

        {/* RIGHT STATS */}
        <div className="about-stats">
          <div className="stat-card">
            <h3>10+</h3>
            <p>Years of Coaching Experience</p>
          </div>

          <div className="stat-card">
            <h3>300+</h3>
            <p>Players Trained</p>
          </div>

          <div className="stat-card">
            <h3>50+</h3>
            <p>Tournament Wins</p>
          </div>

          <div className="stat-card">
            <h3>100%</h3>
            <p>Commitment to Excellence</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;