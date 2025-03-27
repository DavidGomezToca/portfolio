import { useContext } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectCoverflow } from "swiper/modules"
import { ThemeContext } from "../../contexts/ThemeContext"
import { TranslationsContext } from "../../contexts/TranslationsContext"
import { useWindowSize } from "../../contexts/WindowSizeContext"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"

import SkillsData from "../../data/skillsData.json"

export default function SkillsSection() {
    const { theme } = useContext(ThemeContext)
    const { translations } = useContext(TranslationsContext)
    const isBelow1100px = useWindowSize()

    const sections = translations.sections
    const skillsTexts = translations.skills
    const skills = SkillsData

    return (
        <section id={sections[2]} className={`section__skills color--${theme}--1 background--${theme}--2`}>
            <h1 className="section__title">{skillsTexts[0]}</h1>
            <div className="carousel__container">
                <Swiper
                    effect={`${isBelow1100px ? "cube" : "coverflow"}`}
                    autoplay={{ delay: 1000, disableOnInteraction: false }}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={"3"}
                    modules={[Autoplay, EffectCoverflow]}
                    className="swiper__container">
                    {skills.map((skill) => (
                        <SwiperSlide key={skill.file} className="swiper__slide" >
                            <SkillSlide skill={skill} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div >
        </section>
    )

    function SkillSlide({ skill }) {
        return (
            <img src={`/img/skills/${skill.file}.png`} alt={skill.name} />
        )
    }
}