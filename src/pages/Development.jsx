export default function Development({ t }) {
  const projects = [
    {
      icon: "🚰",
      title: "पाणीपुरवठा सुधारणा",
      description:
        "गावातील पाणीपुरवठा सुविधा सुधारण्यासाठी प्रस्तावित काम.",
      status: "प्रस्तावित",
      progress: 0,
    },
    {
      icon: "🛣️",
      title: "रस्ते आणि अंतर्गत मार्ग",
      description:
        "गावातील रस्ते आणि अंतर्गत मार्गांच्या सुधारणेसाठी काम.",
      status: "काम सुरू",
      progress: 45,
    },
    {
      icon: "💡",
      title: "पथदिवे आणि प्रकाश व्यवस्था",
      description:
        "सार्वजनिक ठिकाणी प्रकाश व्यवस्थेबाबत सुधारणा.",
      status: "काम सुरू",
      progress: 65,
    },
    {
      icon: "🌳",
      title: "स्वच्छता आणि वृक्षारोपण",
      description:
        "स्वच्छ परिसर आणि हरित गावासाठी उपक्रम.",
      status: "पूर्ण",
      progress: 100,
    },
  ];

  const completed = projects.filter(
    (project) => project.progress === 100
  ).length;

  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <p className="section-eyebrow">VILLAGE PROGRESS</p>
          <h1>{t.nav[5]}</h1>
          <p>
            गावातील विकासकामांची माहिती आणि प्रगतीचा आढावा.
          </p>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="development-summary">
            <div className="development-stat">
              <span>एकूण प्रकल्प</span>
              <strong>{projects.length}</strong>
            </div>

            <div className="development-stat">
              <span>पूर्ण झालेले</span>
              <strong>{completed}</strong>
            </div>

            <div className="development-stat">
              <span>प्रगतीपथावर / प्रस्तावित</span>
              <strong>{projects.length - completed}</strong>
            </div>
          </div>

          <div className="section-heading">
            <p className="section-eyebrow">PROJECT TRACKER</p>
            <h2>गावातील विकासकामे</h2>
            <p>
              प्रत्येक प्रकल्पाची स्थिती आणि प्रगती येथे पाहता येईल.
            </p>
          </div>

          <div className="development-grid">
            {projects.map((project) => (
              <article className="development-card" key={project.title}>
                <div className="development-card-top">
                  <div className="development-icon">{project.icon}</div>

                  <span
                    className={`project-status ${
                      project.progress === 100
                        ? "status-complete"
                        : project.progress > 0
                        ? "status-progress"
                        : "status-planned"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="progress-label">
                  <span>प्रगती</span>
                  <strong>{project.progress}%</strong>
                </div>

                <div
                  className="progress-track"
                  role="progressbar"
                  aria-valuenow={project.progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={project.title}
                >
                  <div
                    className="progress-fill"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </article>
            ))}
          </div>

          <p className="development-note">
            टीप: ही नमुना प्रकल्प माहिती आहे. प्रत्यक्ष स्थिती आणि
            टक्केवारी अधिकृत नोंदींनुसार अद्ययावत करावी.
          </p>
        </div>
      </section>
    </main>
  );
}