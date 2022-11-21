import LogoLogoWhiteImg from '../Assets/img/logo/logo-white.svg'
import { Link } from 'react-router-dom'
import React from 'react'
export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  componentDidMount() {}

  render() {
    return (
      <header className="header navbar-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="nav-inner">
                <nav className="navbar navbar-expand-lg">
                  <a className="navbar-brand" to="/">
                    <img src={LogoLogoWhiteImg} alt="Logo" />
                  </a>
                  <button
                    className="navbar-toggler mobile-menu-btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="toggler-icon" />
                    <span className="toggler-icon" />
                    <span className="toggler-icon" />
                  </button>
                  <div
                    className="collapse navbar-collapse sub-menu-bar"
                    id="navbarSupportedContent"
                  >
                    <ul id="nav" className="navbar-nav ms-auto">
                      <li className="nav-item">
                        <Link aria-label="Toggle navigation" to="/">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link aria-label="Toggle navigation" to="about-us">
                          About
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="dd-menu active collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#submenu-1-1"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                          to="/"
                        >
                          Pages
                        </Link>
                        <ul className="sub-menu collapse" id="submenu-1-1">
                          <li className="nav-item">
                            <Link to="about-us">About Us</Link>
                          </li>
                          <li className="nav-item">
                            <Link to="signin">Sign In</Link>
                          </li>
                          <li className="nav-item active">
                            <Link to="signup">Sign Up</Link>
                          </li>
                          <li className="nav-item">
                            <Link to="reset-password">Reset Password</Link>
                          </li>
                          <li className="nav-item">
                            <Link to="mail-success">Mail Success</Link>
                          </li>
                          <li className="nav-item">
                            <Link to={404}>404 Error</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="dd-menu collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#submenu-1-2"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                          to="/"
                        >
                          Blog
                        </Link>
                        <ul className="sub-menu collapse" id="submenu-1-2">
                          <li className="nav-item">
                            <Link to="blog-grid">Blog Grid</Link>
                          </li>
                          <li className="nav-item">
                            <Link to="blog-single">Blog Single</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link aria-label="Toggle navigation" to="contact">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="button">
                    <Link className="btn" to="signup">
                      Get started
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
