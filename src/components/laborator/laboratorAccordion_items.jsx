import React from "react";

const LaboratorAccordion_Item = ({ index, laborator }) => {
  return (
    <div
      className={`labAccordion-item my-2 ${
        laborator.disabled && `labAccordion-disabledDiv`
      }`}
    >
      <div
        className="collapsed labAccordion-button p-2 fs-3 d-flex"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#collapse-${index}`}
        aria-expanded="false"
        aria-controls={`collapse-${index}`}
      >
        <div className="px-1">{laborator.icon}</div>
        <div className="px-1">{laborator.nume}</div>
      </div>
      <div
        id={`collapse-${index}`}
        className="collapse labAccordion-body"
        data-bs-parent="#labAccordion"
      >
        <div className="accordion-body">{laborator.continut}</div>
      </div>
    </div>
  );
};

export default LaboratorAccordion_Item;
