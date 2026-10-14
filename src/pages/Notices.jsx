export default function Notices({ t }) {
  const notices = [
    {
      category: "महत्त्वाची सूचना",
      date: "दिनांक उपलब्ध नाही",
      title: "ग्रामसभा बैठकीची सूचना",
      description:
        "ग्रामसभेची तारीख, वेळ आणि ठिकाण यांची अधिकृत माहिती येथे प्रसिद्ध केली जाईल.",
      icon: "📢",
    },
    {
      category: "सार्वजनिक सूचना",
      date: "दिनांक उपलब्ध नाही",
      title: "पाणीपुरवठा आणि स्वच्छता",
      description:
        "पाणीपुरवठा, स्वच्छता आणि परिसराच्या देखभालीसंबंधी सूचना येथे पाहता येतील.",
      icon: "💧",
    },
    {
      category: "विकासकामे",
      date: "दिनांक उपलब्ध नाही",
      title: "ग्रामविकास कामांची माहिती",
      description:
        "गावातील चालू आणि प्रस्तावित विकासकामांसंबंधी अधिकृत अपडेट येथे प्रसिद्ध केले जातील.",
      icon: "🏗️",
    },
    {
      category: "शासकीय माहिती",
      date: "दिनांक उपलब्ध नाही",
      title: "योजना आणि अर्ज",
      description:
        "विविध शासकीय योजना, अर्ज प्रक्रिया आणि आवश्यक कागदपत्रांविषयी सूचना.",
      icon: "📄",
    },
  ];

  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <p className="section-eyebrow">PUBLIC INFORMATION</p>
          <h1>{t.nav[4]}</h1>
          <p>
            नागरिकांसाठी महत्त्वाच्या सूचना आणि अधिकृत घोषणा.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="section-eyebrow">LATEST UPDATES</p>
            <h2>सूचना आणि घोषणा</h2>
            <p>
              ग्रामपंचायतीकडून प्रसिद्ध होणाऱ्या महत्त्वाच्या माहितीचा विभाग.
            </p>
          </div>

          <div className="notices-list">
            {notices.map((notice, index) => (
              <article className="notice-card" key={index}>
                <div className="notice-icon">{notice.icon}</div>

                <div className="notice-content">
                  <div className="notice-meta">
                    <span className="notice-category">
                      {notice.category}
                    </span>
                    <span>{notice.date}</span>
                  </div>

                  <h3>{notice.title}</h3>
                  <p>{notice.description}</p>
                </div>

                <div className="notice-arrow" aria-hidden="true">
                  →
                </div>
              </article>
            ))}
          </div>

          <p className="notices-note">
            टीप: वरील सूचना नमुना स्वरूपातील आहेत. प्रत्यक्ष सूचना
            आणि तारखा ग्रामपंचायतीकडून पडताळून प्रकाशित करा.
          </p>
        </div>
      </section>
    </main>
  );
}