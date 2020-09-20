import React, {useState} from 'react'
import Modal from 'react-animated-modal';
import './contact.scss'
import randomNumber from "../../../../services/randomNumber";

function Contact(props) {
    const { types } = props;
    const [showModel, setShowModel] = useState(false);
    const style = types[randomNumber(types)];

    return (
        <div>
            <div className="contact_area resume_single_part text-center"
                 style={{backgroundImage: 'url(img/bg-img/resume-bg-5.jpg)'}}>
                <a id="contact" onClick={() => setShowModel(true)}>
                    <div className="classy-table">
                        <div className="classy-table-cell">
                            <div className="resume_single_part_text">
                                <i className="ion-android-mail" aria-hidden="true"/>
                                <h3>Contact</h3>
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
                <div id="contact-animatedModal" className="resume_version">
                    <div className="contact-content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        {/* Single Contact Info Area Start */}
                                        <div className="col-12 col-lg-4">
                                            <div className="single_contact_info item">
                                                <i className="ion-android-pin" aria-hidden="true" />
                                                <h4>Address</h4>
                                                <p>Road No - 14, House No - 03,
                                                    <br /> Melbourne, Australia</p>
                                            </div>
                                        </div>
                                        {/* Single Contact Info Area Start */}
                                        <div className="col-12 col-lg-4">
                                            <div className="single_contact_info item">
                                                <i className="ion-android-call" aria-hidden="true" />
                                                <h4>Call</h4>
                                                <p>+61 258 014 321
                                                    <br /> +61 001 741 21</p>
                                            </div>
                                        </div>
                                        {/* Single Contact Info Area Start */}
                                        <div className="col-12 col-lg-4">
                                            <div className="single_contact_info item">
                                                <i className="ion-android-drafts" aria-hidden="true" />
                                                <h4>Mail</h4>
                                                <p>care@one.com,
                                                    <br /> info@one.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="contact_title">
                                        <h3>Get Touch with Us</h3>
                                    </div>
                                    <div className="contact_from">
                                        <form action="http://demo.designing-world.com/classy-baao/classy-onepage/mail.php" method="post" id="main_contact_form">
                                            {/* Message Input Area Start */}
                                            <div className="contact_input_area">
                                                <div id="success_fail_info" />
                                                <div className="row">
                                                    {/* Single Input Area Start */}
                                                    <div className="col-md-6 col-12">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" required />
                                                        </div>
                                                    </div>
                                                    {/* Single Input Area Start */}
                                                    <div className="col-md-6 col-12">
                                                        <div className="form-group">
                                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your E-mail" required />
                                                        </div>
                                                    </div>
                                                    {/* Single Input Area Start */}
                                                    <div className="col-md-6 col-12">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Your Subject" required />
                                                        </div>
                                                    </div>
                                                    {/* Single Input Area Start */}
                                                    <div className="col-md-6 col-12">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" name="number" id="number" placeholder="Your Number *" required />
                                                        </div>
                                                    </div>
                                                    {/* Single Input Area Start */}
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <textarea name="message" className="form-control" id="message" cols={30} rows={10} placeholder="Your Message *" required defaultValue={""} />
                                                        </div>
                                                    </div>
                                                    {/* Single Input Area Start */}
                                                    <div className="col-12">
                                                        <button type="submit" className="btn default-button">SEND MESSAGE</button>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Message Input Area End */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Google Maps Area */}
                    <div className="map_contact_address_area">
                        {/* Map Area Start */}
                        <div className="map_area" id="googleMap" />
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Contact