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
export default class ResetPassword extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  componentDidMount() {
    document.title =
      'Reset Password - CryptoLand Crypto Currency Landing Page Template.'
    new GLightbox({ selector: '.glightbox' })
  }

  render() {
    return (
      <div>
        {/*<div className="breadcrumbs">*/}
        {/*  <div className="container">*/}
        {/*    <div className="row align-items-center">*/}
        {/*      <div className="col-lg-6 offset-lg-3 col-md-12 col-12">*/}
        {/*        <div className="breadcrumbs-content">*/}
        {/*          <h1 className="page-title">Reset Password</h1>*/}
        {/*          <ul className="breadcrumb-nav">*/}
        {/*            <li>*/}
        {/*              <Link to="/">Home</Link>*/}
        {/*            </li>*/}
        {/*            <li>Reset Password</li>*/}
        {/*          </ul>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className="account-login section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
                <form className="card login-form inner-content" method="post">
                  <div className="card-body">
                    <div className="title">
                      <h3>Reset Password</h3>
                      <p>
                        Need to reset your password? No problem! Just enter your
                        email &amp; click the button below.
                      </p>
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
                    </div>
                    <div className="button" style={{ marginTop: 20 }}>
                      <button className="btn" type="submit">
                        Send Rest Link
                      </button>
                    </div>
                    <h4 className="create-account">
                      Login to your account <Link to="signin">Click here</Link>
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
