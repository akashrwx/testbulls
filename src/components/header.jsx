import React, { useState } from "react"
import { Link } from "gatsby"
import { StickyScrollUp } from "react-stickup"

import useMediaQuery from "../hooks/useMediaQuery"
// import { Sticky, StickyProvider  } from 'react-stickup';

const Header = () => {
  // const [isSticky, setSticky] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1200px)")

  const [mobileMenu, setMobileMenu] = useState(false)

  function mobileMenuClick(e) {
    if ((e.type === "keydown" && e.key === "Enter") || e.type === "click")
      setMobileMenu(state => !state)
  }
  const [isOpen, setIsOpen] = useState(null)
  
  const setOpen = (value) => () => setIsOpen(state => state === value ? null : value);
  return (
    <>
      <StickyScrollUp className="zindex" disabled={isMobile}>
        <div className="header-main">
          <div className="nav-container">
          <div className="flex-row justify-content-between align-items-center">
            <div className="header-logo">
              <Link to="/" className="logo-header">
                <img
                  src="/img/algobulls-logo.svg"
                  alt="Algobulls logo"
                  width="130px"
                />
              </Link>
            </div>
            <div className={mobileMenu ? "menu-main menu-open" : "menu-main"}>
              <span
                className="hamburger"
                role="button"
                tabIndex="0"
                onClick={mobileMenuClick}
                onKeyDown={mobileMenuClick}
              >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </span>

              <div className="main-nav">
                <ul>
                  <li className={`dropdown ${isOpen === 1 ? "open" : ""}`}>
                    <Link
                      to="/"
                      onClick={setOpen(1)}
                    >
                      Products
                      <span className="dropdown-arrow">
                        <svg
                          x="0px"
                          y="0px"
                          viewBox="0 0 10.3 5.9"
                          style={{ enableBackground: "new 0 0 10.3 5.9" }}
                        >
                          <path
                            className="st0"
                            d="M9.5,0H0.7C0.4,0,0.2,0.2,0.1,0.5S0,1,0.2,1.3l4.4,4.4c0.3,0.3,0.7,0.3,1,0l4.4-4.4c0.2-0.2,0.3-0.5,0.2-0.8
                          C10.1,0.2,9.8,0,9.5,0z"
                          />
                        </svg>
                      </span>
                    </Link>
                    <div className="dropdown-menu">
                      <Link to="/choose">
                        <span>
                          <img src="/img/choose-icon.svg" alt="" />
                        </span>
                        Choose
                      </Link>
                      <Link to="/build">
                        <span>
                          <img src="/img/build-icon.svg" alt="" />
                        </span>
                        Build
                      </Link>
                    </div>
                  </li>
                  <li className={`dropdown ${isOpen === 2 ? "open" : ""}`}>
                    <Link
                      to="/"
                      onClick={setOpen(2)}
                    >
                      Market Place
                      <span className="dropdown-arrow">
                        <svg
                          x="0px"
                          y="0px"
                          viewBox="0 0 10.3 5.9"
                          style={{ enableBackground: "new 0 0 10.3 5.9" }}
                        >
                          <path
                            className="st0"
                            d="M9.5,0H0.7C0.4,0,0.2,0.2,0.1,0.5S0,1,0.2,1.3l4.4,4.4c0.3,0.3,0.7,0.3,1,0l4.4-4.4c0.2-0.2,0.3-0.5,0.2-0.8
                          C10.1,0.2,9.8,0,9.5,0z"
                          />
                        </svg>
                      </span>
                    </Link>
                    <div className="dropdown-menu">
                      <Link to="/">
                        <span>
                          <img src="/img/marketplace-icon.svg" alt="" />
                        </span>
                        Retail Marketplace
                      </Link>
                      <Link to="/">
                        <span>
                          <img
                            src="/img/marketplace-icon.svg"
                            style={{ transform: "rotateZ(270deg)" }}
                            alt=""
                          />
                        </span>
                        Premium Marketplace
                      </Link>
                      <Link to="/">
                        <span>
                          <img
                            src="/img/marketplace-icon.svg"
                            style={{ transform: "rotateZ(180deg)" }}
                            alt=""
                          />
                        </span>
                        HNI Marketplace
                      </Link>
                      <Link to="/">
                        <span>
                          <img
                            src="/img/marketplace-icon.svg"
                            style={{ transform: "rotateZ(90deg)" }}
                            alt=""
                          />
                        </span>
                        Ultra HNI Marketplace
                      </Link>
                      <Link to="/">
                        <span>
                          <img src="/img/ins-marketplace-icon.svg" alt="" />
                        </span>
                        Institution Marketplace
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">Features</Link>
                  </li>
                  <li>
                    <Link to="/">Our Ecosystem</Link>
                  </li>
                  <li className={`dropdown ${isOpen === 3 ? "open" : ""}`}>
                    <Link
                      to="/"
                      onClick={setOpen(3)}
                    >
                      Resources
                      <span className="dropdown-arrow">
                        <svg
                          x="0px"
                          y="0px"
                          viewBox="0 0 10.3 5.9"
                          style={{ enableBackground: "new 0 0 10.3 5.9" }}
                        >
                          <path
                            className="st0"
                            d="M9.5,0H0.7C0.4,0,0.2,0.2,0.1,0.5S0,1,0.2,1.3l4.4,4.4c0.3,0.3,0.7,0.3,1,0l4.4-4.4c0.2-0.2,0.3-0.5,0.2-0.8
                          C10.1,0.2,9.8,0,9.5,0z"
                          />
                        </svg>
                      </span>
                    </Link>

                    <div className="dropdown-menu">
                      <Link to="/">
                        <span>
                          <img src="/img/help.svg" alt="" />
                        </span>
                        Help
                      </Link>
                      <Link to="/">
                        <span>
                          <img src="/img/chat.svg" alt="" />
                        </span>
                        Commpunity
                      </Link>
                      <Link to="/">
                        <span>
                          <img src="/img/youtube.svg" alt="" />
                        </span>
                        Videos
                      </Link>
                      <Link to="/">
                        <span>
                          <img src="/img/facebook.svg" alt="" />
                        </span>
                        Facebook
                      </Link>
                      <Link to="/">
                        <span>
                          <img src="/img/linkedin.svg" alt="" />
                        </span>
                        Linkedin
                      </Link>
                      <Link to="/">
                        <span>
                          <img src="/img/github.svg" alt="" />
                        </span>
                        Github
                      </Link>
                      <Link to="/">
                        <span>
                          <img src="/img/book-icon.svg" alt="" />
                        </span>
                        Our books
                        <img
                          style={{ margin: "0 0 0 10px" }}
                          src="/img/book-nav.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </li>                  
                </ul>
              </div>
            </div>

            <div className="mob-nav-btns ">
              <a
                href="#!"
                className="button login-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Login
              </a>
              <a
                href="#!"
                className="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register
              </a>
            </div>
          </div>
        </div></div>

        <div className="floating-social">
          <a href="#!">
            <img src="/img/whatsapp.svg" alt="whatsapp" />
          </a>
          <a href="#!">
            <img src="/img/phone.svg" alt="phone" />
          </a>
          <a href="#!">
            <img src="/img/email.svg" alt="email" />
          </a>
        </div>
        {/* {isSticky && <div style={{ height: 75 }} />} */}
      </StickyScrollUp>

      <div className="header-compesator"></div>
    </>
  )
}

export default Header
