import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { TranslationsContext } from '../../contexts/TranslationsContext'

import personalInformationData from "../../data/personalInformationData.json"

export default function ContactSection() {
    const { theme } = useContext(ThemeContext)
    const { translations } = useContext(TranslationsContext)

    const sections = translations.sections
    const contactTexts = translations.contact
    const personalInformation = personalInformationData

    return (
        <section id={sections[6]} className={`section__contact color--${theme}--1`}>
            <h1 className="section__title">{contactTexts[0]}</h1>
            <div className="contact__container">
                <div className="contact__row">
                    <div className="contact__column">
                        <div className={`contact__info background--${theme}--1`}>
                            <ul>
                                <li>
                                    <i className={`fa-solid fa-location-dot color--${theme}--2`} />
                                    {contactTexts[1]}
                                </li>
                                <li>
                                    <i className={`fa-solid fa-mobile-screen color--${theme}--2`} />
                                    {personalInformation[1]}
                                </li>
                                <li>
                                    <i className={`fa-solid fa-envelope color--${theme}--2`} />
                                    {personalInformation[2]}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="contact__column">
                        <form action="https://formspree.io/f/mknlrgbd" method="POST">
                            <input className={`background--${theme}--1`} type="text" name="Nombre" placeholder={contactTexts[2]} required />
                            <input className={`background--${theme}--1`} type="text" name="Número de teléfono" placeholder={contactTexts[3]} />
                            <input className={`background--${theme}--1`} type="email" name="Email" placeholder={contactTexts[4]} required />
                            <input className={`background--${theme}--1`} type="text" name="Asunto" placeholder={contactTexts[5]} required />
                            <textarea className={`background--${theme}--1`} name="Mensaje" cols="30" rows="10" placeholder={contactTexts[6]} required />
                            <button className={`color--${theme}--1`}>
                                <span>{contactTexts[7]}</span>
                                <i className="fa-solid fa-paper-plane" />
                                <span className={`background--${theme}--3 overlay`} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}