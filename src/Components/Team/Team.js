import React from 'react';
import { FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';

const Team = () => {
    return (
        <>
            <div className="section-heading text-center">
                <h2>Our Team</h2>
            </div>
            <section id="team" class="section-background">
                <div class="container my-5">
                    <div class="row">
                        <div class="col-md-3 col-sm-6">
                            <div class="team-thumb">
                                <div class="team-image">
                                    <img src="https://demo.phpjabbers.com/free-web-templates/car-dealer-website-template-107/images/author-image-1-646x680.jpg" class="img-responsive" alt="" />
                                </div>
                                <div class="team-info">
                                    <h3>John Doe</h3>
                                    <span>CEO</span>
                                </div>
                                <ul class="social-icon d-flex justify-content-evenly py-3">
                                    <li><FaFacebookF ></FaFacebookF></li>
                                    <li><FaInstagramSquare></FaInstagramSquare></li>
                                    <li><FaLinkedin></FaLinkedin></li>
                                    <li><FaTwitter></FaTwitter></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="team-thumb">
                                <div class="team-image">
                                    <img src="https://demo.phpjabbers.com/free-web-templates/car-dealer-website-template-107/images/author-image-2-646x680.jpg" class="img-responsive" alt="" />
                                </div>
                                <div class="team-info">
                                    <h3>Jane Doe</h3>
                                    <span>CTO</span>
                                </div>
                                <ul class="social-icon d-flex justify-content-evenly py-3" >
                                    <li><FaFacebookF ></FaFacebookF></li>
                                    <li><FaInstagramSquare></FaInstagramSquare></li>
                                    <li><FaLinkedin></FaLinkedin></li>
                                    <li><FaTwitter></FaTwitter></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="team-thumb">
                                <div class="team-image">
                                    <img src="https://demo.phpjabbers.com/free-web-templates/car-dealer-website-template-107/images/author-image-3-646x680.jpg" class="img-responsive" alt="" />
                                </div>
                                <div class="team-info">
                                    <h3>Beky Fox</h3>
                                    <span>Marketing Expert</span>
                                </div>
                                <ul class="social-icon d-flex justify-content-evenly py-3">
                                    <li><FaFacebookF ></FaFacebookF></li>
                                    <li><FaInstagramSquare></FaInstagramSquare></li>
                                    <li><FaLinkedin></FaLinkedin></li>
                                    <li><FaTwitter></FaTwitter></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="team-thumb">
                                <div class="team-image">
                                    <img src="https://demo.phpjabbers.com/free-web-templates/car-dealer-website-template-107/images/author-image-4-646x680.jpg" class="img-responsive" alt="" />
                                </div>
                                <div class="team-info">
                                    <h3>Daniel Smith</h3>
                                    <span>Customer Support</span>
                                </div>
                                <ul class="social-icon d-flex justify-content-evenly py-3">
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