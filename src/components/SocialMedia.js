import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

import SocialMediaData from "../data/socialMediaData.json"

export default function SocialMedia() {
    const { theme } = useContext(ThemeContext)

    const socialMedias = SocialMediaData.socialMedias

    return (
        <div className="social__media">
            {socialMedias.map((socialMedia) => (<SocialMediaIcon key={`social-media-${socialMedia.name}`} url={socialMedia.url} icon={socialMedia.icon} />))}
        </div>
    )

    function SocialMediaIcon({ url, icon }) {
        return (
            <a className={`social__media__icon color--${theme}--1`} href={url} target="_blank" rel="noreferrer">
                <i className={icon} />
            </a>
        )
    }
}