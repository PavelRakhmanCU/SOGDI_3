import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="cta">
      <div className="cta-button-container">
        <Link className="cta-button" to="/booking">
          Book an appointment
        </Link>
      </div>
    </div>
  );
};

export default CTA;
