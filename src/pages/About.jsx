import { Link } from "react-router-dom";

export default function About({ t }) {
  return (
    <main>
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