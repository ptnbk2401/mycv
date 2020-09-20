import React from 'react'
import './introduction.scss'

function Introduction() {

    return (
        <div className="introduction_area text-center background-overlay"
             style={{backgroundImage: 'url(img/avt.jpg)'}}>
            <div className="classy-table">
                <div className="classy-table-cell">
                    <div className="introduction_text_area">
                        <div className="logo"/>
                        <h2>I'm Nguyen Phan Thanh</h2>
                        <p>And I'm a Senior Website Developer</p>
                        {/* Social Icon Area Start */}
                        <div className="resume_social_icon">
                            <a href="#"><i className="ion-social-facebook-outline"/></a>
                            <a href="#"><i className="ion-social-twitter-outline"/></a>
                            <a href="#"><i className="ion-social-googleplus-outline"/></a>
                            <a href="#"><i className="ion-social-instagram-outline"/></a>
                            <a href="#"><i className="ion-social-youtube-outline"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction