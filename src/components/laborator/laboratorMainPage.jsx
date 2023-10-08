import React from "react";
import { useNavigate } from "react-router-dom";

import "./css/laborator.css";

const LaboratorMainPage = () => {
  const navigate = useNavigate();
  const clase = [5, 6, 7, 8];

  return (
    <div className="">
      <div className="row m-0 p-2">
        {clase.map((c) => (
          <div key={`clasa-${c}`} className="col-lg-3 p-2">
            <div
              className="pos-c-cc p-2 fs-3 lab-clasa-card"
              onClick={() =>
                navigate(`/laborator/clasa-${c}`, {
                  state: c,
                })
              }
            >{`Clasa a ${c}-a`}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaboratorMainPage;
