import React from "react";
import LaboratorUkraine from "./laboratorUkraine";

import select_folder from "../../images/Select_Folder.gif";
import create_folder from "../../images/Create_Folder.gif";
import rename_folder from "../../images/Rename_Folder.gif";
import delete_folder from "../../images/Delete_Folder.gif";
import copy_folder from "../../images/Copy_Folder.gif";
import move_folder from "../../images/Move_Folder.gif";

const LaboratorFoldere = () => {
  return (
    <>
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
      <div className="p-1">
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
          </ul>
        </div>
      </div>
      <div className="p-1">
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
      <div className="p-1">
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
          </ul>
        </div>
      </div>
      <div className="mt-2">
        <ul className="fs-5 fw-semibold">
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

      {/* AJUTOR */}
      <div className="lab-foldere-ajutor">
        <div className="lab-foldere-ajutor-titlu text-center fw-bold fs-3 p-2 mb-3">
          {`Ajutor`.toUpperCase()}
        </div>
        {/* SELECT */}
        <div className="lab-foldere-ajutor-item my-3">
          <div className="text-center fs-4 fw-bold p-2">Selectare - Select</div>
          <div className="fs-5 p-2">
            Pentru a <strong>selecta</strong> este necesar să apeși un click{" "}
            <strong>stânga</strong> pe folderul sau fișierul dorit. După ce ai
            apăsat click stânga vei observa că fundalul folderului / fișierului
            s-a schimbat (asta înseamnă ca folderul este selectat).
          </div>
          <div className="pos-c">
            <img
              src={select_folder}
              alt="Select a folder video"
              className="w-100"
            />
          </div>
        </div>
        {/* CREATE */}
        <div className="lab-foldere-ajutor-item my-3">
          <div className="text-center fs-4 fw-bold p-2">Creare / Create</div>
          <div className="fs-5 p-2">
            Pentru a <strong>crea</strong> un folder, primul pas este să
            navighezi în locația în care vrei sa creezi unul. Apoi în spațiul
            liber (interiorul folderului) apeși click <strong>dreapta</strong>{" "}
            pentru a ne apărea meniul. Apeși <strong>NEW sau NOU</strong> și
            apoi <strong>FOLDER</strong>. Apoi dai un nume folderului și apeși{" "}
            <strong>ENTER</strong> pentru a valida.
          </div>
          <div className="pos-c">
            <img
              src={create_folder}
              alt="Create a folder video"
              className="w-100"
            />
          </div>
        </div>
        {/* RENAME */}
        <div className="lab-foldere-ajutor-item my-3">
          <div className="text-center fs-4 fw-bold p-2">
            Redenumire / Rename
          </div>
          <div className="fs-5 p-2">
            Pentru a redenumi un folder / fișier primul pas este să-l{" "}
            <strong>selectăm</strong> (daca nu știi să selectezi un folder, vezi
            pasul de selectare de mai sus). După ce l-am selectat, ținem mouseul
            pe folder și apăsăm click <strong>dreapta</strong> pentru a ne
            apărea meniul. Apoi apasă pe <strong>REDENUMIRE sau RENAME</strong>{" "}
            și dă-i folderului un nume nou. (Dacă nu găsești opțiunea de
            REDENUMIRE / RENAME apasă pe <strong>Show more options</strong>). La
            final, după ce ai dat un nume nou, apasă <strong>ENTER</strong>{" "}
            pentru a valida.
          </div>
          <div className="pos-c">
            <img
              src={rename_folder}
              alt="Rename a folder video"
              className="w-100"
            />
          </div>
        </div>
        {/* DELETE */}
        <div className="lab-foldere-ajutor-item my-3">
          <div className="text-center fs-4 fw-bold p-2">Șterge / Delete</div>
          <div className="fs-5 p-2">
            Pentru a șterge un folder / fișier primul pas este să-l{" "}
            <strong>selectăm</strong> (daca nu știi să selectezi un folder, vezi
            pasul de selectare de mai sus). După ce l-am selectat, ținem mouseul
            pe folder și apăsăm click <strong>dreapta</strong> pentru a ne
            apărea meniul. Apoi apasă pe <strong>ȘTERGERE sau DELETE</strong>.
            (Dacă nu găsești opțiunea de ȘTERGERE / DELETE apasă pe{" "}
            <strong>Show more options</strong>).
          </div>
          <div className="pos-c">
            <img
              src={delete_folder}
              alt="Delete a folder video"
              className="w-100"
            />
          </div>
        </div>
        {/* COPY */}
        <div className="lab-foldere-ajutor-item my-3">
          <div className="text-center fs-4 fw-bold p-2">Copiere / Copy</div>
          <div className="fs-5 p-2">
            Pentru a face o <strong>clonă (copia)</strong> mai întâi navigăm în
            locația unde se află folderul / fișierul pe care dorim să-l copiem.
            Îl <strong>selectăm</strong> (dacă nu știi să selectezi un folder /
            fișier vezi pasul de selectare de mai sus) și în timp ce mouseul
            este pe folderul selectat apăsăm click <strong>dreapta</strong>{" "}
            pentru a ne apărea meniul. Selectăm <strong>COPIERE / COPY</strong>,
            navigăm în folderul destinație și în interiorul lui apăsăm click{" "}
            <strong>dreapta</strong> pentru a ne apărea meniul și apăsăm{" "}
            <strong>LIPIRE sau PASTE</strong>. Vom observa că folderul copiat se
            află atât în folderul <strong>SURSĂ</strong> cât și în cel{" "}
            <strong>DESTINAȚIE</strong>
          </div>
          <div className="pos-c">
            <img
              src={copy_folder}
              alt="Copy a folder video"
              className="w-100"
            />
          </div>
        </div>
        {/* PASTE */}
        <div className="lab-foldere-ajutor-item my-3">
          <div className="text-center fs-4 fw-bold p-2">Mutare / Cut</div>
          <div className="fs-5 p-2">
            Pentru a <strong>muta</strong> mai întâi navigăm în locația unde se
            află folderul / fișierul pe care dorim să-l mutăm. Îl{" "}
            <strong>selectăm</strong> (dacă nu știi să selectezi un folder /
            fișier vezi pasul de selectare de mai sus) și în timp ce mouseul
            este pe folderul selectat apăsăm click <strong>dreapta</strong>{" "}
            pentru a ne apărea meniul. Selectăm <strong>TĂIERE sau CUT</strong>,
            navigăm în folderul destinație și în interiorul lui apăsăm click{" "}
            <strong>dreapta</strong> pentru a ne apărea meniul și apăsăm{" "}
            <strong>LIPIRE sau PASTE</strong>. Vom observa că folderul mutat se
            află doar în folderul <strong>DESTINAȚIE</strong>.
          </div>
          <div className="pos-c">
            <img
              src={move_folder}
              alt="Move a folder video"
              className="w-100"
            />
          </div>
        </div>
      </div>
      <LaboratorUkraine />
    </>
  );
};

export default LaboratorFoldere;
