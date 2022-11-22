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

    window.onload = function () {
      window.setTimeout(fadeout, 500)
    }

    function fadeout() {
      document.querySelector('.preloader').style.opacity = '0'
      document.querySelector('.preloader').style.display = 'none'
    }
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
