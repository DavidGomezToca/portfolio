import { useContext, useState, useEffect } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { TranslationsContext } from "../contexts/TranslationsContext"

import SocialMedia from "./SocialMedia"

/**
 * @component Footer.
 * @returns {JSX.Element} - The Footer component.
 */
export default function Footer() {
    /**
     * Theme context.
     * @type {string}.
     */
    const { theme } = useContext(ThemeContext)

    /**
     * Translations context.
     * @type {object}.
     */
    const { translations } = useContext(TranslationsContext)

    /**
     * Texts Translated.
     * @type {object}.
     */
    const sections = translations.sections

    /**
     * Project Version.
     * @type {string}.
     */
    const version = require("../../package.json").version

    /**
     * Is Scrolled State.
     * @type {[boolean, function]}.
     */
    const [isScrolled, setIsScrolled] = useState(false)


    /**
     * Current Year.
     * @type {number}.
     */
    const year = new Date().getFullYear()

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            setIsScrolled(scrollPosition > 200)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <footer className={`footer color--${theme}--1 background--${theme}--2`}>
            <a href={`#${sections[0]}`} className={`up color--${theme}--1 background--${theme}--3`}>
                <i className="fa-solid fa-angles-up" />
            </a>
            <SocialMedia />
            <div className="footer__texts">
                <span>PORTFOLIO v{version}</span>
                <span>COPYRYGT {year}</span>
            </div>
            <a className={`back-to-top color--${theme}--2 color--${theme}--1--hover background--${theme}--2--hover ${isScrolled ? "visible" : "hidden"}`}
                href={`#${sections[0]}`}>
                <i className="fa-solid fa-angles-up" />
            </a>
        </footer>
    )
}
