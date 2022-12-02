import HeroHeroShapeImg from '../Assets/img/hero/hero-shape.svg'
import HeroTextShapeImg from '../Assets/img/hero/text-shape.svg'
import LogoLogoWhiteImg from '../Assets/img/logo/logo-white.svg'
import LeadLead_1Img from '../Assets/img/dashboard/lead/lead-1.png'
import LeadLead_2Img from '../Assets/img/dashboard/lead/lead-2.png'
import LeadLead_3Img from '../Assets/img/dashboard/lead/lead-3.png'
import LeadLead_4Img from '../Assets/img/dashboard/lead/lead-4.png'
import LeadLead_5Img from '../Assets/img/dashboard/lead/lead-5.png'
import LeadLead_6Img from '../Assets/img/dashboard/lead/lead-6.png'
import '../Assets/css/bootstrap.min.css'
import '../Assets/css/LineIcons.3.0.css'
import '../Assets/css/animate.css'
import '../Assets/css/tiny-slider.css'
import '../Assets/css/glightbox.min.css'
import '../Assets/scss/main.scss'
import '../Assets/css/bootstrap.min.css'
import '../Assets/css/lineicons.css'
import '../Assets/css/materialdesignicons.min.css'
import '../Assets/css/fullcalendar.css'
import 'bootstrap'
import {tns} from '../../node_modules/tiny-slider/src/tiny-slider'
import GLightbox from 'glightbox'
import 'bootstrap'
import ReactWOW from 'react-wow'
import {Link} from 'react-router-dom'
import React from 'react'

