import React from "react";

const LaboratorUkraine = () => {
  return (
    <>
      <div className="row m-0 text-white">
        <div className="fs-4 fw-semibold">
          Уважно прочитайте інструкцію (Ви можете скористатися Інтернетом, якщо
          ви забули, як: вибрати, створити, перейменувати, видалити, копіювати,
          перемістити папку.):
          <ul className="fs-5">
            <li>
              Натисніть кнопку СТАРТ(
              <i className="fa-brands fa-microsoft fs-4 mx-2"></i>{" "}
              <strong>або</strong>{" "}
              <i className="fa-brands fa-windows fs-4 mx-2"></i> ) у лівому куті
              екрана.
            </li>
            <li>
              Напишіть / знайдіть FILE EXPLORER і відкрийте його (клацніть на
              ньому лівою кнопкою миші)
            </li>
            <li>
              Ліворуч, у вузькій смузі, є список з кількох ярликів. Відкрийте
              робочий стіл (клацніть на ньому лівою кнопкою миші).
            </li>
            <li>
              Після відкриття <strong>DESKTOP</strong> створіть папку з такою
              назвою: NAME FIRST NAME CLASS. (приклад: МАКСИМ РАДУ 8А)
            </li>
          </ul>
        </div>
        <div className="col-lg-4 p-1">
          <div className="lab-foldere-note p-1">
            <div className="fs-4 mb-3 fw-bold text-center">
              {`Для 6 класу`.toUpperCase()}
            </div>
            <ul className="fs-5">
              <li>Відкрийте папку, створену під вашим іменем</li>
              <li>
                У папці зі своїм іменем створіть 6 папок з такими назвами: Nr 1,
                Nr 2, Nr 3, Nr 4, N 5, Nr 6
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 p-1">
          <div className="lab-foldere-note p-1">
            <div className="fs-4 mb-3 fw-bold text-center">
              {`Для 8 класу`.toUpperCase()}
            </div>
            <ul className="fs-5">
              <li>
                Відкрийте папку №1 і створіть наступні 3 папки: AAA, BBB, CCC
              </li>
              <li>
                Перейти назад (натисніть кнопку у верхньому лівому куті{" "}
                <i className="fa-solid fa-arrow-left"></i>)
              </li>
              <li>
                Відкрийте папку № 2 і створіть наступні 3 папки: FFF, GGG, HHH
              </li>
              <li>
                {" "}
                Перейти назад (натисніть кнопку у верхньому лівому куті{" "}
                <i className="fa-solid fa-arrow-left"></i>)
              </li>
              <li>
                Скопіюйте папку № 6 до папки BBB (щоб отримати доступ до папки
                BBB, потрібно повернутися до папки № 1, а потім увійти в папку
                BBB)
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 p-1">
          <div className="lab-foldere-note p-1">
            <div className="fs-4 mb-3 fw-bold text-center">
              {`Для 10 класу`.toUpperCase()}
            </div>
            <ul className="fs-5">
              <li>Поверніться до папки з вашим іменем</li>
              <li>Папку No 5 перемістити в папку HHH</li>
            </ul>
          </div>
        </div>
        <div className="mt-2">
          <ul className="fs-5 fw-semibold">
            <li>Коли ви закінчите, покличте вчителя</li>
            <li>Перейменуйте папку № 3 на будь-яку назву.</li>
            <li>Видалити папку №4</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LaboratorUkraine;
