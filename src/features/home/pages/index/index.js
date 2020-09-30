import React, {Suspense, useEffect, useState} from 'react'
import './mycv.scss'
import Introduction from "../../components/pages/home/Introduction/introduction";
import Axios from 'axios';

const types = ["bounceIn", "bounceInDown", "bounceInLeft", "bounceInRight", "bounceInUp",
    "fadeIn", "fadeInDown", "fadeInLeft", "fadeInRight", "fadeInUp", "flip", "flipInX", "flipInY", "lightSpeedIn", "rotateIn",
    "rotateInDownLeft", "rotateInDownRight", "rotateInUpLeft", "rotateInUpRight", "slideInUp", "slideInDown", "slideInLeft",
    "slideInRight", "zoomIn", "zoomInDown", "zoomInLeft", "zoomInRight", "zoomInUp"];

const Profile = React.lazy(() => import('../../components/Profile/profile'));
const Portfolio = React.lazy(() => import('../../components/Portfolio/portfolio'));
const Skills = React.lazy(() => import('../../components/Skills/skills'));
const Contact = React.lazy(() => import('../../components/Contact/contact'));

function Mycv() {
    const [cvDetail, setCvDetail] = useState([]);
    const [introduction, setIntroduction] = useState([]);
    const [profile, setProfile] = useState([]);
    const [skills, setSkills] = useState([]);
    const [projects, setProjects] = useState([]);
    const [contact, setContact] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            const response  = await Axios.get(`http://192.168.68.203:8080/api/front/react/cv-detail`)
            if (response && response.data && response.data.data) {
                let detail = response.data.data;
                setCvDetail(response.data.data);
                if (detail.introduction) {
                    setIntroduction(detail.introduction);
                }
                if (detail.profile) {
                    setProfile(detail.profile);
                }
                if (detail.skill) {
                    setSkills(detail.skill);
                }
                if (detail.projects) {
                    setProjects(detail.projects);
                }
                if (detail.contact) {
                    setContact(detail.contact);
                }
            }
        }

        fetchData()
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            let res = await homeApi.fetchData();
            const action = setIntroduction(res);
            dispatch(action);
        }

        fetchData();
    }, [])

    return (
        <Suspense fallback={<div id="preloader"><div className="classy-load"/></div>}>
            <div className="welcome_area resume_version" id="home_page">
                {/* Introduction Area Start */}
                <Introduction introduction={introduction}/>
                <div className="resume_content_navigation_area">
                    <Profile profile={profile} types={types}/>
                    <Skills skills={skills} types={types}/>
                    <Portfolio projects={projects} types={types}/>
                    <Contact contact={contact} types={types}/>
                </div>
            </div>
        </Suspense>
    )
}

export default Mycv
