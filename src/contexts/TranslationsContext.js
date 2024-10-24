import { createContext, useState } from "react"
import TranslationsData from "../data/translationsData.json"

export const TranslationsContext = createContext()

export function TranslationsProvider({ children }) {
    const [language, setLanguage] = useState("spanish")
    const translations = TranslationsData[language]

    function handleToggleLanguage() {
        switch (language) {
            case "spanish":
                setLanguage("english")
                break
            case "english":
                setLanguage("french")
                break
            case "french":
                setLanguage("portuguese")
                break
            case "portuguese":
                setLanguage("spanish")
                break
            default:
                console.log("Unexpected language")
                break
        }
    }

    return (
        <TranslationsContext.Provider value={{ language, translations, toggleLanguage: handleToggleLanguage }}>
            {children}
        </TranslationsContext.Provider>
    )
}