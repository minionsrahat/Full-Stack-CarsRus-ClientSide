import React from 'react';

const ContactUs = () => {
    return (

        <>
         <div className="section-heading text-center">
                <h2>
                    Contact Us
                </h2>
            </div>
            <section id="contact">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 col-sm-12">
                            <form id="contact-form"  action="" method="post">
                                <div className="col-md-12 col-sm-12">
                                    <input type="text" className="form-control" placeholder="Enter full name" name="name" required/>
                                        <input type="email" className="form-control" placeholder="Enter email address" name="email" required/>

                                            <textarea className="form-control" rows="6" placeholder="Tell us about your message" name="message" requiredspellcheck="false"></textarea>
                                        </div>

                                        <div className="col-md-4 col-sm-12">
                                            <input type="submit" className="form-control" name="send message" value="Send Message"/>
                                        </div>

                                    </form>
                                </div>

                                <div className="col-md-6 col-sm-12">
                                    <div className="contact-image">
                                        <img src="https://demo.phpjabbers.com/free-web-templates/car-dealer-website-template-107/images/contact-1-600x400.jpg" className="img-responsive" alt=""/>
                                    </div>
                                </div>

                        </div>
                    </div>
            </section>
        </>
    );
};

export default ContactUs;