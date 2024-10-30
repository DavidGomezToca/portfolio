import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { TranslationsContext } from '../contexts/TranslationsContext'

import SocialMedia from "./SocialMedia"


export default function HomeSection() {
    const { theme } = useContext(ThemeContext)
    const { translations } = useContext(TranslationsContext)

    const sections = translations.sections

    return (
        <section id={sections[0]} className={`section__home`}>
            <div className={`banner background--${theme}`}>
                <div className={`banner__img border--${theme}`}>
                    <img src="/img/portfolio/DavidGomez.png" alt="David Gómez" />
                </div>
                <h1 className={`banner__title color--${theme}--1`}>David Gómez</h1>
                <h2 className={`banner__description color--${theme}--1`}>TÉCNICO SUPERIOR EN DESARROLLO DE APLICACIONES MULTIPLATAFORMA</h2>
                <SocialMedia />
            </div>
        </section>
    )
}