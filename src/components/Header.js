import { useContext, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { TranslationsContext } from '../contexts/TranslationsContext'

export default function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const { language, languages, translations, selectLanguage } = useContext(TranslationsContext)

    const sections = translations.sections

    const [isMenuLanguagesOpen, setIsMenuLanguagesOpen] = useState(false)

    function HanddleMenuLanguages() {
        setIsMenuLanguagesOpen((prevIsMenuLanguagesOpen) => !prevIsMenuLanguagesOpen)
    }

    function HanddleSelectLanguage(language) {
        setIsMenuLanguagesOpen(false)
        selectLanguage(language)
    }

    return (
        <header className={`header background--${theme}--1`}>
            <nav className="header__nav">
                <NavLogo />
                <NavSections />
                <ThemeButton />
                <LanguageFlag />
            </nav>
        </header>
    )

    function NavLogo() {
        return (
            <div className="nav__element">
                <a className={`nav__logo color--${theme}--2`} href={`#${sections[0]}`}>
                    David Gómez
                </a>
            </div >
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
                <button className={`nav__theme__button color--${theme}--1 color--${theme}--2--hover fa-regular fa-xl fa-${theme === "dark" ? "moon" : "sun"}`} onClick={toggleTheme} />
            </li>
        )
    }

    function LanguageFlag() {
        return (
            <li className="nav__element">
                <img className="nav__language__flag" src={`/img/portfolio/flags/${language}.png`} alt="language_menu" onClick={HanddleMenuLanguages} />
                {isMenuLanguagesOpen &&
                    <div className={`nav__language__menu background--${theme}--2`}>
                        {languages.map((language) => (
                            <div key={`flag-${language.code}`} className={`nav__language__flag-option border--${theme}--1`} onClick={() => HanddleSelectLanguage(language.name)}>
                                <span className={`color--${theme}--1`}>{language.code.toUpperCase()} </span>
                                <img
                                    src={`/img/portfolio/flags/${language.name}.png`}
                                    alt={`${language.code}_flag`}
                                />
                            </div>
                        ))}
                    </div>
                }
            </li >
        )
    }
}