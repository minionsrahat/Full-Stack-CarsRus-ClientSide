import React, { useEffect, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import GoogleButton from 'react-google-button'
import GithubButton from 'react-github-login-button'
import auth from '../../firebase';
const Login = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookerror,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [signInWithGoogle, googleUser, googleloading, googleerror] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubuser, githuberror] = useSignInWithGithub(auth);

    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user])

    useEffect(() => {
        if (googleUser) {
            navigate(from);
        }
    }, [googleUser])

    useEffect(() => {
        if (githubuser) {
            navigate(from);
        }
    }, [githubuser])


    const handleUserMail = (e) => {
        setMail(e.target.value);
    }
    const handleUserPassword = (e) => {
        setPassword(e.target.value);
    }
    const handleFormsubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(mail,password)
    }

    const handleGoogleButton = () => {
        signInWithGoogle()
    }
    const handleGithubButton = () => {
        signInWithGithub();
        console.log(githubuser);
    }

    // const handleResetPassword = async () => {
    //     if (!mail) {
    //         toast("Oops!! you forgot to enter your mail!");
    //     }
    //     else {
    //         toast('Your reset password link sent to your mail!')
    //         await sendPasswordResetEmail(mail);
    //     }
    // }
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
                                    <form action="#" onSubmit={handleFormsubmit} class="login-form">
                                        <div class="form-grp">
                                            <label for="username">Email or Username <span>*</span></label>
                                            <input type="text"onBlur={handleUserMail} required id="username" placeholder="Jon Deo" />
                                        </div>
                                        <div class="form-grp">
                                            <label for="password">Password <span>*</span></label>
                                            <input onBlur={handleUserPassword} required type="password" id="password" placeholder="*****" />
                                        </div>
                                        <p>Dont Have a Account?<strong> <Link to="/signup">Sign Up</Link></strong> </p>
                                        <button class="btn-special">Login</button>

                                        <hr />
                                        <div className="text-center d-flex align-items-center flex-column">
                                        <h5>Or Continue with :</h5>
                                        <GoogleButton
                                            onClick={handleGoogleButton} className="mb-3"/>
                                        <GithubButton className="mb-3" onClick={handleGithubButton}></GithubButton>
                                        </div>
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