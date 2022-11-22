import LeadLead_1Img from '../Assets/img/dashboard/lead/lead-1.png'
import LeadLead_2Img from '../Assets/img/dashboard/lead/lead-2.png'
import LeadLead_3Img from '../Assets/img/dashboard/lead/lead-3.png'
import LeadLead_4Img from '../Assets/img/dashboard/lead/lead-4.png'
import LeadLead_5Img from '../Assets/img/dashboard/lead/lead-5.png'
import LeadLead_6Img from '../Assets/img/dashboard/lead/lead-6.png'
import ProductsProductMini_1Img from '../Assets/img/dashboard/products/product-mini-1.jpg'
import ProductsProductMini_2Img from '../Assets/img/dashboard/products/product-mini-2.jpg'
import ProductsProductMini_3Img from '../Assets/img/dashboard/products/product-mini-3.jpg'
import ProductsProductMini_4Img from '../Assets/img/dashboard/products/product-mini-4.jpg'
import '../Assets/css/bootstrap.min.css'
import '../Assets/css/lineicons.css'
import '../Assets/css/materialdesignicons.min.css'
import '../Assets/css/fullcalendar.css'
import '../Assets/css/main.css'
import 'bootstrap'
import { Link } from 'react-router-dom'
import React from 'react'
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  componentDidMount() {
    document.title = 'By Niwee - Dashboard'
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
                      <h2>Tables</h2>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="breadcrumb-wrapper mb-30">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a href="#0">Dashboard</a>
                          </li>
                          <li
                            className="breadcrumb-item active"
                            aria-current="page"
                          >
                            Tables
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tables-wrapper">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card-style mb-30">
                      <h6 className="mb-10">Data Table</h6>
                      <p className="text-sm mb-20">
                        For basic styling—light padding and only horizontal
                        dividers—use the class table.
                      </p>
                      <div className="table-wrapper table-responsive">
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
                <div className="row">
                  <div className="col-lg-6">
                    <div className="card-style mb-30">
                      <h6 className="mb-10">Striped Table</h6>
                      <p className="text-sm mb-20">
                        For Striped Table—light padding and only horizontal
                        dividers.
                      </p>
                      <div className="table-wrapper table-responsive">
                        <table className="table striped-table">
                          <thead>
                            <tr>
                              <th />
                              <th>
                                <h6>Account No</h6>
                              </th>
                              <th>
                                <h6>Balance</h6>
                              </th>
                              <th>
                                <h6>Action</h6>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="check-input-primary">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="checkbox-1"
                                  />
                                </div>
                              </td>
                              <td>
                                <p>AC336 508 2157</p>
                              </td>
                              <td>
                                <p>$523</p>
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
                                <div className="check-input-primary">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="checkbox-2"
                                  />
                                </div>
                              </td>
                              <td>
                                <p>AC336 756 0987</p>
                              </td>
                              <td>
                                <p>$123</p>
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
                                <div className="check-input-primary">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="checkbox-3"
                                  />
                                </div>
                              </td>
                              <td>
                                <p>AC336 098 8765</p>
                              </td>
                              <td>
                                <p>$223</p>
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
                                <div className="check-input-primary">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="checkbox-4"
                                  />
                                </div>
                              </td>
                              <td>
                                <p>AC336 897 3242</p>
                              </td>
                              <td>
                                <p>$323</p>
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
                                <div className="check-input-primary">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="checkbox-5"
                                  />
                                </div>
                              </td>
                              <td>
                                <p>AC336 654 0987</p>
                              </td>
                              <td>
                                <p>$423</p>
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
                                <div className="check-input-primary">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="checkbox-6"
                                  />
                                </div>
                              </td>
                              <td>
                                <p>AC336 234 9804</p>
                              </td>
                              <td>
                                <p>$523</p>
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
                  <div className="col-lg-6">
                    <div className="card-style mb-30">
                      <h6 className="mb-10">Table head options</h6>
                      <p className="text-sm mb-20">
                        Use one of two modifier classes to make thead appear
                        light or dark gray.
                      </p>
                      <div className="table-wrapper table-responsive">
                        <table className="table striped-table">
                          <thead>
                            <tr>
                              <th />
                              <th>
                                <h6>First Name</h6>
                              </th>
                              <th>
                                <h6>Last Name</h6>
                              </th>
                              <th>
                                <h6>Username</h6>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <h6 className="text-sm">#1</h6>
                              </td>
                              <td>
                                <p>Albert</p>
                              </td>
                              <td>
                                <p>Miles</p>
                              </td>
                              <td>
                                <p>@albert_miles</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h6 className="text-sm">#2</h6>
                              </td>
                              <td>
                                <p>John</p>
                              </td>
                              <td>
                                <p>Doe</p>
                              </td>
                              <td>
                                <p>@john_doe</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h6 className="text-sm">#3</h6>
                              </td>
                              <td>
                                <p>David</p>
                              </td>
                              <td>
                                <p>Smith</p>
                              </td>
                              <td>
                                <p>@davidsmith</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h6 className="text-sm">#4</h6>
                              </td>
                              <td>
                                <p>Jameel</p>
                              </td>
                              <td>
                                <p>Kareem</p>
                              </td>
                              <td>
                                <p>@jkreem</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h6 className="text-sm">#5</h6>
                              </td>
                              <td>
                                <p>Anna</p>
                              </td>
                              <td>
                                <p>Miles</p>
                              </td>
                              <td>
                                <p>@anna_miles</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h6 className="text-sm">#6</h6>
                              </td>
                              <td>
                                <p>Hafiz</p>
                              </td>
                              <td>
                                <p>Miles</p>
                              </td>
                              <td>
                                <p>@hafiz_miles</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card-style mb-30">
                      <h6 className="mb-10">Data Table</h6>
                      <p className="text-sm mb-20">
                        For basic styling—light padding and only horizontal
                        dividers—use the class table.
                      </p>
                      <div className="table-wrapper table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>
                                <h6>#</h6>
                              </th>
                              <th>
                                <h6>Name</h6>
                              </th>
                              <th>
                                <h6>Email</h6>
                              </th>
                              <th>
                                <h6>Project</h6>
                              </th>
                              <th>
                                <h6>Status</h6>
                              </th>
                              <th>
                                <h6>Action</h6>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="employee-image">
                                  <img
                                    src={LeadLead_1Img}
                                    alt="LeadLead_1Img"
                                  />
                                </div>
                              </td>
                              <td className="min-width">
                                <p>Esther Howard</p>
                              </td>
                              <td className="min-width">
                                <p>
                                  <a href="#0">yourmail@gmail.com</a>
                                </p>
                              </td>
                              <td className="min-width">
                                <p>Admin Dashboard Design</p>
                              </td>
                              <td className="min-width">
                                <span className="status-btn active-btn">
                                  Active
                                </span>
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
                                <div className="employee-image">
                                  <img
                                    src={LeadLead_2Img}
                                    alt="LeadLead_2Img"
                                  />
                                </div>
                              </td>
                              <td className="min-width">
                                <p>D. Jonathon</p>
                              </td>
                              <td className="min-width">
                                <p>
                                  <a href="#0">yourmail@gmail.com</a>
                                </p>
                              </td>
                              <td className="min-width">
                                <p>React Dashboard</p>
                              </td>
                              <td className="min-width">
                                <span className="status-btn active-btn">
                                  Active
                                </span>
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
                                <div className="employee-image">
                                  <img
                                    src={LeadLead_3Img}
                                    alt="LeadLead_3Img"
                                  />
                                </div>
                              </td>
                              <td>
                                <p>John Doe</p>
                              </td>
                              <td>
                                <p>
                                  <a href="#0">yourmail@gmail.com</a>
                                </p>
                              </td>
                              <td>
                                <p>Bootstrap Template</p>
                              </td>
                              <td>
                                <span className="status-btn success-btn">
                                  Done
                                </span>
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
                                <div className="employee-image">
                                  <img
                                    src={LeadLead_4Img}
                                    alt="LeadLead_4Img"
                                  />
                                </div>
                              </td>
                              <td>
                                <p>Rayhan Jamil</p>
                              </td>
                              <td>
                                <p>
                                  <a href="#0">yourmail@gmail.com</a>
                                </p>
                              </td>
                              <td>
                                <p>Css Grid Template</p>
                              </td>
                              <td>
                                <span className="status-btn info-btn">
                                  Pending
                                </span>
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
                                <div className="employee-image">
                                  <img
                                    src={LeadLead_5Img}
                                    alt="LeadLead_5Img"
                                  />
                                </div>
                              </td>
                              <td>
                                <p>Esther Howard</p>
                              </td>
                              <td>
                                <p>
                                  <a href="#0">yourmail@gmail.com</a>
                                </p>
                              </td>
                              <td>
                                <p>Admin Dashboard Design</p>
                              </td>
                              <td>
                                <span className="status-btn close-btn">
                                  Close
                                </span>
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
                                <div className="employee-image">
                                  <img
                                    src={LeadLead_6Img}
                                    alt="LeadLead_6Img"
                                  />
                                </div>
                              </td>
                              <td>
                                <p>Anee Doe</p>
                              </td>
                              <td>
                                <p>
                                  <a href="#0">yourmail@gmail.com</a>
                                </p>
                              </td>
                              <td>
                                <p>Space Template Update</p>
                              </td>
                              <td>
                                <span className="status-btn active-btn">
                                  Active
                                </span>
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
            </div>
          </section>
          <section className="section">
            <div className="container-fluid">
              <div className="title-wrapper pt-30">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="title mb-30">
                      <h2>eCommerce Dashboard</h2>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="breadcrumb-wrapper mb-30">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a href="#0">Dashboard</a>
                          </li>
                          <li
                            className="breadcrumb-item active"
                            aria-current="page"
                          >
                            eCommerce
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="icon-card mb-30">
                    <div className="icon purple">
                      <i className="lni lni-cart-full" />
                    </div>
                    <div className="content">
                      <h6 className="mb-10">New Orders</h6>
                      <h3 className="text-bold mb-10">34567</h3>
                      <p className="text-sm text-success">
                        <i className="lni lni-arrow-up" /> +2.00%
                        <span className="text-gray">(30 days)</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="icon-card mb-30">
                    <div className="icon success">
                      <i className="lni lni-dollar" />
                    </div>
                    <div className="content">
                      <h6 className="mb-10">Total Income</h6>
                      <h3 className="text-bold mb-10">$74,567</h3>
                      <p className="text-sm text-success">
                        <i className="lni lni-arrow-up" /> +5.45%
                        <span className="text-gray">Increased</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="icon-card mb-30">
                    <div className="icon primary">
                      <i className="lni lni-credit-cards" />
                    </div>
                    <div className="content">
                      <h6 className="mb-10">Total Expense</h6>
                      <h3 className="text-bold mb-10">$24,567</h3>
                      <p className="text-sm text-danger">
                        <i className="lni lni-arrow-down" /> -2.00%
                        <span className="text-gray">Expense</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="icon-card mb-30">
                    <div className="icon orange">
                      <i className="lni lni-user" />
                    </div>
                    <div className="content">
                      <h6 className="mb-10">New User</h6>
                      <h3 className="text-bold mb-10">34567</h3>
                      <p className="text-sm text-danger">
                        <i className="lni lni-arrow-down" /> -25.00%
                        <span className="text-gray"> Earning</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-7">
                  <div className="card-style mb-30">
                    <div className="title d-flex flex-wrap justify-content-between">
                      <div className="left">
                        <h6 className="text-medium mb-10">
                          Yearly subscription
                        </h6>
                        <h3 className="text-bold">$245,479</h3>
                      </div>
                      <div className="right">
                        <div className="select-style-1">
                          <div className="select-position select-sm">
                            <select className="light-bg">
                              <option value>Yearly</option>
                              <option value>Monthly</option>
                              <option value>Weekly</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chart">
                      <canvas
                        id="Chart1"
                        style={{ width: '100%', height: 400 }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="card-style mb-30">
                    <div
                      className="
              title
              d-flex
              flex-wrap
              align-items-center
              justify-content-between
            "
                    >
                      <div className="left">
                        <h6 className="text-medium mb-30">Sales/Revenue</h6>
                      </div>
                      <div className="right">
                        <div className="select-style-1">
                          <div className="select-position select-sm">
                            <select className="light-bg">
                              <option value>Yearly</option>
                              <option value>Monthly</option>
                              <option value>Weekly</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chart">
                      <canvas
                        id="Chart2"
                        style={{ width: '100%', height: 400 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <div className="card-style mb-30">
                    <div
                      className="
              title
              d-flex
              justify-content-between
              align-items-center
            "
                    >
                      <div className="left">
                        <h6 className="text-medium mb-30">Sells by State</h6>
                      </div>
                    </div>
                    <div id="map" style={{ width: '100%', height: 400 }} />
                    <p>Last updated: 7 days ago</p>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="card-style mb-30">
                    <div
                      className="
              title
              d-flex
              flex-wrap
              justify-content-between
              align-items-center
            "
                    >
                      <div className="left">
                        <h6 className="text-medium mb-30">
                          Top Selling Products
                        </h6>
                      </div>
                      <div className="right">
                        <div className="select-style-1">
                          <div className="select-position select-sm">
                            <select className="light-bg">
                              <option value>Yearly</option>
                              <option value>Monthly</option>
                              <option value>Weekly</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table top-selling-table">
                        <thead>
                          <tr>
                            <th />
                            <th>
                              <h6 className="text-sm text-medium">Products</h6>
                            </th>
                            <th className="min-width">
                              <h6 className="text-sm text-medium">Category</h6>
                            </th>
                            <th className="min-width">
                              <h6 className="text-sm text-medium">Price</h6>
                            </th>
                            <th className="min-width">
                              <h6 className="text-sm text-medium">Sold</h6>
                            </th>
                            <th className="min-width">
                              <h6 className="text-sm text-medium">Profit</h6>
                            </th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="check-input-primary">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkbox-1"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="product">
                                <div className="image">
                                  <img
                                    src={ProductsProductMini_1Img}
                                    alt="ProductsProductMini_1Img"
                                  />
                                </div>
                                <p className="text-sm">Arm Chair</p>
                              </div>
                            </td>
                            <td>
                              <p className="text-sm">Interior</p>
                            </td>
                            <td>
                              <p className="text-sm">$345</p>
                            </td>
                            <td>
                              <p className="text-sm">43</p>
                            </td>
                            <td>
                              <p className="text-sm">$45</p>
                            </td>
                            <td>
                              <div className="action justify-content-end">
                                <button
                                  className="more-btn ml-10 dropdown-toggle"
                                  id="moreAction1"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="lni lni-more-alt" />
                                </button>
                                <ul
                                  className="dropdown-menu dropdown-menu-end"
                                  aria-labelledby="moreAction1"
                                >
                                  <li className="dropdown-item">
                                    <a href="#0" className="text-gray">
                                      Remove
                                    </a>
                                  </li>
                                  <li className="dropdown-item">
                                    <a href="#0" className="text-gray">
                                      Edit
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="check-input-primary">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkbox-1"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="product">
                                <div className="image">
                                  <img
                                    src={ProductsProductMini_2Img}
                                    alt="ProductsProductMini_2Img"
                                  />
                                </div>
                                <p className="text-sm">SOfa</p>
                              </div>
                            </td>
                            <td>
                              <p className="text-sm">Interior</p>
                            </td>
                            <td>
                              <p className="text-sm">$145</p>
                            </td>
                            <td>
                              <p className="text-sm">13</p>
                            </td>
                            <td>
                              <p className="text-sm">$15</p>
                            </td>
                            <td>
                              <div className="action justify-content-end">
                                <button
                                  className="more-btn ml-10 dropdown-toggle"
                                  id="moreAction1"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="lni lni-more-alt" />
                                </button>
                                <ul
                                  className="dropdown-menu dropdown-menu-end"
                                  aria-labelledby="moreAction1"
                                >
                                  <li className="dropdown-item">
                                    <a href="#0" className="text-gray">
                                      Remove
                                    </a>
                                  </li>
                                  <li className="dropdown-item">
                                    <a href="#0" className="text-gray">
                                      Edit
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="check-input-primary">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkbox-1"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="product">
                                <div className="image">
                                  <img
                                    src={ProductsProductMini_3Img}
                                    alt="ProductsProductMini_3Img"
                                  />
                                </div>
                                <p className="text-sm">Dining Table</p>
                              </div>
                            </td>
                            <td>
                              <p className="text-sm">Interior</p>
                            </td>
                            <td>
                              <p className="text-sm">$95</p>
                            </td>
                            <td>
                              <p className="text-sm">32</p>
                            </td>
                            <td>
                              <p className="text-sm">$215</p>
                            </td>
                            <td>
                              <div className="action justify-content-end">
                                <button
                                  className="more-btn ml-10 dropdown-toggle"
                                  id="moreAction1"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="lni lni-more-alt" />
                                </button>
                                <ul
                                  className="dropdown-menu dropdown-menu-end"
                                  aria-labelledby="moreAction1"
                                >
                                  <li className="dropdown-item">
                                    <a href="#0" className="text-gray">
                                      Remove
                                    </a>
                                  </li>
                                  <li className="dropdown-item">
                                    <a href="#0" className="text-gray">
                                      Edit
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="check-input-primary">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkbox-1"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="product">
                                <div className="image">
                                  <img
                                    src={ProductsProductMini_4Img}
                                    alt="ProductsProductMini_4Img"
                                  />
                                </div>
                                <p className="text-sm">Office Chair</p>
                              </div>
                            </td>
                            <td>
                              <p className="text-sm">Interior</p>
                            </td>
                            <td>
                              <p className="text-sm">$105</p>
                            </td>
                            <td>
                              <p className="text-sm">23</p>
                            </td>
                            <td>
                              <p className="text-sm">$345</p>
                            </td>
                            <td>
                              <div className="action justify-content-end">
                                <button
                                  className="more-btn ml-10 dropdown-toggle"
                                  id="moreAction1"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="lni lni-more-alt" />
                                </button>
                                <ul
                                  className="dropdown-menu dropdown-menu-end"
                                  aria-labelledby="moreAction1"
                                >
                                  <li className="dropdown-item">
                                    <a href="#0" className="text-gray">
                                      Remove
                                    </a>
                                  </li>
                                  <li className="dropdown-item">
                                    <a href="#0" className="text-gray">
                                      Edit
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-7">
                  <div className="card-style mb-30">
                    <div
                      className="
              title
              d-flex
              flex-wrap
              align-items-center
              justify-content-between
            "
                    >
                      <div className="left">
                        <h6 className="text-medium mb-2">Sales Forecast</h6>
                      </div>
                      <div className="right">
                        <div className="select-style-1 mb-2">
                          <div className="select-position select-sm">
                            <select className="light-bg">
                              <option value>Last Month</option>
                              <option value>Last 3 Months</option>
                              <option value>Last Year</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chart">
                      <div id="legend3">
                        <ul className="legend3 d-flex flex-wrap align-items-center mb-30">
                          <li>
                            <div className="d-flex">
                              <span className="bg-color primary-bg"> </span>
                              <div className="text">
                                <p className="text-sm text-success">
                                  <span className="text-dark">Revenue</span>{' '}
                                  +25.55%
                                  <i className="lni lni-arrow-up" />
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="d-flex">
                              <span className="bg-color purple-bg" />
                              <div className="text">
                                <p className="text-sm text-success">
                                  <span className="text-dark">Net Profit</span>{' '}
                                  +45.55%
                                  <i className="lni lni-arrow-up" />
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="d-flex">
                              <span className="bg-color orange-bg" />
                              <div className="text">
                                <p className="text-sm text-danger">
                                  <span className="text-dark">Order</span> -4.2%
                                  <i className="lni lni-arrow-down" />
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <canvas
                        id="Chart3"
                        style={{ width: '100%', height: 450 }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="card-style mb-30">
                    <div
                      className="
              title
              d-flex
              flex-wrap
              align-items-center
              justify-content-between
            "
                    >
                      <div className="left">
                        <h6 className="text-medium mb-2">Traffic</h6>
                      </div>
                      <div className="right">
                        <div className="select-style-1 mb-2">
                          <div className="select-position select-sm">
                            <select className="bg-ligh">
                              <option value>Last 6 Months</option>
                              <option value>Last 3 Months</option>
                              <option value>Last Year</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chart">
                      <div id="legend4">
                        <ul className="legend3 d-flex flex-wrap align-items-center mb-30">
                          <li>
                            <div className="d-flex">
                              <span className="bg-color primary-bg"> </span>
                              <div className="text">
                                <p className="text-sm text-success">
                                  <span className="text-dark">
                                    Store Visits
                                  </span>
                                  +25.55%
                                  <i className="lni lni-arrow-up" />
                                </p>
                                <h2>3456</h2>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="d-flex">
                              <span className="bg-color danger-bg" />
                              <div className="text">
                                <p className="text-sm text-danger">
                                  <span className="text-dark">Visitors</span>{' '}
                                  -2.05%
                                  <i className="lni lni-arrow-down" />
                                </p>
                                <h2>3456</h2>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <canvas
                        id="Chart4"
                        style={{ width: '100%', height: 420 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <div className="card-style calendar-card mb-30">
                    <div id="calendar-mini" />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="card-style mb-30">
                    <div
                      className="
              title
              d-flex
              flex-wrap
              align-items-center
              justify-content-between
            "
                    >
                      <div className="left">
                        <h6 className="text-medium mb-30">Sales History</h6>
                      </div>
                      <div className="right">
                        <div className="select-style-1">
                          <div className="select-position select-sm">
                            <select className="light-bg">
                              <option value>Today</option>
                              <option value>Yesterday</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table top-selling-table">
                        <thead>
                          <tr>
                            <th>
                              <h6 className="text-sm text-medium">Products</h6>
                            </th>
                            <th className="min-width">
                              <h6 className="text-sm text-medium">
                                Category{' '}
                                <i className="lni lni-arrows-vertical" />
                              </h6>
                            </th>
                            <th className="min-width">
                              <h6 className="text-sm text-medium">
                                Revenue{' '}
                                <i className="lni lni-arrows-vertical" />
                              </h6>
                            </th>
                            <th className="min-width">
                              <h6 className="text-sm text-medium">
                                Status <i className="lni lni-arrows-vertical" />
                              </h6>
                            </th>
                            <th>
                              <h6 className="text-sm text-medium text-end">
                                Actions{' '}
                                <i className="lni lni-arrows-vertical" />
                              </h6>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="product">
                                <div className="image">
                                  <img
                                    src={ProductsProductMini_1Img}
                                    alt="ProductsProductMini_1Img"
                                  />
                                </div>
                                <p className="text-sm">Bedroom</p>
                              </div>
                            </td>
                            <td>
                              <p className="text-sm">Interior</p>
                            </td>
                            <td>
                              <p className="text-sm">$345</p>
                            </td>
                            <td>
                              <span className="status-btn close-btn">
                                Pending
                              </span>
                            </td>
                            <td>
                              <div className="action justify-content-end">
                                <button className="edit">
                                  <i className="lni lni-pencil" />
                                </button>
                                <button
                                  className="more-btn ml-10 dropdown-toggle"
                                  id="moreAction1"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="lni lni-more-alt" />
                                </button>
                                <ul
                                  className="dropdown-menu dropdown-menu-end"
                                  aria-labelledby="moreAction1"
                                >
                                  <li className="dropdown-item">
                                    <a href="#0" className="text-gray">
                                      Remove
                                    </a>
                                  </li>
                                  <li className="dropdown-item">
                                    <a href="#0" className="text-gray">
                                      Edit
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="product">
                                <div className="image">
                                  <img
                                    src={ProductsProductMini_2Img}
                                    alt="ProductsProductMini_2Img"
                                  />
                                </div>
                                <p className="text-sm">Arm Chair</p>
                              </div>
                            </td>
                            <td>
                              <p className="text-sm">Interior</p>
                            </td>
                            <td>
                              <p className="text-sm">$345</p>
                            </td>
                            <td>
                              <span className="status-btn warning-btn">
                                Refund
                              </span>
                            </td>
                            <td>
                              <div className="action justify-content-end">
                                <button className="edit">
                                  <i className="lni lni-pencil" />
                                </button>
                                <button
                                  className="more-btn ml-10 dropdown-toggle"
                                  id="moreAction1"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="lni lni-more-alt" />
                                </button>
                                <ul
                                  className="dropdown-menu dropdown-menu-end"
                                  aria-labelledby="moreAction1"
                                >
                                  <li className="dropdown-item">
                                    <a href="#0" className="text-gray">
                                      Remove
                                    </a>
                                  </li>
                                  <li className="dropdown-item">
                                    <a href="#0" className="text-gray">
                                      Edit
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="product">
                                <div className="image">
                                  <img
                                    src={ProductsProductMini_3Img}
                                    alt="ProductsProductMini_3Img"
                                  />
                                </div>
                                <p className="text-sm">Sofa</p>
                              </div>
                            </td>
                            <td>
                              <p className="text-sm">Interior</p>
                            </td>
                            <td>
                              <p className="text-sm">$345</p>
                            </td>
                            <td>
                              <span className="status-btn success-btn">
                                Completed
                              </span>
                            </td>
                            <td>
                              <div className="action justify-content-end">
                                <button className="edit">
                                  <i className="lni lni-pencil" />
                                </button>
                                <button
                                  className="more-btn ml-10 dropdown-toggle"
                                  id="moreAction1"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="lni lni-more-alt" />
                                </button>
                                <ul
                                  className="dropdown-menu dropdown-menu-end"
                                  aria-labelledby="moreAction1"
                                >
                                  <li className="dropdown-item">
                                    <a href="#0" className="text-gray">
                                      Remove
                                    </a>
                                  </li>
                                  <li className="dropdown-item">
                                    <a href="#0" className="text-gray">
                                      Edit
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="product">
                                <div className="image">
                                  <img
                                    src={ProductsProductMini_4Img}
                                    alt="ProductsProductMini_4Img"
                                  />
                                </div>
                                <p className="text-sm">Kitchen</p>
                              </div>
                            </td>
                            <td>
                              <p className="text-sm">Interior</p>
                            </td>
                            <td>
                              <p className="text-sm">$345</p>
                            </td>
                            <td>
                              <span className="status-btn close-btn">
                                Canceled
                              </span>
                            </td>
                            <td>
                              <div className="action justify-content-end">
                                <button className="edit">
                                  <i className="lni lni-pencil" />
                                </button>
                                <button
                                  className="more-btn ml-10 dropdown-toggle"
                                  id="moreAction1"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="lni lni-more-alt" />
                                </button>
                                <ul
                                  className="dropdown-menu dropdown-menu-end"
                                  aria-labelledby="moreAction1"
                                >
                                  <li className="dropdown-item">
                                    <a href="#0" className="text-gray">
                                      Remove
                                    </a>
                                  </li>
                                  <li className="dropdown-item">
                                    <a href="#0" className="text-gray">
                                      Edit
                                    </a>
                                  </li>
                                </ul>
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
