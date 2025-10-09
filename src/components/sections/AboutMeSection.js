import { useContext } from "react"
import interestsData from "../../data/interestsData.json"
import { ThemeContext } from "../../contexts/ThemeContext"
import { TranslationsContext } from "../../contexts/TranslationsContext"
import personalInformationData from "../../data/personalInformationData.json"

/**
 * @component AboutMeSection.
 * @returns {JSX.Element} - The App component.
 */
export default function AboutMeSection() {
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
     * About Me Section Texts Translated.
     * @type {object}.
    */
    const aboutMeTexts = translations.about__me

    /**
     * Personal Information Data.
     * @type {object}.
    */
    const personalInformation = personalInformationData

    /**
     * Interests Icons.
     * @type {object}.
    */
    const interestsIcons = interestsData

    return (
        <section id={sections[1]} className={`section__about__me color--${theme}--1 background--${theme}--1`}>
            <h1 className="section__title">{aboutMeTexts[0]}</h1>
            <Presentation />
            <div className="more__about__me">
                <PersonalInformation />
                <Interests />
            </div>
            <DownloadCV />
        </section>
    )

    function Presentation() {
        return (
            <div className="presentation">
                <h3 className={`color--${theme}--2`}>{aboutMeTexts[1]}:</h3>
                <p>{aboutMeTexts[2]}</p>
            </div>
        )
    }

    function PersonalInformation() {
        return (
            <div className="personal__information">
                <h2>{aboutMeTexts[3]}</h2>
                <ul>
                    {aboutMeTexts[4].map((information, index) => (<PersonalInformationItem key={`P-I-I ${index}`} information={information} index={index} />))}
                </ul>
            </div>
        )
    }

    function PersonalInformationItem({ information, index }) {
        return (
            <li className={`personal__information__item `}>
                <strong className={`color--${theme}--2`}>{information}:</strong>{personalInformation[index]}
            </li>
        )
    }

    function Interests() {
        return (
            <div className={`interests`}>
                <h2>{aboutMeTexts[5]}</h2>
                <div className="interests__container">
                    {aboutMeTexts[6].map((interest, index) => (<InterestItem key={`interest-${interest}`} interest={interest} index={index} />))}
                </div>
            </div>
        )
    }

    function InterestItem({ interest, index }) {
        return (
            <div className={`interest__item background--${theme}--2 background--${theme}--2--hover`}>
                <i className={`${interestsIcons[index]}`} />
                <span>{interest}</span>
            </div>
        )
    }

    function DownloadCV() {
        return (
            <div className="download__cv">
                <a className={`color--${theme}--1 background__gradient--${theme}`} download="CV David Gómez" href="/pdfs/CV David Gomez.pdf">
                    {aboutMeTexts[7]}
                    <i className="fa-solid fa-download" />
                </a>
            </div>
        )
    }
}