import AccountLoginGoogleImg from '../Assets/img/account-login/google.png'
import '../Assets/css/bootstrap.min.css'
import '../Assets/css/LineIcons.3.0.css'
import '../Assets/css/animate.css'
import '../Assets/css/tiny-slider.css'
import '../Assets/css/glightbox.min.css'
import '../Assets/scss/main.scss'
import 'bootstrap'
import { tns } from '../../node_modules/tiny-slider/src/tiny-slider'
import GLightbox from 'glightbox'
import { Link } from 'react-router-dom'
import React from 'react'
export default class Signin extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  componentDidMount() {
    document.title =
      'Sign In - CryptoLand Crypto Currency Landing Page Template.'
    new GLightbox({ selector: '.glightbox' })
  }

  render() {
    return (
      <div>
        <div className="preloader">
          <div className="preloader-inner">
            <div className="preloader-icon">
              <span />
              <span />
            </div>
          </div>
        </div>
        <div className="breadcrumbs">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
                <div className="breadcrumbs-content">
                  <h1 className="page-title">Sign In</h1>
                  <ul className="breadcrumb-nav">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Sign In</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="account-login section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
                <form className="card login-form inner-content" method="post">
                  <div className="card-body">
                    <div className="title">
                      <h3>Sign In Now</h3>
                      <p>Sign in by entering the information below.</p>
                    </div>
                    <div className="input-head">
                      <div className="form-group input-group">
                        <label>
                          <i className="lni lni-envelope" />
                        </label>
                        <input
                          className="form-control"
                          type="email"
                          id="reg-email"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                      <div className="form-group input-group">
                        <label>
                          <i className="lni lni-lock-alt" />
                        </label>
                        <input
                          className="form-control"
                          type="password"
                          id="reg-pass"
                          placeholder="Enter your password"
                          required
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between bottom-content">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input width-auto"
                          id="exampleCheck1"
                        />
                        <label className="form-check-label">Remember me</label>
                      </div>
                      <Link className="lost-pass" to="reset-password">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="button">
                      <button className="btn" type="submit">
                        Sign In
                      </button>
                    </div>
                    <div className="or">
                      <span>Or</span>
                    </div>
                    <div className="alt-option">
                      <span className="small-title">
                        Sign in with your work email
                      </span>
                      <a className="option-button" to="/">
                        <img
                          src={AccountLoginGoogleImg}
                          alt="AccountLoginGoogleImg"
                        />
                        Sign In With Google
                      </a>
                    </div>
                    <h4 className="create-account">
                      Don't have an account?{' '}
                      <Link to="signup">Sign Up Here</Link>
                    </h4>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <a href="#" className="scroll-top">
          <i className="lni lni-chevron-up" />
        </a>
      </div>
    )
  }
}
