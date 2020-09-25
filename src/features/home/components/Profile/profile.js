import React, {useState} from 'react'
import Modal from 'react-animated-modal';
import './profile.scss'
import randomNumber from "../../../../services/randomNumber";

function Profile(props) {
    const { types } = props;
    const [showModel, setShowModel] = useState(false);
    const style = types[randomNumber(types)];

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
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, ab,
                                                neque. Ullam id consequuntur expedita ipsam quibusdam blanditiis eius
                                                deleniti sint eaque recusandae ea tempore, obcaecati libero laborum
                                                soluta dolorem.</p>
                                            <h5><span>Age</span>25</h5>
                                            <h5><span>Address</span>Melbourbe, Australia</h5>
                                            <h5><span>Email</span>care@classy.com</h5>
                                            <h5><span>Phone</span>+61 089 1574</h5>
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
                                                    <h3>UX/UI Design</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
                                                        natus nemo delectus fugiat illo, minima dolores fuga praesentium
                                                        commodi porro officiis impedit quibusdam nostrum culpa rerum
                                                        autem ipsam, adipisci quam.</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-6">
                                                <div className="single_what_i_do">
                                                    <i className="ion-code" aria-hidden="true"/>
                                                    <h3>Web Development</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
                                                        natus nemo delectus fugiat illo, minima dolores fuga praesentium
                                                        commodi porro officiis impedit quibusdam nostrum culpa rerum
                                                        autem ipsam, adipisci quam.</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-6">
                                                <div className="single_what_i_do">
                                                    <i className="ion-easel" aria-hidden="true"/>
                                                    <h3>Infographic Design</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
                                                        natus nemo delectus fugiat illo, minima dolores fuga praesentium
                                                        commodi porro officiis impedit quibusdam nostrum culpa rerum
                                                        autem ipsam, adipisci quam.</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-6">
                                                <div className="single_what_i_do">
                                                    <i className="ion-android-phone-landscape" aria-hidden="true"/>
                                                    <h3>App Development</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
                                                        natus nemo delectus fugiat illo, minima dolores fuga praesentium
                                                        commodi porro officiis impedit quibusdam nostrum culpa rerum
                                                        autem ipsam, adipisci quam.</p>
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
                                        {/* Single Timeline Area Start */}
                                        <div className="single_timeline_block even-item clearfix">
                                            <div className="timeline_icon">
                                                <i className="ion-university" aria-hidden="true"/>
                                            </div>
                                            <div className="timeline_text_content">
                                                <h4>Bachelor of Science Degree</h4>
                                                <h5>National University (2012 - 2016)</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
                                                    numquam fugiat, vitae facere. Provident odio saepe iure, commodi
                                                    doloribus architecto.</p>
                                            </div>
                                        </div>
                                        {/* Single Timeline Area Start */}
                                        <div className="single_timeline_block odd-item clearfix">
                                            <div className="timeline_icon">
                                                <i className="ion-university" aria-hidden="true"/>
                                            </div>
                                            <div className="timeline_text_content">
                                                <h4>Computer Science and Engineering</h4>
                                                <h5>Own University (2010 - 2014)</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
                                                    numquam fugiat, vitae facere. Provident odio saepe iure, commodi
                                                    doloribus architecto.</p>
                                            </div>
                                        </div>
                                        {/* Single Timeline Area Start */}
                                        <div className="single_timeline_block even-item clearfix">
                                            <div className="timeline_icon">
                                                <i className="ion-university" aria-hidden="true"/>
                                            </div>
                                            <div className="timeline_text_content">
                                                <h4>Higher Secondary</h4>
                                                <h5>Nazrul High School &amp; College (2009)</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
                                                    numquam fugiat, vitae facere. Provident odio saepe iure, commodi
                                                    doloribus architecto.</p>
                                            </div>
                                        </div>
                                        {/* Single Timeline Area Start */}
                                        <div className="single_timeline_block odd-item clearfix">
                                            <div className="timeline_icon">
                                                <i className="ion-university" aria-hidden="true"/>
                                            </div>
                                            <div className="timeline_text_content">
                                                <h4>Secondary (SSC)</h4>
                                                <h5>Mukit Memorial School (2007)</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
                                                    numquam fugiat, vitae facere. Provident odio saepe iure, commodi
                                                    doloribus architecto.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Download Full Resume Area Start */}
                                    <div className="download_full_resume">
                                        <a href="dummy-data/worksheet.pdf" download>Download Resume</a>
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