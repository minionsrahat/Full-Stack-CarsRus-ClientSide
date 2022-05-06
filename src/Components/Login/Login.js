import React from 'react';
import './Login.css'
const Login = () => {
    return (
        <>
            <section class="breadcrumb-area breadcrumb-bg title-background">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="breadcrumb-content  text-center">
                                <h2>Login</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="login-register-area gray-lite pb-120">
                <div class="container">
                    <div class="login-reg-wrap">
                        <div class="row no-gutters">
                            <div class="col-lg-6 mx-auto">
                                <div class="login-wrap">
                                    <h3 class="widget-title">Log in your <span>account</span></h3>
                                    <form action="#" class="login-form">
                                        <div class="form-grp">
                                            <label for="username">Email or Username <span>*</span></label>
                                            <input type="text" id="username" placeholder="Jon Deo" />
                                        </div>
                                        <div class="form-grp">
                                            <label for="password">Password <span>*</span></label>
                                            <input type="password" id="password" placeholder="*****" />
                                        </div>
                                        <p>Dont Have a Account? </p>
                                        <button class="btn-special">Login</button>
                                        
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;