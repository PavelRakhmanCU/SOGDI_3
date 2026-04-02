import { RiMenuFold2Line } from "react-icons/ri";
import { RiMenuFoldLine } from "react-icons/ri";
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const ToggleSwitch = () => {
  const { activator, setActivator } = useContext(GlobalContext);
  return (
    <button
      type="button"
      className={`toggle-switch ${activator ? "active" : ""}`}
      onClick={() => setActivator(!activator)}
      aria-expanded={activator}
      aria-controls="main-navigation"
      aria-label={activator ? "Close menu" : "Open menu"}
    >
      {activator ? <RiMenuFoldLine /> : <RiMenuFold2Line />}
    </button>
  );
};

export default ToggleSwitch;
