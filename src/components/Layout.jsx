import React from "react";
import Hero from "./Hero";
import CTA from "./CTA";
import GeneralInfo from "./GeneralInfo";

const Layout = () => {
  return (
    <div className="layout">
      <Hero />
      <CTA />
      <GeneralInfo />
    </div>
  );
};

export default Layout;