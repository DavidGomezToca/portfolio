import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TranslationsContext } from "../contexts/TranslationsContext";

import SocialMedia from "./SocialMedia";

export default function Footer() {
    const { theme } = useContext(ThemeContext);
    const { translations } = useContext(TranslationsContext);

    const sections = translations.sections;
    const version = require("../../package.json").version;

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 200);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <footer className={`footer color--${theme}--1 background--${theme}--2`}>
            <a href={`#${sections[0]}`} className={`up color--${theme}--1 background--${theme}--3`}>
                <i className="fa-solid fa-angles-up" />
            </a>
            <SocialMedia />
            <div>
                <span>PORTFOLIO v{version}</span>
                <span>COPYRYGT 2024</span>
            </div>
            <a
                className={`back-to-top color--${theme}--2 color--${theme}--1--hover background--${theme}--2--hover ${isScrolled ? "visible" : "hidden"}`}
                href={`#${sections[0]}`}>
                <i className="fa-solid fa-angles-up" />
            </a>
        </footer>
    );
}
