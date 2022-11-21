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
    function counterUp(t) {
      'use strict'
      this.defaults = {
        duration: 3e3,
        prepend: '',
        append: '%',
        selector: '.countup',
        start: 0,
        end: 100,
        intvalues: !1,
        interval: 100,
      }
      var e = this
      ;(this.upating = !1), (this.intervalID = null), (this.props = {})
      for (var r in this.defaults)
        'undefined' != typeof r &&
          ((e.props[r] = e.defaults[r]),
          t.hasOwnProperty(r) &&
            e.props.hasOwnProperty(r) &&
            (e.props[r] = t[r]))
      ;(this.domelems = document.querySelectorAll(this.props.selector)),
        (this.elems = [])
      var n = {}
      this.domelems.forEach(function (t) {
        n.obj = t
        var r = parseInt(t.getAttribute('cup-start'))
        isNaN(r) ? (n.start = e.props.start) : (n.start = r)
        var p = parseInt(t.getAttribute('cup-end'))
        isNaN(p) ? (n.end = e.props.end) : (n.end = p)
        var a = parseInt(t.getAttribute('cup-duration'))
        isNaN(a) ? (n.duration = e.props.duration) : (n.duration = a)
        var s = t.getAttribute('cup-prepend')
        null == s ? (n.prepend = e.props.prepend) : (n.prepend = s)
        var i = t.getAttribute('cup-append')
        null == i ? (n.append = e.props.append) : (n.append = i)
        var o = t.getAttribute('cup-intval')
        null == o ? (n.intvalues = e.props.intvalues) : (n.intvalues = o),
          (n.step = (n.end - n.start) / (n.duration / e.props.interval)),
          (n.val = n.start),
          e.elems.push(n),
          (n = {})
      })
    }
    ;(counterUp.prototype.start = function () {
      'use strict'
      var t = this
      this.intervalID = setInterval(function () {
        t.updating || t.update()
      }, t.props.interval)
    }),
      (counterUp.prototype.update = function () {
        'use strict'
        this.updating = !0
        var t = !0
        this.elems.forEach(function (e) {
          ;(e.val += e.step),
            e.val < e.end
              ? (1 == e.intvalues
                  ? (e.obj.innerHTML =
                      e.prepend + Math.floor(e.val).toString() + e.append)
                  : (e.obj.innerHTML =
                      e.prepend +
                      (Math.round(100 * e.val) / 100).toString() +
                      e.append),
                (t = !1))
              : (e.obj.innerHTML = e.prepend + e.end.toString() + e.append)
        }),
          1 == t && clearInterval(this.intervalID),
          (this.updating = !1)
      })
    /*
Template Name: CryptoLand - Crypto Currency Landing Page Template.
Author: GrayGrids
*/

    ;(function () {
      //===== Prealoder

      window.onload = function () {
        window.setTimeout(fadeout, 500)
      }

      function fadeout() {
        document.querySelector('.preloader').style.opacity = '0'
        document.querySelector('.preloader').style.display = 'none'
      }

      /*=====================================
    Sticky
    ======================================= */
      window.onscroll = function () {
        var header_navbar = document.querySelector('#accueil.navbar-area')
        var sticky = header_navbar.offsetTop

        var logo = document.querySelector('.navbar-brand img')
        if (window.pageYOffset > sticky) {
          header_navbar.classList.add('sticky')
          logo.src = 'assets/images/logo/logo-alone.svg'
        } else {
          header_navbar.classList.remove('sticky')
          logo.src = 'assets/images/logo/logo-white.svg'
        }

        // show or hide the back-top-top button
        var backToTo = document.querySelector('.scroll-top')
        if (
          document.body.scrollTop > 50 ||
          document.documentElement.scrollTop > 50
        ) {
          backToTo.style.display = 'flex'
        } else {
          backToTo.style.display = 'none'
        }
      }

      // WOW active

      //===== mobile-menu-btn
      let navbarToggler = document.querySelector('.mobile-menu-btn')
      navbarToggler.addEventListener('click', function () {
        navbarToggler.classList.toggle('active')
      })
    })()
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
