import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import WelcomeScreen from "./components/WelcomeScreen.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Members from "./pages/Members.jsx";
import Schemes from "./pages/Schemes.jsx";
import Notices from "./pages/Notices.jsx";
import Development from "./pages/Development.jsx";
import Contact from "./pages/Contact.jsx";

const translations = {
  mr: {
    language: "मराठी",
    welcomeTitle: "नमस्कार, बोखारा!",
    welcomeSubtitle: "आपल्या ग्रामपंचायतीच्या अधिकृत संकेतस्थळावर आपले स्वागत आहे",
    enter: "मुख्य पृष्ठावर जा",
    topText: "ग्रामपंचायत बोखारा",
    district: "जिल्हा नागपूर, महाराष्ट्र",
    tagline: "स्वच्छ गाव • सुंदर गाव • विकसित गाव",
    nav: ["मुख्यपृष्ठ", "आमच्याबद्दल", "पदाधिकारी", "योजना", "सूचना", "विकासकामे", "संपर्क"],
    heroTag: "आपले गाव, आपला अभिमान",
    heroTitle: "एकत्र येऊया,",
    heroHighlight: "गाव घडवूया!",
    heroText: "पारदर्शक प्रशासन, नागरिकांचा सहभाग आणि शाश्वत विकासासाठी ग्रामपंचायत बोक्हारा सदैव कटिबद्ध.",
    explore: "अधिक जाणून घ्या",
    servicesTitle: "नागरिक सेवा",
    servicesSubtitle: "आपल्या दैनंदिन गरजांसाठी आवश्यक सेवा",
    services: [
      ["📄", "दाखले व प्रमाणपत्रे", "विविध शासकीय दाखले आणि प्रमाणपत्रांसाठी माहिती मिळवा."],
      ["💧", "पाणीपुरवठा", "पाणीपुरवठा आणि पाणीविषयक समस्यांसाठी संपर्क साधा."],
      ["💡", "पथदिवे", "गावातील पथदिव्यांबाबत तक्रार नोंदवा."],
      ["📝", "तक्रार नोंदणी", "गावातील समस्या प्रशासनापर्यंत पोहोचवा."]
    ],
    aboutLabel: "आमच्याबद्दल",
    aboutTitle: "आपल्या गावाच्या प्रगतीसाठी एकत्र",
    aboutText: "ग्रामपंचायत बोक्हारा ही स्थानिक स्वराज्य संस्थेच्या माध्यमातून नागरिकांना आवश्यक सुविधा उपलब्ध करून देण्यासाठी आणि गावाच्या सर्वांगीण विकासासाठी कार्य करते.",
    aboutText2: "स्वच्छता, पाणीपुरवठा, रस्ते, सार्वजनिक सुविधा आणि शासकीय योजनांची माहिती नागरिकांपर्यंत पोहोचवणे हे आमचे महत्त्वाचे उद्दिष्ट आहे.",
    aboutPoints: ["पारदर्शक प्रशासन", "नागरिकांचा सक्रिय सहभाग", "शाश्वत ग्रामविकास"],
    membersTitle: "ग्रामपंचायत पदाधिकारी",
    membersSubtitle: "खालील नावे व माहिती केवळ नमुना डिझाइनसाठी आहे. छायाचित्रांची जागा सध्या रिकामी ठेवली आहे.",
    sampleLabel: "नमुना माहिती",
    members: [
      ["सरपंच", "सरपंचांचे नाव", "ग्रामपंचायतीचे नेतृत्व आणि गावाच्या विकासाचे समन्वय."],
      ["उपसरपंच", "उपसरपंचांचे नाव", "प्रशासकीय कामकाजात सहकार्य आणि नागरिकांशी समन्वय."],
      ["ग्रामपंचायत अधिकारी", "अधिकाऱ्यांचे नाव", "ग्रामपंचायतीच्या प्रशासकीय कामकाजाची जबाबदारी."],
      ["सदस्य", "सदस्याचे नाव", "स्थानिक प्रश्न मांडणे आणि विकासकामांमध्ये सहभाग."],
      ["सदस्य", "सदस्याचे नाव", "नागरिकांच्या गरजा आणि गावाच्या विकासासाठी योगदान."]
    ],
    schemesTitle: "शासकीय योजना",
    schemesSubtitle: "नागरिकांसाठी उपयुक्त शासकीय योजना",
    schemes: [
      ["🏠", "प्रधानमंत्री आवास योजना", "पात्र कुटुंबांना घरकुलासंबंधी सहाय्य."],
      ["🚰", "जल जीवन मिशन", "ग्रामीण भागात नळाद्वारे पाणीपुरवठा."],
      ["🌿", "स्वच्छ भारत मिशन", "स्वच्छता आणि आरोग्यविषयक उपक्रम."],
      ["👩‍🌾", "शेतकरी कल्याण योजना", "पात्र शेतकऱ्यांसाठी शासकीय सहाय्य."]
    ],
    noticesTitle: "सूचना व घोषणा",
    noticesSubtitle: "ग्रामपंचायतीकडून महत्त्वाची माहिती",
    noticeTitle: "नवीन सूचना",
    noticeText: "ग्रामपंचायतीच्या नवीन सूचना आणि कार्यक्रमांची माहिती येथे प्रकाशित केली जाईल.",
    noticeDate: "सूचना फलक",
    developmentTitle: "गावाचा विकास",
    developmentSubtitle: "विकासकामांमधील पारदर्शकता आणि नागरिकांचा सहभाग",
    development: [
      ["रस्ते व वाहतूक", "गावातील रस्ते आणि वाहतुकीच्या सुविधांमध्ये सुधारणा."],
      ["पाणीपुरवठा", "नागरिकांसाठी सुरक्षित आणि नियमित पाणीपुरवठा."],
      ["स्वच्छता", "स्वच्छ आणि आरोग्यदायी गावासाठी उपक्रम."],
      ["सार्वजनिक सुविधा", "गावातील सार्वजनिक सुविधांचा विकास."]
    ],
    contactTitle: "आमच्याशी संपर्क साधा",
    contactSubtitle: "आपल्या सूचना आणि समस्या आम्हाला कळवा",
    address: "पत्ता",
    addressValue: "ग्रामपंचायत बोखारा, जिल्हा नागपूर, महाराष्ट्र",
    office: "कार्यालयीन वेळ",
    officeValue: "कार्यालयीन वेळेसाठी ग्रामपंचायतीशी संपर्क साधावा.",
    phone: "संपर्क क्रमांक",
    phoneValue: "अधिकृत संपर्क क्रमांक लवकरच उपलब्ध होईल.",
    formName: "आपले नाव",
    formPhone: "मोबाईल क्रमांक",
    formSubject: "विषय",
    formMessage: "आपला संदेश किंवा तक्रार",
    submit: "संदेश तयार करा",
    formNote: "हा फॉर्म सध्या नमुना स्वरूपात आहे. संदेश पाठवण्यासाठी प्रत्यक्ष बॅकएंड जोडणे आवश्यक आहे.",
    footerText: "आपले गाव, आपली जबाबदारी, आपला विकास.",
    quickLinks: "महत्त्वाचे दुवे",
    rights: "सर्व हक्क राखीव."
  },

  hi: {
    language: "हिन्दी",
    welcomeTitle: "नमस्कार, बोखारा!",
    welcomeSubtitle: "ग्राम पंचायत की आधिकारिक वेबसाइट पर आपका स्वागत है",
    enter: "मुख्य पृष्ठ पर जाएँ",
    topText: "ग्राम पंचायत बोखारा",
    district: "जिला नागपुर, महाराष्ट्र",
    tagline: "स्वच्छ गाँव • सुंदर गाँव • विकसित गाँव",
    nav: ["होम", "हमारे बारे में", "पदाधिकारी", "योजनाएँ", "सूचनाएँ", "विकास कार्य", "संपर्क"],
    heroTag: "हमारा गाँव, हमारा गौरव",
    heroTitle: "मिलकर आगे बढ़ें,",
    heroHighlight: "गाँव को बेहतर बनाएँ!",
    heroText: "पारदर्शी प्रशासन, नागरिकों की भागीदारी और सतत विकास के लिए ग्राम पंचायत बोखारा सदैव प्रतिबद्ध है।",
    explore: "और जानें",
    servicesTitle: "नागरिक सेवाएँ",
    servicesSubtitle: "आपकी दैनिक आवश्यकताओं के लिए उपयोगी सेवाएँ",
    services: [
      ["📄", "दस्तावेज़ एवं प्रमाणपत्र", "विभिन्न सरकारी दस्तावेज़ों और प्रमाणपत्रों की जानकारी।"],
      ["💧", "जल आपूर्ति", "पानी की आपूर्ति और संबंधित समस्याओं के लिए संपर्क करें।"],
      ["💡", "स्ट्रीट लाइट", "गाँव की स्ट्रीट लाइट से जुड़ी शिकायत दर्ज करें।"],
      ["📝", "शिकायत दर्ज करें", "गाँव की समस्याएँ प्रशासन तक पहुँचाएँ।"]
    ],
    aboutLabel: "हमारे बारे में",
    aboutTitle: "गाँव की प्रगति के लिए साथ मिलकर",
    aboutText: "ग्राम पंचायत बोखारा स्थानीय स्वशासन के माध्यम से नागरिकों को आवश्यक सुविधाएँ उपलब्ध कराने और गाँव के समग्र विकास के लिए कार्य करती है।",
    aboutText2: "स्वच्छता, जल आपूर्ति, सड़कें, सार्वजनिक सुविधाएँ और सरकारी योजनाओं की जानकारी नागरिकों तक पहुँचाना हमारा प्रमुख उद्देश्य है।",
    aboutPoints: ["पारदर्शी प्रशासन", "नागरिकों की सक्रिय भागीदारी", "सतत ग्रामीण विकास"],
    membersTitle: "ग्राम पंचायत पदाधिकारी",
    membersSubtitle: "नीचे दिए गए नाम और जानकारी केवल नमूना डिज़ाइन के लिए हैं। तस्वीरों की जगह फिलहाल खाली रखी गई है।",
    sampleLabel: "नमूना जानकारी",
    members: [
      ["सरपंच", "सरपंच का नाम", "ग्राम पंचायत का नेतृत्व और गाँव के विकास का समन्वय।"],
      ["उपसरपंच", "उपसरपंच का नाम", "प्रशासनिक कार्यों में सहयोग और नागरिकों के साथ समन्वय।"],
      ["ग्राम पंचायत अधिकारी", "अधिकारी का नाम", "ग्राम पंचायत के प्रशासनिक कार्यों की जिम्मेदारी।"],
      ["सदस्य", "सदस्य का नाम", "स्थानीय समस्याओं को उठाना और विकास कार्यों में भागीदारी।"],
      ["सदस्य", "सदस्य का नाम", "नागरिकों की आवश्यकताओं और गाँव के विकास में योगदान।"]
    ],
    schemesTitle: "सरकारी योजनाएँ",
    schemesSubtitle: "नागरिकों के लिए उपयोगी सरकारी योजनाएँ",
    schemes: [
      ["🏠", "प्रधानमंत्री आवास योजना", "पात्र परिवारों को आवास संबंधी सहायता।"],
      ["🚰", "जल जीवन मिशन", "ग्रामीण क्षेत्रों में नल से जल की सुविधा।"],
      ["🌿", "स्वच्छ भारत मिशन", "स्वच्छता और स्वास्थ्य से संबंधित पहल।"],
      ["👩‍🌾", "किसान कल्याण योजनाएँ", "पात्र किसानों के लिए सरकारी सहायता।"]
    ],
    noticesTitle: "सूचनाएँ एवं घोषणाएँ",
    noticesSubtitle: "ग्राम पंचायत की महत्वपूर्ण जानकारी",
    noticeTitle: "नई सूचना",
    noticeText: "ग्राम पंचायत की नई सूचनाएँ और कार्यक्रमों की जानकारी यहाँ प्रकाशित की जाएगी।",
    noticeDate: "सूचना बोर्ड",
    developmentTitle: "गाँव का विकास",
    developmentSubtitle: "विकास कार्यों में पारदर्शिता और नागरिकों की भागीदारी",
    development: [
      ["सड़क एवं यातायात", "गाँव की सड़कों और यातायात सुविधाओं में सुधार।"],
      ["जल आपूर्ति", "नागरिकों के लिए सुरक्षित और नियमित जल आपूर्ति।"],
      ["स्वच्छता", "स्वच्छ और स्वस्थ गाँव के लिए पहल।"],
      ["सार्वजनिक सुविधाएँ", "गाँव की सार्वजनिक सुविधाओं का विकास।"]
    ],
    contactTitle: "हमसे संपर्क करें",
    contactSubtitle: "अपने सुझाव और समस्याएँ हमें बताएँ",
    address: "पता",
    addressValue: "ग्राम पंचायत बोखारा, जिला नागपुर, महाराष्ट्र",
    office: "कार्यालय का समय",
    officeValue: "कार्यालय के समय के लिए ग्राम पंचायत से संपर्क करें।",
    phone: "संपर्क नंबर",
    phoneValue: "आधिकारिक संपर्क नंबर जल्द उपलब्ध होगा।",
    formName: "आपका नाम",
    formPhone: "मोबाइल नंबर",
    formSubject: "विषय",
    formMessage: "आपका संदेश या शिकायत",
    submit: "संदेश तैयार करें",
    formNote: "यह फॉर्म अभी नमूना स्वरूप में है। संदेश भेजने के लिए वास्तविक बैकएंड जोड़ना आवश्यक है।",
    footerText: "हमारा गाँव, हमारी जिम्मेदारी, हमारा विकास।",
    quickLinks: "महत्वपूर्ण लिंक",
    rights: "सर्वाधिकार सुरक्षित।"
  },

  en: {
    language: "English",
    welcomeTitle: "Namaskar, Bokhara!",
    welcomeSubtitle: "Welcome to the official website of Gram Panchayat Bokhara",
    enter: "Enter Website",
    topText: "Gram Panchayat Bokhara",
    district: "Nagpur District, Maharashtra",
    tagline: "Clean Village • Beautiful Village • Developed Village",
    nav: ["Home", "About Us", "Leadership", "Schemes", "Notices", "Development", "Contact"],
    heroTag: "Our Village, Our Pride",
    heroTitle: "Together We Can",
    heroHighlight: "Build a Better Village!",
    heroText: "Gram Panchayat Bokhara is committed to transparent governance, citizen participation and sustainable rural development.",
    explore: "Explore More",
    servicesTitle: "Citizen Services",
    servicesSubtitle: "Helpful services for everyday community needs",
    services: [
      ["📄", "Certificates & Documents", "Find information about government certificates and documents."],
      ["💧", "Water Supply", "Get information about water supply and related issues."],
      ["💡", "Street Lights", "Raise a concern related to street lighting in the village."],
      ["📝", "Submit a Complaint", "Bring local issues to the attention of the administration."]
    ],
    aboutLabel: "About Us",
    aboutTitle: "Working Together for Village Progress",
    aboutText: "Gram Panchayat Bokhara works through local self-governance to provide essential civic facilities and support the overall development of the village.",
    aboutText2: "Our key priorities include sanitation, water supply, roads, public facilities and helping residents access information about government schemes.",
    aboutPoints: ["Transparent governance", "Active citizen participation", "Sustainable rural development"],
    membersTitle: "Gram Panchayat Leadership",
    membersSubtitle: "The names and details below are illustrative samples. Photo areas are intentionally left blank.",
    sampleLabel: "Sample information",
    members: [
      ["Sarpanch", "Sarpanch Name", "Provides leadership and coordinates village development initiatives."],
      ["Deputy Sarpanch", "Deputy Sarpanch Name", "Supports administrative work and coordination with residents."],
      ["Panchayat Secretary", "Officer Name", "Responsible for administrative coordination and records."],
      ["Member", "Member Name", "Represents local concerns and participates in development activities."],
      ["Member", "Member Name", "Contributes to community needs and village development."]
    ],
    schemesTitle: "Government Schemes",
    schemesSubtitle: "Useful government programmes for citizens",
    schemes: [
      ["🏠", "Pradhan Mantri Awas Yojana", "Housing assistance for eligible families."],
      ["🚰", "Jal Jeevan Mission", "Rural household tap water access."],
      ["🌿", "Swachh Bharat Mission", "Initiatives for sanitation and public health."],
      ["👩‍🌾", "Farmer Welfare Schemes", "Government support for eligible farmers."]
    ],
    noticesTitle: "Notices & Announcements",
    noticesSubtitle: "Important information from the Gram Panchayat",
    noticeTitle: "Latest Notice",
    noticeText: "Updates about Gram Panchayat notices and upcoming programmes will be published here.",
    noticeDate: "Notice Board",
    developmentTitle: "Village Development",
    developmentSubtitle: "Transparency and citizen participation in local development",
    development: [
      ["Roads & Transport", "Improving village roads and local transport facilities."],
      ["Water Supply", "Supporting safe and reliable water access for residents."],
      ["Sanitation", "Initiatives for a cleaner and healthier village."],
      ["Public Facilities", "Development and maintenance of community facilities."]
    ],
    contactTitle: "Contact Us",
    contactSubtitle: "Share your suggestions and concerns with us",
    address: "Address",
    addressValue: "Gram Panchayat Bokhara, Nagpur District, Maharashtra",
    office: "Office Hours",
    officeValue: "Please contact the Gram Panchayat for official office timings.",
    phone: "Contact Number",
    phoneValue: "Official contact details will be added when verified.",
    formName: "Your Name",
    formPhone: "Mobile Number",
    formSubject: "Subject",
    formMessage: "Your message or complaint",
    submit: "Prepare Message",
    formNote: "This is currently a demonstration form. A backend is required to submit and store messages.",
    footerText: "Our Village, Our Responsibility, Our Development.",
    quickLinks: "Quick Links",
    rights: "All rights reserved."
  }
};

