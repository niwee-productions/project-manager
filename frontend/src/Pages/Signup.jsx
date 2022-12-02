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
export default class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  componentDidMount() {
    document.title =
      'Sign Up - CryptoLand Crypto Currency Landing Page Template.'
    new GLightbox({ selector: '.glightbox' })
  }

  render() {
    return (
      <div>
        <div className="breadcrumbs">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
                <div className="breadcrumbs-content">
                  <h1 className="page-title">Sign Up</h1>
                  <ul className="breadcrumb-nav">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Sign Up</li>
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
                      <h3>Sign Up Now</h3>
                      <p>Use the form below to create your account.</p>
                    </div>
                    <div className="alt-option">
                      <span className="small-title">
                        Sign up with your work email
                      </span>
                      <a className="option-button" to="/">
                        <img
                          src={AccountLoginGoogleImg}
                          alt="AccountLoginGoogleImg"
                        />
                        Sign Up With Google
                      </a>
                    </div>
                    <div className="or">
                      <span>Or</span>
                    </div>
                    <div className="input-head">
                      <div className="row">
                        <div className="col-lg-6 col-12">
                          <div className="form-group input-group">
                            <label>
                              <i className="lni lni-user" />
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Your name"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-12">
                          <div className="form-group input-group">
                            <label>
                              <i className="lni lni-envelope" />
                            </label>
                            <input
                              className="form-control"
                              type="email"
                              placeholder="Your email"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group input-group">
                        <label>
                          <i className="lni lni-lock-alt" />
                        </label>
                        <input
                          className="form-control"
                          type="password"
                          placeholder="Your password"
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
                          placeholder="Confirm password"
                          required
                        />
                      </div>
                    </div>
                    <div className="button">
                      <button className="btn" type="submit">
                        Create Account
                      </button>
                    </div>
                    <h4 className="create-account">
                      Already have an account? <Link to="signin">Sign In</Link>
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
