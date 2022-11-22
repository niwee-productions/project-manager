import LeadLead_1Img from '../Assets/img/dashboard/lead/lead-1.png'
import LeadLead_2Img from '../Assets/img/dashboard/lead/lead-2.png'
import LeadLead_3Img from '../Assets/img/dashboard/lead/lead-3.png'
import LeadLead_4Img from '../Assets/img/dashboard/lead/lead-4.png'
import LeadLead_5Img from '../Assets/img/dashboard/lead/lead-5.png'
import LeadLead_6Img from '../Assets/img/dashboard/lead/lead-6.png'
import '../Assets/css/bootstrap.min.css'
import '../Assets/css/lineicons.css'
import '../Assets/css/materialdesignicons.min.css'
import '../Assets/css/fullcalendar.css'
import '../Assets/css/main.css'
import 'bootstrap'
import { Link } from 'react-router-dom'
import React from 'react'
export default class HumanRessource extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  componentDidMount() {
    document.title = 'By Niwee - Human Ressources'
  }

  render() {
    return (
      <div>
        <aside className="sidebar-nav-wrapper">
          <div className="navbar-logo">
            <a to="/">
              <img src="/assets/images/logo/logo-alone.svg" alt="logo" />
            </a>
          </div>
          <nav className="sidebar-nav">
            <ul>
              <li className="nav-item">
                <Link className="active" aria-label="Toggle navigation" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="active"
                  aria-label="Toggle navigation"
                  to="client"
                >
                  Client
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="active"
                  aria-label="Toggle navigation"
                  to="project"
                >
                  Project
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="active"
                  aria-label="Toggle navigation"
                  to="calendar"
                >
                  Calendar
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="active"
                  aria-label="Toggle navigation"
                  to="human-ressource"
                >
                  Ressources
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="active"
                  aria-label="Toggle navigation"
                  to="ticket"
                >
                  Tickets
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="active"
                  aria-label="Toggle navigation"
                  to="mail"
                >
                  Email
                </Link>
              </li>
              <li className="nav-item">
                <Link className="active" aria-label="Toggle navigation" to="/">
                  Chat
                </Link>
              </li>
              <li className="nav-item">
                <a to="./dashboard/notification">
                  <span className="icon">
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.16667 19.25H12.8333C12.8333 20.2584 12.0083 21.0834 11 21.0834C9.99167 21.0834 9.16667 20.2584 9.16667 19.25ZM19.25 17.4167V18.3334H2.75V17.4167L4.58333 15.5834V10.0834C4.58333 7.24171 6.41667 4.76671 9.16667 3.94171V3.66671C9.16667 2.65837 9.99167 1.83337 11 1.83337C12.0083 1.83337 12.8333 2.65837 12.8333 3.66671V3.94171C15.5833 4.76671 17.4167 7.24171 17.4167 10.0834V15.5834L19.25 17.4167ZM15.5833 10.0834C15.5833 7.51671 13.5667 5.50004 11 5.50004C8.43333 5.50004 6.41667 7.51671 6.41667 10.0834V16.5H15.5833V10.0834Z" />
                    </svg>
                  </span>
                  <span className="text">Notifications</span>
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <div className="overlay" />
        <main className="main-wrapper">
          <section className="table-components">
            <div className="container-fluid">
              <div className="title-wrapper pt-30">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="title mb-30">
                      <h2>Human Ressources</h2>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="breadcrumb-wrapper mb-30">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <Link to="dashboard">Dashboard</Link>
                          </li>
                          <li
                            className="breadcrumb-item active"
                            aria-current="page"
                          >
                            Human Ressources
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="card-style mb-30">
                    <h6 className="mb-10">Human Ressources Table</h6>
                    <div className="table-wrapper table-responsive">
                      <div className="card-style mb-30">
                        <div className="table-wrapper table-responsive"></div>
                      </div>
                      <table className="table"></table>
                      <table className="table">
                        <thead>
                          <tr>
                            <th>
                              <h6>Lead</h6>
                            </th>
                            <th>
                              <h6>Email</h6>
                            </th>
                            <th>
                              <h6>Phone No</h6>
                            </th>
                            <th>
                              <h6>Company</h6>
                            </th>
                            <th>
                              <h6>Action</h6>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="min-width">
                              <div className="lead">
                                <div className="lead-image">
                                  <img
                                    src={LeadLead_1Img}
                                    alt="LeadLead_1Img"
                                  />
                                </div>
                                <div className="lead-text">
                                  <p>Courtney Henry</p>
                                </div>
                              </div>
                            </td>
                            <td className="min-width">
                              <p>
                                <a href="#0">yourmail@gmail.com</a>
                              </p>
                            </td>
                            <td className="min-width">
                              <p>(303)555 3343523</p>
                            </td>
                            <td className="min-width">
                              <p>UIdeck digital agency</p>
                            </td>
                            <td>
                              <div className="action">
                                <button className="text-danger">
                                  <i className="lni lni-trash-can" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="min-width">
                              <div className="lead">
                                <div className="lead-image">
                                  <img
                                    src={LeadLead_2Img}
                                    alt="LeadLead_2Img"
                                  />
                                </div>
                                <div className="lead-text">
                                  <p>JOhn Doe</p>
                                </div>
                              </div>
                            </td>
                            <td className="min-width">
                              <p>
                                <a href="#0">yourmail@gmail.com</a>
                              </p>
                            </td>
                            <td className="min-width">
                              <p>(303)555 3343523</p>
                            </td>
                            <td className="min-width">
                              <p>Graygrids digital agency</p>
                            </td>
                            <td>
                              <div className="action">
                                <button className="text-danger">
                                  <i className="lni lni-trash-can" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="min-width">
                              <div className="lead">
                                <div className="lead-image">
                                  <img
                                    src={LeadLead_3Img}
                                    alt="LeadLead_3Img"
                                  />
                                </div>
                                <div className="lead-text">
                                  <p>David Smith</p>
                                </div>
                              </div>
                            </td>
                            <td className="min-width">
                              <p>
                                <a href="#0">yourmail@gmail.com</a>
                              </p>
                            </td>
                            <td className="min-width">
                              <p>(303)555 3343523</p>
                            </td>
                            <td className="min-width">
                              <p>Abc agency</p>
                            </td>
                            <td>
                              <div className="action">
                                <button className="text-danger">
                                  <i className="lni lni-trash-can" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="min-width">
                              <div className="lead">
                                <div className="lead-image">
                                  <img
                                    src={LeadLead_4Img}
                                    alt="LeadLead_4Img"
                                  />
                                </div>
                                <div className="lead-text">
                                  <p>Jonathon</p>
                                </div>
                              </div>
                            </td>
                            <td className="min-width">
                              <p>
                                <a href="#0">yourmail@gmail.com</a>
                              </p>
                            </td>
                            <td className="min-width">
                              <p>(303)555 3343523</p>
                            </td>
                            <td className="min-width">
                              <p>Creative IT Agency</p>
                            </td>
                            <td>
                              <div className="action">
                                <button className="text-danger">
                                  <i className="lni lni-trash-can" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="lead">
                                <div className="lead-image">
                                  <img
                                    src={LeadLead_5Img}
                                    alt="LeadLead_5Img"
                                  />
                                </div>
                                <div className="lead-text">
                                  <p>Anna Lee</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p>
                                <a href="#0">yourmail@gmail.com</a>
                              </p>
                            </td>
                            <td>
                              <p>(303)555 3343523</p>
                            </td>
                            <td>
                              <p>Halal It agency</p>
                            </td>
                            <td>
                              <div className="action">
                                <button className="text-danger">
                                  <i className="lni lni-trash-can" />
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="lead">
                                <div className="lead-image">
                                  <img
                                    src={LeadLead_6Img}
                                    alt="LeadLead_6Img"
                                  />
                                </div>
                                <div className="lead-text">
                                  <p>Gray Simon</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p>
                                <a href="#0">yourmail@gmail.com</a>
                              </p>
                            </td>
                            <td>
                              <p>(303)555 3343523</p>
                            </td>
                            <td>
                              <p>DesignCourse</p>
                            </td>
                            <td>
                              <div className="action">
                                <button className="text-danger">
                                  <i className="lni lni-trash-can" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }
}
