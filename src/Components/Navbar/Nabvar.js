import React from 'react';

const Nabvar = () => {
    return (
        <>
         <nav className="navbar navbar-expand-lg navbar-scroll fixed-top shadow-0 border-bottom border-dark">
        <div className="container">
            <div className="navbar-brand d-flex align-items-center">
            Cars R Us!
            </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="#!">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">Cars</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">Sign In</a>
              </li>
             <li className="nav-item">
              <button type="button" className="btn btn-dark ms-3">Sign Up</button>
              <button type="button" className="btn btn-dark ms-3">Log In</button>
             </li>
            </ul>
          </div>
        </div>
      </nav>
        </>
    );
};

export default Nabvar;