import React, {useState} from 'react'
import Modal from 'react-animated-modal';
import './skills.scss'

function Skills() {
    const [showModel, setShowModel] = useState(false);

    return (
        <div>
            <div className="skills_area resume_single_part text-center"
                 style={{backgroundImage: 'url(img/bg-img/resume-bg-3.jpg)'}}>
                <a id="skills" onClick={() => setShowModel(true)}>
                    <div className="classy-table">
                        <div className="classy-table-cell">
                            <div className="resume_single_part_text">
                                <i className="ion-wrench" aria-hidden="true"/>
                                <h3>Skills</h3>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            {/* Profile Content Area Start */}
            <Modal
                visible={showModel}
                closemodal={() => setShowModel(false)}
                type="fadeInRight"
            >
                {/* Skills Content Area Start */}
                <div id="skills-animatedModal" className="resume_version">
                    {/* Skill Content Area Start */}
                    <div className="skills-content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    {/* Work History Timeline Area Start */}
                                    {/* Title */}
                                    <div className="work_history_timeline_title">
                                        <h3>Work Experience</h3>
                                    </div>
                                    <div className="history_timeline_area">
                                        {/* Single Timeline Area Start */}
                                        <div className="single_timeline_block even-item clearfix">
                                            <div className="timeline_icon">
                                                <i className="ion-university" aria-hidden="true" />
                                            </div>
                                            <div className="timeline_text_content">
                                                <h4>Senior Front-end Developer</h4>
                                                <h5>Designing World (2016 - 2017)</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt numquam fugiat, vitae facere. Provident odio saepe iure, commodi doloribus architecto.</p>
                                            </div>
                                        </div>
                                        {/* Single Timeline Area Start */}
                                        <div className="single_timeline_block odd-item clearfix">
                                            <div className="timeline_icon">
                                                <i className="ion-university" aria-hidden="true" />
                                            </div>
                                            <div className="timeline_text_content">
                                                <h4>UX/UI Designer</h4>
                                                <h5>Designing World (2015 - 2017)</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt numquam fugiat, vitae facere. Provident odio saepe iure, commodi doloribus architecto.</p>
                                            </div>
                                        </div>
                                        {/* Single Timeline Area Start */}
                                        <div className="single_timeline_block even-item clearfix">
                                            <div className="timeline_icon">
                                                <i className="ion-university" aria-hidden="true" />
                                            </div>
                                            <div className="timeline_text_content">
                                                <h4>Trainer</h4>
                                                <h5>Nazrul High School &amp; College (2009)</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt numquam fugiat, vitae facere. Provident odio saepe iure, commodi doloribus architecto.</p>
                                            </div>
                                        </div>
                                        {/* Single Timeline Area Start */}
                                        <div className="single_timeline_block odd-item clearfix">
                                            <div className="timeline_icon">
                                                <i className="ion-university" aria-hidden="true" />
                                            </div>
                                            <div className="timeline_text_content">
                                                <h4>Trainer (Basic )</h4>
                                                <h5>Mukit Memorial School (2007)</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt numquam fugiat, vitae facere. Provident odio saepe iure, commodi doloribus architecto.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Work Skill Progress Bar Area Start */}
                                    <div className="progress_bar_area_title">
                                        <h3>Some Passion</h3>
                                    </div>
                                    {/* Progress Bar Content Area */}
                                    <div className="progress_bar_content">
                                        <div className="row">
                                            {/* Single Progress Bar */}
                                            <div className="col-12 col-lg-6">
                                                <div className="single_progress_bar">
                                                    <div id="bar1" className="barfiller">
                                                        <div className="tipWrap">
                                                            <span className="tip" />
                                                        </div>
                                                        <span className="fill" data-percentage={100} />
                                                    </div>
                                                    <h4>HTML</h4>
                                                </div>
                                            </div>
                                            {/* Single Progress Bar */}
                                            <div className="col-12 col-lg-6">
                                                <div className="single_progress_bar">
                                                    <div id="bar2" className="barfiller">
                                                        <div className="tipWrap">
                                                            <span className="tip" />
                                                        </div>
                                                        <span className="fill" data-percentage={94} />
                                                    </div>
                                                    <h4>CSS</h4>
                                                </div>
                                            </div>
                                            {/* Single Progress Bar */}
                                            <div className="col-12 col-lg-6">
                                                <div className="single_progress_bar">
                                                    <div id="bar3" className="barfiller">
                                                        <div className="tipWrap">
                                                            <span className="tip" />
                                                        </div>
                                                        <span className="fill" data-percentage={72} />
                                                    </div>
                                                    <h4>JS</h4>
                                                </div>
                                            </div>
                                            {/* Single Progress Bar */}
                                            <div className="col-12 col-lg-6">
                                                <div className="single_progress_bar">
                                                    <div id="bar4" className="barfiller">
                                                        <div className="tipWrap">
                                                            <span className="tip" />
                                                        </div>
                                                        <span className="fill" data-percentage={87} />
                                                    </div>
                                                    <h4>PHP</h4>
                                                </div>
                                            </div>
                                            {/* Single Progress Bar */}
                                            <div className="col-12 col-lg-6">
                                                <div className="single_progress_bar">
                                                    <div id="bar5" className="barfiller">
                                                        <div className="tipWrap">
                                                            <span className="tip" />
                                                        </div>
                                                        <span className="fill" data-percentage={91} />
                                                    </div>
                                                    <h4>WordPress</h4>
                                                </div>
                                            </div>
                                            {/* Single Progress Bar */}
                                            <div className="col-12 col-lg-6">
                                                <div className="single_progress_bar">
                                                    <div id="bar6" className="barfiller">
                                                        <div className="tipWrap">
                                                            <span className="tip" />
                                                        </div>
                                                        <span className="fill" data-percentage={65} />
                                                    </div>
                                                    <h4>Joomla</h4>
                                                </div>
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

export default Skills