import React from 'react'

export default class Mycv extends React.Component{
    render() {
        return (
            <div>
                {/* Preloader Start */}
                <div id="preloader">
                    <div className="classy-load" />
                </div>
                <div className="welcome_area resume_version" id="home_page">
                    {/* Introduction Area Start */}
                    <div className="introduction_area text-center background-overlay" style={{backgroundImage: 'url(img/bg-img/resume-bg-1.jpg)'}}>
                        <div className="classy-table">
                            <div className="classy-table-cell">
                                <div className="introduction_text_area">
                                    <div className="logo" />
                                    <h2>I'm Nazrul Islam</h2>
                                    <p>And I'm a Senior Front-end Developer</p>
                                    {/* Social Icon Area Start */}
                                    <div className="resume_social_icon">
                                        <a href="#"><i className="ion-social-facebook-outline" /></a>
                                        <a href="#"><i className="ion-social-twitter-outline" /></a>
                                        <a href="#"><i className="ion-social-googleplus-outline" /></a>
                                        <a href="#"><i className="ion-social-instagram-outline" /></a>
                                        <a href="#"><i className="ion-social-youtube-outline" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="resume_content_navigation_area">
                        {/* Profile Navigation Area Start */}
                        <div className="profile_area resume_single_part text-center" style={{backgroundImage: 'url(img/bg-img/resume-bg-2.jpg)'}}>
                            <a id="profile" href="#profile-animatedModal">
                                <div className="classy-table">
                                    <div className="classy-table-cell">
                                        <div className="resume_single_part_text">
                                            <i className="ion-person" aria-hidden="true" />
                                            <h3>Profile</h3>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        {/* Skills Navigation Area Start */}
                        <div className="skills_area resume_single_part text-center" style={{backgroundImage: 'url(img/bg-img/resume-bg-3.jpg)'}}>
                            <a id="skills" href="#skills-animatedModal">
                                <div className="classy-table">
                                    <div className="classy-table-cell">
                                        <div className="resume_single_part_text">
                                            <i className="ion-wrench" aria-hidden="true" />
                                            <h3>Skills</h3>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        {/* Portfolio Navigation Area Start */}
                        <div className="portfolio_area resume_single_part text-center" style={{backgroundImage: 'url(img/bg-img/resume-bg-4.jpg)'}}>
                            <a id="portfolio" href="#portfolio-animatedModal">
                                <div className="classy-table">
                                    <div className="classy-table-cell">
                                        <div className="resume_single_part_text">
                                            <i className="ion-images" aria-hidden="true" />
                                            <h3>Portfolio</h3>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        {/* Contact Navigation Area Start */}
                        <div className="contact_area resume_single_part text-center" style={{backgroundImage: 'url(img/bg-img/resume-bg-5.jpg)'}}>
                            <a id="contact" href="#contact-animatedModal">
                                <div className="classy-table">
                                    <div className="classy-table-cell">
                                        <div className="resume_single_part_text">
                                            <i className="ion-android-mail" aria-hidden="true" />
                                            <h3>Contact</h3>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                {/*/!* Profile Content Area Start *!/*/}
                {/*<div id="profile-animatedModal" className="resume_version">*/}
                    {/*/!*THIS IS IMPORTANT! to close the modal, the class name has to match the name given on the ID  class="close-animatedModal" *!/*/}
                    {/*<div className="close-profile-animatedModal">*/}
                        {/*<i className="fa fa-times" aria-hidden="true" />*/}
                    {/*</div>*/}
                    {/*<div className="profile-content">*/}
                        {/*<div className="container-fluid">*/}
                            {/*<div className="row">*/}
                                {/*<div className="col-12">*/}
                                    {/*/!* About Me Area Start *!/*/}
                                    {/*<div className="about_me_area">*/}
                                        {/*<div className="about_me_img">*/}
                                            {/*<img src="img/bg-img/bg-7.jpg" alt="" />*/}
                                        {/*</div>*/}
                                        {/*<div className="about_me_text">*/}
                                            {/*<h3>Story of Glory</h3>*/}
                                            {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, ab, neque. Ullam id consequuntur expedita ipsam quibusdam blanditiis eius deleniti sint eaque recusandae ea tempore, obcaecati libero laborum soluta dolorem.</p>*/}
                                            {/*<h5><span>Age</span>25</h5>*/}
                                            {/*<h5><span>Address</span>Melbourbe, Australia</h5>*/}
                                            {/*<h5><span>Email</span>care@classy.com</h5>*/}
                                            {/*<h5><span>Phone</span>+61 089 1574</h5>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*/!* What I do Area Start *!/*/}
                                    {/*<div className="what_i_do_area">*/}
                                        {/*<div className="row">*/}
                                            {/*<div className="col-12">*/}
                                                {/*<div className="what_i_do_title">*/}
                                                    {/*<h3>What I Do</h3>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="col-12 col-lg-6">*/}
                                                {/*<div className="single_what_i_do">*/}
                                                    {/*<i className="ion-android-color-palette" aria-hidden="true" />*/}
                                                    {/*<h3>UX/UI Design</h3>*/}
                                                    {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis natus nemo delectus fugiat illo, minima dolores fuga praesentium commodi porro officiis impedit quibusdam nostrum culpa rerum autem ipsam, adipisci quam.</p>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="col-12 col-lg-6">*/}
                                                {/*<div className="single_what_i_do">*/}
                                                    {/*<i className="ion-code" aria-hidden="true" />*/}
                                                    {/*<h3>Web Development</h3>*/}
                                                    {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis natus nemo delectus fugiat illo, minima dolores fuga praesentium commodi porro officiis impedit quibusdam nostrum culpa rerum autem ipsam, adipisci quam.</p>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="col-12 col-lg-6">*/}
                                                {/*<div className="single_what_i_do">*/}
                                                    {/*<i className="ion-easel" aria-hidden="true" />*/}
                                                    {/*<h3>Infographic Design</h3>*/}
                                                    {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis natus nemo delectus fugiat illo, minima dolores fuga praesentium commodi porro officiis impedit quibusdam nostrum culpa rerum autem ipsam, adipisci quam.</p>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="col-12 col-lg-6">*/}
                                                {/*<div className="single_what_i_do">*/}
                                                    {/*<i className="ion-android-phone-landscape" aria-hidden="true" />*/}
                                                    {/*<h3>App Development</h3>*/}
                                                    {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis natus nemo delectus fugiat illo, minima dolores fuga praesentium commodi porro officiis impedit quibusdam nostrum culpa rerum autem ipsam, adipisci quam.</p>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*/!* Education History Timeline Area Start *!/*/}
                                    {/*/!* Title *!/*/}
                                    {/*<div className="education_history_timeline_title">*/}
                                        {/*<h3>Education</h3>*/}
                                    {/*</div>*/}
                                    {/*<div className="history_timeline_area">*/}
                                        {/*/!* Single Timeline Area Start *!/*/}
                                        {/*<div className="single_timeline_block even-item clearfix">*/}
                                            {/*<div className="timeline_icon">*/}
                                                {/*<i className="ion-university" aria-hidden="true" />*/}
                                            {/*</div>*/}
                                            {/*<div className="timeline_text_content">*/}
                                                {/*<h4>Bachelor of Science Degree</h4>*/}
                                                {/*<h5>National University (2012 - 2016)</h5>*/}
                                                {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt numquam fugiat, vitae facere. Provident odio saepe iure, commodi doloribus architecto.</p>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*/!* Single Timeline Area Start *!/*/}
                                        {/*<div className="single_timeline_block odd-item clearfix">*/}
                                            {/*<div className="timeline_icon">*/}
                                                {/*<i className="ion-university" aria-hidden="true" />*/}
                                            {/*</div>*/}
                                            {/*<div className="timeline_text_content">*/}
                                                {/*<h4>Computer Science and Engineering</h4>*/}
                                                {/*<h5>Own University (2010 - 2014)</h5>*/}
                                                {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt numquam fugiat, vitae facere. Provident odio saepe iure, commodi doloribus architecto.</p>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*/!* Single Timeline Area Start *!/*/}
                                        {/*<div className="single_timeline_block even-item clearfix">*/}
                                            {/*<div className="timeline_icon">*/}
                                                {/*<i className="ion-university" aria-hidden="true" />*/}
                                            {/*</div>*/}
                                            {/*<div className="timeline_text_content">*/}
                                                {/*<h4>Higher Secondary</h4>*/}
                                                {/*<h5>Nazrul High School &amp; College (2009)</h5>*/}
                                                {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt numquam fugiat, vitae facere. Provident odio saepe iure, commodi doloribus architecto.</p>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*/!* Single Timeline Area Start *!/*/}
                                        {/*<div className="single_timeline_block odd-item clearfix">*/}
                                            {/*<div className="timeline_icon">*/}
                                                {/*<i className="ion-university" aria-hidden="true" />*/}
                                            {/*</div>*/}
                                            {/*<div className="timeline_text_content">*/}
                                                {/*<h4>Secondary (SSC)</h4>*/}
                                                {/*<h5>Mukit Memorial School (2007)</h5>*/}
                                                {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt numquam fugiat, vitae facere. Provident odio saepe iure, commodi doloribus architecto.</p>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*/!* Download Full Resume Area Start *!/*/}
                                    {/*<div className="download_full_resume">*/}
                                        {/*<a href="dummy-data/worksheet.pdf" download>Download Resume</a>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
                {/*/!* Skills Content Area Start *!/*/}
                {/*<div id="skills-animatedModal" className="resume_version">*/}
                    {/*/!*THIS IS IMPORTANT! to close the modal, the class name has to match the name given on the ID  class="close-animatedModal" *!/*/}
                    {/*<div className="close-skills-animatedModal">*/}
                        {/*<i className="fa fa-times" aria-hidden="true" />*/}
                    {/*</div>*/}
                    {/*/!* Skill Content Area Start *!/*/}
                    {/*<div className="skills-content">*/}
                        {/*<div className="container-fluid">*/}
                            {/*<div className="row">*/}
                                {/*<div className="col-12">*/}
                                    {/*/!* Work History Timeline Area Start *!/*/}
                                    {/*/!* Title *!/*/}
                                    {/*<div className="work_history_timeline_title">*/}
                                        {/*<h3>Work Experience</h3>*/}
                                    {/*</div>*/}
                                    {/*<div className="history_timeline_area">*/}
                                        {/*/!* Single Timeline Area Start *!/*/}
                                        {/*<div className="single_timeline_block even-item clearfix">*/}
                                            {/*<div className="timeline_icon">*/}
                                                {/*<i className="ion-university" aria-hidden="true" />*/}
                                            {/*</div>*/}
                                            {/*<div className="timeline_text_content">*/}
                                                {/*<h4>Senior Front-end Developer</h4>*/}
                                                {/*<h5>Designing World (2016 - 2017)</h5>*/}
                                                {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt numquam fugiat, vitae facere. Provident odio saepe iure, commodi doloribus architecto.</p>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*/!* Single Timeline Area Start *!/*/}
                                        {/*<div className="single_timeline_block odd-item clearfix">*/}
                                            {/*<div className="timeline_icon">*/}
                                                {/*<i className="ion-university" aria-hidden="true" />*/}
                                            {/*</div>*/}
                                            {/*<div className="timeline_text_content">*/}
                                                {/*<h4>UX/UI Designer</h4>*/}
                                                {/*<h5>Designing World (2015 - 2017)</h5>*/}
                                                {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt numquam fugiat, vitae facere. Provident odio saepe iure, commodi doloribus architecto.</p>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*/!* Single Timeline Area Start *!/*/}
                                        {/*<div className="single_timeline_block even-item clearfix">*/}
                                            {/*<div className="timeline_icon">*/}
                                                {/*<i className="ion-university" aria-hidden="true" />*/}
                                            {/*</div>*/}
                                            {/*<div className="timeline_text_content">*/}
                                                {/*<h4>Trainer</h4>*/}
                                                {/*<h5>Nazrul High School &amp; College (2009)</h5>*/}
                                                {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt numquam fugiat, vitae facere. Provident odio saepe iure, commodi doloribus architecto.</p>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*/!* Single Timeline Area Start *!/*/}
                                        {/*<div className="single_timeline_block odd-item clearfix">*/}
                                            {/*<div className="timeline_icon">*/}
                                                {/*<i className="ion-university" aria-hidden="true" />*/}
                                            {/*</div>*/}
                                            {/*<div className="timeline_text_content">*/}
                                                {/*<h4>Trainer (Basic )</h4>*/}
                                                {/*<h5>Mukit Memorial School (2007)</h5>*/}
                                                {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt numquam fugiat, vitae facere. Provident odio saepe iure, commodi doloribus architecto.</p>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*/!* Work Skill Progress Bar Area Start *!/*/}
                                    {/*<div className="progress_bar_area_title">*/}
                                        {/*<h3>Some Passion</h3>*/}
                                    {/*</div>*/}
                                    {/*/!* Progress Bar Content Area *!/*/}
                                    {/*<div className="progress_bar_content">*/}
                                        {/*<div className="row">*/}
                                            {/*/!* Single Progress Bar *!/*/}
                                            {/*<div className="col-12 col-lg-6">*/}
                                                {/*<div className="single_progress_bar">*/}
                                                    {/*<div id="bar1" className="barfiller">*/}
                                                        {/*<div className="tipWrap">*/}
                                                            {/*<span className="tip" />*/}
                                                        {/*</div>*/}
                                                        {/*<span className="fill" data-percentage={100} />*/}
                                                    {/*</div>*/}
                                                    {/*<h4>HTML</h4>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*/!* Single Progress Bar *!/*/}
                                            {/*<div className="col-12 col-lg-6">*/}
                                                {/*<div className="single_progress_bar">*/}
                                                    {/*<div id="bar2" className="barfiller">*/}
                                                        {/*<div className="tipWrap">*/}
                                                            {/*<span className="tip" />*/}
                                                        {/*</div>*/}
                                                        {/*<span className="fill" data-percentage={94} />*/}
                                                    {/*</div>*/}
                                                    {/*<h4>CSS</h4>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*/!* Single Progress Bar *!/*/}
                                            {/*<div className="col-12 col-lg-6">*/}
                                                {/*<div className="single_progress_bar">*/}
                                                    {/*<div id="bar3" className="barfiller">*/}
                                                        {/*<div className="tipWrap">*/}
                                                            {/*<span className="tip" />*/}
                                                        {/*</div>*/}
                                                        {/*<span className="fill" data-percentage={72} />*/}
                                                    {/*</div>*/}
                                                    {/*<h4>JS</h4>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*/!* Single Progress Bar *!/*/}
                                            {/*<div className="col-12 col-lg-6">*/}
                                                {/*<div className="single_progress_bar">*/}
                                                    {/*<div id="bar4" className="barfiller">*/}
                                                        {/*<div className="tipWrap">*/}
                                                            {/*<span className="tip" />*/}
                                                        {/*</div>*/}
                                                        {/*<span className="fill" data-percentage={87} />*/}
                                                    {/*</div>*/}
                                                    {/*<h4>PHP</h4>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*/!* Single Progress Bar *!/*/}
                                            {/*<div className="col-12 col-lg-6">*/}
                                                {/*<div className="single_progress_bar">*/}
                                                    {/*<div id="bar5" className="barfiller">*/}
                                                        {/*<div className="tipWrap">*/}
                                                            {/*<span className="tip" />*/}
                                                        {/*</div>*/}
                                                        {/*<span className="fill" data-percentage={91} />*/}
                                                    {/*</div>*/}
                                                    {/*<h4>WordPress</h4>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*/!* Single Progress Bar *!/*/}
                                            {/*<div className="col-12 col-lg-6">*/}
                                                {/*<div className="single_progress_bar">*/}
                                                    {/*<div id="bar6" className="barfiller">*/}
                                                        {/*<div className="tipWrap">*/}
                                                            {/*<span className="tip" />*/}
                                                        {/*</div>*/}
                                                        {/*<span className="fill" data-percentage={65} />*/}
                                                    {/*</div>*/}
                                                    {/*<h4>Joomla</h4>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*/!* Download Full Resume Area Start *!/*/}
                                    {/*<div className="download_full_resume">*/}
                                        {/*<a href="dummy-data/worksheet.pdf" download>Download Resume</a>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
                {/*/!* Portfolio Content *!/*/}
                {/*<div id="portfolio-animatedModal" className="resume_version">*/}
                    {/*/!*THIS IS IMPORTANT! to close the modal, the class name has to match the name given on the ID  class="close-animatedModal" *!/*/}
                    {/*<div className="close-portfolio-animatedModal">*/}
                        {/*<i className="fa fa-times" aria-hidden="true" />*/}
                    {/*</div>*/}
                    {/*<div className="portfolio-content">*/}
                        {/*<div className="container-fluid">*/}
                            {/*<div className="row">*/}
                                {/*<div className="col-12">*/}
                                    {/*<div className="portfolio_title">*/}
                                        {/*<h3>Some Awesome Works</h3>*/}
                                    {/*</div>*/}
                                    {/*<div className="resume_portfolio_nav text-center gallery_menu">*/}
                                        {/*<div className="portfolio-menu">*/}
                                            {/*<button className="active btn btn-md" type="button" data-filter="*">all</button>*/}
                                            {/*<button className="btn btn-md" type="button" data-filter=".web">Design</button>*/}
                                            {/*<button className="btn btn-md" type="button" data-filter=".art">Art</button>*/}
                                            {/*<button className="btn btn-md" type="button" data-filter=".bra">Branding</button>*/}
                                            {/*<button className="btn btn-md" type="button" data-filter=".app">App</button>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="gallery_full_width_images_area clearfix">*/}
                                        {/*/!* Single gallery Item Start *!/*/}
                                        {/*<div className="single_gallery_item app">*/}
                                            {/*<div className="single_resume_portfolio_area">*/}
                                                {/*<img src="img/gallery/1.jpg" alt="" />*/}
                                                {/*/!* Single gallery Item hover caption *!/*/}
                                                {/*<div className="hover_overlay">*/}
                                                    {/*<div className="classy-table">*/}
                                                        {/*<div className="classy-table-cell">*/}
                                                            {/*<div className="gallery_info">*/}
                                                                {/*<h5>Creative Work</h5>*/}
                                                                {/*<p>Classy Business</p>*/}
                                                                {/*<a className="btn btn-pill btn-sm btn-mat-orange" href="#">More Details</a>*/}
                                                            {/*</div>*/}
                                                        {/*</div>*/}
                                                    {/*</div>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*/!* Single gallery Item Start *!/*/}
                                        {/*<div className="single_gallery_item art">*/}
                                            {/*<div className="single_resume_portfolio_area">*/}
                                                {/*<img src="img/gallery/2.jpg" alt="" />*/}
                                                {/*/!* Single gallery Item hover caption *!/*/}
                                                {/*<div className="hover_overlay">*/}
                                                    {/*<div className="classy-table">*/}
                                                        {/*<div className="classy-table-cell">*/}
                                                            {/*<div className="gallery_info">*/}
                                                                {/*<h5>Creative Work</h5>*/}
                                                                {/*<p>Classy Business</p>*/}
                                                                {/*<a className="btn btn-pill btn-sm btn-mat-orange" href="#">More Details</a>*/}
                                                            {/*</div>*/}
                                                        {/*</div>*/}
                                                    {/*</div>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*/!* Single gallery Item Start *!/*/}
                                        {/*<div className="single_gallery_item web">*/}
                                            {/*<div className="single_resume_portfolio_area">*/}
                                                {/*<img src="img/gallery/3.jpg" alt="" />*/}
                                                {/*/!* Single gallery Item hover caption *!/*/}
                                                {/*<div className="hover_overlay">*/}
                                                    {/*<div className="classy-table">*/}
                                                        {/*<div className="classy-table-cell">*/}
                                                            {/*<div className="gallery_info">*/}
                                                                {/*<h5>Creative Work</h5>*/}
                                                                {/*<p>Classy Business</p>*/}
                                                                {/*<a className="btn btn-pill btn-sm btn-mat-orange" href="#">More Details</a>*/}
                                                            {/*</div>*/}
                                                        {/*</div>*/}
                                                    {/*</div>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*/!* Single gallery Item Start *!/*/}
                                        {/*<div className="single_gallery_item bra">*/}
                                            {/*<div className="single_resume_portfolio_area">*/}
                                                {/*<img src="img/gallery/4.jpg" alt="" />*/}
                                                {/*/!* Single gallery Item hover caption *!/*/}
                                                {/*<div className="hover_overlay">*/}
                                                    {/*<div className="classy-table">*/}
                                                        {/*<div className="classy-table-cell">*/}
                                                            {/*<div className="gallery_info">*/}
                                                                {/*<h5>Creative Work</h5>*/}
                                                                {/*<p>Classy Business</p>*/}
                                                                {/*<a className="btn btn-pill btn-sm btn-mat-orange" href="#">More Details</a>*/}
                                                            {/*</div>*/}
                                                        {/*</div>*/}
                                                    {/*</div>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*/!* Single gallery Item Start *!/*/}
                                        {/*<div className="single_gallery_item bra">*/}
                                            {/*<div className="single_resume_portfolio_area">*/}
                                                {/*<img src="img/gallery/5.jpg" alt="" />*/}
                                                {/*/!* Single gallery Item hover caption *!/*/}
                                                {/*<div className="hover_overlay">*/}
                                                    {/*<div className="classy-table">*/}
                                                        {/*<div className="classy-table-cell">*/}
                                                            {/*<div className="gallery_info">*/}
                                                                {/*<h5>Creative Work</h5>*/}
                                                                {/*<p>Classy Business</p>*/}
                                                                {/*<a className="btn btn-pill btn-sm btn-mat-orange" href="#">More Details</a>*/}
                                                            {/*</div>*/}
                                                        {/*</div>*/}
                                                    {/*</div>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*/!* Single gallery Item Start *!/*/}
                                        {/*<div className="single_gallery_item bra">*/}
                                            {/*<div className="single_resume_portfolio_area">*/}
                                                {/*<img src="img/gallery/6.jpg" alt="" />*/}
                                                {/*/!* Single gallery Item hover caption *!/*/}
                                                {/*<div className="hover_overlay">*/}
                                                    {/*<div className="classy-table">*/}
                                                        {/*<div className="classy-table-cell">*/}
                                                            {/*<div className="gallery_info">*/}
                                                                {/*<h5>Creative Work</h5>*/}
                                                                {/*<p>Classy Business</p>*/}
                                                                {/*<a className="btn btn-pill btn-sm btn-mat-orange" href="#">More Details</a>*/}
                                                            {/*</div>*/}
                                                        {/*</div>*/}
                                                    {/*</div>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*/!* Single gallery Item Start *!/*/}
                                        {/*<div className="single_gallery_item bra">*/}
                                            {/*<div className="single_resume_portfolio_area">*/}
                                                {/*<img src="img/gallery/7.jpg" alt="" />*/}
                                                {/*/!* Single gallery Item hover caption *!/*/}
                                                {/*<div className="hover_overlay">*/}
                                                    {/*<div className="classy-table">*/}
                                                        {/*<div className="classy-table-cell">*/}
                                                            {/*<div className="gallery_info">*/}
                                                                {/*<h5>Creative Work</h5>*/}
                                                                {/*<p>Classy Business</p>*/}
                                                                {/*<a className="btn btn-pill btn-sm btn-mat-orange" href="#">More Details</a>*/}
                                                            {/*</div>*/}
                                                        {/*</div>*/}
                                                    {/*</div>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*/!* Single gallery Item Start *!/*/}
                                        {/*<div className="single_gallery_item bra">*/}
                                            {/*<div className="single_resume_portfolio_area">*/}
                                                {/*<img src="img/gallery/8.jpg" alt="" />*/}
                                                {/*/!* Single gallery Item hover caption *!/*/}
                                                {/*<div className="hover_overlay">*/}
                                                    {/*<div className="classy-table">*/}
                                                        {/*<div className="classy-table-cell">*/}
                                                            {/*<div className="gallery_info">*/}
                                                                {/*<h5>Creative Work</h5>*/}
                                                                {/*<p>Classy Business</p>*/}
                                                                {/*<a className="btn btn-pill btn-sm btn-mat-orange" href="#">More Details</a>*/}
                                                            {/*</div>*/}
                                                        {/*</div>*/}
                                                    {/*</div>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*/!* Download Full Resume Area Start *!/*/}
                                    {/*<div className="download_full_resume">*/}
                                        {/*<a href="dummy-data/worksheet.pdf" download>Download Resume</a>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
                {/*/!* Contact Content *!/*/}
                {/*<div id="contact-animatedModal" className="resume_version">*/}
                    {/*/!*THIS IS IMPORTANT! to close the modal, the class name has to match the name given on the ID  class="close-animatedModal" *!/*/}
                    {/*<div className="close-contact-animatedModal">*/}
                        {/*<i className="fa fa-times" aria-hidden="true" />*/}
                    {/*</div>*/}
                    {/*<div className="contact-content">*/}
                        {/*<div className="container-fluid">*/}
                            {/*<div className="row">*/}
                                {/*<div className="col-12">*/}
                                    {/*<div className="row">*/}
                                        {/*/!* Single Contact Info Area Start *!/*/}
                                        {/*<div className="col-12 col-lg-4">*/}
                                            {/*<div className="single_contact_info item">*/}
                                                {/*<i className="ion-android-pin" aria-hidden="true" />*/}
                                                {/*<h4>Address</h4>*/}
                                                {/*<p>Road No - 14, House No - 03,*/}
                                                    {/*<br /> Melbourne, Australia</p>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*/!* Single Contact Info Area Start *!/*/}
                                        {/*<div className="col-12 col-lg-4">*/}
                                            {/*<div className="single_contact_info item">*/}
                                                {/*<i className="ion-android-call" aria-hidden="true" />*/}
                                                {/*<h4>Call</h4>*/}
                                                {/*<p>+61 258 014 321*/}
                                                    {/*<br /> +61 001 741 21</p>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*/!* Single Contact Info Area Start *!/*/}
                                        {/*<div className="col-12 col-lg-4">*/}
                                            {/*<div className="single_contact_info item">*/}
                                                {/*<i className="ion-android-drafts" aria-hidden="true" />*/}
                                                {/*<h4>Mail</h4>*/}
                                                {/*<p>care@one.com,*/}
                                                    {/*<br /> info@one.com</p>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="col-12">*/}
                                    {/*<div className="contact_title">*/}
                                        {/*<h3>Get Touch with Us</h3>*/}
                                    {/*</div>*/}
                                    {/*<div className="contact_from">*/}
                                        {/*<form action="http://demo.designing-world.com/classy-baao/classy-onepage/mail.php" method="post" id="main_contact_form">*/}
                                            {/*/!* Message Input Area Start *!/*/}
                                            {/*<div className="contact_input_area">*/}
                                                {/*<div id="success_fail_info" />*/}
                                                {/*<div className="row">*/}
                                                    {/*/!* Single Input Area Start *!/*/}
                                                    {/*<div className="col-md-6 col-12">*/}
                                                        {/*<div className="form-group">*/}
                                                            {/*<input type="text" className="form-control" name="name" id="name" placeholder="Your Name" required />*/}
                                                        {/*</div>*/}
                                                    {/*</div>*/}
                                                    {/*/!* Single Input Area Start *!/*/}
                                                    {/*<div className="col-md-6 col-12">*/}
                                                        {/*<div className="form-group">*/}
                                                            {/*<input type="email" className="form-control" name="email" id="email" placeholder="Your E-mail" required />*/}
                                                        {/*</div>*/}
                                                    {/*</div>*/}
                                                    {/*/!* Single Input Area Start *!/*/}
                                                    {/*<div className="col-md-6 col-12">*/}
                                                        {/*<div className="form-group">*/}
                                                            {/*<input type="text" className="form-control" name="subject" id="subject" placeholder="Your Subject" required />*/}
                                                        {/*</div>*/}
                                                    {/*</div>*/}
                                                    {/*/!* Single Input Area Start *!/*/}
                                                    {/*<div className="col-md-6 col-12">*/}
                                                        {/*<div className="form-group">*/}
                                                            {/*<input type="text" className="form-control" name="number" id="number" placeholder="Your Number *" required />*/}
                                                        {/*</div>*/}
                                                    {/*</div>*/}
                                                    {/*/!* Single Input Area Start *!/*/}
                                                    {/*<div className="col-12">*/}
                                                        {/*<div className="form-group">*/}
                                                            {/*<textarea name="message" className="form-control" id="message" cols={30} rows={10} placeholder="Your Message *" required defaultValue={""} />*/}
                                                        {/*</div>*/}
                                                    {/*</div>*/}
                                                    {/*/!* Single Input Area Start *!/*/}
                                                    {/*<div className="col-12">*/}
                                                        {/*<button type="submit" className="btn default-button">SEND MESSAGE</button>*/}
                                                    {/*</div>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*/!* Message Input Area End *!/*/}
                                        {/*</form>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        )
    }
}