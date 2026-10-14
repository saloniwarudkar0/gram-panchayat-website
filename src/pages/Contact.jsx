import { useState } from "react";

export default function Contact({ t }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      alert("कृपया योग्य 10 अंकी मोबाइल नंबर टाका.");
      return;
    }

    setSubmitted(true);

    // Demo only: this form does not send data to a server.
    setForm({
      name: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <p className="section-eyebrow">GET IN TOUCH</p>
          <h1>{t.nav[6]}</h1>
          <p>
            आपल्या सूचना, प्रश्न आणि समस्या आमच्यापर्यंत पोहोचवा.
          </p>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="section-heading">
            <p className="section-eyebrow">WE ARE HERE TO HELP</p>
            <h2>आमच्याशी संपर्क साधा</h2>
            <p>
              ग्रामपंचायतीशी संबंधित माहितीसाठी खालील तपशील पाहा.
            </p>
          </div>

          <div className="contact-layout">
            <div className="contact-info">
              <article className="contact-info-card">
                <div className="contact-icon">📍</div>
                <div>
                  <h3>पत्ता</h3>
                  <p>
                    ग्रामपंचायत बोखारा,
                    <br />
                    नागपूर जिल्हा, महाराष्ट्र
                  </p>
                </div>
              </article>

              <article className="contact-info-card">
                <div className="contact-icon">📞</div>
                <div>
                  <h3>दूरध्वनी</h3>
                  <p>अधिकृत संपर्क क्रमांक उपलब्ध झाल्यावर येथे जोडला जाईल.</p>
                </div>
              </article>

              <article className="contact-info-card">
                <div className="contact-icon">🕘</div>
                <div>
                  <h3>कार्यालयीन वेळ</h3>
                  <p>अधिकृत कार्यालयीन वेळेची पुष्टी करणे आवश्यक आहे.</p>
                </div>
              </article>

              <div className="contact-highlight">
                <span>🌿</span>
                <h3>आपले गाव, आपला सहभाग</h3>
                <p>
                  गावाच्या विकासासाठी नागरिकांचा सहभाग महत्त्वाचा आहे.
                </p>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>आपला संदेश पाठवा</h2>

              <label htmlFor="contact-name">पूर्ण नाव</label>
              <input
                id="contact-name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="आपले नाव"
                required
              />

              <label htmlFor="contact-phone">मोबाइल नंबर</label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                pattern="[6-9][0-9]{9}"
                maxLength={10}
                value={form.phone}
                onChange={handleChange}
                placeholder="10 अंकी मोबाइल नंबर"
                required
              />

              <label htmlFor="contact-subject">विषय</label>
              <select
                id="contact-subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
              >
                <option value="">विषय निवडा</option>
                <option value="पाणीपुरवठा">पाणीपुरवठा</option>
                <option value="स्वच्छता">स्वच्छता</option>
                <option value="विकासकामे">विकासकामे</option>
                <option value="शासकीय योजना">शासकीय योजना</option>
                <option value="इतर">इतर</option>
              </select>

              <label htmlFor="contact-message">संदेश / समस्या</label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="आपला संदेश येथे लिहा..."
                rows={5}
                required
              />

              <button
                className="btn btn-primary contact-submit"
                type="submit"
              >
                संदेश पाठवा <span>→</span>
              </button>

              {submitted && (
                <p className="form-success" role="status">
                  फॉर्म तपासणी पूर्ण झाली. हा डेमो फॉर्म आहे; संदेश
                  प्रत्यक्ष पाठवलेला नाही.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}