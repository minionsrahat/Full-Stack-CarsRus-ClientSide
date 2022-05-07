import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase';
import GoogleButton from 'react-google-button'
import GithubButton from 'react-github-login-button'
import Spinner from '../Spinner/Spinner';

const Signup = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [cpass, setConfirmPassword] = useState('');
    const [user] = useAuthState(auth);
    // const [error, setError] = useState('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,loading, hookerror] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [signInWithGithub, githubuser,githubloading, githuberror] = useSignInWithGithub(auth);
    const [signInWithGoogle, googleUser, googleloading, googleerror] = useSignInWithGoogle(auth);
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';
    useEffect(() => {
        if (user) {
        
            fetch('http://localhost:5000/login',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({email:user?.email})
            })
            .then(res=>res.json())
            .then(data=>{
                const {token}=data
                if(token){
                    localStorage.setItem('accessToken',token)
                    console.log(token);
                    navigate(from, { replace: true })

                }
            })
        }
    }, [user])


    // if(loading||googleloading||githubloading)
    // {
    //     return <Spinner></Spinner>
    // }

    

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
        console.log(mail, password);
        if (password === cpass) {
            console.log(password);
            createUserWithEmailAndPassword(mail, password)
        }
    }

    const handleGoogleButton = () => {
        signInWithGoogle()
    }

    const handleGithubButton = () => {
        signInWithGithub();
        // console.log(githubuser);
    }

    // const handleResetPassword=async ()=>{
    //     if(!mail){
    //         toast("Oops!! you forgot to enter your mail!");
    //     }
    //     else{
    //         toast('Your reset password link sent to your mail!')
    //         await sendPasswordResetEmail(mail);
    //     }
    // }


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
                                                    <input onBlur={handleUserConfirmPassword} type="password" required id="password2" placeholder="*****" />
                                                </div>
                                            </div>
                                        </div>
                                        <p>Already Have a Account?<strong> <Link to="/login">Log In</Link></strong> </p>
                                        <button type='submit' className="btn-special mb-2">Sign Up</button>
                                        {hookerror ? <>
                                            <div className="text-center my-2">
                                                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                    <strong>{hookerror.message}</strong>
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