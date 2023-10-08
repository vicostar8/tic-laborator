import React from "react";

const LaboratorFoldere = () => {
  return (
    <div className="row m-0">
      <div className="fs-4 fw-semibold">
        Citește cu atenție instrucțiunile și creează următoarele structuri de
        foldere :
        <ul className="fs-5">
          <li>
            Apasă pe butonul <strong>START</strong> (
            <i className="fa-brands fa-microsoft fs-4 mx-2"></i>{" "}
            <strong>SAU</strong>{" "}
            <i className="fa-brands fa-windows fs-4 mx-2"></i> ) din colțul
            stânga al ecranului.
          </li>
          <li>
            Scrii / cauți <strong>FILE EXPLORER</strong> și îl deschizi (apeși
            pe el click un stânga)
          </li>
          <li>
            În partea stânga, în fâșia îngustă se găsește o listă cu mai multe
            scurtături. Deschide <strong>DESKTOP</strong> (apeși pe el click un
            stânga).
          </li>
          <li>
            După ce ai deschis <strong>DESKTOP</strong> creează un folder cu
            următorul nume: <strong>NUMELE PRENUMELE CLASA</strong>. (exemplu:{" "}
            <strong>POPESCU ION 7A</strong>)
          </li>
        </ul>
      </div>
      <div className="col-lg-4 p-1">
        <div className="lab-foldere-note p-1">
          <div className="fs-4 mb-3 fw-bold text-center">
            {`Pentru nota 6`.toUpperCase()}
          </div>
          <ul className="fs-5">
            <li>Deschide folderul creat cu numele tău</li>
            <li>
              În folderul cu numele tău creeaza <strong>6</strong> foldere cu
              următoarele nume:{" "}
              <strong>LEGUME, FRUCTE, MASINA, AVION, PISICA, CAINE</strong>
            </li>
            <li>După ce ai terminat cheamă-l pe domnul profesor</li>
            <li>
              Redenumește folderul <strong>AVION</strong> cu numele{" "}
              <strong>LACTATE</strong>
            </li>
            <li>
              Șterge folderul <strong>MASINA</strong>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4 p-1">
        <div className="lab-foldere-note p-1">
          <div className="fs-4 mb-3 fw-bold text-center">
            {`Pentru nota 8`.toUpperCase()}
          </div>
          <ul className="fs-5">
            <li>
              Deschide folderul <strong>LEGUME</strong> și creează următoarele{" "}
              <strong>3</strong> foldere: <strong>CEAPA, ROSIE, CARTOFI</strong>
            </li>
            <li>
              Navighează înapoi (apasă pe butonul{" "}
              <i className="fa-solid fa-arrow-left"></i>) din colțul stânga sus
            </li>
            <li>
              Deschide folderul <strong>FRUCTE</strong> și creează următoarele{" "}
              <strong>3</strong> foldere: <strong>MERE, PERE, BANANE</strong>
            </li>
            <li>
              {" "}
              Navighează înapoi (apasă pe butonul{" "}
              <i className="fa-solid fa-arrow-left"></i>) din colțul stânga sus
            </li>
            <li>
              Copiază folderul <strong>PISICA</strong> in folderul{" "}
              <strong>PERE</strong> (pentru a ajunge în folderul{" "}
              <strong>PERE</strong> trebuie să navighezi înapoi{" "}
              <i className="fa-solid fa-arrow-left"></i> în folderul{" "}
              <strong>FRUCTE</strong> și apoi să intri în folderul{" "}
              <strong>PERE</strong>)
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4 p-1">
        <div className="lab-foldere-note p-1">
          <div className="fs-4 mb-3 fw-bold text-center">
            {`Pentru nota 10`.toUpperCase()}
          </div>
          <ul className="fs-5">
            <li>Navighează înapoi în folderul cu numele tău</li>
            <li>
              Mută folderul <strong>CAINE</strong> in folderul{" "}
              <strong>ROSIE</strong>
            </li>
            <li>După ce ai terminat cheamă-l pe domnul profesor</li>
            <li>
              Redenumește folderul <strong>AVION</strong> cu numele{" "}
              <strong>LACTATE</strong>
            </li>
            <li>
              Șterge folderul <strong>MASINA</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LaboratorFoldere;
