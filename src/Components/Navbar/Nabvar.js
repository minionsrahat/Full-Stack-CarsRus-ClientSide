import React from 'react';
import './Navbar.css'
const Nabvar = () => {
    return (
        <>
        <div class="container-fluid bg-dark px-0">
            <div class="row gx-0">
                <div class="col-lg-3 bg-dark d-none d-lg-block">
                    <a href="index.html" class="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                        <h1 class="m-0 text-primary text-uppercase">Cars R Us!</h1>
                    </a>
                </div>
                <div class="col-lg-9">
                    <div class="row gx-0 bg-white d-none d-lg-flex">
                        <div class="col-lg-7 px-5 text-start">
                            <div class="h-100 d-inline-flex align-items-center py-2 me-4">
                                <i class="fa fa-envelope text-primary me-2"></i>
                                <p class="mb-0">info@example.com</p>
                            </div>
                            <div class="h-100 d-inline-flex align-items-center py-2">
                                <i class="fa fa-phone-alt text-primary me-2"></i>
                                <p class="mb-0">+012 345 6789</p>
                            </div>
                        </div>
                        <div class="col-lg-5 px-5 text-end">
                            <div class="d-inline-flex align-items-center py-2">
                                <a class="me-3" href="/"><i class="fab fa-facebook-f"></i></a>
                                <a class="me-3" href="/"><i class="fab fa-twitter"></i></a>
                                <a class="me-3" href="/"><i class="fab fa-linkedin-in"></i></a>
                                <a class="me-3" href="/"><i class="fab fa-instagram"></i></a>
                                <a class="" href="/"><i class="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                    <nav class="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                        <a href="index.html" class="navbar-brand d-block d-lg-none">
                            <h1 class="m-0 text-primary text-uppercase">Hotelier</h1>
                        </a>
                        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div class="navbar-nav mr-auto py-2">
                                <a href="index.html" class="nav-item nav-link">Home</a>
                                <a href="about.html" class="nav-item nav-link">Inventory</a>
                                <a href="service.html" class="nav-item nav-link">Blogs</a>
                                <a href="room.html" class="nav-item nav-link">About Us</a>
                            
                                <a href="contact.html" class="nav-item nav-link">Contact</a>
                            </div>
                            <div className='p-3'>
                            <button type="button" class="btn-special me-2">Sign In</button>
                            <button type="button" class="btn-special">Log In</button>
                         

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    
        </>
    );
};

export default Nabvar;