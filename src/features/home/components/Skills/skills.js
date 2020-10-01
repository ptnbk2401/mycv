import React, {useState} from 'react'
import Modal from 'react-animated-modal';
import './skills.scss'
import randomNumber from "../../../../services/randomNumber";
import { Line } from 'rc-progress';
import {useSelector} from "react-redux";

function Skills(props) {
    const { types } = props;
    const [showModel, setShowModel] = useState(false);
    const [colorMap, setColorMap] = useState(['#3FC7FA', '#85D262', '#FE4365', '#45ADA8', '#F9D423', '#F26B38', '#2F9599', '#A7226E', '#E84A5F', '#A8E6CE', '#DCEDC2', '#FFD3B5', '#FFAAA6', '#FF8C94']);
    const style = types[randomNumber(types)];
    const skill = useSelector(state => state.skill);

    const workExperience = (
        skill.workExperience && skill.workExperience.map( (item, index) => {
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

    const itemSkill = (
        skill.skills && skill.skills.map((item, index) => {
            return <div key={index} className="col-12 col-lg-6">
                <div className="single_progress_bar">
                    <Line className="barfiller" percent={item.value} strokeWidth="2" strokeColor={colorMap[index]} />
                    <h4>{item.name}</h4>
                </div>
            </div>
        })
    );

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
                type={style}
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
                                        {workExperience}
                                    </div>
                                    {/* Work Skill Progress Bar Area Start */}
                                    <div className="progress_bar_area_title">
                                        <h3>Some Passion</h3>
                                    </div>
                                    {/* Progress Bar Content Area */}
                                    <div className="progress_bar_content">
                                        <div className="row">
                                            {itemSkill}
                                        </div>
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
