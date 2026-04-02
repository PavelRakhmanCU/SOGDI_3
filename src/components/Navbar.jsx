import { FaHome } from "react-icons/fa";
import { FaRegImages, FaCartShopping } from "react-icons/fa6";
import { AiFillMedicineBox } from "react-icons/ai";
import { FaCalendarCheck } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import ToggleSwitch from "./Toggleswitch";

const LinkData = [
  { icon: <FaHome />, name: "Home", path: "/" },
  { icon: <FaRegImages />, name: "Galleries", path: "/galleries" },
  { icon: <AiFillMedicineBox />, name: "Aftercare", path: "/aftercare" },
  { icon: <FaCalendarCheck />, name: "Booking", path: "/booking" },
  { icon: <FaCartShopping />, name: "Merch", path: "/merch" },
];

const Navbar = () => {
  const { activator, setActivator } = useContext(GlobalContext);
  const location = useLocation();

  useEffect(() => {
    setActivator(false);
  }, [location.pathname, setActivator]);

  return (
    <nav
      id="main-navigation"
      className={`navbar ${activator ? "navbar--open" : ""}`}
      aria-label="Main navigation"
    >
      <ToggleSwitch />
      <ul className="nav-links">
        {LinkData.map((item, index) => (
          <li
            key={item.path}
            className="nav-links__item"
            style={{ "--i": index + 1 }}
          >
            <Link
              className="nav-links__link"
              to={item.path}
              onClick={() => setActivator(false)}
            >
              <span className="nav-links__icon" aria-hidden="true">
                {item.icon}
              </span>
              <span className="nav-links__text">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
