
import { useEffect } from "react";

const particles = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 11) % 100}%`,
  top: `${(i * 53 + 7) % 100}%`,
  delay: `${(i % 9) * -0.8}s`,
  duration: `${6 + (i % 5)}s`,
  size: `${2 + (i % 3)}px`,
}));

const villageHouses = [
  { x: "4%", width: 110, height: 85, delay: "0s" },
  { x: "19%", width: 135, height: 105, delay: "-1s" },
  { x: "68%", width: 125, height: 95, delay: "-2s" },
  { x: "84%", width: 105, height: 80, delay: "-0.5s" },
];

function VillageHouse({ house }) {
  return (
    <div
      className="village-house"
      style={{
        "--house-x": house.x,
        "--house-width": `${house.width}px`,
        "--house-height": `${house.height}px`,
        "--house-delay": house.delay,
      }}
    >
      <div className="village-roof" />
      <div className="village-building">
        <span className="village-window window-left" />
        <span className="village-door" />
        <span className="village-window window-right" />
      </div>
    </div>
  );
}

function VillageTree({ className = "" }) {
  return (
    <div className={`village-tree ${className}`}>
      <span className="tree-crown crown-one" />
      <span className="tree-crown crown-two" />
      <span className="tree-crown crown-three" />
      <span className="tree-trunk" />
    </div>
  );
}

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
    <>
      <style>{`
        .welcome-screen {
          isolation: isolate;
          overflow: hidden;
          background:
            radial-gradient(
              ellipse at 50% 42%,
              rgba(61, 112, 180, 0.42),
              transparent 55%
            ),
            linear-gradient(
              145deg,
              #07172b 0%,
              #102746 45%,
              #173b70 72%,
              #08172b 100%
            ) !important;
        }

        .welcome-screen::before {
          content: "";
          position: absolute;
          z-index: -1;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(
              circle at 15% 25%,
              rgba(111, 177, 230, 0.12),
              transparent 28%
            ),
            radial-gradient(
              circle at 85% 70%,
              rgba(242, 140, 40, 0.09),
              transparent 30%
            );
        }

        .welcome-screen::after {
          content: "";
          position: absolute;
          z-index: 0;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(
            180deg,
            rgba(4, 13, 28, 0.12) 0%,
            transparent 35%,
            rgba(4, 13, 28, 0.2) 65%,
            rgba(4, 13, 28, 0.75) 100%
          );
        }

        /* Animated village illustration */
        .welcome-village {
          position: absolute;
          z-index: 0;
          inset: auto 0 0;
          height: min(39vh, 310px);
          min-height: 205px;
          overflow: hidden;
          pointer-events: none;
          opacity: 0.82;
        }

        .village-ground {
          position: absolute;
          bottom: -70px;
          left: -10%;
          width: 120%;
          height: 180px;
          border-top: 1px solid rgba(172, 215, 255, 0.35);
          border-radius: 50% 50% 0 0;
          background: linear-gradient(
            180deg,
            rgba(79, 139, 191, 0.13),
            rgba(4, 15, 32, 0.55)
          );
        }

        .village-road {
          position: absolute;
          left: 35%;
          bottom: -65px;
          width: 30%;
          height: 180px;
          border-left: 1px solid rgba(199, 226, 255, 0.38);
          border-right: 1px solid rgba(199, 226, 255, 0.38);
          border-radius: 50% 50% 0 0;
          transform: perspective(180px) rotateX(18deg);
          background: linear-gradient(
            90deg,
            transparent,
            rgba(144, 190, 229, 0.07),
            transparent
          );
        }

        .village-road::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 15px;
          height: 90%;
          border-left: 1px dashed rgba(255, 224, 173, 0.3);
        }

        .village-house {
          position: absolute;
          left: var(--house-x);
          bottom: 56px;
          width: var(--house-width);
          height: var(--house-height);
          animation: village-house-float 5s ease-in-out infinite;
          animation-delay: var(--house-delay);
        }

        .village-building {
          position: absolute;
          left: 10%;
          right: 10%;
          bottom: 0;
          height: 67%;
          border: 1px solid rgba(191, 222, 255, 0.7);
          border-radius: 2px 2px 0 0;
          background: linear-gradient(
            135deg,
            rgba(128, 183, 228, 0.13),
            rgba(12, 39, 70, 0.45)
          );
          box-shadow: inset 0 0 22px rgba(158, 209, 255, 0.035);
        }

        .village-roof {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 45%;
          border-top: 1px solid rgba(255, 211, 151, 0.85);
          border-left: 1px solid rgba(255, 211, 151, 0.65);
          border-right: 1px solid rgba(255, 211, 151, 0.65);
          background: rgba(242, 140, 40, 0.07);
          clip-path: polygon(50% 0, 100% 100%, 0 100%);
        }

        .village-window {
          position: absolute;
          top: 18%;
          width: 17%;
          height: 23%;
          border: 1px solid rgba(255, 216, 160, 0.7);
          background: rgba(255, 210, 130, 0.12);
        }

        .window-left {
          left: 10%;
        }

        .window-right {
          right: 10%;
        }

        .village-door {
          position: absolute;
          bottom: 0;
          left: 40%;
          width: 20%;
          height: 45%;
          border: 1px solid rgba(191, 222, 255, 0.55);
          border-bottom: 0;
          background: rgba(5, 21, 41, 0.4);
        }

        /* Trees */
        .village-tree {
          position: absolute;
          bottom: 45px;
          width: 43px;
          height: 100px;
          animation: village-tree-sway 4s ease-in-out infinite alternate;
          transform-origin: bottom center;
        }

        .tree-trunk {
          position: absolute;
          left: 47%;
          bottom: 0;
          width: 6px;
          height: 48%;
          border-radius: 5px;
          background: rgba(177, 213, 245, 0.65);
        }

        .tree-crown {
          position: absolute;
          left: 50%;
          border: 1px solid rgba(151, 211, 193, 0.7);
          border-radius: 50%;
          background: rgba(75, 166, 143, 0.14);
          transform: translateX(-50%);
        }

        .crown-one {
          top: 0;
          width: 35px;
          height: 35px;
        }

        .crown-two {
          top: 18px;
          left: 30%;
          width: 29px;
          height: 32px;
        }

        .crown-three {
          top: 18px;
          left: 70%;
          width: 29px;
          height: 32px;
        }

        .tree-a {
          left: 14%;
        }

        .tree-b {
          left: 34%;
          transform: scale(0.72);
          transform-origin: bottom center;
        }

        .tree-c {
          right: 33%;
          transform: scale(0.8);
          transform-origin: bottom center;
        }

        .tree-d {
          right: 13%;
        }

        /* Small streetlights */
        .village-lamp {
          position: absolute;
          bottom: 45px;
          width: 2px;
          height: 70px;
          background: rgba(180, 215, 247, 0.62);
        }

        .village-lamp::before {
          content: "";
          position: absolute;
          top: -4px;
          left: -5px;
          width: 12px;
          height: 7px;
          border: 1px solid rgba(255, 220, 158, 0.8);
          border-radius: 5px 5px 2px 2px;
          background: rgba(255, 220, 158, 0.3);
          box-shadow: 0 0 12px rgba(255, 220, 158, 0.2);
        }

        .lamp-a {
          left: 27%;
        }

        .lamp-b {
          right: 26%;
          height: 54px;
        }

        /* Decorative floating cards */
        .welcome-floating-card {
          position: absolute;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 15px;
          color: #eef6ff;
          font-size: 12px;
          letter-spacing: 0.4px;
          border: 1px solid rgba(202, 228, 255, 0.2);
          border-radius: 13px;
          background: rgba(206, 229, 255, 0.075);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
          backdrop-filter: blur(9px);
          -webkit-backdrop-filter: blur(9px);
          animation: welcome-card-float 6s ease-in-out infinite;
        }

        .welcome-card-icon {
          display: grid;
          place-items: center;
          width: 30px;
          height: 30px;
          flex-shrink: 0;
          border: 1px solid rgba(255, 213, 148, 0.3);
          border-radius: 9px;
          background: rgba(242, 140, 40, 0.1);
          font-size: 16px;
        }

        .welcome-card-one {
          left: 5%;
          top: 22%;
        }

        .welcome-card-two {
          right: 5%;
          top: 29%;
          animation-delay: -2.5s;
        }

        .welcome-card-three {
          left: 9%;
          top: 56%;
          animation-delay: -4s;
        }

        .welcome-ambient-light {
          position: absolute;
          z-index: 0;
          top: 0;
          left: 50%;
          width: min(70vw, 650px);
          height: 70%;
          pointer-events: none;
          transform: translateX(-50%);
          background: radial-gradient(
            ellipse at center,
            rgba(89, 153, 220, 0.1),
            transparent 70%
          );
        }

        .welcome-particles {
          position: absolute;
          inset: 0;
          z-index: 1;
          overflow: hidden;
          pointer-events: none;
        }

        .welcome-particle {
          position: absolute;
          left: var(--particle-left);
          top: var(--particle-top);
          width: var(--particle-size);
          height: var(--particle-size);
          border-radius: 50%;
          background: #ffd995;
          box-shadow: 0 0 10px rgba(255, 202, 112, 0.55);
          opacity: 0;
          animation: welcome-particle-float var(--particle-duration)
            var(--particle-delay) ease-in-out infinite;
        }

        .welcome-content {
          position: relative;
          z-index: 2;
          animation: welcome-cinematic-enter 1.4s
            cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .welcome-emblem {
          display: grid;
          place-items: center;
          width: 94px;
          height: 94px;
          margin: 0 auto 20px;
          border: 1px solid rgba(255, 216, 150, 0.42);
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(255, 220, 158, 0.15),
            rgba(255, 255, 255, 0.025) 70%
          );
          font-size: 48px;
          box-shadow:
            0 0 0 9px rgba(255, 255, 255, 0.018),
            0 0 40px rgba(242, 140, 40, 0.14),
            inset 0 0 22px rgba(255, 215, 145, 0.08);
          animation: welcome-emblem-glow 3s ease-in-out infinite alternate;
        }

        .welcome-overline {
          color: #f4cf91 !important;
          letter-spacing: 5px !important;
          text-transform: uppercase;
          text-shadow: 0 0 22px rgba(242, 140, 40, 0.25);
        }

        .welcome-content h1 {
          color: #fffaf0;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.18);
          animation: welcome-title-reveal 1.1s 0.15s both;
        }

        .welcome-divider {
          gap: 18px;
        }

        .welcome-divider span {
          width: clamp(45px, 10vw, 90px);
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            #f28c28,
            #ffe4ae
          );
          box-shadow: 0 0 10px rgba(242, 140, 40, 0.35);
        }

        .welcome-divider span:first-child {
          transform: rotate(180deg);
        }

        .welcome-divider-icon {
          color: #ffd995;
          font-size: 20px;
          animation: welcome-star-glow 2.5s ease-in-out infinite;
        }

        .welcome-namaskar {
          color: #fff4dc;
          animation: welcome-title-reveal 1s 0.3s both;
        }

        .welcome-subtitle {
          color: #e0e8f3 !important;
          animation: welcome-title-reveal 1s 0.45s both;
        }

        .welcome-loader {
          background: rgba(255, 255, 255, 0.14);
        }

        .welcome-loader span {
          background: linear-gradient(90deg, #f28c28, #ffe7b2, #f28c28);
          box-shadow: 0 0 12px rgba(242, 140, 40, 0.4);
        }

        .welcome-screen.welcome-exiting {
          opacity: 0;
          transform: scale(1.025);
          filter: brightness(1.15);
          transition:
            opacity 0.65s ease,
            transform 0.85s cubic-bezier(0.2, 0.75, 0.25, 1),
            filter 0.65s ease;
        }

        @keyframes village-house-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        @keyframes village-tree-sway {
          from { margin-left: -1px; }
          to { margin-left: 2px; }
        }

        @keyframes welcome-card-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-9px); }
        }

        @keyframes welcome-particle-float {
          0% {
            opacity: 0;
            transform: translate3d(0, 18px, 0) scale(0.5);
          }
          25% { opacity: 0.7; }
          60% {
            opacity: 0.55;
            transform: translate3d(12px, -30px, 0) scale(1.1);
          }
          100% {
            opacity: 0;
            transform: translate3d(-8px, -70px, 0) scale(0.4);
          }
        }

        @keyframes welcome-emblem-glow {
          from {
            box-shadow:
              0 0 0 7px rgba(255, 255, 255, 0.015),
              0 0 25px rgba(242, 140, 40, 0.12);
          }
          to {
            box-shadow:
              0 0 0 11px rgba(255, 255, 255, 0.025),
              0 0 42px rgba(242, 140, 40, 0.2);
          }
        }

        @keyframes welcome-star-glow {
          0%, 100% { opacity: 0.75; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.15); }
        }

        @keyframes welcome-cinematic-enter {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.96);
            filter: blur(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes welcome-title-reveal {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 700px) {
          .welcome-village {
            height: 245px;
            min-height: 180px;
            opacity: 0.65;
          }

          .village-house {
            transform: scale(0.7);
            transform-origin: bottom left;
          }

          .village-tree {
            transform: scale(0.75);
            transform-origin: bottom center;
          }

          .welcome-floating-card {
            padding: 8px;
            font-size: 10px;
            gap: 6px;
          }

          .welcome-card-icon {
            width: 25px;
            height: 25px;
            font-size: 13px;
          }

          .welcome-card-one {
            left: 3%;
            top: 13%;
          }

          .welcome-card-two {
            right: 3%;
            top: 18%;
          }

          .welcome-card-three {
            display: none;
          }

          .welcome-emblem {
            width: 78px;
            height: 78px;
            font-size: 40px;
          }

          .welcome-overline {
            letter-spacing: 3px !important;
            font-size: 11px !important;
          }

          .welcome-subtitle {
            max-width: 340px;
            margin-left: auto;
            margin-right: auto;
            font-size: 13px;
          }
        }

        @media (max-width: 390px) {
          .welcome-floating-card {
            transform: scale(0.85);
            transform-origin: top left;
          }

          .welcome-card-two {
            transform-origin: top right;
          }

          .village-house {
            opacity: 0.75;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .welcome-village *,
          .welcome-floating-card,
          .welcome-particle,
          .welcome-emblem,
          .welcome-divider-icon,
          .welcome-content,
          .welcome-content h1,
          .welcome-namaskar,
          .welcome-subtitle {
            animation: none !important;
          }
        }
      `}</style>

      <div
        className={`welcome-screen ${
          welcomeExiting ? "welcome-exiting" : ""
        }`}
        role="status"
        aria-label="Welcome"
      >
        <div className="welcome-ambient-light" aria-hidden="true" />

        <div className="welcome-particles" aria-hidden="true">
          {particles.map((particle) => (
            <span
              key={particle.id}
              className="welcome-particle"
              style={{
                "--particle-left": particle.left,
                "--particle-top": particle.top,
                "--particle-delay": particle.delay,
                "--particle-duration": particle.duration,
                "--particle-size": particle.size,
              }}
            />
          ))}
        </div>

        <div className="welcome-village" aria-hidden="true">
          <div className="village-ground" />
          <div className="village-road" />

          {villageHouses.map((house, index) => (
            <VillageHouse key={index} house={house} />
          ))}

          <VillageTree className="tree-a" />
          <VillageTree className="tree-b" />
          <VillageTree className="tree-c" />
          <VillageTree className="tree-d" />

          <div className="village-lamp lamp-a" />
          <div className="village-lamp lamp-b" />
        </div>

        <div className="welcome-floating-card welcome-card-one" aria-hidden="true">
          <span className="welcome-card-icon">🏡</span>
          <span>आपलं गाव</span>
        </div>

        <div className="welcome-floating-card welcome-card-two" aria-hidden="true">
          <span className="welcome-card-icon">🌿</span>
          <span>स्वच्छ • सुंदर • समृद्ध</span>
        </div>

        <div className="welcome-floating-card welcome-card-three" aria-hidden="true">
          <span className="welcome-card-icon">✨</span>
          <span>Smart Village</span>
        </div>

        <div className="welcome-content">
          <div className="welcome-emblem">🌿</div>

          <p className="welcome-overline">महाराष्ट्र शासन</p>

          <h1>{t.topText}</h1>

          <div className="welcome-divider">
            <span />
            <span className="welcome-divider-icon">✦</span>
            <span />
          </div>

          <p className="welcome-namaskar">नमस्कार!</p>

          <p className="welcome-subtitle">{t.tagline}</p>

          <div className="welcome-loader">
            <span />
          </div>
        </div>
      </div>
    </>
  );
}
