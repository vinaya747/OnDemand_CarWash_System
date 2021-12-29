import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar1() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        console.log("");
      });
    };
  }, []);

  return (
    
    <nav className={`nav ${show && "nav__scroll"}`}>
     <a href="/">
        <img
          className="nav__logo"
          src="https://images.creativemarket.com/0.1.0/ps/7171767/1820/1214/m1/fpnw/wm0/preview-.png?1571626259&s=878096ae03bdd57458d7c452eda8b3c7"
          alt="WYPE LOGO"
        />
      </a>
      <div
        className={`nav__container nav__borderXwidth ${
          show && "nav__containerscroll nav__borderXwidthscroll"
        }`}
      >
                      
        <NavLink
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/whyus"
        >
          WHY US?
        </NavLink>
        
        
        <NavLink
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/contact"
        >
          CONTACT US
        </NavLink>
        <NavLink
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/login"
        >
          LOGIN
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar1;
