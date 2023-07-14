import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase';
import GoogleButton from 'react-google-button'
import GithubButton from 'react-github-login-button'
import Spinner from '../Spinner/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [cpass, setConfirmPassword] = useState('');
    const [user,loading] = useAuthState(auth);
    // const [error, setError] = useState('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword, hookuser,hookloading,
        hookerror] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [signInWithGithub, githubuser, githubloading, githuberror] = useSignInWithGithub(auth);
    const [signInWithGoogle, googleUser, googleloading, googleerror] = useSignInWithGoogle(auth);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    useEffect(() => {
        if (user) {

            fetch('https://carsrus.onrender.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: user?.email })
            })
                .then(res => res.json())
                .then(data => {
                    const { token } = data
                    if (token) {
                        localStorage.setItem('accessToken', token)
                        navigate(from, { replace: true })

                    }
                })
        }
    }, [user])

    if(hookloading||googleloading||githubloading)
    {
        return <Spinner></Spinner>
    }



    const handleUserMail = (e) => {
        setMail(e.target.value);
    }
    const handleUserPassword = (e) => {
        setPassword(e.target.value);
    }
    const handleUserConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleFormsubmit = (e) => {
        e.preventDefault();
        // console.log(mail, password);
        if (password === cpass) {
            createUserWithEmailAndPassword(mail, password)
        }
        else {
            toast("Oops!! Your password and confirmed password didnt match.");

        }
    }

    const handleGoogleButton = () => {
        signInWithGoogle()
    }

    const handleGithubButton = () => {
        signInWithGithub();
        // console.log(githubuser);
    }

   

    return (
        <>

            <section className="breadcrumb-area breadcrumb-bg title-background">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-content  text-center">
                                <h2>Sign Up</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="login-register-area gray-lite pb-120">
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <div className="container">
                    <div className="login-reg-wrap">
                        <div className="row no-gutters">
                            <div className="col-lg-6 mx-auto">
                                <div className="login-wrap">
                                    <h3 className="widget-title">Register</h3>
                                    <form action="#" onSubmit={handleFormsubmit} className="login-form">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <label for="userName">Username <span>*</span></label>
                                                    <input type="text" id="userName" required placeholder="Jon Deo" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <label for="email">Email <span>*</span></label>
                                                    <input onBlur={handleUserMail} required type="email" id="email" placeholder="demo@info.com" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <label for="password2">Your Password <span>*</span></label>
                                                    <input onBlur={handleUserPassword} type="password" required id="password2" placeholder="*****" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <label for="password2">Confirm Password <span>*</span></label>
                                                    <input onBlur={handleUserConfirmPassword} type="password" required id="password3" placeholder="*****" />
                                                </div>
                                            </div>
                                        </div>
                                        <p>Already Have a Account?<strong> <Link to="/login">Log In</Link></strong> </p>
                                        <button type='submit' className="btn-special mb-2">Sign Up</button>
                                        {hookerror || googleerror || githuberror ? <>
                                            <div className="text-center my-2">
                                                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                    <strong>{hookerror?.message}{googleerror?.message}{githuberror?.message}</strong>
                                                </div>
                                            </div>
                                        </> : ''}
                                        <hr />

                                        <div className="text-center d-flex align-items-center flex-column">
                                            <h5>Or Continue with :</h5>
                                            <GoogleButton
                                                onClick={handleGoogleButton} className="mb-3"
                                            />
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

export default Signup;