import Member from '../Lib/Member';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.member = new Member();
        this.member.get(1)
            .then(response => {
                console.log("member.get => OK");
            })
    }

    componentDidMount() {
        document.title = 'Home - Outil de gestion de projet'
        new GLightbox({selector: '.glightbox'})

    }

    render() {
        return (
            <div>
                <section className="hero-area">
                    <img
                        className="hero-shape"
                        src={HeroHeroShapeImg}
                        alt="HeroHeroShapeImg"
                    />
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-12 col-12">
                                <div className="hero-content">
                                    <ReactWOW
                                        animation="fadeInUp"
                                        delay=".2s"
                                        duration="undefined"
                                    >
                                        <h4 className>
                                            Bienvenue dans notre outil de gestion de projets
                                        </h4>
                                    </ReactWOW>
                                    <ReactWOW
                                        animation="fadeInUp"
                                        delay=".4s"
                                        duration="undefined"
                                    >
                                        <h1 className>
                                            Nous allons faire de grandes choses <br/>
                                            <span>
                        <img
                            className="text-shape"
                            src={HeroTextShapeImg}
                            alt="HeroTextShapeImg"
                        />
                        Ensemble.
                      </span>
                                        </h1>
                                    </ReactWOW>
                                    <ReactWOW
                                        animation="fadeInUp"
                                        delay=".6s"
                                        duration="undefined"
                                    >
                                        <p className>
                                            Travailler seul ou en équipe, organiser votre temps et vos
                                            tâches
                                            <br/> le tout en temps réel.
                                        </p>
                                    </ReactWOW>
                                    <ReactWOW
                                        animation="fadeInUp"
                                        delay=".8s"
                                        duration="undefined"
                                    >
                                        <div className="button">
                                            <Link className="btn " to="signup">
                                                Je m'inscris
                                            </Link>
                                        </div>
                                    </ReactWOW>
                                    <ReactWOW
                                        animation="fadeInUp"
                                        delay=".8s"
                                        duration="undefined"
                                    >
                                        <div className="button">
                                            <Link className="btn " to="signin">
                                                Je me connecte
                                            </Link>
                                        </div>
                                    </ReactWOW>
                                </div>
                            </div>
                            <div className="col-lg-7 col-12">
                                <div className="hero-image">
                                    <img
                                        className="main-image"
                                        src={LogoLogoWhiteImg}
                                        alt="LogoLogoWhiteImg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="feature section">
                    <div className="container">
                        <section className="table-components">
                            <div className="container-fluid">
                                <div className="title-wrapper pt-30">
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <div className="title mb-30">
                                                <h2>Project</h2>
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
                                                            Project
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
                                            <h6 className="mb-10">Project Table</h6>
                                            <div className="table-wrapper table-responsive">
                                                <table className="table">
                                                    <thead>
                                                    <tr>
                                                        <th>
                                                            <h6>#</h6>
                                                        </th>
                                                        <th>
                                                            <h6>Manager</h6>
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
                                                                    <i className="lni lni-trash-can"/>
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
                                                                    <i className="lni lni-trash-can"/>
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
                                                                    <i className="lni lni-trash-can"/>
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
                                                                    <i className="lni lni-trash-can"/>
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
                                                                    <i className="lni lni-trash-can"/>
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
                                                                    <i className="lni lni-trash-can"/>
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
                                                                    <i className="lni lni-trash-can"/>
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
                                                                    <i className="lni lni-trash-can"/>
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
                                                                    <i className="lni lni-trash-can"/>
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
                                                                    <i className="lni lni-trash-can"/>
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
                                                                    <i className="lni lni-trash-can"/>
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
                                                                    <i className="lni lni-trash-can"/>
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
                                <section className="faq section">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="section-title">
                                                    <ReactWOW
                                                        animation="zoomIn"
                                                        delay=".2s"
                                                        duration="undefined"
                                                    >
                                                        <h3 className>Faq</h3>
                                                    </ReactWOW>
                                                    <ReactWOW
                                                        animation="fadeInUp"
                                                        delay=".4s"
                                                        duration="undefined"
                                                    >
                                                        <h2 className>frequently asked questions</h2>
                                                    </ReactWOW>
                                                    <ReactWOW
                                                        animation="fadeInUp"
                                                        delay=".6s"
                                                        duration="undefined"
                                                    >
                                                        <p className>
                                                            There are many variations of passages of Lorem
                                                            Ipsum available, but the majority have suffered
                                                            alteration in some form.
                                                        </p>
                                                    </ReactWOW>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12 col-12">
                                                <div className="accordion" id="accordionExample">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="heading1">
                                                            <button
                                                                className="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#collapse1"
                                                                aria-expanded="false"
                                                                aria-controls="collapse1"
                                                            >
                                <span className="title">
                                  How can I participate in the ICO Token sale?
                                </span>
                                                                <i className="lni lni-plus"/>
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id="collapse1"
                                                            className="accordion-collapse collapse"
                                                            aria-labelledby="heading1"
                                                            data-bs-parent="#accordionExample"
                                                        >
                                                            <div className="accordion-body">
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit. Aliquam consectetur sit amet
                                                                    ante nec vulputate. Nulla aliquam, justo
                                                                    auctor consequat tincidunt, arcu erat mattis
                                                                    lorem.
                                                                </p>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit. Aliquam consectetur sit amet
                                                                    ante nec vulputate.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="heading2">
                                                            <button
                                                                className="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#collapse2"
                                                                aria-expanded="false"
                                                                aria-controls="collapse2"
                                                            >
                                <span className="title">
                                  What cryptocurrencies can I use to purchase?
                                </span>
                                                                <i className="lni lni-plus"/>
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id="collapse2"
                                                            className="accordion-collapse collapse"
                                                            aria-labelledby="heading2"
                                                            data-bs-parent="#accordionExample"
                                                        >
                                                            <div className="accordion-body">
                                                                <p>
                                                                    Anim pariatur cliche reprehenderit, enim
                                                                    eiusmod high life accusamus terry richardson
                                                                    ad squid. 3 wolf moon officia aute. non
                                                                    cupidatat skateboard dolor brunch. Foosd truck
                                                                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                                                    moon tempor, sunt alqua put a bird on it squid
                                                                    single-origin coffee nulla assumenda
                                                                    shoreditch et. Nihil anim ke ffiyeh helvetica,
                                                                    craft beer labore wes anderson cred nesciunt
                                                                    sapiente ea proident.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="heading3">
                                                            <button
                                                                className="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#collapse3"
                                                                aria-expanded="false"
                                                                aria-controls="collapse3"
                                                            >
                                <span className="title">
                                  Do I need an account to place an order?
                                </span>
                                                                <i className="lni lni-plus"/>
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id="collapse3"
                                                            className="accordion-collapse collapse"
                                                            aria-labelledby="heading3"
                                                            data-bs-parent="#accordionExample"
                                                        >
                                                            <div className="accordion-body">
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur
                                                                    adipisicing elit. Voluptas expedita,
                                                                    repellendus est nemo cum quibusdam optio,
                                                                    voluptate hic a tempora facere, nihil non
                                                                    itaque alias similique quas quam odit
                                                                    consequatur.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-12 xs-margin">
                                                <div className="accordion" id="accordionExample2">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="heading11">
                                                            <button
                                                                className="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#collapse11"
                                                                aria-expanded="false"
                                                                aria-controls="collapse11"
                                                            >
                                <span className="title">
                                  How can i purchase bitcoin?
                                </span>
                                                                <i className="lni lni-plus"/>
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id="collapse11"
                                                            className="accordion-collapse collapse"
                                                            aria-labelledby="heading11"
                                                            data-bs-parent="#accordionExample2"
                                                        >
                                                            <div className="accordion-body">
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit. Aliquam consectetur sit amet
                                                                    ante nec vulputate. Nulla aliquam, justo
                                                                    auctor consequat tincidunt, arcu erat mattis
                                                                    lorem.
                                                                </p>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit. Aliquam consectetur sit amet
                                                                    ante nec vulputate.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="heading22">
                                                            <button
                                                                className="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#collapse22"
                                                                aria-expanded="false"
                                                                aria-controls="collapse22"
                                                            >
                                <span className="title">
                                  What is ICO Crypto?
                                </span>
                                                                <i className="lni lni-plus"/>
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id="collapse22"
                                                            className="accordion-collapse collapse"
                                                            aria-labelledby="heading22"
                                                            data-bs-parent="#accordionExample2"
                                                        >
                                                            <div className="accordion-body">
                                                                <p>
                                                                    Anim pariatur cliche reprehenderit, enim
                                                                    eiusmod high life accusamus terry richardson
                                                                    ad squid. 3 wolf moon officia aute. non
                                                                    cupidatat skateboard dolor brunch. Foosd truck
                                                                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                                                    moon tempor, sunt alqua put a bird on it squid
                                                                    single-origin coffee nulla assumenda
                                                                    shoreditch et. Nihil anim ke ffiyeh helvetica,
                                                                    craft beer labore wes anderson cred nesciunt
                                                                    sapiente ea proident.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="heading33">
                                                            <button
                                                                className="accordion-button collapsed"
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#collapse33"
                                                                aria-expanded="false"
                                                                aria-controls="collapse33"
                                                            >
                                <span className="title">
                                  How do I benefit from the ICO Token?
                                </span>
                                                                <i className="lni lni-plus"/>
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id="collapse33"
                                                            className="accordion-collapse collapse"
                                                            aria-labelledby="heading33"
                                                            data-bs-parent="#accordionExample2"
                                                        >
                                                            <div className="accordion-body">
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur
                                                                    adipisicing elit. Voluptas expedita,
                                                                    repellendus est nemo cum quibusdam optio,
                                                                    voluptate hic a tempora facere, nihil non
                                                                    itaque alias similique quas quam odit
                                                                    consequatur.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <a href="#" className="scroll-top">
                                    <i className="lni lni-chevron-up"/>
                                </a>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}
