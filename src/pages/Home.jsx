import { Link } from "react-router-dom";

const serviceIcons = ["📄", "💧", "💡", "📝"];
const developmentIcons = ["🛣️", "💧", "🌿", "🏫"];

const sampleMemberPhotos = [
  // Temporary sample portraits only — replace with actual Panchayat member photos later.
  "https://www.pmindia.gov.in/wp-content/uploads/2025/12/02.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Shri_Amit_Shah.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Shri_Devendra_Gangadharrao_Fadnavis.jpg",
];

export default function Home({ t }) {
  return (
    <main className="home-page">
      <style>{`
        .home-page {
          --hv-green: #078451;
          --hv-blue: #2463eb;
          --hv-orange: #f07824;
          --hv-purple: #8054dc;
          --hv-red: #e74b57;
          --hv-ink: #183b2b;
          --hv-muted: #586b60;
          overflow: hidden;
        }

        .home-page *,
        .home-page *::before,
        .home-page *::after {
          box-sizing: border-box;
        }

        /* HERO */

        .home-page .hero {
          position: relative;
          isolation: isolate;
          display: flex;
          align-items: center;
          min-height: 600px;
          overflow: hidden;
          background:
            radial-gradient(ellipse at 85% 15%, #c5f5d6 0%, transparent 35%),
            radial-gradient(ellipse at 5% 100%, #ffdcaa 0%, transparent 32%),
            linear-gradient(125deg, #fff9ec 0%, #f0fff3 53%, #e4f0ff 100%);
        }

        .home-page .hero::before {
          content: "";
          position: absolute;
          z-index: -1;
          width: 410px;
          height: 410px;
          right: 4%;
          top: 10%;
          border: 2px solid rgba(7,132,81,.2);
          border-radius: 50%;
          box-shadow:
            0 0 0 30px rgba(36,99,235,.055),
            0 0 0 70px rgba(240,120,36,.055);
          animation: hvOrbit 25s linear infinite;
        }

        .home-page .hero::after {
          content: "✳";
          position: absolute;
          z-index: -1;
          top: 16%;
          right: 16%;
          color: #f07824;
          font-size: 82px;
          animation: hvSpin 14s linear infinite;
        }

        .home-page .hero-content {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 850px;
          padding-top: 60px;
          padding-bottom: 65px;
          animation: hvEntrance .9s ease both;
        }

        .home-page .eyebrow,
        .home-page .section-label {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #08774c;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .home-page .eyebrow {
          padding: 12px 17px;
          border: 1px solid rgba(7,132,81,.2);
          border-radius: 40px;
          background: white;
          box-shadow: 0 7px 22px rgba(15,91,56,.09);
        }

        .home-page .eyebrow::before {
          content: "✦";
          color: #f07824;
          font-size: 17px;
          animation: hvPulse 1.8s ease-in-out infinite;
        }

        .home-page .hero h2 {
          max-width: 760px;
          margin: 27px 0 18px;
          color: #153e2b;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(40px, 5.5vw, 72px);
          line-height: 1.1;
          letter-spacing: -1.7px;
        }

        .home-page .hero h2 span {
          display: block;
          width: fit-content;
          margin-top: 8px;
          color: #ed7125;
          font-style: italic;
          animation: hvEntrance 1s .2s ease both;
        }

        .home-page .hero p {
          max-width: 610px;
          color: #4c6555;
          font-size: 17px;
          line-height: 1.9;
        }

        .home-page .primary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          margin-top: 15px;
          padding: 15px 25px;
          border: 2px solid #078451;
          border-radius: 9px;
          background: #078451;
          color: white;
          font-weight: 800;
          text-decoration: none;
          box-shadow: 0 7px 0 #075d3b;
          transition:
            transform .22s ease,
            background .22s ease,
            box-shadow .22s ease;
        }

        .home-page .primary-button:hover {
          transform: translateY(-4px);
          background: #065c3b;
          box-shadow: 0 11px 0 #06472f;
        }

        .home-page .primary-button:active {
          transform: translateY(1px);
          box-shadow: 0 3px 0 #06472f;
        }

        /* SECTION HEADINGS */

        .home-page .section {
          position: relative;
          padding: 85px 0;
        }

        .home-page .section-cream {
          background: #fffaf1;
        }

        .home-page .section-heading {
          max-width: 730px;
          margin: 0 auto 45px;
          text-align: center;
        }

        .home-page .section-heading .section-label {
          justify-content: center;
        }

        .home-page .section-heading h2,
        .home-page .about-copy h2 {
          margin: 13px 0;
          color: #183d2a;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(30px, 3.6vw, 44px);
          line-height: 1.2;
        }

        .home-page .section-heading p,
        .home-page .about-copy > p {
          color: var(--hv-muted);
          line-height: 1.85;
        }

        /* SHARED CARD ANIMATION */

        .home-page .service-card,
        .home-page .scheme-card,
        .home-page .notice-board,
        .home-page .development-card {
          position: relative;
          isolation: isolate;
          background-clip: padding-box;
          transition:
            transform .35s cubic-bezier(.2,.8,.2,1),
            box-shadow .35s ease,
            border-color .35s ease;
        }

        .home-page .service-card::after,
        .home-page .scheme-card::after,
        .home-page .notice-board::after,
        .home-page .development-card::after {
          content: "";
          position: absolute;
          z-index: 2;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          opacity: 0;
          background: linear-gradient(
            115deg,
            transparent 20%,
            rgba(255,255,255,.42) 48%,
            transparent 72%
          );
          transform: translateX(-120%);
          transition: transform .7s ease, opacity .25s ease;
        }

        .home-page .service-card:hover::after,
        .home-page .scheme-card:hover::after,
        .home-page .notice-board:hover::after,
        .home-page .development-card:hover::after {
          opacity: 1;
          transform: translateX(120%);
        }

        /* SERVICE CARDS */

        .home-page .services-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 22px;
        }

        .home-page .service-card {
          --hv-accent: #2463eb;
          --hv-card-bg: #e7efff;
          min-width: 0;
          padding: 29px 23px;
          overflow: hidden;
          border: 2px solid var(--hv-accent);
          border-radius: 18px;
          background: var(--hv-card-bg);
          box-shadow: 0 7px 0 color-mix(in srgb, var(--hv-accent) 22%, transparent);
          animation: hvEntrance .65s both;
          animation-delay: calc(var(--hv-index, 0) * 130ms);
        }

        .home-page .service-card:nth-child(1) {
          --hv-accent: #2463eb;
          --hv-card-bg: #e7efff;
          --hv-index: 0;
        }

        .home-page .service-card:nth-child(2) {
          --hv-accent: #078451;
          --hv-card-bg: #d9f8e8;
          --hv-index: 1;
        }

        .home-page .service-card:nth-child(3) {
          --hv-accent: #e96c1e;
          --hv-card-bg: #ffead5;
          --hv-index: 2;
        }

        .home-page .service-card:nth-child(4) {
          --hv-accent: #8054dc;
          --hv-card-bg: #eee5ff;
          --hv-index: 3;
        }

        .home-page .service-card::before {
          content: "";
          position: absolute;
          z-index: -1;
          width: 155px;
          height: 155px;
          right: -65px;
          bottom: -75px;
          border-radius: 50%;
          background: var(--hv-accent);
          opacity: .17;
          transition: transform .4s ease;
        }

        .home-page .service-card:hover {
          transform: translateY(-9px);
          box-shadow:
            0 16px 28px color-mix(in srgb, var(--hv-accent) 15%, transparent),
            0 7px 0 color-mix(in srgb, var(--hv-accent) 23%, transparent);
        }

        .home-page .service-card:hover::before {
          transform: scale(1.7);
        }

        .home-page .service-icon {
          display: grid;
          place-items: center;
          width: 64px;
          height: 64px;
          margin-bottom: 23px;
          border: 2px solid rgba(255,255,255,.7);
          border-radius: 17px;
          background: var(--hv-accent);
          color: white;
          font-size: 29px;
          box-shadow: 0 7px 15px color-mix(in srgb, var(--hv-accent) 30%, transparent);
          transition: transform .35s ease, border-radius .35s ease;
        }

        .home-page .service-card:hover .service-icon {
          transform: translateY(-3px) rotate(-8deg) scale(1.08);
          border-radius: 22px;
        }

        .home-page .service-card h3 {
          margin: 0 0 12px;
          color: #203c2c;
          font-size: 19px;
        }

        .home-page .service-card p {
          margin: 0;
          color: #485f50;
          font-size: 14px;
          line-height: 1.8;
        }

        /* ABOUT */

        .home-page .about-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 60px;
        }

        .home-page .about-visual {
          position: relative;
          isolation: isolate;
          display: grid;
          place-items: center;
          min-height: 405px;
          padding: 30px;
          overflow: hidden;
          border: 5px solid #ffcb78;
          border-radius: 25px;
          background:
            radial-gradient(circle at 15% 18%, #ffcf76 0 9%, transparent 9.5%),
            radial-gradient(circle at 90% 80%, #39b982 0 15%, transparent 15.5%),
            linear-gradient(145deg, #16895a, #07553a 65%, #103a2b);
          box-shadow: 0 15px 0 #d7e8d9;
          transition: box-shadow .4s ease, border-color .4s ease;
        }

        .home-page .about-visual:hover {
          border-color: #ffb84f;
          box-shadow: 0 18px 35px rgba(7,132,81,.18);
        }

        .home-page .about-visual::before,
        .home-page .about-visual::after {
          content: "";
          position: absolute;
          z-index: -1;
          border: 2px dashed rgba(255,255,255,.35);
          border-radius: 50%;
          animation: hvOrbit 30s linear infinite;
        }

        .home-page .about-visual::before {
          width: 280px;
          height: 280px;
        }

        .home-page .about-visual::after {
          width: 350px;
          height: 350px;
          animation-direction: reverse;
        }

        .home-page .about-visual-content {
          max-width: 350px;
          text-align: center;
          color: white;
        }

        .home-page .about-visual-icon {
          display: grid;
          place-items: center;
          width: 112px;
          height: 112px;
          margin: 0 auto 23px;
          border: 2px solid rgba(255,255,255,.5);
          border-radius: 32px;
          background: #f4a340;
          font-size: 56px;
          box-shadow: 0 9px 0 rgba(0,0,0,.12);
          animation: hvFloat 4s ease-in-out infinite;
          transition: border-radius .35s ease, box-shadow .35s ease;
        }

        .home-page .about-visual:hover .about-visual-icon {
          border-radius: 38px;
          box-shadow: 0 12px 30px rgba(0,0,0,.2);
        }

        .home-page .about-visual-content h3 {
          margin: 0 0 10px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 30px;
        }

        .home-page .about-visual-content p {
          color: white;
          line-height: 1.8;
        }

        .home-page .about-points {
          display: grid;
          gap: 14px;
          margin: 24px 0;
          padding: 0;
          list-style: none;
        }
          
                .home-page .about-points li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: #45594b;
          line-height: 1.65;
        }

        .home-page .check-icon {
          display: grid;
          place-items: center;
          flex-shrink: 0;
          width: 27px;
          height: 27px;
          border-radius: 8px;
          background: #078451;
          color: white;
          font-weight: 900;
          transition: transform .25s ease;
        }

        .home-page .about-points li:hover .check-icon {
          transform: rotate(-8deg) scale(1.12);
        }

        /* MEMBERS: ANIMATED BORDER */

        .home-page .members-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .home-page .member-card {
          position: relative;
          isolation: isolate;
          min-width: 0;
          padding: 3px;
          overflow: hidden;
          border: 0;
          border-radius: 20px;
          background: #e7e9e2;
          box-shadow: 0 7px 0 #dfe8df;
          transition:
            transform .4s cubic-bezier(.2,.8,.2,1),
            box-shadow .4s ease;
        }

        .home-page .member-card::before {
          content: "";
          position: absolute;
          z-index: -1;
          inset: -100%;
          background: conic-gradient(
            from 0deg,
            #2463eb,
            #43c8a0,
            #ffbd60,
            #f07824,
            #8054dc,
            #2463eb
          );
          animation: hvMemberBorder 5s linear infinite;
          opacity: .8;
          transition: opacity .35s ease;
        }

        .home-page .member-card::after {
          content: "";
          position: absolute;
          z-index: -1;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,.8);
        }

        .home-page .member-card:hover {
          transform: translateY(-10px);
          box-shadow:
            0 20px 35px rgba(36,99,235,.12),
            0 7px 0 #dfe8df;
        }

        .home-page .member-card:hover::before {
          opacity: 1;
          animation-duration: 2s;
        }

        .home-page .member-card > .member-photo,
        .home-page .member-card > .member-info {
          position: relative;
          z-index: 1;
        }

        /* MEMBER PHOTOS */

        .home-page .member-photo {
          position: relative;
          height: 250px;
          overflow: hidden;
          border-radius: 16px 16px 0 0;
          background: #e8f2eb;
        }

        .home-page .member-photo img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          transition: transform .5s ease;
        }

        .home-page .member-card:hover .member-photo img {
          transform: scale(1.06);
        }

        .home-page .photo-sample-badge {
          position: absolute;
          right: 12px;
          bottom: 12px;
          padding: 7px 10px;
          border: 1px solid rgba(255,255,255,.75);
          border-radius: 20px;
          background: rgba(255,255,255,.94);
          color: #183b2b;
          font-size: 11px;
          font-weight: 800;
          box-shadow: 0 3px 12px rgba(0,0,0,.12);
        }

        .home-page .member-info {
          min-height: 170px;
          padding: 23px;
          border-top: 5px solid #2463eb;
          border-radius: 0 0 16px 16px;
          background: white;
          transition: background .35s ease;
        }

        .home-page .member-card:nth-child(2) .member-info {
          border-top-color: #f07824;
        }

        .home-page .member-card:nth-child(3) .member-info {
          border-top-color: #8054dc;
        }

        .home-page .member-role {
          display: inline-block;
          margin-bottom: 10px;
          color: #078451;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .home-page .member-info h3 {
          margin: 0 0 8px;
          color: #203c2c;
          font-size: 20px;
          transition: color .25s ease;
        }

        .home-page .member-card:hover .member-info h3 {
          color: #2463eb;
        }

        .home-page .member-info p {
          color: #6d796f;
          font-size: 14px;
          line-height: 1.7;
        }

        .home-page .sample-label {
          display: inline-block;
          margin-top: 5px;
          padding: 6px 10px;
          border-radius: 7px;
          background: #ffedc8;
          color: #8b5118;
          font-size: 11px;
          font-weight: 800;
          transition: transform .25s ease;
        }

        .home-page .member-card:hover .sample-label {
          transform: translateY(-2px);
        }

        @keyframes hvMemberBorder {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* GOVERNMENT SCHEMES SECTION — BOLD TRICOLOUR */

        .home-page .schemes-section {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 90px 0 !important;
          background:
            linear-gradient(
              165deg,
              #fff8ed 0%,
              #ffffff 42%,
              #effaf1 72%,
              #d8f0df 100%
            ) !important;
        }

        .home-page .schemes-section::before {
          content: "";
          position: absolute;
          z-index: -1;
          top: -120px;
          right: -80px;
          width: 430px;
          height: 430px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(255,153,51,.42) 0%,
            rgba(255,153,51,.16) 38%,
            transparent 72%
          );
          animation: hvSchemeGlow 7s ease-in-out infinite alternate;
          pointer-events: none;
        }

        .home-page .schemes-section::after {
          content: "";
          position: absolute;
          z-index: -1;
          left: -140px;
          bottom: -180px;
          width: 460px;
          height: 460px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(7,132,81,.28) 0%,
            rgba(7,132,81,.10) 45%,
            transparent 72%
          );
          animation: hvSchemeGlow 9s ease-in-out infinite alternate-reverse;
          pointer-events: none;
        }

        .home-page .schemes-section .section-heading,
        .home-page .schemes-section .schemes-grid,
        .home-page .schemes-section > div:last-child {
          position: relative;
          z-index: 1;
        }

        .home-page .schemes-section .section-heading::after {
          content: "";
          display: block;
          width: 115px;
          height: 5px;
          margin: 22px auto 0;
          border-radius: 10px;
          background: linear-gradient(
            90deg,
            #ef8733 0%,
            #ef8733 33.33%,
            #ffffff 33.33%,
            #ffffff 66.66%,
            #078451 66.66%,
            #078451 100%
          );
          box-shadow: 0 2px 8px rgba(24,61,42,.12);
        }

        @keyframes hvSchemeGlow {
          0% { transform: translate3d(0,0,0) scale(1); }
          100% { transform: translate3d(-25px,22px,0) scale(1.12); }
        }

        /* SCHEME CARDS */

        .home-page .schemes-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }

        .home-page .scheme-card {
          display: flex;
          align-items: flex-start;
          gap: 22px;
          min-width: 0;
          padding: 28px;
          border: 1px solid rgba(7,132,81,.20);
          border-top: 4px solid #078451;
          border-radius: 18px;
          background: rgba(255,255,255,.94);
          box-shadow: 0 12px 30px rgba(24,61,42,.10);
          backdrop-filter: blur(10px);
        }

        .home-page .scheme-card:nth-child(2) {
          border-color: rgba(240,120,36,.24);
          border-top-color: #f07824;
          background: rgba(255,255,255,.95);
        }

        .home-page .scheme-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 38px rgba(24,61,42,.16);
        }

        .home-page .scheme-icon {
          display: grid;
          place-items: center;
          flex-shrink: 0;
          width: 65px;
          height: 65px;
          border-radius: 18px;
          background: linear-gradient(135deg,#f07824,#e85d04);
          color: white;
          font-size: 29px;
          box-shadow: 0 7px 16px rgba(240,120,36,.24);
          transition: transform .3s ease, border-radius .3s ease;
        }

        .home-page .scheme-card:nth-child(2) .scheme-icon {
          background: linear-gradient(135deg,#3b82f6,#1d4ed8);
          box-shadow: 0 7px 16px rgba(36,99,235,.24);
        }

        .home-page .scheme-card:hover .scheme-icon {
          transform: rotate(8deg) scale(1.08);
          border-radius: 22px;
        }

        .home-page .scheme-card h3 {
          margin: 3px 0 10px;
          color: #264333;
          font-size: 19px;
        }

        .home-page .scheme-card p {
          margin: 0;
          color: #586b60;
          font-size: 14px;
          line-height: 1.8;
        }

        /* NOTICES */

        .home-page .notice-layout {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }

        .home-page .notice-board {
          overflow: hidden;
          padding: 29px;
          border: 2px solid #f4d18e;
          border-radius: 18px;
          background: #fff4d8;
          box-shadow: 0 7px 0 #f0dfbc;
        }

        .home-page .notice-board:nth-child(2) {
          border-color: #9dc7ff;
          background: #e9f3ff;
          box-shadow: 0 7px 0 #d1e4ff;
        }

        .home-page .notice-board:hover {
          transform: translateY(-7px);
          box-shadow: 0 15px 28px rgba(50,75,90,.1);
        }

        .home-page .notice-board-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .home-page .notice-board-icon {
          display: grid;
          place-items: center;
          width: 55px;
          height: 55px;
          flex-shrink: 0;
          border-radius: 15px;
          background: #f07824;
          color: white;
          font-size: 26px;
          transition: transform .3s ease;
        }

        .home-page .notice-board:nth-child(2) .notice-board-icon {
          background: #2463eb;
        }

        .home-page .notice-board:hover .notice-board-icon {
          transform: rotate(-7deg) scale(1.08);
        }

        .home-page .notice-board h3 {
          margin: 0 0 5px;
          color: #273e30;
          font-size: 19px;
        }

        .home-page .notice-board small {
          color: #755e3c;
        }

        .home-page .notice-board p {
          color: #586b60;
          line-height: 1.85;
        }

        .home-page .notice-tag {
          display: inline-block;
          margin-top: 8px;
          padding: 7px 11px;
          border-radius: 7px;
          background: #f07824;
          color: white;
          font-size: 12px;
          font-weight: 800;
        }

        .home-page .notice-board:nth-child(2) .notice-tag {
          background: #2463eb;
        }

        /* DEVELOPMENT */

        .home-page .section-green {
          background:
            radial-gradient(circle at 100% 0%, rgba(255,193,89,.22), transparent 30%),
            linear-gradient(135deg,#103f2b,#08784d);
        }

        .home-page .section-green .section-heading h2 {
          color: white;
                  }

        .home-page .section-green .section-heading p {
          color: #e2f6e8;
        }

        .home-page .section-green .section-label {
          color: #ffd078;
        }

        .home-page .development-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }

        .home-page .development-card {
          padding: 25px 22px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,.35);
          border-radius: 17px;
          background: rgba(255,255,255,.1);
          animation: hvEntrance .6s both;
          animation-delay: calc(var(--hv-index,0) * 100ms);
        }

        .home-page .development-card:nth-child(1) { --hv-index: 0; }
        .home-page .development-card:nth-child(2) { --hv-index: 1; }
        .home-page .development-card:nth-child(3) { --hv-index: 2; }
        .home-page .development-card:nth-child(4) { --hv-index: 3; }

        .home-page .development-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255,208,120,.8);
          background: rgba(255,255,255,.19);
          box-shadow: 0 15px 28px rgba(0,0,0,.12);
        }

        .home-page .development-icon {
          display: grid;
          place-items: center;
          width: 57px;
          height: 57px;
          margin-bottom: 20px;
          border-radius: 15px;
          background: #f07824;
          font-size: 26px;
          transition: transform .3s ease, border-radius .3s ease;
        }

        .home-page .development-card:nth-child(2) .development-icon {
          background: #2463eb;
        }

        .home-page .development-card:nth-child(3) .development-icon {
          background: #078451;
          outline: 2px solid #91e8b8;
        }

        .home-page .development-card:nth-child(4) .development-icon {
          background: #8054dc;
        }

        .home-page .development-card:hover .development-icon {
          transform: rotate(-10deg) scale(1.1);
          border-radius: 21px;
        }

        .home-page .development-card h3 {
          margin: 0 0 11px;
          color: white;
          font-size: 18px;
        }

        .home-page .development-card p {
          margin: 0;
          color: #e4f4e9;
          font-size: 14px;
          line-height: 1.8;
        }

        .home-page .section-green .primary-button {
          border-color: #ffbd60;
          background: #ffbd60;
          color: #203b29;
          box-shadow: 0 7px 0 #cb8732;
        }

        .home-page .section-green .primary-button:hover {
          background: #ffd38b;
          box-shadow: 0 11px 0 #cb8732;
        }

        /* ANIMATIONS */

        @keyframes hvEntrance {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes hvFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-13px); }
        }

        @keyframes hvOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes hvSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes hvPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }

        /* RESPONSIVE */

        @media (max-width: 1000px) {
          .home-page .services-grid,
          .home-page .development-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .home-page .about-layout {
            gap: 32px;
          }
        }

        @media (max-width: 700px) {
          .home-page .hero {
            min-height: 490px;
          }

          .home-page .hero::before {
            width: 220px;
            height: 220px;
            right: -80px;
            top: 25px;
          }

          .home-page .hero::after {
            right: 10%;
            font-size: 52px;
          }

          .home-page .hero h2 {
            font-size: clamp(36px,9vw,49px);
            letter-spacing: -1px;
          }

          .home-page .hero p {
            font-size: 15px;
          }

          .home-page .section {
            padding: 58px 0;
          }

          .home-page .services-grid,
          .home-page .members-grid,
          .home-page .schemes-grid,
          .home-page .notice-layout,
          .home-page .development-grid {
            grid-template-columns: 1fr;
          }

          .home-page .about-layout {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .home-page .about-visual {
            min-height: 310px;
          }

          .home-page .service-card {
            padding: 26px 22px;
          }

          .home-page .member-photo {
            height: 280px;
          }

          .home-page .scheme-card {
            gap: 16px;
            padding: 22px;
          }

          .home-page .scheme-icon {
            width: 54px;
            height: 54px;
            font-size: 24px;
          }

          .home-page .schemes-section {
            padding: 58px 0 !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .home-page *,
          .home-page *::before,
          .home-page *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <span className="eyebrow">{t.heroTag}</span>
          <h2>
            {t.heroTitle}
            <span>{t.heroHighlight}</span>
          </h2>
          <p>{t.heroText}</p>
          <Link to="/about" className="primary-button">
            {t.explore} &nbsp; →
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section-cream">
        <div className="section-heading">
          <span className="section-label">{t.topText}</span>
          <h2>{t.servicesTitle}</h2>
          <p>{t.servicesSubtitle}</p>
        </div>

        <div className="services-grid">
          {t.services.map((service, index) => (
            <article className="service-card" key={service[1]}>
              <div className="service-icon">
                {serviceIcons[index] || service[0]}
              </div>
              <h3>{service[1]}</h3>
              <p>{service[2]}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <div className="about-layout">
          <div className="about-visual">
            <div className="about-visual-content">
              <div className="about-visual-icon">🌳</div>
              <h3>{t.topText}</h3>
              <p>{t.tagline}</p>
            </div>
          </div>

          <div className="about-copy">
            <span className="section-label">{t.aboutLabel}</span>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutText}</p>
            <p>{t.aboutText2}</p>

            <ul className="about-points">
              {t.aboutPoints.map((point) => (
                <li key={point}>
                  <span className="check-icon">✓</span>
                  {point}
                </li>
              ))}
            </ul>

            <Link to="/about" className="primary-button">
              {t.explore} →
            </Link>
          </div>
        </div>
      </section>

      {/* MEMBERS */}
      <section className="section section-cream">
        <div className="section-heading">
          <span className="section-label">{t.topText}</span>
          <h2>{t.membersTitle}</h2>
          <p>{t.membersSubtitle}</p>
        </div>

        <div className="members-grid">
          {t.members.slice(0, 3).map((member, index) => (
            <article className="member-card" key={`${member[0]}-${index}`}>
              <div className="member-photo">
                <img
                  src={sampleMemberPhotos[index]}
                  alt={`Sample portrait for ${member[1]}`}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
                <span className="photo-sample-badge">Sample Photo</span>
              </div>

              <div className="member-info">
                <span className="member-role">{member[0]}</span>
                <h3>{member[1]}</h3>
                <p>{member[2]}</p>
                <span className="sample-label">{t.sampleLabel}</span>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 30 }}>
          <Link to="/members" className="primary-button">
            {t.nav[2]} →
          </Link>
        </div>
      </section>

      {/* GOVERNMENT SCHEMES */}
      <section className="section schemes-section">
        <div className="section-heading">
          <span className="section-label">{t.topText}</span>
          <h2>{t.schemesTitle}</h2>
          <p>{t.schemesSubtitle}</p>
        </div>

        <div className="schemes-grid">
          {t.schemes.slice(0, 2).map((scheme) => (
            <article className="scheme-card" key={scheme[1]}>
              <div className="scheme-icon">{scheme[0]}</div>
              <div>
                <h3>{scheme[1]}</h3>
                <p>{scheme[2]}</p>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 30 }}>
          <Link to="/schemes" className="primary-button">
            {t.nav[3]} →
          </Link>
        </div>
      </section>

      {/* NOTICES */}
      <section className="section section-cream">
        <div className="section-heading">
          <span className="section-label">{t.topText}</span>
          <h2>{t.noticesTitle}</h2>
          <p>{t.noticesSubtitle}</p>
        </div>

        <div className="notice-layout">
          <article className="notice-board">
            <div className="notice-board-header">
              <div className="notice-board-icon">📢</div>
              <div>
                <h3>{t.noticeTitle}</h3>
                <small>{t.noticeDate}</small>
              </div>
            </div>
            <p>{t.noticeText}</p>
            <span className="notice-tag">{t.noticeDate}</span>
          </article>

          <article className="notice-board">
            <div className="notice-board-header">
              <div className="notice-board-icon">📋</div>
              <div>
                <h3>{t.servicesTitle}</h3>
                <small>{t.topText}</small>
              </div>
            </div>
            <p>{t.formNote}</p>
            <Link
              to="/notices"
              className="primary-button"
              style={{ marginTop: 20 }}
            >
              {t.nav[4]} →
            </Link>
          </article>
        </div>
      </section>

      {/* DEVELOPMENT */}
      <section className="section section-green">
        <div className="section-heading">
          <span className="section-label">{t.topText}</span>
          <h2>{t.developmentTitle}</h2>
          <p>{t.developmentSubtitle}</p>
        </div>

        <div className="development-grid">
          {t.development.map((item, index) => (
            <article className="development-card" key={item[0]}>
              <div className="development-icon">
                {developmentIcons[index] || "🌱"}
              </div>
              <h3>{item[0]}</h3>
              <p>{item[1]}</p>
            </article>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 30 }}>
          <Link to="/development" className="primary-button">
            {t.nav[5]} →
          </Link>
        </div>
      </section>
    </main>
  );
}