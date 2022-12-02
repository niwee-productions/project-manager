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
export default class BlogSingle extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  componentDidMount() {
    document.title =
      'Blog Single - CryptoLand Crypto Currency Landing Page Template.'
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
                  <h1 className="page-title">Blog Single Sidebar</h1>
                  <ul className="breadcrumb-nav">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Blog Single Sidebar</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section blog-single">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 col-12">
                <div className="single-inner">
                  <div className="post-details">
                    <div className="main-content-head">
                      <div className="post-thumbnils">
                        <img
                          src="https://via.placeholder.com/2000x1330"
                          alt="#"
                        />
                      </div>
                      <div className="meta-information">
                        <h2 className="post-title">
                          Google Pushes Crypto Into Mainstream With Bitcoin, ETH
                        </h2>
                        <ul className="meta-info">
                          <li>
                            <Link to="/">By Martin King</Link>
                          </li>
                          <li>
                            <Link to="/">20 Jun 2023</Link>
                          </li>
                          <li>
                            <Link to="/">Marketing</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="detail-inner">
                        <p>
                          With over 25,000 customers worldwide, Appex is the
                          world leading analytics and marketing suite for
                          Instagram and a partner of the world's most-loved
                          brands such as National Geographic, Gucci, Marc
                          Jacobs, Samsung, Emirates and more.
                        </p>
                        <p>
                          As a Customer Support Specialist, we expect you to be
                          up-to-date with the latest digital technologies and
                          social media trends. You should have excellent
                          communication skills and be able to assist our
                          customers in a fast, efficient and professional
                          manner. If you enjoy fixing issues and helping improve
                          the overall customer experience, this job is for you!
                        </p>
                        <h3>How We Do A Concert In Pandemic</h3>
                        <div className="image-block">
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-12">
                              <img
                                src="https://via.placeholder.com/1200x800"
                                alt="#"
                              />
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                              <img
                                src="https://via.placeholder.com/1200x800"
                                alt="#"
                              />
                            </div>
                          </div>
                        </div>
                        <p>
                          Bring to the table win-win survival strategies to
                          ensure proactive domination. At the end of the day,
                          going forward, a new normal that has evolved from
                          generation X is on the runway
                        </p>
                        <p>
                          Heading towards a streamlined cloud solution. User
                          generated content in real-time will have multiple
                          touchpoints for offshoring Capitalize on low hanging
                          fruit to identify a ballpark value added activity to
                          beta test. Override the digital divide with additional
                        </p>
                        <h3>Security and Reliability</h3>
                        <p>
                          Capitalize on low hanging fruit to identify a ballpark
                          value added activity to beta test. Override the
                          digital divide with additional clickthroughs from
                          DevOps. Nanotechnology immersion along the information
                          highway will close the loop on focusing solely on the
                          bottom line.
                        </p>
                        <blockquote>
                          <div className="icon">
                            <i className="lni lni-quotation" />
                          </div>
                          <h4>
                            "Don't demand that things happen as you wish, but
                            wish that they happen as they do happen, and you
                            will go on well."
                          </h4>
                          <span>- Epictetus, The Enchiridion</span>
                        </blockquote>
                        <h3>Setting the mood with incense</h3>
                        <p>
                          Bring to the table win-win survival strategies to
                          ensure proactive domination. At the end of the day,
                          going forward, a new normal that has evolved from
                          generation X is on the runway heading towards a
                          streamlined cloud solution. User generated content in
                          real-time
                        </p>
                        <p>
                          Completely synergize resource taxing relationships via
                          premier niche markets. Professionally cultivate
                          one-to-one customer service with robust ideas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-comments">
                  <h3 className="comment-title">
                    <span>02 Comments on this post</span>
                  </h3>
                  <ul className="comments-list">
                    <li>
                      <div className="comment-img">
                        <img
                          src="https://via.placeholder.com/150x150"
                          alt="img"
                        />
                      </div>
                      <div className="comment-desc">
                        <div className="desc-top">
                          <h6>Wiliym Smith</h6>
                          <span className="date">28 Dec 2023</span>
                          <Link className="reply-Link" to="/">
                            <i className="lni lni-reply" />
                            Reply
                          </Link>
                        </div>
                        <p>
                          Donec aliquam ex ut odio dictum, ut consequat leo
                          interdum. Aenean nunc ipsum, blandit eu enim sed,
                          facilisis convallis orci. Etiam commodo lectus quis
                          vulputate tincidunt. Mauris tristique velit eu magna
                          maximus condimentum.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="comment-img">
                        <img
                          src="https://via.placeholder.com/150x150"
                          alt="img"
                        />
                      </div>
                      <div className="comment-desc">
                        <div className="desc-top">
                          <h6>Jenifer Lofez</h6>
                          <span className="date">25 Mar 2023</span>
                          <Link className="reply-Link" to="/">
                            <i className="lni lni-reply" />
                            Reply
                          </Link>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="comment-form">
                  <h3 className="comment-reply-title">Leave a comment</h3>
                  <form action="#" method="POST">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-box form-group">
                          <input
                            type="text"
                            name="name"
                            className="form-control form-control-custom"
                            placeholder="Name*"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-box form-group">
                          <input
                            type="email"
                            name="email"
                            className="form-control form-control-custom"
                            placeholder="Email*"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-box form-group">
                          <textarea
                            name="#"
                            className="form-control form-control-custom"
                            placeholder="Comments*"
                            defaultValue={''}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="button">
                          <button type="submit" className="btn">
                            Post Comment
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
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
