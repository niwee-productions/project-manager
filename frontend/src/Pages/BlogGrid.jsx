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
