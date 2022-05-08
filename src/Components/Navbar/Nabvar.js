import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase';
import './Navbar.css'
import { FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';

const Nabvar = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const goLoginPage = () => {
        navigate('/login')
    }
    const goSignupPage = () => {
        navigate('/signup')
    }
    const logout = () => {
        signOut(auth);
        localStorage.removeItem("accessToken");
    };

    return (
        <>
            <div className="container-fluid bg-dark px-0">
                <div className="row gx-0">
                    <div className="col-lg-3 bg-dark d-none d-lg-block">
                        <div className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                            <h1 className="m-0 navbar-title text-uppercase">Cars R Us!</h1>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="row gx-0 bg-white d-none d-lg-flex">
                            <div className="col-lg-7 px-5 text-start">
                                <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                                    <FaEnvelope className='me-1'></FaEnvelope>
                                    <p className="mb-0">carsrusinfo@gmail.com</p>
                                </div>
                                <div className="h-100 d-inline-flex align-items-center py-2">
                                    <FaPhone className='me-1'></FaPhone>
                                    <p className="mb-0">+012 345 6789</p>
                                </div>
                            </div>
                            <div className="col-lg-5 d-flex align-items-center text-end">
                                <FaFacebookF className='me-2'></FaFacebookF>
                                <FaTwitter className='me-2'></FaTwitter>
                                <FaLinkedin className='me-2'></FaLinkedin>
                                <FaInstagramSquare className='me-2'></FaInstagramSquare>

                            </div>
                        </div>
                        <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                            <div className="navbar-brand d-block d-lg-none">
                                <h1 className="m-0 navbar-title text-uppercase">Cars R Us!</h1>
                            </div>
                            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav mr-auto py-2">
                                    <NavLink to='/' className="nav-item nav-link">Home</NavLink>
                                    {user && <>
                                        <NavLink to='/addproducts' className="nav-item nav-link">Add Products</NavLink>
                                        <NavLink to='/myproducts' className="nav-item nav-link">My Products</NavLink>
                                        <NavLink to='/manageproducts' className="nav-item nav-link">Manage Products</NavLink>
                                        <NavLink to='/inventory' className="nav-item nav-link">Car Gallery</NavLink>
                                    </>}
                                    <NavLink to='/blogs' className="nav-item nav-link">Blogs</NavLink>
                                    <NavLink to='/about' className="nav-item nav-link">About Us</NavLink>
                                    <NavLink to='/contact' className="nav-item nav-link">Contact</NavLink>

                                </div>
                                <div className='p-3'>
                                    {user ? <><button type="button" onClick={logout} className="btn-special me-2">Sign Out</button></> :
                                        <>
                                            <button type="button" onClick={goSignupPage} className="btn-special me-2">Sign Up</button>
                                            <button type="button" onClick={goLoginPage} className="btn-special">Log In</button>
                                        </>}



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