import React from 'react';
import { FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';

const Team = () => {
    return (
        <>
            <div className="section-heading text-center">
                <h2>Our Team</h2>
            </div>
            <section id="team" className="section-background">
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="team-thumb">
                                <div className="team-image">
                                    <img src="https://demo.phpjabbers.com/free-web-templates/car-dealer-website-template-107/images/author-image-1-646x680.jpg" className="img-responsive" alt="" />
                                </div>
                                <div className="team-info">
                                    <h3>John Doe</h3>
                                    <span>CEO</span>
                                </div>
                                <ul className="social-icon d-flex justify-content-evenly py-3">
                                    <li><FaFacebookF ></FaFacebookF></li>
                                    <li><FaInstagramSquare></FaInstagramSquare></li>
                                    <li><FaLinkedin></FaLinkedin></li>
                                    <li><FaTwitter></FaTwitter></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="team-thumb">
                                <div className="team-image">
                                    <img src="https://demo.phpjabbers.com/free-web-templates/car-dealer-website-template-107/images/author-image-2-646x680.jpg" className="img-responsive" alt="" />
                                </div>
                                <div className="team-info">
                                    <h3>Jane Doe</h3>
                                    <span>CTO</span>
                                </div>
                                <ul className="social-icon d-flex justify-content-evenly py-3" >
                                    <li><FaFacebookF ></FaFacebookF></li>
                                    <li><FaInstagramSquare></FaInstagramSquare></li>
                                    <li><FaLinkedin></FaLinkedin></li>
                                    <li><FaTwitter></FaTwitter></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="team-thumb">
                                <div className="team-image">
                                    <img src="https://demo.phpjabbers.com/free-web-templates/car-dealer-website-template-107/images/author-image-3-646x680.jpg" className="img-responsive" alt="" />
                                </div>
                                <div className="team-info">
                                    <h3>Beky Fox</h3>
                                    <span>Marketing Expert</span>
                                </div>
                                <ul className="social-icon d-flex justify-content-evenly py-3">
                                    <li><FaFacebookF ></FaFacebookF></li>
                                    <li><FaInstagramSquare></FaInstagramSquare></li>
                                    <li><FaLinkedin></FaLinkedin></li>
                                    <li><FaTwitter></FaTwitter></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="team-thumb">
                                <div className="team-image">
                                    <img src="https://demo.phpjabbers.com/free-web-templates/car-dealer-website-template-107/images/author-image-4-646x680.jpg" className="img-responsive" alt="" />
                                </div>
                                <div className="team-info">
                                    <h3>Daniel Smith</h3>
                                    <span>Customer Support</span>
                                </div>
                                <ul className="social-icon d-flex justify-content-evenly py-3">
                                    <li><FaFacebookF ></FaFacebookF></li>
                                    <li><FaInstagramSquare></FaInstagramSquare></li>
                                    <li><FaLinkedin></FaLinkedin></li>
                                    <li><FaTwitter></FaTwitter></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Team;