import React, {useState} from 'react'
import Modal from 'react-animated-modal';
import './profile.scss'
import randomNumber from "../../../../services/randomNumber";
import {useSelector} from "react-redux";

function Profile(props) {
    const { types } = props;
    const [showModel, setShowModel] = useState(false);
    const style = types[randomNumber(types)];

    const profile = useSelector(state => state.profile);

    const education = (
        profile.education && profile.education.map( (item, index) => {
            return <div key={index} className={`single_timeline_block ${index % 2 ? 'odd' : 'even' }-item clearfix`}>
                <div className="timeline_icon">
                    <i className="ion-university" aria-hidden="true"/>
                </div>
                <div className="timeline_text_content">
                    <h4>{item.name}</h4>
                    <h5>{item.address} ({item.time})</h5>
                    <p>{item.description}</p>
                </div>
            </div>
        })
    );

    return (
        <div>
            {/* Profile Navigation Area Start */}
            <div className="profile_area resume_single_part text-center"
                 style={{backgroundImage: 'url(img/bg-img/resume-bg-2.jpg)'}}>
                <a id="profile" onClick={() => setShowModel(true)}>
                    <div className="classy-table">
                        <div className="classy-table-cell">
                            <div className="resume_single_part_text">
                                <i className="ion-person" aria-hidden="true"/>
                                <h3>Profile</h3>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            {/* Profile Content Area Start */}
            <Modal
                visible={showModel}
                closemodal={() => setShowModel(false)}
                type={style}
            >
                <div id="profile-animatedModal" className="resume_version">
                    {/*THIS IS IMPORTANT! to close the modal, the class name has to match the name given on the ID  class="close-animatedModal" */}
                    <div className="profile-content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    {/* About Me Area Start */}
                                    <div className="about_me_area">
                                        <div className="about_me_img">
                                            <img src="img/bg-img/bg-7.jpg" alt=""/>
                                        </div>
                                        <div className="about_me_text">
                                            <h3>Story of Glory</h3>
                                            <p>{profile.storyOfGlory.text}</p>
                                            <h5><span>Age</span>{profile.storyOfGlory.age}</h5>
                                            <h5><span>Address</span>{profile.storyOfGlory.address}</h5>
                                            <h5><span>Email</span>{profile.storyOfGlory.email}</h5>
                                            <h5><span>Phone</span>{profile.storyOfGlory.phone}</h5>
                                        </div>
                                    </div>
                                    {/* What I do Area Start */}
                                    <div className="what_i_do_area">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="what_i_do_title">
                                                    <h3>What I Do</h3>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-6">
                                                <div className="single_what_i_do">
                                                    <i className="ion-android-color-palette" aria-hidden="true"/>
                                                    <h3>{profile.whatIDo.design && profile.whatIDo.design.title}</h3>
                                                    <p>{profile.whatIDo.design && profile.whatIDo.design.description}</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-6">
                                                <div className="single_what_i_do">
                                                    <i className="ion-code" aria-hidden="true"/>
                                                    <h3>{profile.whatIDo.webDevelopment && profile.whatIDo.webDevelopment.title}</h3>
                                                    <p>{profile.whatIDo.webDevelopment && profile.whatIDo.webDevelopment.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Education History Timeline Area Start */}
                                    {/* Title */}
                                    <div className="education_history_timeline_title">
                                        <h3>Education</h3>
                                    </div>
                                    <div className="history_timeline_area">
                                        {education}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Profile
