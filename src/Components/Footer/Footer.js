import React from 'react';
import { FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-sm-6">
                            <div class="footer-info">
                                <div class="section-title">
                                    <h2>Headquarter</h2>
                                </div>
                                <address>
                                    <p>212 Halisohor <br />Chittagong, ABC 10001</p>
                                </address>

                                <ul class="social-icon text-white">
                                    <li><FaFacebookF className='me-1'></FaFacebookF></li>
                                    <li><FaInstagramSquare  className='me-1'></FaInstagramSquare></li>
                                    <li><FaLinkedin  className='me-1'></FaLinkedin></li>
                                    <li><FaInstagramSquare  className='me-1'></FaInstagramSquare></li>
                                </ul>

                                <div class="copyright-text mt-2">
                                    <p>Copyright &copy; 2020 Cars R Us!</p>
                                    <p>
                                        Designed By    <strong>minionsRahat</strong>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6">
                            <div class="footer-info">
                                <div class="section-title">
                                    <h2>Contact Info</h2>
                                </div>
                                <address>
                                    <p>+1 333 4040 5566</p>
                                    <p>
                                        <a href="mailto:contact@company.com">carsrus@gmail.com</a>
                                    </p>
                                </address>

                                <div class="footer_menu text-white">
                                    <h2>Quick Links</h2>
                                    <ul>
                                        <li>Home</li>
                                        <li>About Us</li>
                                        <li>Terms & Conditions</li>
                                        <li>Contact Us</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-12">
                            <div class="footer-info newsletter-form">
                                <div class="section-title">
                                    <h2>Send Message</h2>
                                </div>
                                <div>
                                    <div class="form-group">
                                        <form action="#" method="get">
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Enter your Message"
                                                name="email"
                                                id="email"
                                                required
                                            />
                                            <input
                                                type="submit"
                                                class="form-control"
                                                name="submit"
                                                id="form-submit"
                                                value="Send me"
                                            />
                                        </form>
                                        <span><sup>*</sup> Please note -it will be a anonymous message.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
};

export default Footer;