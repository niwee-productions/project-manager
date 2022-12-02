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
export default class MailSuccess extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  componentDidMount() {
    document.title =
      'Mail Success - CryptoLand Crypto Currency Landing Page Template.'
    new GLightbox({ selector: '.glightbox' })
  }

  render() {
    return (
      <div>
        <div className="maill-success">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="success-content">
                  <h1>Awesome!</h1>
                  <p>
                    Your message sent successfully, We will <br /> get back to
                    you asap.
                  </p>
                  <div className="button">
                    <Link className="btn" to="/">
                      Back to Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
