import { useState } from 'react'
import './Contact.css'

const services = [
  'Wedding Photography',
  'Product Photography',
  'Corporate Video',
  'Portrait Session',
  'Event Coverage',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', date: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Using Formspree — replace YOUR_FORM_ID with your actual Formspree form ID
  // Get it free at: https://formspree.io
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setSubmitted(true)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">Let's Talk</p>
          <h1 className="section-title">BOOK A<br />SHOOT</h1>
          <p className="page-hero__sub">
            Fill in your details and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">

          {/* Info */}
          <div className="contact-info">
            <div className="contact-info__block">
              <span className="section-label">Location</span>
              <p>Coimbatore, Tamil Nadu<br />Available across South India</p>
            </div>
            <div className="contact-info__block">
              <span className="section-label">Email</span>
              <a href="mailto:hello@errorpixels.in">hello@errorpixels.in</a>
            </div>
            <div className="contact-info__block">
              <span className="section-label">Phone</span>
              <a href="tel:+919999999999">+91 99999 99999</a>
            </div>
            <div className="contact-info__block">
              <span className="section-label">Social</span>
              <a href="https://instagram.com/errorpixels" target="_blank" rel="noreferrer">
                @errorpixels
              </a>
            </div>

            <div className="contact-info__hours">
              <span className="section-label">Working Hours</span>
              <p>Monday – Saturday<br />9:00 AM – 7:00 PM</p>
              <p style={{ marginTop: '8px', fontSize: '12px', color: 'var(--muted)' }}>
                * Weekend shoots available for bookings
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success__icon">✓</div>
                <h3>Message Sent!</h3>
                <p>We'll get back to you within 24 hours. Thank you!</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Arun Kumar"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="contact-form__field">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="arun@email.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 99999 99999"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="contact-form__field">
                    <label>Service *</label>
                    <select name="service" required value={form.service} onChange={handleChange}>
                      <option value="">Select a service</option>
                      {services.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="contact-form__field">
                  <label>Preferred Date</label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                  />
                </div>

                <div className="contact-form__field">
                  <label>Tell Us About Your Project *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Briefly describe your event, vision, or requirements..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn-primary contact-form__submit">
                  Send Enquiry →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
