import React, { useState, useEffect } from 'react'
import './introduction.scss'
import APP_CONSTANT from '../../../../app/consts'

function Introduction(props) {
    const {introduction} = props;

    const linkSocial = introduction && introduction.socials && Object.keys(introduction.socials).map((key, index) => {
        return <a key={index} href={introduction.socials[key]}><i className={`ion-social-${key}-outline`}/></a>
    })

    return (
        <div className="introduction_area text-center background-overlay"
             style={{backgroundImage: `url(${APP_CONSTANT.Avatar})`}}>
            <div className="classy-table">
                <div className="classy-table-cell">
                    <div className="introduction_text_area">
                        <div className="logo"/>
                        <h2>I'm {introduction.full_name}</h2>
                        <p>{introduction.short_text}</p>

                        <div className="resume_social_icon">
                            {linkSocial}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction