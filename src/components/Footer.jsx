import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">ERROR<span>PIXELS</span></div>
            <p className="footer__tagline">
              Capturing moments that matter.<br />
              Coimbatore's premium visual studio.
            </p>
            <div className="footer__socials">
              <a href="https://instagram.com/errorpixels" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="https://youtube.com/@errorpixels" target="_blank" rel="noreferrer" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer__nav">
            <h4>Navigate</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/reels">Reels</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__nav">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Wedding Photography</Link></li>
              <li><Link to="/services">Product Shoots</Link></li>
              <li><Link to="/services">Corporate Videos</Link></li>
              <li><Link to="/services">Event Coverage</Link></li>
              <li><Link to="/services">Portrait Sessions</Link></li>
            </ul>
          </div>

          <div className="footer__contact">
            <h4>Get In Touch</h4>
            <p>Coimbatore, Tamil Nadu</p>
            <a href="mailto:hello@errorpixels.in">hello@errorpixels.in</a>
            <a href="tel:+919999999999">+91 99999 99999</a>
            <Link to="/contact" className="footer__cta">Book a Shoot →</Link>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Error Pixels. All rights reserved.</p>
          <p>Built with React + Vite</p>
        </div>
      </div>
    </footer>
  )
}
