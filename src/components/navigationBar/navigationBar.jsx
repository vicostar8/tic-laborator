import React from "react";
import NavigationBar_MenuItem from "./navigationBar_menuItem";
import NavigationBar_FlexibleIcon from "./navigationBar_flexibleIcon";

// CSS
import "./css/navigationBar.css";

const NavigationBar = () => {
  const menuItems = [
    { nume: "Home", calea: "" },
    { nume: "Lectii", calea: "lectii" },
    { nume: "Laborator", calea: "laborator" },
    { nume: "Contact", calea: "contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navBar_mainDiv py-3">
      <div className="container-fluid">
        <i className="fa-solid fa-school navBar_icon fs-1 mx-3"></i>

        <NavigationBar_FlexibleIcon />

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {menuItems.map((mI, idx) => (
              <NavigationBar_MenuItem
                key={`${idx}-${mI.nume.toLowerCase()}`}
                mI={mI}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
