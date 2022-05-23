import React from "react";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
import "./Navbar.css";
const Navbar = () => {
  const item = [
    { title: "Home" },
    { name: "Services", to: "services" },
    { name: "Experince", to: "experience" },
    { name: "Portfolio", to: "portfolio" },
    { name: "Testimonial", to: "testimonial" },
  ];
  return (
    <nav>
      <div className="nav-left">
        <div className="logo">Web Designer</div>
        <span>
          <Toggle />
        </span>
      </div>
      <div className="nav-right">
        <ul className="nav-items">
          {item.map((item) => (
            <Link
              spy={true}
              to={item.to}
              activeClass="activeClass"
              smooth={true}
            >
              <li key={item.id} className="nav-link">
                {item.name}
              </li>
            </Link>
          ))}
          <button className="contact">contact</button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
