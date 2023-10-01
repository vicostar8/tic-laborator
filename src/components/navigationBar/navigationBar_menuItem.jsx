import React from "react";

import { useNavigate } from "react-router-dom";

const NavigationBar_MenuItem = ({ mI }) => {
  let navigate = useNavigate();

  return (
    <li
      className="nav-item navBar_menuItem mx-2 fs-3"
      onClick={() => {
        navigate(`/${mI.calea}`);
      }}
    >
      {mI.nume}
    </li>
  );
};

export default NavigationBar_MenuItem;
