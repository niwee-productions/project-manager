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
export default class BlogGrid extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  componentDidMount() {
    document.title =
      'Blog Grid- CryptoLand Crypto Currency Landing Page Template.'
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
                  <h1 className="page-title">Blog Grid Sidebar</h1>
                  <ul className="breadcrumb-nav">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Blog Grid Sidebar</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section blog-grid-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 col-12">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="single-blog-grid">
                      <div className="blog-img">
                        <a to="blog-single">
                          <img
                            src="https://via.placeholder.com/500x310"
                            alt="#"
                          />
                        </a>
                      </div>
                      <div className="blog-content">
                        <div className="meta-info">
                          <a className="date" to="/">
                            <i className="lni lni-timer" /> 10 June 2023
                          </a>
                          <a className="author" to="/">
                            <i className="lni lni-user" /> Anjelio Joly
                          </a>
                        </div>
                        <h4>
                          <Link to="blog-single">
                            The Intersection Where Blockchain Meets Energy.
                          </Link>
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, adipscing elitr, sit
                          gifted sed diam nonumy eirmod tempor ividunt dolore.
                        </p>
                        <div className="button">
                          <Link className="btn" to="blog-single">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="single-blog-grid">
                      <div className="blog-img">
                        <a to="blog-single">
                          <img
                            src="https://via.placeholder.com/500x310"
                            alt="#"
                          />
                        </a>
                      </div>
                      <div className="blog-content">
                        <div className="meta-info">
                          <a className="date" to="/">
                            <i className="lni lni-timer" /> 5 Aug 2023
                          </a>
                          <a className="author" to="/">
                            <i className="lni lni-user" /> Kumila ksusi
                          </a>
                        </div>
                        <h4>
                          <Link to="blog-single">
                            Pros &amp; Cons of Premined Cryptocurrencies.
                          </Link>
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, adipscing elitr, sit
                          gifted sed diam nonumy eirmod tempor ividunt dolore.
                        </p>
                        <div className="button">
                          <Link className="btn" to="blog-single">
                            Read Blog
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="single-blog-grid">
                      <div className="blog-img">
                        <a to="blog-single">
                          <img
                            src="https://via.placeholder.com/500x310"
                            alt="#"
                          />
                        </a>
                      </div>
                      <div className="blog-content">
                        <div className="meta-info">
                          <a className="date" to="/">
                            <i className="lni lni-timer" /> 25 Dec 2023
                          </a>
                          <a className="author" to="/">
                            <i className="lni lni-user" /> Alex Jendro
                          </a>
                        </div>
                        <h4>
                          <Link to="blog-single">
                            How &amp; Where To Market Your ICO Startup.
                          </Link>
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, adipscing elitr, sit
                          gifted sed diam nonumy eirmod tempor ividunt dolore.
                        </p>
                        <div className="button">
                          <Link className="btn" to="blog-single">
                            Read Blog
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="single-blog-grid">
                      <div className="blog-img">
                        <a to="blog-single">
                          <img
                            src="https://via.placeholder.com/500x310"
                            alt="#"
                          />
                        </a>
                      </div>
                      <div className="blog-content">
                        <div className="meta-info">
                          <a className="date" to="/">
                            <i className="lni lni-timer" /> 10 June 2023
                          </a>
                          <a className="author" to="/">
                            <i className="lni lni-user" /> Anjelio Joly
                          </a>
                        </div>
                        <h4>
                          <Link to="blog-single">
                            The Intersection Where Blockchain Meets Energy.
                          </Link>
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, adipscing elitr, sit
                          gifted sed diam nonumy eirmod tempor ividunt dolore.
                        </p>
                        <div className="button">
                          <Link className="btn" to="blog-single">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="single-blog-grid">
                      <div className="blog-img">
                        <a to="blog-single">
                          <img
                            src="https://via.placeholder.com/500x310"
                            alt="#"
                          />
                        </a>
                      </div>
                      <div className="blog-content">
                        <div className="meta-info">
                          <a className="date" to="/">
                            <i className="lni lni-timer" /> 5 Aug 2023
                          </a>
                          <a className="author" to="/">
                            <i className="lni lni-user" /> Kumila ksusi
                          </a>
                        </div>
                        <h4>
                          <Link to="blog-single">
                            Pros &amp; Cons of Premined Cryptocurrencies.
                          </Link>
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, adipscing elitr, sit
                          gifted sed diam nonumy eirmod tempor ividunt dolore.
                        </p>
                        <div className="button">
                          <Link className="btn" to="blog-single">
                            Read Blog
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="single-blog-grid">
                      <div className="blog-img">
                        <a to="blog-single">
                          <img
                            src="https://via.placeholder.com/500x310"
                            alt="#"
                          />
                        </a>
                      </div>
                      <div className="blog-content">
                        <div className="meta-info">
                          <a className="date" to="/">
                            <i className="lni lni-timer" /> 25 Dec 2023
                          </a>
                          <a className="author" to="/">
                            <i className="lni lni-user" /> Alex Jendro
                          </a>
                        </div>
                        <h4>
                          <Link to="blog-single">
                            How &amp; Where To Market Your ICO Startup.
                          </Link>
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, adipscing elitr, sit
                          gifted sed diam nonumy eirmod tempor ividunt dolore.
                        </p>
                        <div className="button">
                          <Link className="btn" to="blog-single">
                            Read Blog
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pagination left">
                  <ul className="pagination-list">
                    <li>
                      <Link to="/">Prev</Link>
                    </li>
                    <li className="active">
                      <Link to="/">2</Link>
                    </li>
                    <li>
                      <Link to="/">3</Link>
                    </li>
                    <li>
                      <Link to="/">4</Link>
                    </li>
                    <li>
                      <Link to="/">Next</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <aside className="col-lg-4 col-md-12 col-12">
                <div className="sidebar">
                  <div className="widget search-widget">
                    <h5 className="widget-title">Search This Site</h5>
                    <form action="#">
                      <input type="text" placeholder="Search ..." />
                      <button type="submit">
                        <i className="lni lni-search-alt" />
                      </button>
                    </form>
                  </div>
                  <div className="widget popular-feeds">
                    <h5 className="widget-title">Trending News</h5>
                    <div className="popular-feed-loop">
                      <div className="single-popular-feed">
                        <div className="feed-desc">
                          <h6 className="post-title">
                            <a to="blog-single">
                              Bringing Great Design Ideas To Completion
                            </a>
                          </h6>
                          <span className="time">
                            <i className="lni lni-calendar" /> 05th Nov 2023
                          </span>
                        </div>
                      </div>
                      <div className="single-popular-feed">
                        <div className="feed-desc">
                          <h6 className="post-title">
                            <a to="blog-single">
                              Live Life Smart And Focus On The Positive
                            </a>
                          </h6>
                          <span className="time">
                            <i className="lni lni-calendar" /> 24th March 2023
                          </span>
                        </div>
                      </div>
                      <div className="single-popular-feed">
                        <div className="feed-desc">
                          <h6 className="post-title">
                            <a to="blog-single">
                              How did we get 1M+ visitors in 30 days without
                              anything!
                            </a>
                          </h6>
                          <span className="time">
                            <i className="lni lni-calendar" /> 30th Jan 2023
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="widget categories-widget">
                    <h5 className="widget-title">Categories</h5>
                    <ul className="custom">
                      <li>
                        <Link to="/">Blockchain</Link>
                      </li>
                      <li>
                        <Link to="/">Technology</Link>
                      </li>
                      <li>
                        <Link to="/">Startup</Link>
                      </li>
                      <li>
                        <Link to="/">Cryptocurrency</Link>
                      </li>
                      <li>
                        <Link to="/">Technology</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="widget popular-tag-widget">
                    <h5 className="widget-title">Popular Tags</h5>
                    <div className="tags">
                      <Link to="/">crypto</Link>
                      <Link to="/">Consultation</Link>
                      <Link to="/">Case</Link>
                      <Link to="/">Attorney</Link>
                      <Link to="/">BTC</Link>
                      <Link to="/">Crypto Currency</Link>
                      <Link to="/">Dollar</Link>
                      <Link to="/">Ethereum</Link>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
        <a href="#" className="scroll-top">
          <i className="lni lni-chevron-up" />
        </a>
      </div>
    )
  }
}
