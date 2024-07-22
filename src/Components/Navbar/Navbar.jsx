import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import "./Navbar.css";
import logo from '../../logo.png'
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import '../../App.css'

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <div style={{ fontFamily: 'LexendRegular' }}>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <IconX width={30} height={30} />
          </div>
          <MobileNavbar />
        </div>

        {/* desktop */}

        <div className="navbar">
          <div className="navbar__img">
          <a href="/" onClick={() => window.scrollTo(0, 0)}>
              <img
                src={logo}
                alt='logo-img'
                loading='lazy'
                className='logo-navbar'
                style={{ width: '155.83px', height: '40px' }}
              />
            </a>
          </div>
          <ul className="navbar__links">
            <li>
              <a className="home-link" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="about-link" href="#about">
                Careers
              </a>
            </li>
            <li>
              <a className="models-link" href="#pick__section">
                About
              </a>
            </li>
            <li>
              <a className="testi-link" href="#testimonials">
                Security
              </a>
            </li>
          </ul>
          <div className="navbar__buttons">
            <a className="navbar__buttons__sign-in" href="/">
              Sign Up
            </a>
            <a className="navbar__buttons__register" href="/" style={{  }}>
              Log In
            </a>
          </div>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <IconMenu2 width={30} height={30} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;