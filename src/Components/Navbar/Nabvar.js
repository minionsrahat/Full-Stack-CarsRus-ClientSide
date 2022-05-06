import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase';
import './Navbar.css'
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
      };
      
    return (
        <>
            <div className="container-fluid bg-dark px-0">
                <div className="row gx-0">
                    <div className="col-lg-3 bg-dark d-none d-lg-block">
                        <a href="index.html" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                            <h1 className="m-0 text-primary text-uppercase">Cars R Us!</h1>
                        </a>
                    </div>
                    <div className="col-lg-9">
                        <div className="row gx-0 bg-white d-none d-lg-flex">
                            <div className="col-lg-7 px-5 text-start">
                                <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                                    <i className="fa fa-envelope text-primary me-2"></i>
                                    <p className="mb-0">info@example.com</p>
                                </div>
                                <div className="h-100 d-inline-flex align-items-center py-2">
                                    <i className="fa fa-phone-alt text-primary me-2"></i>
                                    <p className="mb-0">+012 345 6789</p>
                                </div>
                            </div>
                            <div className="col-lg-5 px-5 text-end">
                                <div className="d-inline-flex align-items-center py-2">
                                    <a className="me-3" href="/"><i className="fab fa-facebook-f"></i></a>
                                    <a className="me-3" href="/"><i className="fab fa-twitter"></i></a>
                                    <a className="me-3" href="/"><i className="fab fa-linkedin-in"></i></a>
                                    <a className="me-3" href="/"><i className="fab fa-instagram"></i></a>
                                    <a className="" href="/"><i className="fab fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                        <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                            <a href="index.html" className="navbar-brand d-block d-lg-none">
                                <h1 className="m-0 text-primary text-uppercase">Cars R Us!</h1>
                            </a>
                            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav mr-auto py-2">
                                    <NavLink to='/' className="nav-item nav-link">HOME</NavLink>
                                    <NavLink to='/inventory' className="nav-item nav-link">Inventory</NavLink>
                                    <NavLink to='/blogs' className="nav-item nav-link">Blogs</NavLink>
                                    <NavLink to='/about' className="nav-item nav-link">About Us</NavLink>
                                    <NavLink to='/contact' className="nav-item nav-link">Contact</NavLink>
                                    <NavLink to='/addproducts' className="nav-item nav-link">Add Products</NavLink>
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