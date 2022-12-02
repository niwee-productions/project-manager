import '../Assets/css/bootstrap.min.css'
import '../Assets/css/LineIcons.3.0.css'
import '../Assets/css/animate.css'
import '../Assets/css/tiny-slider.css'
import '../Assets/css/glightbox.min.css'
import '../Assets/scss/main.scss'
import '../Assets/css/pacman.css'
import 'bootstrap'
import { tns } from '../../node_modules/tiny-slider/src/tiny-slider'
import GLightbox from 'glightbox'
import { Link } from 'react-router-dom'
import React from 'react'
export default class NotFound extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  componentDidMount() {
    document.title =
      '404 Error - CryptoLand Crypto Currency Landing Page Template.'
  }

  render() {
    return (
      <div>

        <div className="error-area">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="error-content">
                  <h1>404</h1>
                  <h2>
                    Oups
                    <br /> we have a problem.
                  </h2>
                  <p>
                    Take a break and eat a... <br />
                    Oh Wait, are you coming? <br />
                    We're going to play a little game!{' '}
                  </p>
                  <div id="pacman" />
                  <br />
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
