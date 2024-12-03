import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { TranslationsContext } from '../../contexts/TranslationsContext'

import CurriculumData from "../../data/curriculumData.json"

export default function CurriculumSection() {
    const { theme } = useContext(ThemeContext)
    const { translations } = useContext(TranslationsContext)

    const sections = translations.sections
    const curriculumTexts = translations.curriculum
    const curriculumURLS = CurriculumData

    return (
        <section id={sections[3]} className={`section__curriculum color--${theme}--1 background--${theme}--1`}>
            <h1 className="section__title">{curriculumTexts[0]}</h1>
            <div className="curriculum__row">
                <FormationColumn />
                <ExperienceColumn />
            </div>
        </section>
    )

    function FormationColumn() {
        return (
            <div className={`curriculum__column formation__column border--${theme}--2`}>
                <ColumnTitle text={curriculumTexts[1]} />
                {curriculumTexts[2].map((formation, index) =>
                    <FormationItem key={`formation-item-${formation.title_1}`} formation={formation} index={index} />
                )}
            </div>
        )
    }

    function ExperienceColumn() {
        return (
            <div className={`curriculum__column experience__column border--${theme}--2`}>
                <ColumnTitle text={curriculumTexts[3]} />
                {curriculumTexts[4].map((experience, index) =>
                    <ExperienceItem key={`experience-item-${experience.title}`} experience={experience} index={index} />
                )}
            </div>
        )
    }

    function ColumnTitle({ text }) {
        return (
            <h3 className={`curriculum__column__title color--${theme}--1`}>{text}</h3>
        )
    }

    function FormationItem({ formation, index }) {
        return (
            <div className={`curriculum__item formation__item background--${theme}--2 border--${theme}--2`}>
                <h4 className={`curriculum__item__title color--${theme}--1`}>{formation.title_1}</h4>
                <h4 className={`curriculum__item__title color--${theme}--1`}>{formation.title_2}</h4>
                <a className={`curriculum__item__url color--${theme}--2`} href={curriculumURLS[0][index]} target="_blank" rel="noreferrer">
                    {formation.url}
                </a>
                <span className={`curriculum__item__date color--${theme}--2`}>{formation.date}</span>
                <div className={`connector connector--left background--${theme}--3`}>
                    <div className={`circle circle--left background--${theme}--3`} />
                </div>
            </div >
        )
    }

    function ExperienceItem({ experience, index }) {
        return (
            <div className={`curriculum__item experience__item background--${theme}--2 border--${theme}--2`}>
                <h4 className={`curriculum__item__title color--${theme}--1`}>{experience.title}</h4>
                <a className={`curriculum__item__url color--${theme}--2`} href={curriculumURLS[1][index]} target="_blank" rel="noreferrer">
                    {experience.url}
                </a>
                <span className={`curriculum__item__date color--${theme}--2`}>{experience.date}</span>
                <p className={`curriculum__item__text color--${theme}--1`}>{experience.description}</p>
                <p className={`curriculum__item__stack color--${theme}--1`}>{experience.stack}</p>
                <div className={`connector connector--right background--${theme}--3`}>
                    <div className={`circle circle--right background--${theme}--3`} />
                </div>
            </div >
        )
    }
}