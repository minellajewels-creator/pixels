import { Link } from 'react-router-dom'
import './Home.css'

const stats = [
  { number: '500+', label: 'Projects Done' },
  { number: '8+', label: 'Years Experience' },
  { number: '200+', label: 'Happy Clients' },
  { number: '50+', label: 'Awards Won' },
]

const services = [
  {
    icon: '📷',
    title: 'Wedding Photography',
    desc: 'Timeless frames that tell your love story. Candid, editorial, and traditional.',
  },
  {
    icon: '🎬',
    title: 'Corporate Videos',
    desc: 'Brand films, product showcases, and event coverage that elevate your business.',
  },
  {
    icon: '🛍️',
    title: 'Product Shoots',
    desc: 'E-commerce and editorial product photography that converts browsers to buyers.',
  },
  {
    icon: '🎭',
    title: 'Portrait Sessions',
    desc: 'Personal branding, modelling portfolios, and headshots that make you stand out.',
  },
]

export default function Home() {
  return (
    <main className="home">

      {/* Hero */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__grain" />
          <div className="hero__lines" />
        </div>
        <div className="container hero__content">
          <p className="section-label" style={{ animationDelay: '0.1s' }}>Coimbatore's Visual Studio</p>
          <h1 className="hero__title">
            WE DON'T<br />
            <span>SHOOT</span><br />
            MOMENTS —<br />
            WE <span>CRAFT</span> THEM
          </h1>
          <p className="hero__sub">
            Error Pixels is a premium photography & videography studio<br />
            based in Coimbatore, Tamil Nadu.
          </p>
          <div className="hero__actions">
            <Link to="/portfolio" className="btn-primary">View Our Work</Link>
            <Link to="/contact" className="btn-outline">Book a Shoot</Link>
          </div>
        </div>
        <div className="hero__scroll">
          <span />
          <p>Scroll</p>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-bar">
        <div className="container stats-bar__grid">
          {stats.map(({ number, label }) => (
            <div key={label} className="stats-bar__item">
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section services">
        <div className="container">
          <p className="section-label">What We Do</p>
          <h2 className="section-title">OUR<br />SERVICES</h2>
          <div className="services__grid">
            {services.map(({ icon, title, desc }) => (
              <div key={title} className="services__card">
                <div className="services__icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <Link to="/services" className="services__link">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section portfolio-preview">
        <div className="container">
          <p className="section-label">Our Work</p>
          <div className="portfolio-preview__header">
            <h2 className="section-title">FEATURED<br />PROJECTS</h2>
            <Link to="/portfolio" className="btn-outline">View All →</Link>
          </div>
          <div className="portfolio-preview__grid">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={`portfolio-preview__item portfolio-preview__item--${i}`}>
                <div className="portfolio-preview__overlay">
                  <span>Wedding — 2024</span>
                  <h4>The Sharma Wedding</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reels CTA */}
      <section className="reels-cta">
        <div className="container reels-cta__inner">
          <div>
            <p className="section-label">Behind The Lens</p>
            <h2 className="section-title">WATCH<br />OUR REELS</h2>
            <p style={{ color: 'var(--muted)', marginBottom: '32px', maxWidth: '400px' }}>
              See our work in motion — wedding films, brand videos, and event highlights.
            </p>
            <Link to="/reels" className="btn-primary">Watch Now</Link>
          </div>
          <div className="reels-cta__visual">
            <div className="reels-cta__phone">
              <div className="reels-cta__play">▶</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <h2 className="section-title" style={{ marginBottom: '8px' }}>READY TO<br />CREATE?</h2>
            <p style={{ color: 'var(--muted)', fontSize: '15px' }}>Let's build something unforgettable together.</p>
          </div>
          <Link to="/contact" className="btn-primary" style={{ fontSize: '14px', padding: '18px 48px' }}>
            Book Your Shoot
          </Link>
        </div>
      </section>

    </main>
  )
}
