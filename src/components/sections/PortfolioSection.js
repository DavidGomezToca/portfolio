import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { TranslationsContext } from '../../contexts/TranslationsContext'

import PortfolioData from "../../data/portfolioData.json"

export default function Portfolio() {
    const { theme } = useContext(ThemeContext)
    const { translations } = useContext(TranslationsContext)

    const sections = translations.sections
    const portfolioTexts = translations.portfolio

    const rows = []
    for (let i = 0; i < PortfolioData.length; i += 4) {
        rows.push(PortfolioData.slice(i, i + 4))
    }

    return (
        <section id={sections[5]} className={`section__portfolio color--${theme}--1 background--${theme}--1`}>
            <h1 className="section__title">{portfolioTexts[0]}</h1>
            <div className="portfolio__container">
                {rows.map((row, rowIndex) => (
                    <div key={"portfolio-row-" + rowIndex} className="portfolio__row">
                        {row.map((project, index) => (
                            <Project key={"project-" + project.file} project={project} index={(rowIndex * 4) + index} />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )

    function Project({ project, index }) {
        const projectTexts = portfolioTexts[1][index]

        return (
            <div className="portfolio__item">
                <a href={project.url} target="_blank" rel="noreferrer" >
                    <img className="project__img" src={`/img/portfolio/projects/${project.file}.png`} alt={`Project ${project.file}`} />
                    <div className={`project__overlay overlay--${theme}`}>
                        <h3>{projectTexts.name}</h3>
                        <h3>{project.stack}</h3>
                        <p className="project__redirect">{projectTexts.redirect}</p>
                    </div>
                </a>
            </div>
        )
    }
}