export default function App() {
  const [language, setLanguage] = useState("mr");
  const [showWelcome, setShowWelcome] = useState(true);
  const [welcomeExiting, setWelcomeExiting] = useState(false);

  const t = translations[language];
  const location = useLocation();

  useEffect(() => {
    document.title = "ग्रामपंचायत बोखारा | Gram Panchayat Bokhara";

    const exitTimer = setTimeout(() => {
      setWelcomeExiting(true);
    }, 2000);

    const removeTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 2700);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto"
    });
  }, [location.pathname]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap');

        :root {
          --green: #2463A6;
          --green-dark: #173B70;
          --green-light: #EAF1FA;
          --gold: #F28C28;
          --cream: #F5F7FB;
          --text: #24332B;
          --muted: #69766D;
          --white: #ffffff;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'DM Sans', sans-serif;
          color: var(--text);
          background: var(--white);
          line-height: 1.65;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button,
        input,
        textarea,
        select {
          font: inherit;
        }

        button {
          cursor: pointer;
        }

        .welcome-screen {
          position: fixed;
          inset: 0;
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          text-align: center;
          color: white;
          background:
            radial-gradient(circle at 50% 40%, rgba(61,112,180,.42), transparent 45%),
            linear-gradient(140deg, #102746, #173B70 60%, #122B4D);
          opacity: 1;
          transition: opacity .5s ease;
        }

        .welcome-screen.welcome-exiting {
          opacity: 0;
          pointer-events: none;
        }

        .welcome-content {
          width: 100%;
          max-width: 650px;
          animation: welcomeFade .9s ease both;
        }

        .welcome-emblem {
          font-size: 54px;
          margin-bottom: 12px;
        }

        .welcome-overline {
          color: #e2d2a8;
          letter-spacing: 4px;
          font-size: 13px;
        }

        .welcome-content h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(30px, 6vw, 54px);
          margin: 14px 0;
        }

        .welcome-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin: 24px auto;
        }

        .welcome-divider span {
          width: 65px;
          height: 1px;
          background: var(--gold);
        }

        .welcome-divider-icon {
          color: var(--gold);
        }

        .welcome-namaskar {
          font-size: 27px;
          font-weight: 600;
        }

        .welcome-subtitle {
          margin-top: 8px;
          color: #dbe9df;
        }

        .welcome-loader {
          width: 100px;
          height: 3px;
          margin: 35px auto 0;
          overflow: hidden;
          background: rgba(255,255,255,.2);
        }

        .welcome-loader span {
          display: block;
          width: 40%;
          height: 100%;
          background: var(--gold);
          animation: loading 1.3s ease-in-out infinite;
        }

        @keyframes loading {
          from {
            transform: translateX(-100%);
          }

          to {
            transform: translateX(250%);
          }
        }

        @keyframes welcomeFade {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .top-strip {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          padding: 9px 6%;
          background: #122B4D;
          color: white;
          font-size: 12px;
        }

        .top-strip-left {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }

        .language-select {
          padding: 5px 9px;
          border: 1px solid rgba(255,255,255,.3);
          border-radius: 5px;
          background: #122B4D;
          color: white;
        }

        .masthead {
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 22px 6%;
          background: white;
        }

        .emblem {
          display: grid;
          place-items: center;
          flex-shrink: 0;
          width: 62px;
          height: 62px;
          border-radius: 50%;
          background: var(--green-light);
          font-size: 32px;
        }

        .masthead h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(20px, 3vw, 30px);
          line-height: 1.3;
          color: var(--green-dark);
        }

        .masthead p {
          color: var(--muted);
          font-size: 13px;
        }

        .masthead-tagline {
          margin-left: auto;
          max-width: 210px;
          color: var(--green);
          font-size: 13px;
          text-align: right;
        }

        .main-nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: #173B70;
          box-shadow: 0 4px 14px rgba(0,0,0,.08);
        }

        .nav-inner {
          padding: 0 6%;
        }

        .nav-links {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }

        .nav-link {
          display: block;
          padding: 15px 17px;
          color: white;
          font-size: 13px;
          transition: background .2s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          background: #122B4D;
        }

        .menu-toggle {
          display: none;
          border: 0;
          padding: 12px 0;
          background: transparent;
          color: white;
        }

        .hero {
          position: relative;
          overflow: hidden;
          padding: 100px 7%;
          color: white;
          background:
            linear-gradient(90deg, rgba(12,35,66,.92), rgba(23,59,112,.72)),
            linear-gradient(135deg, #477CB9, #173B70);
        }

        .hero-content {
          max-width: 750px;
        }

        .hero h1 {
          max-width: 780px;
          font-family: 'Playfair Display', serif;
          font-size: clamp(35px, 6vw, 66px);
          line-height: 1.15;
          margin: 15px 0 20px;
        }

        .hero p {
          max-width: 650px;
          color: #e4eee7;
        }

        .hero .hero-eyebrow {
          color: #e5d19a;
          letter-spacing: 3px;
          font-size: 12px;
          font-weight: 700;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 22px;
          padding: 12px 22px;
          border: 1px solid transparent;
          border-radius: 4px;
          font-weight: 600;
          transition: .2s ease;
        }

        .btn-primary {
          background: var(--gold);
          color: #192d20;
        }

        .btn-primary:hover {
          background: #ffad59;
          transform: translateY(-2px);
        }

        .section {
          padding: 72px 6%;
        }

        .section-cream {
          background: var(--cream);
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-heading {
          max-width: 700px;
          margin: 0 auto 36px;
          text-align: center;
        }

        .section-eyebrow {
          color: var(--green);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .section-heading h2,
        .section-title {
          margin: 8px 0 12px;
          color: var(--green-dark);
          font-family: 'Playfair Display', serif;
          font-size: clamp(27px, 4vw, 39px);
          line-height: 1.25;
        }

        .section-heading p {
          color: var(--muted);
        }

        .services-grid,
        .members-grid,
        .schemes-grid,
        .development-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .service-card,
        .member-card,
        .scheme-card,
        .development-card,
        .notice-card,
        .contact-info-card,
        .about-visual-inner {
          border: 1px solid #e8ece7;
          border-radius: 8px;
          background: white;
          box-shadow: 0 6px 24px rgba(24,59,39,.045);
        }

        .service-card,
        .member-card,
        .scheme-card,
        .development-card {
          padding: 25px;
        }

        .service-card h3,
        .member-card h3,
        .scheme-card h3,
        .development-card h3 {
          margin: 10px 0 8px;
          color: var(--green-dark);
        }

        .service-card p,
        .member-card p,
        .scheme-card p,
        .development-card p {
          color: var(--muted);
          font-size: 14px;
        }

        .service-icon {
          font-size: 30px;
        }

        .about-layout,
        .notice-layout,
        .contact-layout {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 35px;
          align-items: start;
        }

        .about-layout p,
        .notice-layout p,
        .contact-layout p {
          color: var(--muted);
        }

        .about-visual-inner {
          display: grid;
          min-height: 260px;
          place-items: center;
          padding: 30px;
          background: var(--green-light);
          color: var(--green);
          font-size: 70px;
        }

        .about-icon {
          font-size: 32px;
        }

        .page-banner {
          padding: 58px 6%;
          color: white;
          background: linear-gradient(120deg, var(--green-dark), var(--green));
        }

        .page-banner .container {
          max-width: 1200px;
        }

        .page-banner h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(30px, 4vw, 46px);
        }

        .page-banner p {
          margin-top: 8px;
          color: #e1ebe4;
        }

        .member-avatar {
          display: grid;
          place-items: center;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: var(--green-light);
          font-size: 30px;
        }

        .members-note,
        .schemes-note,
        .notices-note,
        .development-note {
          margin-top: 25px;
          padding: 18px 20px;
          border-left: 4px solid var(--gold);
          background: var(--cream);
          color: var(--muted);
        }

        .scheme-category,
        .notice-category {
          display: inline-block;
          margin-bottom: 8px;
          padding: 4px 9px;
          border-radius: 3px;
          background: var(--green-light);
          color: var(--green);
          font-size: 11px;
          font-weight: 700;
        }

        .scheme-audience {
          margin-top: 10px;
          font-size: 12px;
        }

        .scheme-link {
          display: inline-block;
          margin-top: 14px;
          color: var(--green);
          font-weight: 700;
        }

        .notices-list {
          display: grid;
          gap: 16px;
        }

        .notice-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 22px;
        }

        .notice-icon {
          font-size: 26px;
        }

        .notice-content {
          flex: 1;
        }

        .notice-content h3 {
          margin-bottom: 5px;
          color: var(--green-dark);
        }

        .notice-meta {
          margin-top: 8px;
          color: var(--muted);
          font-size: 12px;
        }

        .notice-arrow {
          color: var(--green);
        }

        .development-summary {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-bottom: 30px;
        }

        .development-stat {
          padding: 22px;
          border-radius: 8px;
          background: var(--green-light);
          text-align: center;
        }

        .development-stat strong {
          display: block;
          color: var(--green-dark);
          font-size: 28px;
        }

        .development-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .project-status {
          padding: 4px 8px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
        }

        .status-complete {
          background: #e3f4e6;
          color: #236b37;
        }

        .status-progress {
          background: #fff1d5;
          color: #865c13;
        }

        .status-planned {
          background: #e9edf5;
          color: #475b7d;
        }

        .progress-label {
          display: flex;
          justify-content: space-between;
          margin-top: 16px;
          font-size: 12px;
        }

        .progress-track {
          height: 7px;
          margin-top: 7px;
          overflow: hidden;
          border-radius: 20px;
          background: #e8ece7;
        }

        .progress-fill {
          height: 100%;
          border-radius: inherit;
          background: var(--green);
        }

        .contact-info-card {
          margin-bottom: 15px;
          padding: 20px;
        }

        .contact-info-card h3 {
          margin-bottom: 5px;
          color: var(--green-dark);
        }

        .contact-form {
          display: grid;
          gap: 15px;
        }

        .contact-form label {
          display: grid;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
        }

        .contact-form input,
        .contact-form textarea,
        .contact-form select {
          width: 100%;
          padding: 12px;
          border: 1px solid #dce4dc;
          border-radius: 4px;
          background: white;
          color: var(--text);
        }

        .contact-form input:focus,
        .contact-form textarea:focus,
        .contact-form select:focus {
          outline: 2px solid #a8c8e8;
          border-color: var(--green);
        }

        .contact-submit {
          justify-self: start;
          margin-top: 0;
          border: 0;
        }

        .form-success {
          padding: 12px;
          border-radius: 4px;
          background: var(--green-light);
          color: var(--green-dark);
        }

        .footer {
  padding: 50px 6% 20px;
  background: #303943;
  color: #edf4ee;
}
        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer h3,
        .footer h4 {
          margin-bottom: 12px;
          color: white;
        }

        .footer p,
        .footer-links a {
          color: #c4d3e5;
          font-size: 13px;
        }

        .footer-links {
          display: grid;
          align-content: start;
          gap: 8px;
        }

        .footer-links a:hover {
          color: white;
        }

        .footer-bottom {
          max-width: 1200px;
          margin: 30px auto 0;
          padding-top: 18px;
          border-top: 1px solid rgba(255,255,255,.15);
          color: #c4d3e5;
          font-size: 12px;
          text-align: center;
        }

        .back-top {
          position: fixed;
          right: 22px;
          bottom: 22px;
          z-index: 90;
          width: 43px;
          height: 43px;
          border: 0;
          border-radius: 50%;
          background: var(--green);
          color: white;
          font-size: 22px;
          box-shadow: 0 4px 15px rgba(0,0,0,.18);
        }

        @media (max-width: 900px) {
          .nav-inner {
            padding: 0 5%;
          }

          .nav-links {
            justify-content: flex-start;
          }

          .nav-link {
            padding: 13px 10px;
          }

          .services-grid,
          .members-grid,
          .schemes-grid,
          .development-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .footer-content {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .top-strip {
            padding: 8px 4%;
          }

          .top-strip-left {
            gap: 5px;
            flex-direction: column;
          }

          .masthead {
            padding: 18px 4%;
            gap: 12px;
          }

          .emblem {
            width: 48px;
            height: 48px;
            font-size: 25px;
          }

          .masthead-tagline {
            display: none;
          }

          .nav-inner {
            padding: 0 5%;
          }

          .menu-toggle {
            display: block;
          }

          .nav-links {
            display: none;
            padding-bottom: 8px;
          }

          .nav-links.open {
            display: flex;
            flex-direction: column;
            align-items: stretch;
          }

          .nav-link {
            padding: 11px 8px;
          }

          .hero {
            padding: 70px 6%;
          }

          .section {
            padding: 48px 5%;
          }

          .services-grid,
          .members-grid,
          .schemes-grid,
          .development-grid,
          .about-layout,
          .notice-layout,
          .contact-layout,
          .development-summary,
          .footer-content {
            grid-template-columns: 1fr;
          }

          .notice-card {
            padding: 16px;
          }

          .page-banner {
            padding: 42px 5%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <WelcomeScreen
        t={t}
        showWelcome={showWelcome}
        welcomeExiting={welcomeExiting}
      />

      <Navbar
        t={t}
        language={language}
        setLanguage={setLanguage}
      />

      <Routes>
        <Route path="/" element={<Home t={t} />} />
        <Route path="/about" element={<About t={t} />} />
        <Route path="/members" element={<Members t={t} />} />
        <Route path="/schemes" element={<Schemes t={t} />} />
        <Route path="/notices" element={<Notices t={t} />} />
        <Route path="/development" element={<Development t={t} />} />
        <Route path="/contact" element={<Contact t={t} />} />
        <Route path="*" element={<Home t={t} />} />
      </Routes>

      <Footer t={t} />

      <button
        className="back-top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          })
        }
        aria-label="Back to top"
        title="Back to top"
      >
        ↑
      </button>
    </>
  );
}