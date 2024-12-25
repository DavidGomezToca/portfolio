import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { TranslationsContext } from "../../contexts/TranslationsContext"

import SocialMedia from "../SocialMedia"


export default function HomeSection() {
    const { theme } = useContext(ThemeContext)
    const { translations } = useContext(TranslationsContext)

    const sections = translations.sections
    const homeTexts = translations.home

    return (
        <section id={sections[0]} className={`section__home color--${theme}--1`}>
            <div className={`banner background--${theme}--1`}>
                <div className={`banner__img border--${theme}`}>
                    <img src="/img/portfolio/DavidGomez.png" alt="David Gómez" />
                </div>
                <h1 className={`banner__title `}>David Gómez</h1>
                <h2 className={`banner__description`}>{homeTexts[0]}</h2>
                <SocialMedia />
            </div>
        </section>
    )
}