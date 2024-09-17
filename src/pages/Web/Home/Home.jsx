import React from 'react'
import "./assets/css/vendor/bootstrap.min.css"
import "./assets/css/app.css"
import banner from "./assets/media/banner/banner-ayat.png"
import logo from "./assets/media/logo.png"
import aboutImage from "./assets/media/about/about-1.png"
import service1 from "./assets/media/services/service-1.png"
import service2 from "./assets/media/services/service-2.png"
import service3 from "./assets/media/services/service-3.png"
import blog1 from "./assets/media/blogs/blog-5.png"
import blog2 from "./assets/media/blogs/blog-6.png"
import blog3 from "./assets/media/blogs/blog-7.png"

const Home = () => {
  return (
    <div>
      {/* Preloader */}
      {/* Back To Top Start */}
      <a href="#main-wrapper" id="backto-top" className="back-to-top">
        <i className="fas fa-angle-double-up" />
      </a>
      {/* Main Wrapper Start */}
      <div id="main-wrapper" className="main-wrapper">
        <div id="scroll-container">
          {/* Header Area Start */}
          <header className="header">
            {/* Start Main menu Nav */}
            <nav className="navbar navbar-expand-lg">
              <div className="container">
                <a className="navbar-logo">
                  <img src={logo} alt="Logo" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#mynavbar"
                >
                  <i className="fas fa-bars" />
                </button>
                <div
                  className="collapse navbar-collapse center justify-content-end"
                  id="mynavbar"
                >
                  <ul className="navbar-nav text-right mainmenu ">
                    <li className="menu-item-has-children">
                      <a href="javascript:void(0);" className="active">
                        Home
                      </a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="/RnadomQuotes">Quotes</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="/quran">Litsen Quran </a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="/ReadQuran">Read Quran</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="/">Login</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="/sign-up">SignUp</a>
                    </li>
                  </ul>
                  <div className="d-flex right-nav">
                    <a href="/chatbot" className="al-buraq-btn btn-fill-primary btn-lg">
                      Ask Anything
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          {/* Banner Area Start */}
          <section className="banner style-1">
            <div className="container">
              <div
                className="banner-content align-items-center"
                data-sal="slide-up"
                data-sal-duration={1000}
                data-sal-delay={100}
              >
                <img alt="ayat" src={banner} />
                <p>
                  And We have sent you (O Muhammad SAWW) not but as a mercy for
                  <br /> the ‘Almin (mankind, jinns and all that exists)
                </p>
                <a href="/quran" className="al-buraq-btn btn-fill-primary btn-lg mx-auto">
                  Read More
                </a>
              </div>
            </div>
          </section>
          {/* Islam Pillars Area Start */}
          <section className="islam-pillars sec-pad bg-color-dark">
            <div className="container">
              <div className="heading">
                <h2 className="title clr-primary">5 Pillars of Islam</h2>
                <p className="clr-white">
                  The Five Pillars are the core beliefs and practices of Islam
                </p>
              </div>
              <div className="row">
                <div className="col-xl col-lg-6 col-md-6 col-sm-6 p-0 ">
                  <div className="pillar-box">
                    <div className="content-box">
                      <h6 className="title">Shahada</h6>
                      <p className="content">
                        “Ashadu an la ilaha illa-llah, wa ashadu anna muhammadur
                        rasul ullah.” (Arabic)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl col-lg-6 col-md-6 col-sm-6 p-0">
                  <div className="pillar-box">
                    <div className="content-box">
                      <h6 className="title">Salah</h6>
                      <p className="content">
                        "Verily, Salah restrains (oneself) from shameful and unjust
                        deeds" (Quran 29:45)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl col-lg-6 col-md-6 col-sm-6 p-0">
                  <div className="pillar-box">
                    <div className="content-box">
                      <h6 className="title">Sawm</h6>
                      <p className="content">
                        In Islam sawm means fasting from dawn until dusk during The
                        Holy month of Ramadan
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl col-lg-6 col-md-6 col-sm-6 p-0">
                  <div className="pillar-box">
                    <div className="content-box">
                      <h6 className="title">Zakat</h6>
                      <p className="content">
                        “If you wish for Allah to multiply your wealth, then purify
                        it (through zakat).” -Prophet Muhammad (S.A.W.W)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl col-lg-6 col-md-6 col-sm-6 offset-xl-0 offset-lg-3 offset-md-3 offset-sm-3 p-0">
                  <div className="pillar-box">
                    <div className="content-box">
                      <h6 className="title">Hajj</h6>
                      <p className="content">
                        It is a physically demanding journey that offers a chance to
                        wipe clean past sins and start anew before Allah.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* About Area Start */}
          <section className="about style-1 sec-pad">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-12">
                  <img src={aboutImage} alt="mosque" />
                </div>
                <div className="col-lg-6 col-12">
                  <h3 className="title">About Al-Buraq</h3>
                  <p>
                    It is the responsibility of every Muslim to serve for DEEN{" "}
                    <br />
                    <br /> We established our center in 1954, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <p className="hadith">
                    Prophet Muhammad (S.A.W.W): “If you wish for Allah to multiply
                    your wealth, then purify it (through zakat).”
                  </p>
                  <a href="/quran" className="al-buraq-btn btn-fill-primary btn-lg">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* Daily Update Area Start */}
          <section className="daily-update sec-pad bg-color-light">
            <div className="container">
              <div className="heading">
                <h2 className="title">Quran Translation</h2>
                <p className="clr-dark-grey">
                  Your daily learning and process of understanding the Holy Quran
                </p>
              </div>
              <div className="text-center">
                <h6 className="bismillah">
                  oبِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ
                </h6>
                <h4 dir="rtl" lang="ar" className="ayat">
                  قُلۡ هُوَ ٱللَّهُ أَحَدٌo ٱللَّهُ ٱلصَّمَدُo لَمۡ يَلِدۡ وَلَمۡ
                  يُولَدۡo وَلَمۡ يَكُن لَّهُۥ كُفُوًا أَحَدُۢo
                </h4>
                <p className="ayat-translation">
                  In the name of Allah, the Entirely Merciful, the Especially
                  Merciful.
                </p>
                <br />
                <p className="ayat-translation">
                  Say, “He is Allah, [who is] One. Allah, the Eternal Refuge. He
                  neither begets nor is born, Nor is there to Him any equivalent.”
                </p>
                <a href="/quran" className="al-buraq-btn btn-fill-primary btn-lg">
                  Learn More
                </a>
              </div>
            </div>
          </section>
          {/* Services Area Start */}
      {/*=====================================*/}
        {/*=        Services Area Start     =*/}
        {/*=====================================*/}
        <section className="services style-1 sec-pad">
          <div className="container">
            <div className="heading">
              <h2 className="title">Services</h2>
              <p>It is the responsibility of every Muslim to serve for DEEN</p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="service-card">
                  <img src={service1} alt="" />
                  <div className="content-box">
                    <h6 className="title">Quran Courses</h6>
                    <p className="description">
                      Lorem ipsum dolor sit amet, do consectetur adipiscing elit,
                      sedeiusmod tempor incididunt labore et dolore magna aliqua.
                    </p>
                    <a
                      href="/ReadQuran"
                      className="al-buraq-btn btn-fill-primary btn-lg"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="service-card">
                  <img src={service2} alt="" />
                  <div className="content-box">
                    <h6 className="title">Litsen Quran</h6>
                    <p className="description">
                      Lorem ipsum dolor sit amet, do consectetur adipiscing elit,
                      sedeiusmod tempor incididunt labore et dolore magna aliqua.
                    </p>
                    <a
                      href="/quran"
                      className="al-buraq-btn btn-fill-primary btn-lg"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 offset-lg-0 offset-md-3">
                <div className="service-card">
                  <img src={service3} alt="" />
                  <div className="content-box">
                    <h6 className="title">Ask Anything</h6>
                    <p className="description">
                      Lorem ipsum dolor sit amet, do consectetur adipiscing elit,
                      sedeiusmod tempor incididunt labore et dolore magna aliqua.
                    </p>
                    <a
                      href="/chatbot"
                      className="al-buraq-btn btn-fill-primary btn-lg"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*=====================================*/}
        {/*=        Footer Area Start         =*/}
        {/*=====================================*/}
        <footer>
          <div className=" footer-top container ">
            <div className="footer-light bg-color-light">
              <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-6" data-sal-delay={100}>
                  <div className="footer-widget">
                    <a href="index.html">
                      <img className="logo" alt="" src="assets/media/logo.png" />
                    </a>
                    <p>
                      Islam is about knowing what and how to live your life in the
                      best way. Lorem Ipsum proin gravida nibh vel velit auctor
                      aliquet.
                    </p>
                    <ul className="list-unstyled info">
                      <li>
                        <i className="fas fa-map-marked-alt" />
                        1957 Turkey Pen Road, New York
                      </li>
                      <li>
                        <a href="mailto:info@al-buraq.com">
                          <i className="fas fa-envelope"/>
                          contactinfo@al-buraq.com{" "}
                        </a>
                      </li>
                      <li>
                        <a href="tel:1234567678">
                          <i className="fas fa-phone-alt" />
                          +1 917-239-5190
                        </a>
                      </li>
                      <li>
                        <i className="fas fa-fax" />
                        646-385-7126
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6" data-sal-delay={100}>
                  <div className="footer-widget">
                    <h6 className="widget-title">Quick Links</h6>
                    <div className="footer-menu-link ">
                      <ul className="list-unstyled">
                        <li>
                          <a href="/chatbot">Chat bot</a>
                        </li>
                        <li className="menu-item-has-children">
                      <a href="/RnadomQuotes">Quotes</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="/quran">Litsen Quran </a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="/ReadQuran">Read Quran</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="/">Login</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="/sign-up">SignUp</a>
                    </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6" data-sal-delay={100}>
                  <div className="footer-widget">
                    <h6 className="widget-title">Contact us</h6>
                    <div className="contact-form">
                      <form
                        method="post"
                        action="index.html"
                        className="footer-contact-form al-buraq-contact-form"
                      >
                        <div className="row">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              placeholder="Full Name"
                              required=""
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Your Email"
                              required=""
                            />
                          </div>
                          <div className="form-group">
                            <textarea
                              id="message"
                              className="form-control"
                              name="message"
                              placeholder="Write Message"
                              required=""
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="mt-0 mb-3">
                          <button disabled className="contact-form-btn">
                            Send Now
                          </button>
                        </div>
                        <div className="alert-msg message mb-3" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="footer-copyright">
                <span className="copyright-text">
                  © 2024. All rights reserved by Basma.
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
  )
}

export default Home