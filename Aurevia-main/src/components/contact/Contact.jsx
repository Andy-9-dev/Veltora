import React, { useState } from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import { company } from "../data/Data"
import "./contact.css"

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [status, setStatus] = useState(null)

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus("error")
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus("error")
      return
    }
    setStatus("success")
    setForm({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setStatus(null), 5000)
  }

  return (
    <section className="contact-page">
      <Back
        eyebrow="Contact"
        name="Get in Touch"
        title="We're Here to Help"
        cover={img}
      />
      <div className="container contact-layout">
        <div className="contact-info">
          <h2>Let's Build Something Extraordinary</h2>
          <p>
            Reach out to discuss residential developments, commercial projects, investment
            advisory, or any of our core services.
          </p>
          <div className="info-items">
            <div className="info-item">
              <i className="fa fa-location-dot"></i>
              <div>
                <strong>Headquarters</strong>
                <span>{company.headquarters}</span>
              </div>
            </div>
            <div className="info-item">
              <i className="fa fa-envelope"></i>
              <div>
                <strong>Email</strong>
                <span>{company.email}</span>
              </div>
            </div>
            <div className="info-item">
              <i className="fa fa-phone"></i>
              <div>
                <strong>Phone</strong>
                <span>{company.phone}</span>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send Us a Message</h3>
          {status === "success" && (
            <div className="form-success">
              Thank you! Your message has been sent. We'll be in touch shortly.
            </div>
          )}
          {status === "error" && (
            <div className="form-error">
              Please fill in your name, a valid email, and a message.
            </div>
          )}
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              placeholder="How can we help?"
              value={form.subject}
              onChange={(e) => handleChange("subject", e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="6"
              placeholder="Tell us about your project or inquiry..."
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
            />
          </div>
          <button type="submit" className="btn-primary">
            Submit Request
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
