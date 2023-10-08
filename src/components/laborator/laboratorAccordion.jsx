import React from "react";
import LaboratorAccordion_Item from "./laboratorAccordion_items";

const LaboratorAccordion = ({ clasa, laboratoare }) => {
  return (
    <div className="accordion accordion-flush" id="labAccordion">
      {laboratoare.map(
        (l, idx) =>
          l.clase.includes(clasa) && (
            <LaboratorAccordion_Item
              key={`lab-${l.nume}`}
              index={idx + 1}
              laborator={l}
            />
          )
      )}
    </div>
  );
};

export default LaboratorAccordion;
