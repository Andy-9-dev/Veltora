import React from "react"
import { Link, useLocation } from "react-router-dom"
import "./header.css"
import { nav } from "../../data/Data"

const Header = () => {
  const [navList, setNavList] = React.useState(false)
  const location = useLocation()

  const closeNav = () => setNavList(false)

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/"
    return location.pathname.startsWith(path)
  }

  return (
    <header>
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={closeNav}>
          <span className="brand-name">Veltora</span>
          <span className="brand-tag">Properties</span>
        </Link>

        <nav className={`nav ${navList ? "nav-open" : ""}`}>
          <ul>
            {nav.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  onClick={closeNav}
                  className={isActive(item.path) ? "active" : ""}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <Link to="/contact" className="btn-primary header-cta">
            Get in Touch
          </Link>
        </div>

        <button
          className="nav-toggle"
          onClick={() => setNavList(!navList)}
          aria-label="Toggle navigation"
        >
          {navList ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
        </button>
      </div>
    </header>
  )
}

export default Header
