import '../Assets/css/bootstrap.min.css'
import '../Assets/css/LineIcons.3.0.css'
import '../Assets/css/animate.css'
import '../Assets/css/tiny-slider.css'
import '../Assets/css/glightbox.min.css'
import '../Assets/scss/main.scss'
import 'bootstrap'
import { tns } from '../../node_modules/tiny-slider/src/tiny-slider'
import GLightbox from 'glightbox'
import ReactWOW from 'react-wow'
import { Link } from 'react-router-dom'
import React from 'react'
export default class AboutUs extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  componentDidMount() {
    document.title =
      'About Us - CryptoLand Crypto Currency Landing Page Template.'
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

    //========= testimonial
    tns({
      container: '.testimonial-slider',
      items: 3,
      slideBy: 'page',
      autoplay: false,
      mouseDrag: true,
      gutter: 0,
      nav: true,
      controls: false,
      responsive: {
        0: {
          items: 1,
        },
        540: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 2,
        },
        1170: {
          items: 3,
        },
      },
    })

    //====== counter up
    var cu = new counterUp({
      start: 0,
      duration: 2000,
      intvalues: true,
      interval: 100,
      append: ' ',
    })
    cu.start()
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
                  <h1 className="page-title">About Us</h1>
                  <ul className="breadcrumb-nav">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>About Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="about section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-12">
                <ReactWOW animation="fadeInUp" delay=".4s" duration="undefined">
                  <div className="image">
                    <img src="https://via.placeholder.com/1440x1200" alt="#" />
                  </div>
                </ReactWOW>
              </div>
              <div className="col-lg-6 col-12">
                <ReactWOW animation="fadeInUp" delay=".7s" duration="undefined">
                  <div className="content">
                    <h4>DECENTRALISED ECONOMY</h4>
                    <h2>We’ve built a platform to buy and sell shares.</h2>
                    <p>
                      Spend real fights effective anything extra by leading.
                      Mouthwatering leading how real formula also locked-in have
                      can mountain thought. Jumbo plus shine sale.
                    </p>
                    <div className="list">
                      <div className="single-list">
                        <div className="list-icon">
                          <i className="lni lni-checkmark" />
                        </div>
                        <h4>Modular structure</h4>
                        <p>Quis autem vel eum reprehenderit</p>
                      </div>
                      <div className="single-list">
                        <div className="list-icon">
                          <i className="lni lni-checkmark" />
                        </div>
                        <h4>Advanced payment</h4>
                        <p>Quis autem vel eum reprehenderit</p>
                      </div>
                      <div className="single-list">
                        <div className="list-icon">
                          <i className="lni lni-checkmark" />
                        </div>
                        <h4>Mining Service</h4>
                        <p>Quis autem vel eum reprehenderit</p>
                      </div>
                    </div>
                  </div>
                </ReactWOW>
              </div>
            </div>
          </div>
        </section>
        <section className="start-process dark section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <ReactWOW animation="zoomIn" delay=".2s" duration="undefined">
                    <h3 className>Ready to get started?</h3>
                  </ReactWOW>
                  <ReactWOW
                    animation="fadeInUp"
                    delay=".4s"
                    duration="undefined"
                  >
                    <h2 className>3 Steps To Start</h2>
                  </ReactWOW>
                  <ReactWOW
                    animation="fadeInUp"
                    delay=".6s"
                    duration="undefined"
                  >
                    <p className>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </p>
                  </ReactWOW>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12">
                <div className="single-process">
                  <span className="serial">01</span>
                  <h3>Create Your Wallet</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quos consectetur tidio.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <div className="single-process">
                  <span className="serial">02</span>
                  <h3>Make Payment</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quos consectetur tidio.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <div className="single-process">
                  <span className="serial">03</span>
                  <h3>Buy &amp; Sell Coins</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quos consectetur tidio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials style2 section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <ReactWOW animation="zoomIn" delay=".2s" duration="undefined">
                    <h3 className>Customer Reviews</h3>
                  </ReactWOW>
                  <ReactWOW
                    animation="fadeInUp"
                    delay=".4s"
                    duration="undefined"
                  >
                    <h2 className>Our Testimonials</h2>
                  </ReactWOW>
                  <ReactWOW
                    animation="fadeInUp"
                    delay=".6s"
                    duration="undefined"
                  >
                    <p className>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </p>
                  </ReactWOW>
                </div>
              </div>
            </div>
            <div className="row testimonial-slider">
              <div className="col-lg-6 col-12 ">
                <div className="single-testimonial">
                  <div className="inner-content">
                    <div className="quote-icon">
                      <i className="lni lni-quotation" />
                    </div>
                    <div className="text">
                      <p>
                        “A vast number of clients decide to create dedicated
                        software is the online store. It is nothing but a
                        website with a catalog of products and the possibility.”
                      </p>
                    </div>
                    <div className="author">
                      <img src="https://via.placeholder.com/100x100" alt="#" />
                      <h4 className="name">
                        Somalia D Silva
                        <span className="deg">Business Manager</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 ">
                <div className="single-testimonial">
                  <div className="inner-content">
                    <div className="quote-icon">
                      <i className="lni lni-quotation" />
                    </div>
                    <div className="text">
                      <p>
                        “A vast number of clients decide to create dedicated
                        software is the online store. It is nothing but a
                        website with a catalog of products and the possibility.”
                      </p>
                    </div>
                    <div className="author">
                      <img src="https://via.placeholder.com/100x100" alt="#" />
                      <h4 className="name">
                        David Warner
                        <span className="deg">Blockchain Developer</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 ">
                <div className="single-testimonial">
                  <div className="inner-content">
                    <div className="quote-icon">
                      <i className="lni lni-quotation" />
                    </div>
                    <div className="text">
                      <p>
                        “A vast number of clients decide to create dedicated
                        software is the online store. It is nothing but a
                        website with a catalog of products and the possibility.”
                      </p>
                    </div>
                    <div className="author">
                      <img src="https://via.placeholder.com/100x100" alt="#" />
                      <h4 className="name">
                        Jems Gilario
                        <span className="deg">Graphics Designer</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 ">
                <div className="single-testimonial">
                  <div className="inner-content">
                    <div className="quote-icon">
                      <i className="lni lni-quotation" />
                    </div>
                    <div className="text">
                      <p>
                        “A vast number of clients decide to create dedicated
                        software is the online store. It is nothing but a
                        website with a catalog of products and the possibility.”
                      </p>
                    </div>
                    <div className="author">
                      <img src="https://via.placeholder.com/100x100" alt="#" />
                      <h4 className="name">
                        David Warner
                        <span className="deg">Web Developer</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 ">
                <div className="single-testimonial">
                  <div className="inner-content">
                    <div className="quote-icon">
                      <i className="lni lni-quotation" />
                    </div>
                    <div className="text">
                      <p>
                        “A vast number of clients decide to create dedicated
                        software is the online store. It is nothing but a
                        website with a catalog of products and the possibility.”
                      </p>
                    </div>
                    <div className="author">
                      <img src="https://via.placeholder.com/100x100" alt="#" />
                      <h4 className="name">
                        Jems Gilario
                        <span className="deg">Graphics Designer</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="team section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <ReactWOW animation="zoomIn" delay=".2s" duration="undefined">
                    <h3 className>Expert Team</h3>
                  </ReactWOW>
                  <ReactWOW
                    animation="fadeInUp"
                    delay=".4s"
                    duration="undefined"
                  >
                    <h2 className>Meet Our Team</h2>
                  </ReactWOW>
                  <ReactWOW
                    animation="fadeInUp"
                    delay=".6s"
                    duration="undefined"
                  >
                    <p className>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </p>
                  </ReactWOW>
                </div>
              </div>
            </div>
            <div className="row">
              <ReactWOW animation="fadeInUp" delay=".3s" duration="undefined">
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="single-team">
                    <div className="team-image">
                      <img src="https://via.placeholder.com/400x400" alt="#" />
                    </div>
                    <div className="content">
                      <h4>
                        Deco Milan
                        <span>Founder</span>
                      </h4>
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
                      </ul>
                    </div>
                  </div>
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeInUp" delay=".5s" duration="undefined">
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="single-team">
                    <div className="team-image">
                      <img src="https://via.placeholder.com/400x400" alt="#" />
                    </div>
                    <div className="content">
                      <h4>
                        Liza Marko
                        <span>Developer</span>
                      </h4>
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
                      </ul>
                    </div>
                  </div>
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeInUp" delay=".7s" duration="undefined">
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="single-team">
                    <div className="team-image">
                      <img src="https://via.placeholder.com/400x400" alt="#" />
                    </div>
                    <div className="content">
                      <h4>
                        John Smith
                        <span>Designer</span>
                      </h4>
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
                      </ul>
                    </div>
                  </div>
                </div>
              </ReactWOW>
              <ReactWOW animation="fadeInUp" delay=".9s" duration="undefined">
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="single-team">
                    <div className="team-image">
                      <img src="https://via.placeholder.com/400x400" alt="#" />
                    </div>
                    <div className="content">
                      <h4>
                        Amion Doe
                        <span>Co-Founder</span>
                      </h4>
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
                      </ul>
                    </div>
                  </div>
                </div>
              </ReactWOW>
            </div>
          </div>
        </section>
        <div className="client-logo">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-12 text-center">
                <div className="single-logo">
                  <img src="https://via.placeholder.com/200x100" alt="#" />
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-12 text-center">
                <div className="single-logo">
                  <img src="https://via.placeholder.com/200x100" alt="#" />
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-12 text-center">
                <div className="single-logo">
                  <img src="https://via.placeholder.com/200x100" alt="#" />
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-12 text-center">
                <div className="single-logo">
                  <img src="https://via.placeholder.com/200x100" alt="#" />
                </div>
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
