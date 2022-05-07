import React from 'react';
import './Spinner.css'
const Spinner = () => {
    return (
        <>
            <div class="preloader">
                <div class="meter">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="subline"></div>
                    <div class="subline"></div>
                    <div class="subline"></div>
                    <div class="subline"></div>
                    <div class="subline"></div>
                    <div class="loader-circle-1">
                        <div class="loader-circle-2"></div>
                    </div>
                    <span class="loadtext">Loading</span>
                </div>
            </div>
        </>

    );
};

export default Spinner;