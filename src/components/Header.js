import { useContext, useState, useRef } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { TranslationsContext } from "../contexts/TranslationsContext"
import { useWindowSize } from "../contexts/WindowSizeContext"

export default function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const { language, languages, translations, selectLanguage } = useContext(TranslationsContext)
    const isBelow1100px = useWindowSize()

    const sections = translations.sections

    const [isMenuOptionsOpen, setIsMenuOptionsOpen] = useState(false)
    const [isMenuLanguagesOpen, setIsMenuLanguagesOpen] = useState(false)
    const isToggleThemeAnimationRunning = useRef(false)

    function HanddleToggleTheme() {
        if (!isToggleThemeAnimationRunning.current) {
            isToggleThemeAnimationRunning.current = true
            setTimeout(() => { isToggleThemeAnimationRunning.current = false }, 600)
            toggleTheme()
        }
    }

    function HanddleMenuOptions() {
        setIsMenuOptionsOpen((prevIsMenuOptionsOpern) => !prevIsMenuOptionsOpern)
        setIsMenuLanguagesOpen(false)
    }

    function HanddleMenuLanguages() {
        setIsMenuLanguagesOpen((prevIsMenuLanguagesOpen) => !prevIsMenuLanguagesOpen)
        setIsMenuOptionsOpen(false)
    }

    function HanddleSelectLanguage(language) {
        setIsMenuLanguagesOpen(false)
        selectLanguage(language)
    }

    return (
        <header className={`header background--${theme}--1`}>
            <nav className="header__nav">
                <NavLogo />
                {isBelow1100px ? <MenuNav /> :
                    <>
                        <NavSections />
                        <ThemeButton />
                    </>
                }
                <LanguageFlag />
            </nav>
        </header >
    )

    function MenuNav() {
        return (
            <div className={`nav__element header__menu background--${theme}--3`} onClick={() => HanddleMenuOptions()}>
                {isMenuOptionsOpen &&
                    <div className={`nav__options__menu background--${theme}--2 color--${theme}--1`}>
                        {sections.map((section) => (<MenuSection key={`menu-${section}`} section={section} />))}
                        <MenuTheme />
                    </div>
                }
                <i className="fa-solid fa-bars" />
            </div>
        )
    }

    function MenuSection({ section }) {
        return (
            <a className={`menu__section border--${theme}--1  color--${theme}--2--hover`} href={`#${section}`}>
                <p className={`nav__section`}>
                    {`${section.toUpperCase()}`}
                </p>
            </a>
        )
    }

    function MenuTheme() {
        return (
            <div className={`menu__theme border--${theme}--1 color--${theme}--2--hover`} onClick={HanddleToggleTheme}>
                <i className={`nav__theme__button fa-regular fa-xl fa-${theme === "dark" ? "moon" : "sun"}`} />
            </div>
        )
    }

    function NavLogo() {
        return (
            <div className="nav__element">
                <a className={`nav__logo color--${theme}--2`} href="https://github.com/DavidGomezToca" target="_blank" rel="noopener noreferrer">
                    David Gómez
                </a>
            </div>
        )
    }

    function NavSections() {
        return (
            <ul className="nav__sections">
                {sections.map((section) => (<NavA key={`header-${section}`} section={section} />))}
            </ul>
        )
    }

    function NavA({ section }) {
        return (
            <li className="nav__element">
                <a className={`nav__section color--${theme}--1 color--${theme}--2--hover`} href={`#${section}`}>
                    {`${section.toUpperCase()}`}
                </a>
            </li>
        )
    }

    function ThemeButton() {
        return (
            <li className="nav__element">
                <button className={`nav__theme__button color--${theme}--1 color--${theme}--2--hover fa-regular fa-xl fa-${theme === "dark" ? "moon" : "sun"} ${isToggleThemeAnimationRunning.current ? "nav__theme__button--animate" : ""}`} onClick={HanddleToggleTheme} />
            </li>
        )
    }

    function LanguageFlag() {
        return (
            <li className="nav__element">
                <img className={`nav__language__flag border--${theme}--1`} src={`/img/portfolio/flags/${language}.png`} alt="language_menu" onClick={HanddleMenuLanguages} />
                {isMenuLanguagesOpen &&
                    <div className={`nav__language__menu background--${theme}--2 color--${theme}--1`}>
                        {languages.map((language) => (
                            <div key={`flag-${language.code}`} className={`nav__language__flag--option border--${theme}--1  color--${theme}--2--hover`} onClick={() => HanddleSelectLanguage(language.name)}>
                                <span className={``}>{language.code.toUpperCase()} </span>
                                <img
                                    src={`/img/portfolio/flags/${language.name}.png`}
                                    alt={`${language.code}_flag`}
                                />
                            </div>
                        ))}
                    </div>
                }
            </li>
        )
    }
}