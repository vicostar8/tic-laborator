import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LaboratorAccordion from "./laboratorAccordion";
import LaboratorFoldere from "./laboratorFoldere";

const LaboratorPage = () => {
  const clasa = useLocation().state;

  const laboratoare = [
    {
      nume: "Foldere",
      clase: [5, 6, 7, 8],
      disabled: false,
      icon: <i className="fa-solid fa-folder"></i>,
      continut: <LaboratorFoldere />,
    },
    {
      nume: "Paint",
      clase: [5, 6, 7, 8],
      disabled: true,
      icon: <i className="fa-solid fa-palette"></i>,
    },
    {
      nume: "Pivot",
      clase: [6],
      disabled: true,
      icon: <i className="fa-solid fa-person-walking"></i>,
    },
    {
      nume: "Microsoft Word",
      clase: [5, 6, 7, 8],
      disabled: true,
      icon: <i className="fa-solid fa-file-word"></i>,
    },
    {
      nume: "Microsoft Excel",
      clase: [5, 6, 7, 8],
      disabled: true,
      icon: <i className="fa-solid fa-file-excel"></i>,
    },
    {
      nume: "Microsoft PowerPoint",
      clase: [5, 6, 7, 8],
      disabled: true,
      icon: <i className="fa-solid fa-file-powerpoint"></i>,
    },
    {
      nume: "Editare Audio / Video",
      clase: [7],
      disabled: true,
      icon: <i className="fa-solid fa-photo-film"></i>,
    },
  ];

  return (
    <div className="p-2">
      <div className="pos-c fs-3 lab-page-text">
        {`Laborator - Clasa a ${clasa}-a`.toUpperCase()}
      </div>
      <div className="p-3">
        <LaboratorAccordion clasa={clasa} laboratoare={laboratoare} />
      </div>
    </div>
  );
};

export default LaboratorPage;
