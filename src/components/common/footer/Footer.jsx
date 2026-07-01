import React, { useState } from "react"
import { Link } from "react-router-dom"
import { company, footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState(null)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error")
      return
    }
    setStatus("success")
    setEmail("")
    setTimeout(() => setStatus(null), 4000)
  }

  return (
    <>
      <section className="footerContact">
        <div className="container footer-cta-inner">
          <div className="footer-cta-text">
            <h2>Ready to Build Your Next Landmark?</h2>
            <p>Speak with our team about residential, commercial, or investment opportunities.</p>
          </div>
          <Link to="/contact" className="btn-outline-light">
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <footer>
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="brand">
              <span className="brand-name">Veltora</span>
              <span className="brand-tag">Properties</span>
            </div>
            <p className="footer-tagline">{company.tagline}</p>
            <p className="footer-desc">
              Premium real estate development across emerging urban markets in Africa.
            </p>

            <form className="footer-subscribe" onSubmit={handleSubscribe}>
              {status === "success" && (
                <p className="subscribe-success">Thank you for subscribing!</p>
              )}
              {status === "error" && (
                <p className="subscribe-error">Please enter a valid email address.</p>
              )}
              <div className="subscribe-row">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Subscribe</button>
              </div>
            </form>
          </div>

          {footer.map((col, i) => (
            <div className="footer-col" key={i}>
              <h3>{col.title}</h3>
              <ul>
                {col.text.map((item, j) => (
                  <li key={j}>
                    {item.path ? (
                      <Link to={item.path}>{item.list}</Link>
                    ) : (
                      item.list
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>

      <div className="legal">
        <span>
          © {new Date().getFullYear()} {company.name} All rights reserved.
        </span>
      </div>
    </>
  )
}

export default Footer
