import { createContext, useState, useContext } from "react";

// Translation Data
const translations = {
  en: {
    about: "About Us",
    aboutIntro: "Konnect Talent HR Consultancy helps businesses find the right people...",
    whoWeAre: "Who We Are",
    whoWeAreDesc: "At KonnectHRC, we bridge the gap between businesses and talent...",
    ourVision: "Our Vision",
    ourVisionDesc: "To be the leading HR consultancy delivering excellence...",
    ourMission: "Our Mission",
    ourMissionDesc: "To support clients through business challenges...",
    ourValues: "Our Core Values",
    ourValuesDesc: "Integrity, transparency, and commitment drive our HR solutions...",
    ourResults: "Our Results in Numbers",
    ourResultsDesc: "We are a growing consultancy, continuously expanding...",
    clientsServed: "Clients Served",
    yearsExcellence: "Years of Excellence",
    successfulHires: "Successful Hires",
    activePartnerships: "Active Partnerships",
    ceoMessage: "CEO Message",
    ceoMessageDesc:
      "At KonnectHRC, we believe that people are the true foundation of success...",
  },
  ar: {
    about: "معلومات عنا",
    aboutIntro: "تساعد شركة كونكت تالنت الشركات في العثور على الأشخاص المناسبين...",
    whoWeAre: "من نحن",
    whoWeAreDesc: "في كونكت، نعمل كجسر بين الشركات والمهارات...",
    ourVision: "رؤيتنا",
    ourVisionDesc: "أن نكون الشركة الرائدة في الاستشارات...",
    ourMission: "مهمتنا",
    ourMissionDesc: "دعم العملاء خلال تحديات الأعمال...",
    ourValues: "قيمنا الأساسية",
    ourValuesDesc: "النزاهة والشفافية والالتزام تقود حلولنا...",
    ourResults: "نتائجنا بالأرقام",
    ourResultsDesc: "نحن شركة استشارات نامية، نوسع نطاقنا باستمرار...",
    clientsServed: "العملاء المخدومين",
    yearsExcellence: "سنوات من التميز",
    successfulHires: "التعيينات الناجحة",
    activePartnerships: "شراكات نشطة",
    ceoMessage: "رسالة المدير التنفيذي",
    ceoMessageDesc:
      "في كونكت، نؤمن أن الأشخاص هم الأساس الحقيقي للنجاح...",
  },
};


const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en"); // default English

  const t = (key) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
