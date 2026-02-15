export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">

        {/* BRAND */}
        <div className="footer-col">
          <h3 className="footer-brand">JAMES BADMINTON ACADEMY</h3>
          <p className="footer-text">
            Experience professional badminton training in a disciplined and
            competitive environment. Building champions with passion.
          <ul>
            <li>Follow us on Instagram :</li>
            <li><p className="footer-text">
                
  <a
    href="https://www.instagram.com/jamesbadmintonacademyy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-black"
  >
    <div className="footer-text">
  <a
    href="https://www.instagram.com/jamesbadmintonacademyy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-black"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-2.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/>
    </svg>

    <span>@james_badminton_academy</span>
  </a>
</div>
  </a>
</p>
</li>
          </ul>
          </p>
        </div>
        {/* WHY JBA */}
        <div>
        <h3 className="footer-brand">
            Why Choose Us?
        </h3>

        <ul className="footer-text">
            <li>• Certified Coaches</li>
            <li>• National-Level Training</li>
            <li>• Safe Indoor Courts</li>
        </ul>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#coaches">Coaches</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4 className="footer-title">Contact Us</h4>
          <ul className="footer-contact">
            <li>📍 SRA-130, Pipeline Rd, Marottichuvadu, Edappally, Kochi, Kerala 682021</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ jamesbadminton@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>© 2025 James Badminton Academy. All rights reserved.</p>

        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
