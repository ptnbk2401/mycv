import React, {useState, useEffect} from 'react'
import Modal from 'react-animated-modal';
import './portfolio.scss'
import randomNumber from "../../../../services/randomNumber";
import {useSelector} from "react-redux";

function Portfolio(props) {
    const { types } = props;
    const [showModel, setShowModel] = useState(false);
    const [menu, setMenu] = useState([]);
    const style = types[randomNumber(types)];
    const listProject = useSelector(state => state.project);

    const itemProject = (
        listProject && listProject.list.map((item, index) => {
            return <div key={index} className={`single_gallery_item ${item.type}`}>
                <div className="single_resume_portfolio_area">
                    <img src={item.image}/>
                    {/* Single gallery Item hover caption */}
                    <div className="hover_overlay">
                        <div className="classy-table">
                            <div className="classy-table-cell">
                                <div className="gallery_info">
                                    <h5>{item.name}</h5>
                                    <p>{item.technology}</p>
                                    <a className="btn btn-pill btn-sm btn-mat-orange" href="#">More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        })
    );

    const itemMenu = (
        menu.map((item, index) => {
            return <button key={index} className="btn btn-md" type="button" data-filter={item.dataFilter}>{item.name}</button>
        })
    );

    useEffect( () => {
        setMenu([
            {
                dataFilter: '*',
                name: 'all'
            },
            {
                dataFilter: 'design',
                name: 'Design'
            },
            {
                dataFilter: 'web',
                name: 'Website'
            },
        ])
    }, []);

    return (
        <div>
            <div className="portfolio_area resume_single_part text-center"
                 style={{backgroundImage: 'url(img/bg-img/resume-bg-4.jpg)'}}>
                <a id="portfolio" onClick={() => setShowModel(true)}>
                    <div className="classy-table">
                        <div className="classy-table-cell">
                            <div className="resume_single_part_text">
                                <i className="ion-images" aria-hidden="true"/>
                                <h3>Portfolio</h3>
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
                <div id="portfolio-animatedModal" className="resume_version">
                    <div className="portfolio-content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="portfolio_title">
                                        <h3>Some Awesome Works</h3>
                                    </div>
                                    <div className="resume_portfolio_nav text-center gallery_menu">
                                        <div className="portfolio-menu">
                                            {itemMenu}
                                        </div>
                                    </div>
                                    <div className="gallery_full_width_images_area clearfix">
                                        {itemProject}
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

export default Portfolio
