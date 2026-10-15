
import { Link } from "react-router-dom";

export default function About({ t }) {
  return (
    <main className="about-enhanced">
      <style>{`
        /* =========================================
           ABOUT PAGE — VISUAL ENHANCEMENTS ONLY
           Existing content and layout preserved
        ========================================= */

        .about-enhanced {
          --about-line: rgba(71, 125, 78, 0.35);
          --about-glow: rgba(120, 163, 100, 0.17);
          overflow: hidden;
        }

        /* Banner: subtle decorative art lines */

        .about-enhanced .page-banner {
          position: relative;
          isolation: isolate;
          overflow: hidden;
        }

        .about-enhanced .page-banner::before,
        .about-enhanced .page-banner::after {
          content: "";
          position: absolute;
          width: 210px;
          height: 210px;
          border: 1px solid var(--about-line);
          border-radius: 50%;
          pointer-events: none;
          z-index: -1;
          animation: about-orbit 18s linear infinite;
        }

        .about-enhanced .page-banner::before {
          top: -125px;
          right: 7%;
          box-shadow:
            0 0 0 18px rgba(71, 125, 78, 0.045),
            0 0 0 38px rgba(71, 125, 78, 0.035);
        }

        .about-enhanced .page-banner::after {
          width: 110px;
          height: 110px;
          bottom: -75px;
          left: 8%;
          animation-direction: reverse;
        }

        .about-enhanced .page-banner .container {
          position: relative;
          z-index: 1;
          animation: about-banner-enter 0.8s ease-out both;
        }

        .about-enhanced .section-eyebrow {
          transition: letter-spacing 0.35s ease;
        }

        .about-enhanced .section-eyebrow:hover {
          letter-spacing: 2px;
        }

        /* Main visual */

        .about-enhanced .about-visual {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          transition:
            transform 0.5s ease,
            box-shadow 0.5s ease;
        }

        .about-enhanced .about-visual::before {
          content: "";
          position: absolute;
          inset: 12px;
          border: 1px solid rgba(255, 255, 255, 0.36);
          border-radius: inherit;
          pointer-events: none;
          z-index: 2;
          transition: inset 0.4s ease;
        }

        .about-enhanced .about-visual:hover {
          transform: translateY(-5px);
        }

        .about-enhanced .about-visual:hover::before {
          inset: 18px;
        }

        .about-enhanced .about-visual-inner {
          position: relative;
          isolation: isolate;
          overflow: hidden;
        }

        .about-enhanced .about-visual-inner::before {
          content: "";
          position: absolute;
          width: 240px;
          height: 240px;
          border: 1px solid rgba(255, 255, 255, 0.24);
          border-radius: 44% 56% 62% 38%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(0deg);
          pointer-events: none;
          z-index: -1;
          animation: about-organic-rotate 24s linear infinite;
        }

        .about-enhanced .about-visual-inner::after {
          content: "";
          position: absolute;
          width: 180px;
          height: 180px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          box-shadow:
            0 0 0 16px rgba(255, 255, 255, 0.035),
            0 0 0 34px rgba(255, 255, 255, 0.025);
          pointer-events: none;
          z-index: -1;
          animation: about-pulse-ring 5s ease-in-out infinite;
        }

        .about-enhanced .about-icon {
          display: inline-block;
          transform-origin: center;
          animation: about-leaf-sway 4s ease-in-out infinite;
          filter: drop-shadow(0 5px 10px rgba(20, 70, 35, 0.14));
        }

        .about-enhanced .about-visual-inner h2 {
          position: relative;
          display: inline-block;
        }

        .about-enhanced .about-visual-inner h2::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 100%;
          height: 2px;
          background: currentColor;
          opacity: 0.55;
          transform: scaleX(0);
          transform-origin: left;
          animation: about-line-draw 1.2s 0.6s ease-out forwards;
        }

        /* Text entrance */

        .about-enhanced .about-copy {
          animation: about-copy-enter 0.8s 0.12s ease-out both;
        }

        .about-enhanced .about-copy h2 {
          text-wrap: balance;
        }

        .about-enhanced .about-copy > p:not(.section-eyebrow) {
          transition: transform 0.3s ease;
        }

        .about-enhanced .about-copy > p:not(.section-eyebrow):hover {
          transform: translateX(3px);
        }

        /* Contact button */

        .about-enhanced .about-copy .btn {
          position: relative;
          overflow: hidden;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .about-enhanced .about-copy .btn::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -80%;
          width: 45%;
          height: 200%;
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(22deg);
          transition: left 0.55s ease;
          pointer-events: none;
        }

        .about-enhanced .about-copy .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 22px rgba(40, 90, 48, 0.16);
        }

        .about-enhanced .about-copy .btn:hover::before {
          left: 140%;
        }

        .about-enhanced .about-copy .btn span {
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .about-enhanced .about-copy .btn:hover span {
          transform: translateX(4px);
        }

        /* Commitment section */

        .about-enhanced .section-cream {
          position: relative;
          isolation: isolate;
        }

        .about-enhanced .section-cream::before {
          content: "";
          position: absolute;
          top: 45px;
          right: -65px;
          width: 190px;
          height: 190px;
          border: 1px solid var(--about-line);
          border-radius: 50%;
          box-shadow:
            0 0 0 18px rgba(71, 125, 78, 0.035),
            0 0 0 38px rgba(71, 125, 78, 0.025);
          pointer-events: none;
          z-index: -1;
          animation: about-orbit 26s linear infinite;
        }

        .about-enhanced .section-heading {
          animation: about-copy-enter 0.75s ease-out both;
        }

        .about-enhanced .services-grid .service-card {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          transition:
            transform 0.4s ease,
            box-shadow 0.4s ease,
            border-color 0.4s ease;
          animation: about-card-enter 0.7s ease-out both;
        }

        .about-enhanced .services-grid .service-card:nth-child(2) {
          animation-delay: 0.12s;
        }

        .about-enhanced .services-grid .service-card:nth-child(3) {
          animation-delay: 0.24s;
        }

        .about-enhanced .services-grid .service-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(
            90deg,
            #6e9f66,
            #d4aa59,
            #7cb5a1
          );
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.45s ease;
          z-index: 2;
        }

        .about-enhanced .services-grid .service-card::after {
          content: "";
          position: absolute;
          right: -35px;
          bottom: -45px;
          width: 100px;
          height: 100px;
          border: 1px solid var(--about-line);
          border-radius: 50%;
          opacity: 0;
          transform: scale(0.6);
          transition:
            opacity 0.4s ease,
            transform 0.4s ease;
          pointer-events: none;
          z-index: -1;
        }

        .about-enhanced .services-grid .service-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 14px 34px rgba(45, 80, 47, 0.10);
        }

        .about-enhanced .services-grid .service-card:hover::before {
          transform: scaleX(1);
        }

        .about-enhanced .services-grid .service-card:hover::after {
          opacity: 1;
          transform: scale(1);
        }

        .about-enhanced .service-icon {
          display: inline-block;
          transition: transform 0.4s ease;
        }

        .about-enhanced .service-card:hover .service-icon {
          transform: translateY(-4px) rotate(-7deg) scale(1.12);
        }

        /* Keyframes */

        @keyframes about-banner-enter {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes about-copy-enter {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes about-card-enter {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes about-organic-rotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes about-orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes about-pulse-ring {
          0%, 100% {
            transform: translate(-50%, -50%) scale(0.94);
            opacity: 0.65;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.06);
            opacity: 1;
          }
        }

        @keyframes about-leaf-sway {
          0%, 100% {
            transform: rotate(-5deg) translateY(0);
          }
          50% {
            transform: rotate(5deg) translateY(-4px);
          }
        }

        @keyframes about-line-draw {
          to {
            transform: scaleX(1);
          }
        }

        /* Accessibility */

        @media (prefers-reduced-motion: reduce) {
          .about-enhanced *,
          .about-enhanced *::before,
          .about-enhanced *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
          
/* White background par decorative botanical artwork */

.about-enhanced .about-layout {
  position: relative;
  isolation: isolate;
}

.about-enhanced .about-layout::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: -35px;
  right: -55px;
  width: 230px;
  height: 230px;
  pointer-events: none;
  opacity: 0.8;
  background:
    radial-gradient(
      ellipse at center,
      rgba(139, 177, 116, 0.10),
      transparent 68%
    );
}

/* Flowing botanical SVG lines */

.about-enhanced .about-copy {
  position: relative;
  isolation: isolate;
}

.about-enhanced .about-copy::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: -38px;
  right: -20px;
  width: 180px;
  height: 145px;
  pointer-events: none;
  opacity: 0.65;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 145' fill='none'%3E%3Cg stroke='%237da477' stroke-width='1.2' stroke-linecap='round'%3E%3Cpath d='M170 8C125 24 150 63 105 78S45 100 20 140'/%3E%3Cpath d='M146 20C115 5 104 25 110 45C132 43 145 34 146 20Z'/%3E%3Cpath d='M121 48C91 30 79 48 87 67C108 66 119 58 121 48Z'/%3E%3Cpath d='M91 75C62 58 48 75 57 93C77 92 89 84 91 75Z'/%3E%3Cpath d='M66 102C40 88 28 104 37 120C54 119 64 111 66 102Z'/%3E%3C/g%3E%3C/svg%3E");
  animation: about-botanical-drift 7s ease-in-out infinite;
}

.about-enhanced .about-copy::after {
  content: "";
  position: absolute;
  z-index: -1;
  left: -25px;
  bottom: -25px;
  width: 110px;
  height: 110px;
  border: 1px solid rgba(109, 151, 98, 0.16);
  border-radius: 50%;
  box-shadow:
    0 0 0 12px rgba(109, 151, 98, 0.045),
    0 0 0 25px rgba(109, 151, 98, 0.025);
  pointer-events: none;
  animation: about-art-ring 12s linear infinite;
}

/* Animate the existing visual without changing its content */

.about-enhanced .about-visual-inner {
  position: relative;
}

.about-enhanced .about-visual-inner .about-icon {
  animation: about-leaf-sway 4s ease-in-out infinite;
}

/* Fine decorative line below the existing heading */

.about-enhanced .about-copy h2 {
  position: relative;
}

.about-enhanced .about-copy h2::after {
  content: "";
  display: block;
  width: 76px;
  height: 2px;
  margin-top: 13px;
  border-radius: 2px;
  background: linear-gradient(
    90deg,
    #648b55,
    #d8b76a,
    transparent
  );
  transform-origin: left;
  animation: about-art-line 1.2s ease-out both;
}

@keyframes about-botanical-drift {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(8px) rotate(3deg);
  }
}

@keyframes about-art-ring {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes about-art-line {
  from {
    transform: scaleX(0);
    opacity: 0;
  }
  to {
    transform: scaleX(1);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .about-enhanced .about-copy::before {
    top: -18px;
    right: -10px;
    width: 115px;
    height: 100px;
    opacity: 0.35;
  }

  .about-enhanced .about-copy::after {
    width: 65px;
    height: 65px;
    left: -12px;
  }

  .about-enhanced .about-layout::before {
    right: -25px;
    width: 140px;
    height: 140px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .about-enhanced .about-copy::before,
  .about-enhanced .about-copy::after,
  .about-enhanced .about-copy h2::after {
    animation: none;
  }
}

      `}
      </style>

      <section className="page-banner">
        <div className="container">
          <p className="section-eyebrow">
            {t.topText}
          </p>
          <h1>{t.nav[1]}</h1>
          <p>
            ग्रामपंचायतीची माहिती, उद्दिष्टे आणि विकासाचा संकल्प.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-layout">
          <div className="about-visual">
            <div className="about-visual-inner">
              <span className="about-icon">🌿</span>
              <p>आपले गाव, आपली जबाबदारी</p>
              <h2>स्वच्छ • सुंदर • विकसित</h2>
            </div>
          </div>

          <div className="about-copy">
            <p className="section-eyebrow">ABOUT OUR VILLAGE</p>
            <h2>
              गावाच्या प्रगतीसाठी
              <br />
              एकत्रित प्रयत्न
            </h2>

            <p>
              ग्रामपंचायत बोक्हारा ही स्थानिक स्वराज्य संस्थेच्या
              माध्यमातून गावातील नागरिकांना मूलभूत सुविधा,
              स्वच्छता, पाणीपुरवठा आणि विकासकामांची माहिती
              उपलब्ध करून देण्यासाठी समर्पित आहे.
            </p>

            <p>
              पारदर्शक प्रशासन, नागरिकांचा सहभाग आणि शाश्वत
              विकास या मूल्यांवर आधारित गावाच्या प्रगतीसाठी
              आम्ही प्रयत्नशील आहोत.
            </p>

            <Link to="/contact" className="btn btn-primary">
              {t.nav[6]} <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="section-heading">
            <p className="section-eyebrow">OUR COMMITMENT</p>
            <h2>आमची दृष्टी आणि उद्दिष्टे</h2>
            <p>लोकसहभागातून सक्षम आणि विकसित गाव घडवणे.</p>
          </div>

          <div className="services-grid">
            <article className="service-card">
              <div className="service-icon">💧</div>
              <h3>स्वच्छ पाणी</h3>
              <p>
                नागरिकांना स्वच्छ पाणी आणि आवश्यक मूलभूत
                सुविधांबाबत माहिती उपलब्ध करून देणे.
              </p>
            </article>

            <article className="service-card">
              <div className="service-icon">🌱</div>
              <h3>स्वच्छता आणि पर्यावरण</h3>
              <p>
                स्वच्छ परिसर, कचरा व्यवस्थापन आणि पर्यावरण
                संवर्धनाबाबत जनजागृती करणे.
              </p>
            </article>

            <article className="service-card">
              <div className="service-icon">🤝</div>
              <h3>पारदर्शक प्रशासन</h3>
              <p>
                शासकीय योजना, सूचना आणि विकासकामांची माहिती
                नागरिकांपर्यंत पोहोचवणे.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
