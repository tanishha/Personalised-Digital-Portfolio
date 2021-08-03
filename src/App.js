import ProgressBar from "react-bootstrap/ProgressBar";
import ReactTypingEffect from "react-typing-effect";

function App() {
  return (
    <>
      {/* <!-- ======= Header ======= --> */}
      <header id="header" className="header-tops">
        <div className="container">
          <h1>
            <a href="index.html">Tanisha Chaudhary</a>
          </h1>
          <h2>
            I'm a passionate{" "}
            <span className="typed" data-typed-items="Developer">
              {" "}
              <ReactTypingEffect text="Developer" typingDelay="2000ms" />
            </span>{" "}
            from Nepal
          </h2>

          <nav className="nav-menu">
            <ul>
              <li className="active">
                <a href="#header">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#resume">Resume</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          {/* <!-- .nav-menu --> */}

          <div className="social-links">
            <a
              href="https://www.facebook.com/profile.php?id=100009287956848"
              target="_blank"
              rel="noopener noreferrer"
              className="facebook"
            >
              <i className="icofont-facebook"></i>
            </a>
            <a
              href="https://join.skype.com/invite/Yv5vOxUwzomJ"
              target="_blank"
              rel="noopener noreferrer"
              className="google-plus"
            >
              <i className="icofont-skype"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/tanishaach?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B54SaKZulRKK6zcIY2kQzpA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
            >
              <i className="icofont-linkedin"></i>
            </a>
            <a
              href="https://dev.to/tanishha"
              target="_blank"
              rel="noopener noreferrer"
              className="dev"
            >
              {" "}
              <i className="fab fa-dev" title="tanishha's DEV Profile"></i>
            </a>
            <a
              href="https://github.com/tanishha"
              target="_blank"
              rel="noopener noreferrer"
              className="github"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </header>
      {/* <!-- End Header --> */}

      {/* <!-- ======= About Section ======= --> */}
      <section id="about" className="about">
        {/* <!-- ======= About Me ======= --> */}
        <div className="about-me container">
          <div className="section-title">
            <h2>About</h2>
            <p>Learn more about me</p>
          </div>

          <div className="row">
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Full Stack Developer</h3>
              <p className="font-italic">
                I am an engineering student currently pursuing my degree from
                Kathmandu Engineering College. Being a technology enthusiast, I
                am passionate about developing user-friendly applications and
                websites. I have been developing my coding skills in JavaScript
                technologies.
              </p>
              <br />
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>DOB:</strong> 24 November 2000
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>Degree:</strong> UnderGraduate
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>City:</strong> Kathmandu
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>Email:</strong> tanishach203@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
              <p></p>
            </div>
          </div>
        </div>
        {/* <!-- End About Me --> */}
        {/* <!-- ======= Counts ======= --> */}
        <div className="counts container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <a href="cv.pdf" target="_blank" rel="noopener noreferrer">
                <div className="count-box">
                  <i className="icofont-download"></i>
                  <p>Download CV</p>
                </div>
              </a>
            </div>
          </div>
          <br />
        </div>
        {/* <!-- End Counts --> */}
        {/* <!-- ======= Skills  ======= --> */}
        <div className="skills container">
          <div className="section-title">
            <h2>Skills</h2>
          </div>

          <div className="row skills-content">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  HTML <i className="val">100%</i>
                </span>
                <ProgressBar variant="success" animated now={100} />
              </div>

              <div className="progress">
                <span className="skill">
                  CSS <i className="val">90%</i>
                </span>

                <ProgressBar variant="success" animated now={90} />
              </div>

              <div className="progress">
                <span className="skill">
                  JavaScript <i className="val">75%</i>
                </span>

                <ProgressBar variant="success" animated now={75} />
              </div>
              <div className="progress">
                <span className="skill">
                  Git <i className="val">85%</i>
                </span>

                <ProgressBar variant="success" animated now={85} />
              </div>
              <div className="progress">
                <span className="skill">
                  TypeScript <i className="val">70%</i>
                </span>

                <ProgressBar variant="success" animated now={70} />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  MS-Office <i className="val">85%</i>
                </span>

                <ProgressBar variant="success" animated now={85} />
              </div>
              <div className="progress">
                <span className="skill">
                  Nodejs <i className="val">75%</i>
                </span>

                <ProgressBar variant="success" animated now={75} />
              </div>

              <div className="progress">
                <span className="skill">
                  MongoDB <i className="val">75%</i>
                </span>

                <ProgressBar variant="success" animated now={75} />
              </div>

              <div className="progress">
                <span className="skill">
                  React <i className="val">75%</i>
                </span>

                <ProgressBar variant="success" animated now={75} />
              </div>
              <div className="progress">
                <span className="skill">
                  React Native <i className="val">55%</i>
                </span>

                <ProgressBar variant="success" animated now={55} />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Skills --> */}

        {/* <!-- ======= Interests ======= --> */}
        <div className="interests container">
          <div className="section-title">
            <h2>Expertise</h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="icon-box">
                <i className="ri-store-line" style={{ color: "#ffbb2c" }}></i>
                <h3>Web Development</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <i
                  className="ri-bar-chart-box-line"
                  style={{ color: "#5578ff" }}
                ></i>
                <h3>Android Development</h3>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Interests --> */}
      </section>
      {/* <!-- End About Section --> */}

      {/* <!-- ======= Resume Section ======= --> */}
      <section id="resume" className="resume">
        <div className="container">
          <div className="section-title">
            <h2>Resume</h2>
            <p>Check My Resume</p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Graduation</h4>
                <h5>2017 - 2021</h5>
                <p>
                  <em>Kathmandu Engineering College</em>
                </p>
                <p>
                  I am currently pursuing my bachelor's degree in Computer
                  Science Engineering.
                </p>
              </div>
              <div className="resume-item">
                <h4>10+2</h4>
                <h5>2015 - 2017</h5>
                <p>
                  <em>Kathmandu Model Higher Secondary School</em>
                </p>
                <p>
                  I have completed my higher secondary education in science
                  stream
                </p>
              </div>
              <div className="resume-item">
                <h4>School</h4>
                <h5>2009 - 2015</h5>
                <p>
                  <em>Siddhartha Vanasthali Institute</em>
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Full Stack Developer Intern</h4>
                <h5>2020</h5>
                <p>
                  <em>Asterdio Inc. </em>
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Resume Section --> */}

      {/* <!-- ======= Services Section ======= --> */}
      <section id="skills-interest" className="skills-interest">
        <div className="skill container">
          <div className="section-title">
            <h2>Skills</h2>
            <p>My Skills & Expertise</p>
          </div>
        </div>
      </section>
      {/* <!-- End Services Section --> */}

      {/* <!-- ======= Portfolio Section ======= --> */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>My Works</p>
          </div>

          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <a
                  href="https://github.com/tanishha"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li data-filter=".filter-app">
                    View All Projects <i className="fab fa-github"> </i>
                  </li>
                </a>
              </ul>
            </div>
          </div>

          <div className="row portfolio-container">
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="assets/img/book.png" className="img-fluid" alt="" />

                <div className="portfolio-info">
                  <h4>Shopping Cart</h4>
                  <div className="portfolio-links">
                    <a
                      href="https://github.com/tanishha/ShoppingCart"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="assets/img/book.png" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>BookFinder</h4>
                  <div className="portfolio-links">
                    <a
                      href="https://github.com/tanishha/bookFinder"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="assets/img/book.png" className="img-fluid" alt="" />

                <div className="portfolio-info">
                  <h4>Covid-19 Updater</h4>
                  <div className="portfolio-links">
                    <a
                      href="https://coronadt.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="assets/img/book.png" className="img-fluid" alt="" />

                <div className="portfolio-info">
                  <h4>Video Chat App</h4>
                  <div className="portfolio-links">
                    <a
                      href="https://videochatapp203.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="assets/img/book.png" className="img-fluid" alt="" />

                <div className="portfolio-info">
                  <h4>SocialMediaApp API</h4>
                  <div className="portfolio-links">
                    <a
                      href="https://github.com/tanishha/SocialMediaApp-API"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Portfolio Section --> */}

      {/* <!-- ======= Contact Section ======= --> */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <p>Contact Me</p>
          </div>

          <div className="row mt-2">
            <div className="col-md-12 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-map"></i>
                <h3>My Address</h3>
                <p>Tahachal,Kathmandu,Nepal</p>
              </div>
            </div>

            <div className="col-md-12 mt-4  d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-share-alt"></i>
                <h3>Social Profiles</h3>
                <div className="social-links">
                  <a
                    href="https://www.facebook.com/profile.php?id=100009287956848"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                  <a
                    href="https://join.skype.com/invite/Yv5vOxUwzomJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="google-plus"
                  >
                    <i className="icofont-skype"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tanishaach?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B54SaKZulRKK6zcIY2kQzpA%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                  <a
                    href="https://dev.to/tanishha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dev"
                  >
                    {" "}
                    <i
                      className="fab fa-dev"
                      title="tanishha's DEV Profile"
                    ></i>
                  </a>
                  <a
                    href="https://github.com/tanishha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <br />

            <div className="col-md-12 mt-4 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-envelope"></i>
                <h3>Email Me</h3>
                <p>tanishach203@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Contact Section --> */}

      <div className="credits">
        {/* <!-- All the links in the footer should remain intact. -->
    <!-- You can delete the links only if you purchased the pro version. -->
    <!-- Licensing information: https://bootstrapmade.com/license/ -->
    <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/personal-free-resume-bootstrap-template/ --> */}
        Crafted with <i className="icofont-heart"></i>
        <br />
        Inspired by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </>
  );
}

export default App;
