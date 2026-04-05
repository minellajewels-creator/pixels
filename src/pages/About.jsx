import { Link } from 'react-router-dom'
import './About.css'

const team = [
  {
    name: 'Arun Kumar',
    role: 'Lead Photographer',
    bio: '8 years of wedding & commercial photography. Shot 300+ weddings across Tamil Nadu.',
  },
  {
    name: 'Priya Devi',
    role: 'Cinematographer',
    bio: 'Specialises in cinematic wedding films and brand documentaries. IFT alumna.',
  },
  {
    name: 'Karthik S',
    role: 'Editor & Colourist',
    bio: 'Post-production specialist with an eye for cinematic colour grading and storytelling.',
  },
]

const values = [
  { icon: '🎯', title: 'Intentional', desc: 'Every frame we capture has a purpose. We don\'t spray and pray.' },
  { icon: '🤝', title: 'Personal', desc: 'We take time to understand you before we ever pick up a camera.' },
  { icon: '⚡', title: 'Reliable', desc: 'Deadlines met. Files delivered. No surprises.' },
  { icon: '✨', title: 'Premium', desc: 'We don\'t cut corners. Ever. Quality is non-negotiable.' },
]

export default function About() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">Who We Are</p>
          <h1 className="section-title">ABOUT<br />ERROR PIXELS</h1>
        </div>
      </section>

      {/* Story */}
      <section className="section about-story">
        <div className="container about-story__grid">
          <div className="about-story__visual">
            <div className="about-story__img-block">
              <div className="about-story__img" />
              <div className="about-story__badge">
                <strong>8+</strong>
                <span>Years of<br />Excellence</span>
              </div>
            </div>
          </div>
          <div className="about-story__text">
            <p className="section-label">Our Story</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(36px, 4vw, 60px)' }}>
              MORE THAN<br />JUST PHOTOS
            </h2>
            <p>
              Error Pixels was born in Coimbatore with one mission — to create visual content
              that actually means something. We're not just clicking shutters; we're building
              memories, narratives, and brand identities through the power of imagery.
            </p>
            <p style={{ marginTop: '16px' }}>
              Over 8 years and 500+ projects later, we've worked with everyone from intimate
              family weddings to major corporate brands across Tamil Nadu and beyond.
              Our approach is simple: understand you first, then create.
            </p>
            <Link to="/contact" className="btn-primary" style={{ marginTop: '40px', display: 'inline-flex' }}>
              Work With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <p className="section-label">What We Stand For</p>
          <h2 className="section-title">OUR VALUES</h2>
          <div className="values-grid">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="values-card">
                <div className="values-card__icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <p className="section-label">The People</p>
          <h2 className="section-title">MEET THE<br />TEAM</h2>
          <div className="team-grid">
            {team.map(({ name, role, bio }) => (
              <div key={name} className="team-card">
                <div className="team-card__photo" />
                <div className="team-card__info">
                  <span className="team-card__role">{role}</span>
                  <h3 className="team-card__name">{name}</h3>
                  <p className="team-card__bio">{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <h2 className="section-title" style={{ marginBottom: '8px' }}>LET'S<br />COLLABORATE</h2>
            <p style={{ color: 'var(--muted)', fontSize: '15px' }}>Got a project in mind? Let's talk.</p>
          </div>
          <Link to="/contact" className="btn-primary" style={{ fontSize: '14px', padding: '18px 48px' }}>
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  )
}
