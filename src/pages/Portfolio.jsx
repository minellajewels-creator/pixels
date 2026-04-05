import { useState } from 'react'
import './Portfolio.css'

const categories = ['Art', 'Wedding', 'Product', 'Corporate', 'Portrait', 'Events']

// Replace src values with your actual Google Drive image URLs
// Format: https://lh3.googleusercontent.com/d/{FILE_ID}=w800
const items = [
  { id: 1, category: 'Wedding', title: 'The Sharma Wedding', year: '2024', span: 'tall' },
  { id: 2, category: 'Product', title: 'Jewellery Collection', year: '2024', span: '' },
  { id: 3, category: 'Corporate', title: 'Tech Summit CBE', year: '2024', span: '' },
  { id: 4, category: 'Portrait', title: 'Actor Portfolio', year: '2023', span: 'wide' },
  { id: 5, category: 'Wedding', title: 'Beach Wedding', year: '2024', span: '' },
  { id: 6, category: 'Events', title: 'Music Festival', year: '2023', span: 'tall' },
  { id: 7, category: 'Product', title: 'Fashion Brand', year: '2024', span: '' },
  { id: 8, category: 'Corporate', title: 'Annual Report Shoot', year: '2023', span: '' },
  { id: 9, category: 'Portrait', title: 'Model Portfolio', year: '2024', span: '' },
  { id: 10, category: 'Wedding', title: 'Palace Wedding', year: '2024', span: 'wide' },
  { id: 11, category: 'Events', title: 'Corporate Gala', year: '2024', span: '' },
  { id: 12, category: 'Product', title: 'Electronics Shoot', year: '2023', span: '' },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Art')

  const filtered = activeCategory === 'Art'
    ? items
    : items.filter(i => i.category === activeCategory)

  return (
    <main className="portfolio-page">
      <section className="page-hero">
        <div className="container">
          <p className="section-label">Our Work</p>
          <h1 className="section-title">PORTFOLIO</h1>
          <p className="page-hero__sub">
            A curated selection of our finest work across photography and videography.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Filter Tabs */}
          <div className="portfolio-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`portfolio-filter ${activeCategory === cat ? 'portfolio-filter--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="masonry-grid">
            {filtered.map(item => (
              <div
                key={item.id}
                className={`masonry-item ${item.span ? `masonry-item--${item.span}` : ''}`}
              >
                <div className="masonry-item__bg" />
                <div className="masonry-item__overlay">
                  <span className="masonry-item__cat">{item.category}</span>
                  <h3 className="masonry-item__title">{item.title}</h3>
                  <span className="masonry-item__year">{item.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
