import React, { useContext } from 'react'
import '../styles/main.css'
import '../styles/pages/login.css'
import logo from '../images/logo.png';
import { ReactComponent as EmailIcon } from '../svgs/email.svg';
import { ReactComponent as PasswordIcon } from '../svgs/password.svg';
import { ReactComponent as GoogleIcon } from '../svgs/google.svg';
import { ReactComponent as LinkedInIcon } from '../svgs/linkedin.svg';
import { ReactComponent as GithubIcon } from '../svgs/github.svg';
import { ReactComponent as FacebookIcon } from '../svgs/facebook.svg';
import { AuthContext } from '../App';
import { useHistory } from 'react-router';

function Login() {
  const { dispatch } = useContext(AuthContext)
  const history = useHistory();

  const handleLogin = () => {
    // Fake login!
    dispatch!({
      type: 'AUTHORIZE', payload: {
        fullName: 'John Doe',
        emailAddress: 'john.doe@aybu.edu.tr',
        rememberMe: true,
        isLoggedIn: true
      }
    })
    history.push('/dashboard');
  }

  return (
    <div className="container">
      {/* Left Side  */}
      <div className="container__left">
        {/* Logo */}
        <img src={logo} alt="logo" className="container__logo" />

        {/* Title */}
        <h1 className="container__title">Login</h1>

        {/* Subtitle */}
        <p className="container__subtitle">Welcome to AYBU Alumni, enter your credentials to continue</p>

        {/* Form */}
        <form className="container__form">

          {/* E-mail Address */}
          <div className="container__form__group">
            <label htmlFor="emailAddress" className="container__form__label">E-mail Address</label>
            <div className="container__form__input-group">
              <EmailIcon className="container__form__icon" />
              <input id="emailAddress" type="text" className="container__form__input" placeholder="john.doe@aybu.edu.tr" />
            </div>
          </div>

          {/* Password */}
          <div className="container__form__group">
            <label htmlFor="password" className="container__form__label">Password</label>
            <div className="container__form__input-group">
              <PasswordIcon className="container__form__icon" />
              <input id="password" type="password" className="container__form__input" placeholder="*********" />
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="container__form__flex">
            <div className="container__form__next">
              <input type="checkbox" name="rememberMe" id="rememberMe" className="container__form__checkbox" />
              <label htmlFor="rememberMe" className="container__form__label">Remember Me</label>
            </div>
            <p className="container__form__link">Forgot password?</p>
          </div>

          {/* Login Button */}
          <button className="container__form__button" onClick={(e) => {e.preventDefault(); handleLogin();}}>Login</button>

          {/* Don't you have an account link */}
          <p className="container__form__text">Don't you have an account? <span className="container__form__link">Sign up.</span></p>

          {/* Login With Divider */}
          <p className="container__form__text--divider">OR LOGIN WITH</p>

          {/* Social Media Logins */}
          <div className="container__form__medias">
            <div className="container__form__media">
              <GoogleIcon />
            </div>
            <div className="container__form__media">
              <LinkedInIcon />
            </div>
            <div className="container__form__media">
              <GithubIcon />
            </div>
            <div className="container__form__media">
              <FacebookIcon />
            </div>
          </div>
        </form>
      </div>

      {/* Right Side */}
      <div className="container__right image_bg"></div>
    </div>
  )
}

export default Login
