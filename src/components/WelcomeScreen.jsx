import { useEffect } from "react";

export default function WelcomeScreen({
  t,
  showWelcome,
  welcomeExiting,
}) {
  useEffect(() => {
    if (showWelcome) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showWelcome]);

  if (!showWelcome) return null;

  return (
    <div
      className={`welcome-screen ${
        welcomeExiting ? "welcome-exiting" : ""
      }`}
      role="status"
      aria-label="Welcome"
    >
      <div className="welcome-content">
        <div className="welcome-emblem">🌿</div>

        <p className="welcome-overline">
          महाराष्ट्र शासन
        </p>

        <h1>{t.topText}</h1>

        <div className="welcome-divider">
          <span />
          <span className="welcome-divider-icon">✦</span>
          <span />
        </div>

        <p className="welcome-namaskar">
          नमस्कार!
        </p>

        <p className="welcome-subtitle">
          {t.tagline}
        </p>

        <div className="welcome-loader">
          <span />
        </div>
      </div>
    </div>
  );
}