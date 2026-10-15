
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
        <Link
          to="/"
          className="emblem"
          onClick={closeMenu}
          aria-label={t.topText}
        >
          🌿
        </Link>

        <div className="masthead-title">
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
            {navItems.map((item, index) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                onClick={closeMenu}
                style={{ "--nav-index": index }}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <style>{`
        /* Compact village name header */
        .masthead {
          min-height: 88px;
          padding: 11px 6%;
          gap: 16px;
        }

        .masthead-title {
          min-width: 0;
        }

        .masthead-title h1 {
          margin: 0;
          line-height: 1.25;
        }

        .masthead-title p {
          margin-top: 3px;
        }

        .masthead .emblem {
          text-decoration: none;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .masthead .emblem:hover {
          transform: rotate(-10deg) scale(1.07);
          box-shadow: 0 0 0 6px rgba(36, 99, 166, 0.1);
        }

        /* More space between desktop navigation links */
        .main-nav .nav-inner {
          padding: 0 4%;
        }

        .main-nav .nav-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(8px, 1.5vw, 22px);
          flex-wrap: wrap;
        }

        .main-nav .nav-link {
          position: relative;
          padding: 15px 8px;
          white-space: nowrap;
          border-radius: 3px;
          transition:
            color 0.25s ease,
            background 0.25s ease,
            transform 0.25s ease;
        }

        .main-nav .nav-link::after {
          content: "";
          position: absolute;
          left: 8px;
          right: 8px;
          bottom: 7px;
          height: 2px;
          border-radius: 5px;
          background: #f28c28;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.25s ease;
        }

        .main-nav .nav-link:hover {
          transform: translateY(-2px);
        }

        .main-nav .nav-link:hover::after,
        .main-nav .nav-link.active::after {
          transform: scaleX(1);
        }

        /* Staggered entrance when the page loads */
        @keyframes navLinkAppear {
          from {
            opacity: 0;
            transform: translateY(-7px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (min-width: 601px) {
          .main-nav .nav-link {
            animation: navLinkAppear 0.45s ease both;
            animation-delay: calc(var(--nav-index, 0) * 45ms);
          }
        }

        /* Tablet */
        @media (max-width: 900px) {
          .main-nav .nav-inner {
            padding: 0 4%;
          }

          .main-nav .nav-links {
            gap: 4px;
          }

          .main-nav .nav-link {
            padding: 13px 9px;
            font-size: 12px;
          }
        }

        /* Mobile menu remains collapsible */
        @media (max-width: 600px) {
          .masthead {
            min-height: 0;
            padding: 12px 4%;
            gap: 10px;
          }

          .masthead .emblem {
            width: 46px;
            height: 46px;
            font-size: 24px;
          }

          .masthead-title h1 {
            font-size: clamp(17px, 4.5vw, 23px);
          }

          .masthead-title p {
            font-size: 11px;
          }

          .masthead-tagline {
            display: none;
          }

          .main-nav .nav-inner {
            padding: 0 5%;
          }

          .main-nav .nav-links {
            display: none;
            gap: 2px;
            padding: 0 0 10px;
          }

          .main-nav .nav-links.open {
            display: flex;
            flex-direction: column;
            align-items: stretch;
          }

          .main-nav .nav-link {
            padding: 11px 10px;
            white-space: normal;
            animation: none;
          }

          .main-nav .nav-link::after {
            left: 10px;
            right: auto;
            width: 35px;
            bottom: 4px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .masthead .emblem,
          .main-nav .nav-link {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}
