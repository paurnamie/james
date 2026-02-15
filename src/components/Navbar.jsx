const Navbar = () => {
  return (
    <header className="header island" role="banner">
      <div className="header-inner container">
        <img
  src="/logo.jpg"
  alt="James Badminton Academy"
  className="h-12 w-auto rounded-xl object-contain"
  style={{ minHeight: "40px" }}
/>
 
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#programs" className="nav-link">Programs</a>
          <a href="#coaches" className="nav-link">Coaches</a>
          <a href="#gallery" className="nav-link">Gallery</a>
          <a href="#contact" className="btn btn-cta">Join Now</a>
        </nav>
      </div>
    </header>
  );
};
 
export default Navbar;