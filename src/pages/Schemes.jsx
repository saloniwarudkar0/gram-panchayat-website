export default function Schemes({ t }) {
  const schemes = [
    {
      icon: "🏠",
      category: "घरकुल योजना",
      title: "प्रधानमंत्री आवास योजना",
      description:
        "पात्र कुटुंबांना पक्के घर मिळवण्यासाठी सहाय्य देणारी योजना.",
      audience: "पात्र ग्रामीण कुटुंबे",
    },
    {
      icon: "🚰",
      category: "पाणीपुरवठा",
      title: "जल जीवन मिशन",
      description:
        "ग्रामीण कुटुंबांना नळाद्वारे सुरक्षित पिण्याचे पाणी उपलब्ध करण्याचा उपक्रम.",
      audience: "ग्रामीण कुटुंबे",
    },
    {
      icon: "🌾",
      category: "शेतकरी कल्याण",
      title: "शेतकरी सहाय्य योजना",
      description:
        "शेतकऱ्यांसाठी उपलब्ध शासकीय योजना आणि संबंधित मार्गदर्शनाची माहिती.",
      audience: "पात्र शेतकरी",
    },
    {
      icon: "👵",
      category: "सामाजिक सुरक्षा",
      title: "वृद्धापकाळ पेन्शन योजना",
      description:
        "पात्र ज्येष्ठ नागरिकांसाठी सामाजिक सुरक्षा योजनांची माहिती.",
      audience: "निकष पूर्ण करणारे ज्येष्ठ नागरिक",
    },
    {
      icon: "👩",
      category: "महिला सक्षमीकरण",
      title: "महिला कल्याण योजना",
      description:
        "महिलांसाठी उपलब्ध शासकीय लाभ, सहाय्य आणि मार्गदर्शन.",
      audience: "योजनेनुसार पात्र महिला",
    },
    {
      icon: "🎓",
      category: "शिक्षण",
      title: "विद्यार्थी शिष्यवृत्ती",
      description:
        "पात्र विद्यार्थ्यांसाठी शिष्यवृत्ती आणि शैक्षणिक सहाय्याची माहिती.",
      audience: "निकष पूर्ण करणारे विद्यार्थी",
    },
  ];

  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <p className="section-eyebrow">GOVERNMENT BENEFITS</p>
          <h1>{t.nav[3]}</h1>
          <p>
            शासकीय योजना, पात्रता आणि अर्ज प्रक्रियेविषयी माहिती.
          </p>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="section-heading">
            <p className="section-eyebrow">SCHEMES &amp; SERVICES</p>
            <h2>नागरिकांसाठी शासकीय योजना</h2>
            <p>
              आपल्या गरजेनुसार योजनेची अधिकृत माहिती तपासा.
            </p>
          </div>

          <div className="schemes-grid">
            {schemes.map((scheme) => (
              <article className="scheme-card" key={scheme.title}>
                <div className="scheme-icon">{scheme.icon}</div>

                <span className="scheme-category">
                  {scheme.category}
                </span>

                <h3>{scheme.title}</h3>

                <p>{scheme.description}</p>

                <div className="scheme-audience">
                  <strong>लाभार्थी:</strong> {scheme.audience}
                </div>

                <a
                  className="scheme-link"
                  href="https://www.india.gov.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  अधिकृत माहिती पहा ↗
                </a>
              </article>
            ))}
          </div>

          <p className="schemes-note">
            टीप: ही सामान्य माहिती आहे. पात्रता, लाभ आणि अर्जाची
            अंतिम माहिती संबंधित योजनेच्या अधिकृत पोर्टलवर तपासा.
          </p>
        </div>
      </section>
    </main>
  );
}