export default function Members({ t }) {
  const members = [
    {
      role: "सरपंच",
      name: "सरपंच यांचे नाव",
      description: "ग्रामपंचायतीचे नेतृत्व",
    },
    {
      role: "उपसरपंच",
      name: "उपसरपंच यांचे नाव",
      description: "गावाच्या विकासासाठी सहकार्य",
    },
    {
      role: "ग्रामपंचायत सदस्य",
      name: "सदस्य यांचे नाव",
      description: "नागरिकांचे प्रतिनिधित्व",
    },
    {
      role: "ग्रामपंचायत सदस्य",
      name: "सदस्य यांचे नाव",
      description: "स्थानिक विकासकामांमध्ये सहभाग",
    },
    {
      role: "ग्रामपंचायत सदस्य",
      name: "सदस्य यांचे नाव",
      description: "नागरिकांच्या समस्या मांडणे",
    },
    {
      role: "ग्रामपंचायत सचिव",
      name: "सचिव यांचे नाव",
      description: "प्रशासकीय कामकाज",
    },
  ];

  return (
    <main className="members-page">
      <style>{`
        .members-page {
          --member-green: #254b3b;
          --member-gold: #c4a15a;
          --member-cream: #f7f4eb;
          --member-text: #37483d;
          background: var(--member-cream);
          min-height: 100vh;
        }

        .members-page .page-banner {
          position: relative;
          overflow: hidden;
          background: linear-gradient(120deg, #183b2d, #37664d);
          padding: 70px 6%;
        }

        .members-page .page-banner::after {
          content: "";
          position: absolute;
          width: 250px;
          height: 250px;
          border: 1px solid rgba(255,255,255,.13);
          border-radius: 50%;
          right: -70px;
          top: -100px;
          box-shadow:
            0 0 0 25px rgba(255,255,255,.025),
            0 0 0 50px rgba(255,255,255,.025);
          pointer-events: none;
        }

        .members-page .banner-label {
          color: #e6d3a3;
          font-size: 12px;
          letter-spacing: 3px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .members-page .page-banner h1 {
          color: #fff;
          font-size: clamp(32px, 4vw, 48px);
          margin-bottom: 10px;
        }

        .members-page .banner-description {
          color: #e2eae3;
          max-width: 650px;
        }

        .members-page .members-section {
          padding: 65px 6% 75px;
        }

        .members-page .section-heading {
          margin-bottom: 42px;
        }

        .members-page .section-eyebrow {
          color: #a17d36;
          letter-spacing: 2px;
        }

        .members-page .section-heading h2 {
          color: #254b3b;
        }

        .members-page .section-heading p:last-child {
          color: #69766d;
        }

        .members-page .members-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 26px;
        }

        .members-page .member-card {
          position: relative;
          overflow: hidden;
          padding: 0 0 24px;
          text-align: center;
          background: #fffefa;
          border: 1px solid #e5dfcf;
          border-radius: 10px;
          box-shadow: 0 7px 22px rgba(40, 62, 46, .06);
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .members-page .member-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 30px rgba(40, 62, 46, .12);
        }

        .members-page .member-card-top {
          height: 9px;
          background: linear-gradient(90deg, #254b3b, #c4a15a);
        }

        .members-page .member-photo {
          width: 150px;
          height: 165px;
          margin: 26px auto 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 9px;
          color: #728276;
          background: #eeeee6;
          border: 1px dashed #aeb9aa;
          border-radius: 8px;
          overflow: hidden;
        }

        .members-page .member-photo-icon {
          font-size: 34px;
          line-height: 1;
          opacity: .75;
        }

        .members-page .member-photo-text {
          font-size: 11px;
          letter-spacing: .5px;
        }

        .members-page .member-role {
          display: inline-block;
          margin: 0 15px 9px;
          padding: 5px 12px;
          color: #805f25;
          background: #f4ead1;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
        }

        .members-page .member-card h3 {
          padding: 0 15px;
          margin: 4px 0 8px;
          color: #254b3b;
          font-size: 18px;
        }

        .members-page .member-card p {
          padding: 0 15px;
          color: #69766d;
          font-size: 13px;
        }

        .members-page .members-note {
          margin-top: 32px;
          padding: 18px 20px;
          border-left: 4px solid #c4a15a;
          background: #fffefa;
          color: #69766d;
          border-radius: 0 6px 6px 0;
          font-size: 13px;
        }

        @media (max-width: 900px) {
          .members-page .members-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 560px) {
          .members-page .page-banner {
            padding: 48px 5%;
          }

          .members-page .members-section {
            padding: 45px 5% 55px;
          }

          .members-page .members-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .members-page .member-photo {
            width: 145px;
            height: 155px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .members-page .member-card {
            transition: none;
          }
        }
      `}</style>

      <section className="page-banner">
        <div className="container">
          <p className="banner-label">OUR REPRESENTATIVES</p>
          <h1>{t.nav[2]}</h1>
          <p className="banner-description">
            गावाच्या प्रशासनासाठी कार्यरत प्रतिनिधींची माहिती.
          </p>
        </div>
      </section>

      <section className="members-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-eyebrow">GRAM PANCHAYAT TEAM</p>
            <h2>आमचे लोकप्रतिनिधी</h2>
            <p>
              पारदर्शक प्रशासन आणि गावाच्या विकासासाठी एकत्रित प्रयत्न.
            </p>
          </div>

          <div className="members-grid">
            {members.map((member, index) => (
              <article className="member-card" key={index}>
                <div className="member-card-top" />

                <div
                  className="member-photo"
                  aria-label={`${member.role} फोटोसाठी रिकामी जागा`}
                >
                  <span className="member-photo-icon">▧</span>
                  <span className="member-photo-text">
                    PHOTO PLACEHOLDER
                  </span>
                </div>

                <span className="member-role">
                  {member.role}
                </span>

                <h3>{member.name}</h3>

                <p>{member.description}</p>
              </article>
            ))}
          </div>

          <p className="members-note">
            टीप: वरील नावे नमुना स्वरूपात आहेत. अधिकृत नावे आणि
            पदांची माहिती ग्रामपंचायतीकडून पडताळून अद्ययावत करा.
          </p>
        </div>
      </section>
    </main>
  );
}