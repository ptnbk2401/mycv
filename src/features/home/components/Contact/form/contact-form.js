import React from 'react';

function ContactFrom(props) {
    return (
        <div>
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
    )
}

export default ContactFrom
