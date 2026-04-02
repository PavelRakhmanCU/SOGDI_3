import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import React from "react";
import { INSTAGRAM_URL } from "../config/site";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo" to="/">
        Sogdiana Kashaeva
      </Link>
      <div className="socials">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram (opens in a new tab)"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Header;
