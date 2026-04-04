import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { INSTAGRAM_URL } from "../config/site";

/** Short lines that cycle under the artist name (crossfade in the header). */
const CYCLING_TAGLINES = [
  "Realism · micro-realism · painterly skin",
  "Ink with patience — pieces meant to outlast seasons",
];

const CYCLE_MS = 5200;

const Header = () => {
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveLine((i) => (i + 1) % CYCLING_TAGLINES.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="header">
      <div className="header__brand">
        <Link className="logo" to="/">
          Sogdiana Kashaeva
        </Link>
        <div
          className="header__cycle"
          aria-live="polite"
          aria-label="Rotating studio tagline"
        >
          {CYCLING_TAGLINES.map((line, i) => (
            <span
              key={i}
              className={
                i === activeLine
                  ? "header__cycle-line header__cycle-line--active"
                  : "header__cycle-line"
              }
            >
              {line}
            </span>
          ))}
        </div>
      </div>
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
