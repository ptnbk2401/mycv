import React, {Suspense, useEffect} from 'react'
import './index.scss'
import Introduction from "../../components/Introduction/introduction";
import {useDispatch} from "react-redux";
import homeApi from "../../../../api/homeApi";
import {setIntroduction} from './../../slices/introductionSlice';
import {setProfile} from './../../slices/profileSlice';
import {setProject} from './../../slices/projectSlice';
import {setSkills} from './../../slices/skillsSlice';
import {setContact} from './../../slices/contactSlice';

const types = ["bounceIn", "bounceInDown", "bounceInLeft", "bounceInRight", "bounceInUp",
    "fadeIn", "fadeInDown", "fadeInLeft", "fadeInRight", "fadeInUp", "flip", "flipInX", "flipInY", "lightSpeedIn", "rotateIn",
    "rotateInDownLeft", "rotateInDownRight", "rotateInUpLeft", "rotateInUpRight", "slideInUp", "slideInDown", "slideInLeft",
    "slideInRight", "zoomIn", "zoomInDown", "zoomInLeft", "zoomInRight", "zoomInUp"];

const Profile = React.lazy(() => import('../../components/Profile/profile'));
const Portfolio = React.lazy(() => import('../../components/Portfolio/portfolio'));
const Skills = React.lazy(() => import('../../components/Skills/skills'));
const Contact = React.lazy(() => import('../../components/Contact/contact'));

function Mycv() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            let res = await homeApi.fetchData();
            const actionIntroduction = setIntroduction(res.introduction);
            const actionProfile = setProfile(res.profile);
            const actionProject = setProject(res.projects);
            const actionSkill = setSkills(res.skill);
            const actionContact = setContact(res.contact);
            dispatch(actionIntroduction);
            dispatch(actionProfile);
            dispatch(actionProject);
            dispatch(actionSkill);
            dispatch(actionContact);
        };

        fetchData();
    }, []);

    return (
        <Suspense fallback={<div id="preloader"><div className="classy-load"/></div>}>
            <div className="welcome_area resume_version" id="home_page">
                {/* Introduction Area Start */}
                <Introduction/>
                <div className="resume_content_navigation_area">
                    <Profile types={types}/>
                    <Skills types={types}/>
                    <Portfolio types={types}/>
                    <Contact types={types}/>
                </div>
            </div>
        </Suspense>
    )
}

export default Mycv
