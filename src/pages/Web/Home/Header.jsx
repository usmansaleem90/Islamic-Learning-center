import React from 'react'
import logo from "./assets/media/logo.png"
const Header = () => {
  return (
    <div>

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
    </div>
  )
}

export default Header