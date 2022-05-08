import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <>
             <div className="container-fluid p-0 mb-5">
            <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="w-100" src="https://demo.phpjabbers.com/free-web-templates/car-dealer-website-template-107/images/slider-image-2-1920x700.jpg" alt=""/>

                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" >
                                <h6 className="section-title text-white text-uppercase animated slideInDown">Luxury Living</h6>
                                <h1 className="display-3 text-white mb-4 animated slideInDown">The Ultimate Driving Machine</h1>
                                <a href="/" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">View Car</a>
                                <a  href="/" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Book A Car</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100" src="https://demo.phpjabbers.com/free-web-templates/car-dealer-website-template-107/images/slider-image-1-1920x700.jpg" alt=""/>

                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3">
                                <h6 className="section-title text-white text-uppercase animated slideInDown">Luxury Living</h6>
                                <h1 className="display-3 text-white mb-4 animated slideInDown">Discover A Brand Luxurious Car</h1>
                                <a href="/" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Our Cars</a>
                                <a href="/" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Book A Car</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100" src="https://demo.phpjabbers.com/free-web-templates/car-dealer-website-template-107/images/slider-image-3-1920x700.jpg" alt=""/>

                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" >
                                <h6 className="section-title text-white text-uppercase animated slideInDown">Luxury Living</h6>
                                <h1 className="display-3 text-white mb-4 animated slideInDown">Popular Vehicle Dealership</h1>
                                <a href="/" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Discover More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        </>
    );
};

export default Banner;