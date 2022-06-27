import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import pt from "./assets/translations/pt.json";


const resources = {
    pt: {
        translation: pt,
    }
};

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "pt",
        detection: {
            order: ["cookie", "localStorage", "navigator", "htmlTag"],
            caches: ["cookie"],
        },
        // interpolation: {
        //     escapeValue: false,
        // },
    });

export default i18n;
