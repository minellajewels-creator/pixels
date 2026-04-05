import { Link } from 'react-router-dom'
import './Services.css'

const services = [
  {
    num: '01',
    title: 'Wedding Photography',
    desc: 'Your wedding is a story that deserves to be told beautifully. We capture every candid laugh, every tear of joy, every quiet moment between the celebrations. Our team blends into your event seamlessly while creating timeless images you\'ll treasure forever.',
    includes: ['Full-day coverage', 'Candid & traditional shots', 'Edited gallery (500+ photos)', 'Online delivery within 2 weeks', 'Print-ready files'],
    price: 'Starting from ₹25,000',
  },
  {
    num: '02',
    title: 'Product Photography',
    desc: 'In e-commerce, your product image is your first impression. We create clean, commercial, and editorial product shots that stand out on any platform — Amazon, Instagram, or your own website.',
    includes: ['Studio or location shoot', 'White background + lifestyle shots', 'Basic retouching included', '48hr delivery', 'Commercial usage rights'],
    price: 'Starting from ₹5,000 per product',
  },
  {
    num: '03',
    title: 'Corporate Video Production',
    desc: 'Brand films, product launches, event coverage, testimonials — we handle the full production cycle from scripting and filming to post-production and delivery in any format.',
    includes: ['Scriptwriting assistance', 'Professional cinematography', 'Color grading & sound design', 'Multiple format delivery', '1 round of revisions'],
    price: 'Starting from ₹30,000',
  },
  {
    num: '04',
    title: 'Portrait & Personal Branding',
    desc: 'Whether you\'re a model building a portfolio, a professional needing headshots, or a creator investing in your personal brand — we make you look the part.',
    includes: ['1–3 hour session', '3 outfit changes', '30+ edited images', 'Headshots + creative shots', 'Print & digital files'],
    price: 'Starting from ₹8,000',
  },
  {
    num: '05',
    title: 'Event Coverage',
    desc: 'Conferences, product launches, concerts, cultural events — our team captures your event comprehensively so you have a complete visual record for marketing and memories.',
    includes: ['Multi-photographer setup', 'Photo + video combo available', 'Same-day preview images', 'Full gallery within 5 days', 'Social media optimized cuts'],
    price: 'Starting from ₹15,000',
  },
]

export default function Services() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">What We Offer</p>
          <h1 className="section-title">SERVICES</h1>
          <p className="page-hero__sub">
            Premium visual content for every occasion and every brand.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {services.map((s, i) => (
            <div key={s.num} className="service-row">
              <div className="service-row__num">{s.num}</div>
              <div className="service-row__content">
                <h2 className="service-row__title">{s.title}</h2>
                <p className="service-row__desc">{s.desc}</p>
                <ul className="service-row__includes">
                  {s.includes.map(item => (
                    <li key={item}>
                      <span>✓</span> {item}
                    </li>
                  ))}
                </ul>
                <div className="service-row__footer">
                  <strong className="service-row__price">{s.price}</strong>
                  <Link to="/contact" className="btn-primary" style={{ fontSize: '11px', padding: '12px 28px' }}>
                    Book This Service
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
