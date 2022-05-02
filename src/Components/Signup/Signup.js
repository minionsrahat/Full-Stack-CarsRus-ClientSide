import React from 'react';

const Signup = () => {
    return (
        <>

            <section class="breadcrumb-area breadcrumb-bg title-background">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="breadcrumb-content  text-center">
                                <h2>Sign Up</h2>
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
                                    <h3 class="widget-title">Register</h3>
                                    <form action="#" class="login-form">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-grp">
                                                    <label for="userName">Username <span>*</span></label>
                                                    <input type="text" id="userName" placeholder="Jon Deo" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-grp">
                                                    <label for="password2">Your Password <span>*</span></label>
                                                    <input type="password" id="password2" placeholder="*****" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-grp">
                                                    <label for="email">Email <span>*</span></label>
                                                    <input type="email" id="email" placeholder="demo@info.com" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-grp">
                                                    <label for="phone">Your Phone</label>
                                                    <input type="text" id="phone" placeholder="+11.000000" />
                                                </div>
                                            </div>
                                        </div>
                                        <span class="or">Or</span>
                                        <ul class="action">
                                            <li>Continue with :</li>
                                            <li><a href="#"><img src="img/icon/google.png" alt="" /></a></li>
                                            <li><a href="#"><img src="img/icon/twitter.png" alt="" /></a></li>
                                        </ul>
                                        <button class="btn-special">Sign Up</button>
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

export default Signup;