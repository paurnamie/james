const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-inner container">
        
        <div className="hero-text-wrap">

        {/* Main heading */}
        <h1 className="hero-title">
          Elevate Your Game to{" "}
          <span className="gradient-text"></span>
          <br />
          <span className="gradient-text">Championship Level</span>
        </h1>

        {/* Sub text */}
        <p className="hero-sub">
          Join the elite training program trusted by champions.<br/>
          Expert coaching, premium facilities, and a proven path to success.
        </p>

        {/* CTA buttons */}
        <div className="hero-ctas">
          <a href="#programs" className="btn btn-cta">
            Start Your Journey
          </a>
        </div>
      </div>
      <div className="hero-right">
  </div>
    <div className="hero-shuttle">
    <img src="/shuttle.png" alt="Badminton Shuttle" />
  </div>
      </div>
</section>
  );
};

export default Hero;