import { useEffect } from 'react'
import './Reels.css'

export default function Reels() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const existing = document.querySelector('script[src*="tagembed"]')
      if (existing) existing.remove()
      const script = document.createElement('script')
      script.src = 'https://widget.tagembed.com/embed.min.js'
      script.type = 'text/javascript'
      script.async = true
      document.body.appendChild(script)
    }, 300)
    return () => {
      clearTimeout(timer)
      const existing = document.querySelector('script[src*="tagembed"]')
      if (existing) existing.remove()
    }
  }, [])

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">Behind The Lens</p>
          <h1 className="section-title">OUR REELS</h1>
          <p className="page-hero__sub">
            Watch our work in motion — wedding films, brand videos, and event highlights straight from Instagram.
          </p>
        </div>
      </section>

      <section className="section reels-section">
        <div className="container">
          <p className="section-label">Latest From Instagram</p>
          <div
            className="tagembed-widget"
            style={{ width: '100%', height: '100%', overflow: 'auto' }}
            data-widget-id="319007"
            data-website="1"
          ></div>
          <div className="reels-follow">
            <p>Follow us for more</p>
            <a
              href="https://instagram.com/error_pixels"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              @error_pixels on Instagram
            </a>
          </div>
        </div>
      </section>

      <section className="section youtube-section">
        <div className="container">
          <p className="section-label">Long Form</p>
          <h2 className="section-title">YOUTUBE<br />FILMS</h2>
          <p style={{ color: 'var(--muted)', fontSize: '14px', marginBottom: '48px', maxWidth: '500px' }}>
            Full wedding films, brand documentaries, and behind-the-scenes on our YouTube channel.
          </p>
          <div className="youtube-grid">
            {[
              { id: 'dQw4w9WgXcQ', title: 'The Sharma Wedding Film', year: '2024' },
              { id: 'dQw4w9WgXcQ', title: 'Brand Film - Jewellery Client', year: '2024' },
              { id: 'dQw4w9WgXcQ', title: 'Music Festival Highlights', year: '2023' },
            ].map((video) => (
              <div key={video.id} className="youtube-card">
                <div className="youtube-card__embed">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="youtube-card__info">
                  <span>{video.year}</span>
                  <h3>{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
