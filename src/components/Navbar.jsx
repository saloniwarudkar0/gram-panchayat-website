import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar({ t, language, setLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: t.nav[0] },
    { path: "/about", label: t.nav[1] },
    { path: "/members", label: t.nav[2] },
    { path: "/schemes", label: t.nav[3] },
    { path: "/notices", label: t.nav[4] },
    { path: "/development", label: t.nav[5] },
    { path: "/contact", label: t.nav[6] },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="top-strip">
        <div className="top-strip-left">
          <span>☀ {t.topText}</span>
          <span>📍 {t.district}</span>
        </div>

        <select
          className="language-select"
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
          aria-label="Select language"
        >
          <option value="mr">मराठी</option>
          <option value="hi">हिन्दी</option>
          <option value="en">English</option>
        </select>
      </div>

      <header className="masthead">
        <Link to="/" className="emblem" onClick={closeMenu}>
          🌿
        </Link>

        <div>
          <h1>{t.topText}</h1>
          <p>{t.district}</p>
        </div>

        <div className="masthead-tagline">{t.tagline}</div>
      </header>

      <nav className="main-nav">
        <div className="nav-inner">
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? "✕ Close" : "☰ Menu"}
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}