import React, { useEffect, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import GoogleButton from 'react-google-button'
import GithubButton from 'react-github-login-button'
import auth from '../../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../Spinner/Spinner';
const Login = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,hookuser,hookloading,
        hookerror,
    ] = useSignInWithEmailAndPassword(auth);
    const [user] = useAuthState(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [signInWithGoogle, googleUser, googleloading, googleerror] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubuser,githubloading, githuberror] = useSignInWithGithub(auth);

    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

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
                        console.log(token);
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
    const handleFormsubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(mail, password)
    }

    const handleGoogleButton = () => {
        signInWithGoogle()
    }
    const handleGithubButton = () => {
        signInWithGithub();

    }
    if(hookerror)
    {
        console.log(hookerror);
    }
    const handleResetPassword = async () => {
        if (!mail) {
            toast("Oops!! you forgot to enter your mail!");
        }
        else {
            toast('Your reset password link sent to your mail!')
            await sendPasswordResetEmail(mail);
        }
    }

    return (
        <>
            <section className="breadcrumb-area breadcrumb-bg title-background">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-content  text-center">
                                <h2>Login</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="login-register-area gray-lite pb-120">
                <div className="container">
                    <div className="login-reg-wrap">
                        <div className="row no-gutters">
                            <div className="col-lg-6 mx-auto">
                                <div className="login-wrap">
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
                                    <h3 className="widget-title">Log in your <span>account</span></h3>
                                    <form action="#" onSubmit={handleFormsubmit} className="login-form">
                                        <div className="form-grp">
                                            <label for="username">Email or Username <span>*</span></label>
                                            <input type="text" onBlur={handleUserMail} required id="username" placeholder="Jon Deo" />
                                        </div>
                                        <div className="form-grp">
                                            <label for="password">Password <span>*</span></label>
                                            <input onBlur={handleUserPassword} required type="password" id="password" placeholder="*****" />
                                        </div>
                                        <p>Dont Have a Account?<strong> <Link to="/signup">Sign Up</Link></strong> </p>
                                        <p>Forgot Password? <strong onClick={handleResetPassword}>Reset Password</strong> </p>
                                        <button className="btn-special" type='submit'>Login</button>
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
                                                onClick={handleGoogleButton} className="mb-3" />
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