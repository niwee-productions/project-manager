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
export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  componentDidMount() {
    document.title =
      'Contact Us - CryptoLand Crypto Currency Landing Page Template.'
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
                  <h1 className="page-title">Contact Us</h1>
                  <ul className="breadcrumb-nav">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-us section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="contact-widget-wrapper">
                  <div className="main-title">
                    <h2>Contact Us</h2>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered.
                    </p>
                  </div>
                  <div className="contact-widget-block">
                    <h3 className="title">Call us</h3>
                    <p>+14-394-409-591</p>
                  </div>
                  <div className="contact-widget-block">
                    <h3 className="title">Email us</h3>
                    <p>info@mail.com</p>
                    <p>support@mail.com</p>
                  </div>
                  <div className="contact-widget-block">
                    <h3 className="title">Our Address</h3>
                    <p>34 Madison Street,</p>
                    <p>NY, USA 10005</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="contact-form">
                  <h3 className="form-title">Leave a message here</h3>
                  <form
                    className="form"
                    method="post"
                    action="assets/mail/mail.php"
                  >
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <input
                            name="name"
                            type="text"
                            placeholder="Name*"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <input
                            name="email"
                            type="email"
                            placeholder="Email*"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <input
                            name="subject"
                            type="text"
                            placeholder="Subject*"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <input
                            name="phone"
                            type="text"
                            placeholder="Phone*"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <textarea
                            placeholder="Message*"
                            name="message"
                            id="message-area"
                            className="form-control"
                            defaultValue={''}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="button">
                          <button type="submit" className="btn ">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="map-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe
                      width="100%"
                      height={500}
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      frameBorder={0}
                      scrolling="no"
                      marginHeight={0}
                      marginWidth={0}
                    />
                  </div>
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
