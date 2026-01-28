import { useState } from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Header() {
  const [showSocial, setShowSocial] = useState(false);

  return (
    <section className="header">

      <div className="logoContainer">
        <img src=".\src\assets\1.png" alt="Chai Culture Logo" />
      </div>

      <div className="navbarContainer">
        <nav className="mainNav">
          <li>
            <a href="#our-story" className="nav-link">Our Story</a>
          </li>

          <li className="socialWrapper">
            <button
              className="nav-link socialBtn"
              onClick={() => setShowSocial(!showSocial)}
            >
              Follow Us
            </button>

            <div className={`socialDropdown ${showSocial ? "show" : ""}`}>
              <a href="https://www.instagram.com/hasan_hashmi_1/" target="_blank"><FaInstagram /></a>
              <a href="https://www.facebook.com/hasan.hashmi.9828" target="_blank"><FaFacebookF /></a>
              <a href="https://x.com/Hasan_hashmi_1" target="_blank"><FaTwitter /></a>
            </div>
          </li>
        </nav>
      </div>

    </section>
  );
}
