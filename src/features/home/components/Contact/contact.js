import React, {useState} from 'react'
import Modal from 'react-animated-modal';
import './contact.scss'
import randomNumber from "../../../../services/randomNumber";
import {useSelector} from "react-redux";
import ContactFrom from "./form/contact-form";
import ContactInfo from "./info/contact-info";

function Contact(props) {
    const { types } = props;
    const [showModel, setShowModel] = useState(false);
    const style = types[randomNumber(types)];

    const contact = useSelector(state => state.contact);

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
                                   <ContactInfo contact={contact}/>
                                </div>
                                <div className="col-12">
                                    <ContactFrom/>
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
