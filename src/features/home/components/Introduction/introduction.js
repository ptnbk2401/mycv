import React from 'react'
import { useSelector } from 'react-redux';
import './introduction.scss'

function Introduction(props) {
    // const {introduction} = props;
    const introduction = useSelector(state => state.introduction);
    const linkSocial = (
        Object.keys(introduction.socials).map((social, index) => {
            return <a key={index} href={introduction.socials[social]} target="_blank"><i className={`ion-social-${social}-outline`}/></a>
        })
    )
    return (
        <div className="introduction_area text-center background-overlay"
             style={{backgroundImage: `url(${introduction.avatar})`}}>
            <div className="classy-table">
                <div className="classy-table-cell">
                    <div className="introduction_text_area">
                        <div className="logo"/>
                        <h2>I'm {introduction.fullname}</h2>
                        <p>{introduction.description}</p>
                        {/* Social Icon Area Start */}
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