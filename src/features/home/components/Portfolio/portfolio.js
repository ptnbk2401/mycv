import React, {useState} from 'react'
import Modal from 'react-animated-modal';
import './portfolio.scss'
import randomNumber from "../../../../services/randomNumber";

function Portfolio(props) {
    const { types } = props;
    const [showModel, setShowModel] = useState(false);
    const style = types[randomNumber(types)];
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
                                            <button className="active btn btn-md" type="button" data-filter="*">all</button>
                                            <button className="btn btn-md" type="button" data-filter=".web">Design</button>
                                            <button className="btn btn-md" type="button" data-filter=".art">Art</button>
                                            <button className="btn btn-md" type="button" data-filter=".bra">Branding</button>
                                            <button className="btn btn-md" type="button" data-filter=".app">App</button>
                                        </div>
                                    </div>
                                    <div className="gallery_full_width_images_area clearfix">
                                        {/* Single gallery Item Start */}
                                        <div className="single_gallery_item app">
                                            <div className="single_resume_portfolio_area">
                                                <img src="img/gallery/1.jpg" alt="" />
                                                {/* Single gallery Item hover caption */}
                                                <div className="hover_overlay">
                                                    <div className="classy-table">
                                                        <div className="classy-table-cell">
                                                            <div className="gallery_info">
                                                                <h5>Creative Work</h5>
                                                                <p>Classy Business</p>
                                                                <a className="btn btn-pill btn-sm btn-mat-orange" href="#">More Details</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single gallery Item Start */}
                                        <div className="single_gallery_item art">
                                            <div className="single_resume_portfolio_area">
                                                <img src="img/gallery/2.jpg" alt="" />
                                                {/* Single gallery Item hover caption */}
                                                <div className="hover_overlay">
                                                    <div className="classy-table">
                                                        <div className="classy-table-cell">
                                                            <div className="gallery_info">
                                                                <h5>Creative Work</h5>
                                                                <p>Classy Business</p>
                                                                <a className="btn btn-pill btn-sm btn-mat-orange" href="#">More Details</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single gallery Item Start */}
                                        <div className="single_gallery_item web">
                                            <div className="single_resume_portfolio_area">
                                                <img src="img/gallery/3.jpg" alt="" />
                                                {/* Single gallery Item hover caption */}
                                                <div className="hover_overlay">
                                                    <div className="classy-table">
                                                        <div className="classy-table-cell">
                                                            <div className="gallery_info">
                                                                <h5>Creative Work</h5>
                                                                <p>Classy Business</p>
                                                                <a className="btn btn-pill btn-sm btn-mat-orange" href="#">More Details</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single gallery Item Start */}
                                        <div className="single_gallery_item bra">
                                            <div className="single_resume_portfolio_area">
                                                <img src="img/gallery/4.jpg" alt="" />
                                                {/* Single gallery Item hover caption */}
                                                <div className="hover_overlay">
                                                    <div className="classy-table">
                                                        <div className="classy-table-cell">
                                                            <div className="gallery_info">
                                                                <h5>Creative Work</h5>
                                                                <p>Classy Business</p>
                                                                <a className="btn btn-pill btn-sm btn-mat-orange" href="#">More Details</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single gallery Item Start */}
                                        <div className="single_gallery_item bra">
                                            <div className="single_resume_portfolio_area">
                                                <img src="img/gallery/5.jpg" alt="" />
                                                {/* Single gallery Item hover caption */}
                                                <div className="hover_overlay">
                                                    <div className="classy-table">
                                                        <div className="classy-table-cell">
                                                            <div className="gallery_info">
                                                                <h5>Creative Work</h5>
                                                                <p>Classy Business</p>
                                                                <a className="btn btn-pill btn-sm btn-mat-orange" href="#">More Details</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single gallery Item Start */}
                                        <div className="single_gallery_item bra">
                                            <div className="single_resume_portfolio_area">
                                                <img src="img/gallery/6.jpg" alt="" />
                                                {/* Single gallery Item hover caption */}
                                                <div className="hover_overlay">
                                                    <div className="classy-table">
                                                        <div className="classy-table-cell">
                                                            <div className="gallery_info">
                                                                <h5>Creative Work</h5>
                                                                <p>Classy Business</p>
                                                                <a className="btn btn-pill btn-sm btn-mat-orange" href="#">More Details</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single gallery Item Start */}
                                        <div className="single_gallery_item bra">
                                            <div className="single_resume_portfolio_area">
                                                <img src="img/gallery/7.jpg" alt="" />
                                                {/* Single gallery Item hover caption */}
                                                <div className="hover_overlay">
                                                    <div className="classy-table">
                                                        <div className="classy-table-cell">
                                                            <div className="gallery_info">
                                                                <h5>Creative Work</h5>
                                                                <p>Classy Business</p>
                                                                <a className="btn btn-pill btn-sm btn-mat-orange" href="#">More Details</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single gallery Item Start */}
                                        <div className="single_gallery_item bra">
                                            <div className="single_resume_portfolio_area">
                                                <img src="img/gallery/8.jpg" alt="" />
                                                {/* Single gallery Item hover caption */}
                                                <div className="hover_overlay">
                                                    <div className="classy-table">
                                                        <div className="classy-table-cell">
                                                            <div className="gallery_info">
                                                                <h5>Creative Work</h5>
                                                                <p>Classy Business</p>
                                                                <a className="btn btn-pill btn-sm btn-mat-orange" href="#">More Details</a>
                                                            </div>
                                                        </div>
                                                    </div>
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

export default Portfolio