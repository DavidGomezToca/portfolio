import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { TranslationsContext } from "../../contexts/TranslationsContext"

import DegreesData from "../../data/degreesData.json"

export default function DegreesSection() {
    const { theme } = useContext(ThemeContext)
    const { translations } = useContext(TranslationsContext)

    const sections = translations.sections
    const degreesTexts = translations.degrees

    const rows = []
    for (let i = 0; i < DegreesData.length; i += 4) {
        rows.push(DegreesData.slice(i, i + 4))
    }

    return (
        <section id={sections[4]} className={`section__degrees color--${theme}--1 background--${theme}--2`}>
            <h1 className="section__title">{degreesTexts[0]}</h1>
            <div className="degrees__container">
                {rows.map((row, rowIndex) => (
                    <div key={"degrees-row-" + rowIndex} className="degrees__row">
                        {row.map((degree, index) => (
                            <Degree key={"degree-" + degree.file} degree={degree} index={(rowIndex * 4) + index} />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )

    function Degree({ degree, index }) {
        const degreeTexts = degreesTexts[1][index]

        return (
            <div className="degree__item">
                <a href={degree.url} target="_blank" rel="noreferrer" >
                    <img className="degree__img" src={`/img/degrees/${degree.file}.png`} alt={`Degree ${degree.file}`} />
                    <div className={`degree__overlay overlay--${theme}`}>
                        <h3>{degreeTexts.name}</h3>
                        <p>{degreeTexts.entity}</p>
                    </div>
                </a>
            </div>
        )
    }
}