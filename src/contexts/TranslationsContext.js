import { createContext, useState } from "react"
import TranslationsData from "../data/translationsData.json"

export const TranslationsContext = createContext()

export function TranslationsProvider({ children }) {
    const [language, setLanguage] = useState("spanish")
    const translations = TranslationsData[language]
    const languages = [
        { code: "es", name: "spanish" },
        { code: "fr", name: "french" },
        { code: "en", name: "english" },
        { code: "pt", name: "portuguese" },
    ];

    function handleSelectLanguage(language) {
        setLanguage(language)
    }

    return (
        <TranslationsContext.Provider value={{ language, languages, translations, selectLanguage: handleSelectLanguage }}>
            {children}
        </TranslationsContext.Provider>
    )
}