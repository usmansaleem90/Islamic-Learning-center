import React from 'react'

const Footer = () => {
  return (
    <div>

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
  )
}

export default Footer