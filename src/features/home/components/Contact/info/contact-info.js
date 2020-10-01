import React, {useState, useEffect} from 'react';

function ContactInfo(props) {
    const [contact, setContact] = useState([]);

    useEffect(() => {
        setContact(props.contact)
    }, []);

    return (
        <div>
            <div className="row">
                {/* Single Contact Info Area Start */}
                <div className="col-12 col-lg-4">
                    <div className="single_contact_info item">
                        <i className="ion-android-pin" aria-hidden="true" />
                        <h4>Address</h4>
                        <p>{contact.address}</p>
                    </div>
                </div>
                {/* Single Contact Info Area Start */}
                <div className="col-12 col-lg-4">
                    <div className="single_contact_info item">
                        <i className="ion-android-call" aria-hidden="true" />
                        <h4>Call</h4>
                        <p>{contact && contact.call}</p>
                    </div>
                </div>
                {/* Single Contact Info Area Start */}
                <div className="col-12 col-lg-4">
                    <div className="single_contact_info item">
                        <i className="ion-android-drafts" aria-hidden="true" />
                        <h4>Mail</h4>
                        {contact && contact.mail && contact.mail.map((mail, index) => {
                            return <p key={index}>{mail}</p>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;
