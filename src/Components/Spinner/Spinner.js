import React from 'react';

const Spinner = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-5 mx-auto"><div className="spinner-border text-danger text-center p-5" role="status">
                <span className="visually-hidden">Loading...</span>
            </div></div>
            </div>
            
        </div>

    );
};

export default Spinner;