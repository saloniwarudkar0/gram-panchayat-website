
import { Link } from "react-router-dom";

export default function Footer({ t }) {
  const paths = [
    "/",
    "/about",
    "/members",
    "/schemes",
    "/notices",
    "/development",
    "/contact",
  ];

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <h3>{t.topText}</h3>
          <p>{t.footerText}</p>
          <p style={{ marginTop: 12 }}>{t.district}</p>
        </div>

        <div className="footer-column">
          <h4>{t.quickLinks}</h4>
          <ul className="footer-links">
            {t.nav.slice(0, 4).map((label, index) => (
              <li key={paths[index]}>
                <Link to={paths[index]}>→ {label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>{t.quickLinks}</h4>
          <ul className="footer-links">
            {t.nav.slice(4).map((label, index) => {
              const actualIndex = index + 4;

              return (
                <li key={paths[actualIndex]}>
                  <Link to={paths[actualIndex]}>
                    → {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {t.topText}. {t.rights}
        </span>
        <span>{t.footerText}</span>
      </div>
    </footer>
  );
}
