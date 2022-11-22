import LogoLogoWhiteImg from '../Assets/img/logo/logo-white.svg'
import { Link } from 'react-router-dom'
import React from 'react'
export default class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  componentDidMount() {}

  render() {
    return (
      <footer className="footer section">
        <div className="footer-top">
          <div className="container">
            <div className="inner-content">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="single-footer f-about">
                    <div className="logo">
                      <a to="/">
                        <img src={LogoLogoWhiteImg} alt="LogoLogoWhiteImg" />
                      </a>
                    </div>
                    <p>
                      Making the world a better place through constructing
                      elegant hierarchies.
                    </p>
                    <h4 className="social-title">Follow Us On:</h4>
                    <ul className="social">
                      <li>
                        <Link to="/">
                          <i className="lni lni-facebook-filled" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="lni lni-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="lni lni-twitter-original" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="lni lni-Linkedin-original" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="lni lni-pinterest" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="lni lni-youtube" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-12">
                  <div className="single-footer f-Link">
                    <h3>Solutions</h3>
                    <ul>
                      <li>
                        <Link to="/">Marketing</Link>
                      </li>
                      <li>
                        <Link to="/">Analytics</Link>
                      </li>
                      <li>
                        <Link to="/">Commerce</Link>
                      </li>
                      <li>
                        <Link to="/">Insights</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-12">
                  <div className="single-footer f-Link">
                    <h3>Support</h3>
                    <ul>
                      <li>
                        <Link to="/">Pricing</Link>
                      </li>
                      <li>
                        <Link to="/">Documentation</Link>
                      </li>
                      <li>
                        <Link to="/">Guides</Link>
                      </li>
                      <li>
                        <Link to="/">API Status</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="single-footer newsletter">
                    <h3>Subscribe</h3>
                    <p>Subscribe to our newsletter for the latest updates</p>
                    <form
                      action="#"
                      method="get"
                      target="_blank"
                      className="newsletter-form"
                    >
                      <input
                        name="EMAIL"
                        placeholder="Email address"
                        required="required"
                        type="email"
                      />
                      <div className="button">
                        <button className="sub-btn">
                          <i className="lni lni-envelope" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="inner-content">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <p className="copyright-text">
                    © 2023 CryptoLand - All Rights Reserved
                  </p>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <p className="copyright-owner">
                    Designed and Developed by{' '}
                    <a
                      href="https://uideck.com/"
                      rel="nofollow"
                      target="_blank"
                    >
                      UIdeck
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
