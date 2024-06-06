import arrow from "../../image/arrow.svg";

function Main() {
  return (
    <main className="main">
      <div className="categories">
        <div className="categories__el">
          <svg
            className="categories__el_icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          <p className="categories__el_title">Популярные услуги</p>
        </div>
        <div className="categories__el">
          <svg
            className="categories__el_icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19.5 19.5"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polygon points="18.75 6.25 13.25 6.25 13.25 0.75 6.25 0.75 6.25 6.25 0.75 6.25 0.75 13.25 6.25 13.25 6.25 18.75 13.25 18.75 13.25 13.25 18.75 13.25 18.75 6.25"></polygon>
          </svg>
          <p className="categories__el_title">Здоровье</p>
        </div>
        <div className="categories__el">
          <svg
            className="categories__el_icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
          <p className="categories__el_title">Справки Выписки</p>
        </div>

        <div className="categories__el">
          <svg
            className="categories__el_icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25.5 22.83"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M20.75,6.08V5a6.62,6.62,0,0,0-.29-2.81A2.65,2.65,0,0,0,19.29,1,6.62,6.62,0,0,0,16.48.75H5A6.62,6.62,0,0,0,2.21,1,2.65,2.65,0,0,0,1,2.21,6.62,6.62,0,0,0,.75,5V6.08m24,5.34H22.08a2.67,2.67,0,0,0,0,5.33h2.67M.75,6.08V17.82A6.64,6.64,0,0,0,1,20.63a2.63,2.63,0,0,0,1.17,1.16A6.62,6.62,0,0,0,5,22.08H20.48a6.62,6.62,0,0,0,2.81-.29,2.63,2.63,0,0,0,1.17-1.16,6.64,6.64,0,0,0,.29-2.81V10.35a6.64,6.64,0,0,0-.29-2.81,2.7,2.7,0,0,0-1.17-1.17,6.62,6.62,0,0,0-2.81-.29Z"></path>
          </svg>
          <p className="categories__el_title">Пенсия Пособия</p>
        </div>
        <div className="categories__el">
          <svg
            className="categories__el_icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="1" y="3" width="15" height="13"></rect>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
            <circle cx="5.5" cy="18.5" r="2.5"></circle>
            <circle cx="18.5" cy="18.5" r="2.5"></circle>
          </svg>
          <p className="categories__el_title">Транспорт Права</p>
        </div>
        <div className="categories__el">
          <svg
            className="categories__el_icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25.5 23.46"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M15.34.75h.2A9.21,9.21,0,0,1,24.75,10v0a0,0,0,0,1,0,0H15.34a0,0,0,0,1,0,0V.75A0,0,0,0,1,15.34.75Z"></path>
            <path d="M.75,4.7S4.41,4.05,4.41,10"></path>
            <path d="M4.41,10v2.68a7.4,7.4,0,0,0,2,5.05,2.69,2.69,0,0,1,4,2.2,6.94,6.94,0,0,0,1.38.14h5.08a2.69,2.69,0,0,1,4.93-1.48,7.38,7.38,0,0,0,2.95-5.91V10Z"></path>
            <path d="M6.4,17.69a2.68,2.68,0,1,0,4,2.34v-.14"></path>
            <path d="M21.8,18.55A2.69,2.69,0,1,1,16.87,20"></path>
          </svg>
          <p className="categories__el_title">Семья</p>
        </div>

        <div className="categories__el">
          <svg
            className="categories__el_icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <p className="categories__el_title">Изгнание Лярвы</p>
        </div>
        <div className="categories__el">
          <svg
            className="categories__el_icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12.48,16.8V15.64a2.31,2.31,0,0,0-2.31-2.32H6.11a2.32,2.32,0,0,0-2.32,2.32V16.8"></path>
            <circle cx="8.14" cy="8.68" r="2.32"></circle>
            <path d="M2.53.75H13.75a1.78,1.78,0,0,1,1.78,1.78V18.81a3.6,3.6,0,0,1-3.6,3.6H2.53A1.78,1.78,0,0,1,.75,20.63V2.53A1.78,1.78,0,0,1,2.53.75Z"></path>
          </svg>
          <p className="categories__el_title">Регистрация Паспорт</p>
        </div>
        <div className="categories__el">
          <svg
            className="categories__el_icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 29.07 29.63"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M16.05,15.47,4.18,27.34a2,2,0,0,1-2.84,0h0a2,2,0,0,1,0-2.85L13.22,12.63"></path>
            <rect
              x="13.27"
              y="0.98"
              width="10.63"
              height="19.01"
              rx="1.8"
              transform="translate(-1.97 16.22) rotate(-45)"
            ></rect>
            <line x1="10.73" y1="10.14" x2="18.24" y2="2.62"></line>
            <line x1="26.46" y1="10.83" x2="18.94" y2="18.35"></line>
            <rect
              x="18.02"
              y="24.87"
              width="10.17"
              height="4.01"
              rx="2.01"
            ></rect>
          </svg>
          <p className="categories__el_title">Штрафы налоги</p>
        </div>
        <div className="categories__el">
          <svg
            className="categories__el_icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <p className="categories__el_title">Земля Дом</p>
        </div>
        <div className="categories__el">
          <svg
            className="categories__el_icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
          <p className="categories__el_title">Квадраты</p>
        </div>
        <div className="categories__el">
          <svg
            className="categories__el_icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M22.31,6.11A1.43,1.43,0,0,0,20.18,5L16.1,7.3c-2.62.18-3.25-1.14-3.32-2.27a1.43,1.43,0,0,1,1.44-1.5H16.1C15.51.31,13.13.61,12,1a1.5,1.5,0,0,1-.89,0C10,.61,7.59.31,7,3.53H8.89A1.42,1.42,0,0,1,10.32,5C10.25,6.16,9.63,7.48,7,7.3L2.92,5A1.42,1.42,0,0,0,.8,6.11C.55,8.8,1.08,13.2,7,13.53a1.43,1.43,0,0,1,1.23,1.9L7.42,17.9a1.44,1.44,0,0,0,.51,1.61,4.94,4.94,0,0,0,3.62,1.19,5,5,0,0,0,3.63-1.19,1.43,1.43,0,0,0,.5-1.61l-.83-2.47a1.43,1.43,0,0,1,1.23-1.9C22,13.2,22.55,8.8,22.31,6.11Z"></path>
          </svg>
          <p className="categories__el_title">Ведомства</p>
        </div>
      </div>
      <div class="request">
        <div className="skyf-image">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 126.02 138.75">
            <g>
              <path
                fill="#fff"
                d="M66.76,138.49c-15.56.7-28.31-3.45-39.05-13.37-6.14-5.67-12.4-11.21-18.64-16.76-10-8.86-10.55-17.1-7.32-29.5C4.82,67.05,11.86,57,20.67,48.3c1.17-1.14,2.18-3.77,1.67-5.08-3.26-8.35.38-15.61,4.26-22.06C35.16,7,47.69-1.12,65.05.13,80.33,1.23,100.43,15.5,98.17,34c-.67,5.43,1,9.27,5.39,13.28,11.2,10.2,19.76,22.45,22.1,37.95.5,3.32.63,7.24-.65,10.2-3.33,7.72-7.49,15.09-15.08,19.7a8.05,8.05,0,0,0-2.49,2.3c-4.8,7.06-11.39,11.93-18.8,16C81.42,137.34,73.93,139.55,66.76,138.49ZM89.22,87.27C87.83,89.16,86.84,92,85,92.78c-5,2.07-10.26,4.36-15.51,4.62-19.44.93-38-16.82-41.82-35.55-.61-2.93-1.68-5.77-2.64-9C13.43,61.85.49,89.59,8.11,96.64c2.88-3.36,5.36-7.29,8.81-10C20,84.29,21,82,20.65,78.34c-.18-1.88.71-5.29,1.81-5.6,3.44-1,3.18,2.33,3.59,4.49.51,2.71,1.12,4.54,4.66,5.25,4.08.82,6.85,3.88,5.93,8.86a3.93,3.93,0,0,0,1.12,2.84c2.69,2.84,5.12,15.49,2.77,18.35-1.9,2.31-4.88,3.76-7.45,5.5a17.8,17.8,0,0,1-3,1.31c16.47,17.85,55.16,19,70.13-3-4.93-9.41-11.35-17.91-11-29.08.73.2,1.76.81,2.15.54,3.19-2.29,6.26-4.74,9.45-7.22-.55-1-1.25-1.76-1.24-2.47,0-1.91.35-3.82.55-5.73a44.87,44.87,0,0,1,4.36,3.07c1.43,1.25,2.36,3.28,4,4.07,3.53,1.75,7.34,2.94,10.67,4.22-1.48-10.39-10.72-25.58-19.63-31.82-1.16,8.19-1.81,16.6-3.74,24.71C94.82,80.48,91.47,83.74,89.22,87.27ZM32,24.28c-.49,1.36-1.73,3.06-1.31,4,.85,1.93,2.69,3.41,4,5.19a5.94,5.94,0,0,1,1.11,3c0,.45-1.31,1.47-1.71,1.33a8.1,8.1,0,0,1-2.43-1.84c-.91-.8-1.77-1.66-2.65-2.49-.58,1.18-1.62,2.36-1.65,3.55a21.38,21.38,0,0,0,.9,6.35c1.2,4.14,3.1,8.11,4,12.3,1.79,8.62,5.13,16.48,10.86,23.1,7,8.11,16,12.92,26.92,13,11.58,0,20.43-8.58,21.4-22.6,1-14.24.4-28.6.27-42.91,0-1.79-1.44-3.56-2.21-5.35a22,22,0,0,0,.16,6.31c0,.07-2,.62-2.17.39a35.9,35.9,0,0,1-1.89-4.09c-2.29-.27-5.7,0-6-.83-.84-2.38-.41-5.2-.49-7.85l5.78,3s.6-.63.46-1C82.89,10.29,72,7.52,66.86,12.08a94,94,0,0,0-7.59,7.2c-2.5,2.76-4.63,5.43-7.53.48-.27-.45-1.36-.37-2-.62-1.24-.45-3.51-1-3.5-1.44a7.63,7.63,0,0,1,1.55-4.33,51.13,51.13,0,0,1,5.3-5c-10.14,1.47-16.65,7.5-21.2,16Zm1.62,75.15C31.51,98.51,30.91,98,30.33,98c-2.46.08-4.94.53-7.38.38-1.26-.08-2.46-1.12-3.69-1.73.8-1.27,1.32-3,2.46-3.72,1.46-1,3.46-1.08,5.16-1.73a43.36,43.36,0,0,0,4.27-2.3c-8.29-1.25-14.33,3.18-16.52,10.87-1.11,3.9,2.89,10.58,7.62,12.75,3.85,1.76,10.67-.3,13.44-4.72a94.68,94.68,0,0,1-9.61-.09c-1.58-.16-3.06-1.26-4.59-1.94,1.23-1.3,2.25-3,3.75-3.8C27.36,100.9,29.84,100.52,33.57,99.43Zm61.57-5.49c3.92-1.19,6.84-2.38,9.88-2.86,1.45-.23,3.12.89,4.7,1.4a22.55,22.55,0,0,1-3,3.94c-1.93,1.65-4.15,3-6.25,4.43l.91,1.29c1.12-.54,2.24-1.1,3.36-1.63,2.17-1,4.79-3.3,6.34-.08.51,1.07-1.88,3.84-3.34,5.47-1.18,1.32-3,2.1-4.48,3.12,5.65,1.26,8.27-1.8,9.85-6.11,1.85-5,3.51-10.17-.05-15.2a4.84,4.84,0,0,0-2-1.35C106.19,84.28,98.19,87.68,95.14,93.94Z"
              ></path>
              <path
                fill="#fff"
                d="M63.26,44.11a17.22,17.22,0,0,1-.21,3.46c-1.06,4.11-2.53,8.39-7.31,9S48.13,54,46,50.14c-.87-1.59-1.38-3.37-2.11-5-2-4.44-2.35-9.15,1.39-12.42,2.29-2,6.35-3.6,9.17-3.05,5.06,1,7.43,5.62,8.56,10.51a18,18,0,0,1,.05,4Zm-8,6.62a13.65,13.65,0,0,0,.35-13.28c-.56-1.14-3-1.72-4.57-1.83-.69,0-2.27,1.84-2.16,2.68C49.46,42.83,50.08,47.5,55.24,50.73Z"
              ></path>
              <path
                fill="#fff"
                d="M76.22,28.91c5.7.06,9.24,3.51,10.25,10.42.77,5.27-.32,10.53-4.47,14-2.1,1.76-6,3.13-8.33,2.4-2.61-.8-5.77-4-6.25-6.56a37.81,37.81,0,0,1,.48-14.52A7.27,7.27,0,0,1,76.22,28.91Zm-1,21.44C80.4,47.63,82.44,42.56,80,38c-.7-1.27-2.53-2.9-3.59-2.73-1.45.23-3.58,1.87-3.78,3.15C71.94,42.63,71.13,47.14,75.25,50.35Z"
              ></path>
              <path
                fill="#fff"
                d="M74.7,69.56C72.05,69.14,68,68.07,63.92,68c-3.65-.07-7.32,1-11,1.47a22.66,22.66,0,0,1-4.18-.24c.23-1.49.05-3.27.82-4.41s2.51-2.66,3.83-2.67c7.26,0,14.52.4,21.77.48,3.11,0,6.23-.68,9.32-.52,1.43.07,2.8,1.4,4.19,2.17-1.27,1.29-2.33,3.24-3.86,3.74C82.05,68.93,79,69,74.7,69.56Z"
              ></path>
              <path
                fill="#fff"
                d="M64.38,88.34c-2.33-1.29-7-3.6-11.28-6.44-.93-.61-.6-3.13-.85-4.77,1.47.26,3.22.09,4.36.84,9.79,6.41,13.21,6.32,22.72-.64,1-.7,2.64-.41,4-.58,0,1.45.56,3.18,0,4.32C81.2,85.13,73.64,88.37,64.38,88.34Z"
              ></path>
              <path
                fill="#fff"
                d="M31.85,24.41c1.49-.13,3.73-.92,4.32-.25,1.46,1.65,2.16,4,3.16,6-1.4.32-3.72,1.3-4,.86A44.76,44.76,0,0,1,32,24.28Z"
              ></path>
              <path
                fill="#fff"
                d="M70,120.46c-9.22-.82-17-2.77-22.24-10-1-1.43-.73-3.79-1-5.72,1.75.72,4.12,1,5.16,2.24,7.54,9.4,24.16,9.81,32.23.77,1-1.13,3.24-1.16,4.9-1.7-.11,1.76.4,3.92-.44,5.2C84,118.18,76.47,119.19,70,120.46Z"
              ></path>
            </g>
          </svg>
        </div>
        <div className="content">
          <div className="cards">
            <div className="card">
              <svg
                className="card__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 23.5 29.74"
              >
                <polyline points="20.75 15.99 20.75 29 2.75 29 2.75 15.99"></polyline>
                <rect x="0.75" y="10.99" width="22" height="5"></rect>
                <line x1="9.75" y1="19.99" x2="13.75" y2="19.99"></line>
                <path d="M6.08,11,3.77,8A1.38,1.38,0,0,1,4,6.07l1.09-.84"></path>
                <path d="M9.47,1.88,10.55,1a1.36,1.36,0,0,1,1.93.25l5.88,7.62a1.38,1.38,0,0,1-.25,1.93l-.2.15"></path>
                <rect
                  x="4.54"
                  y="2.18"
                  width="5.5"
                  height="2.75"
                  rx="0.69"
                  transform="translate(-0.65 5.19) rotate(-37.62)"
                ></rect>
              </svg>
              <p className="card__title">Быть или не быть скуфом</p>
              <img className="card__arrow" src={arrow} />
            </div>

            <div className="card">
              <svg
                className="card__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                <line x1="4" y1="22" x2="4" y2="15"></line>
              </svg>
              <p className="card__title">Флаги в продаже!</p>
              <img className="card__arrow" src={arrow} />
            </div>
            <div className="card">
              <svg
                className="card__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <p className="card__title">Конкурсы и проекты для юных скуфов</p>
              <img className="card__arrow" src={arrow} />
            </div>
          </div>

          <div className="input__box">
            <input className="input" type="text" placeholder="Поиск" />
            <svg
              className="input__icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </div>

          <div className="tips">
            <div className="tips__el">Танки</div>
            <div className="tips__el">Загранпаспорт</div>
            <div className="tips__el">Альтушка</div>
            <div className="tips__el">Пенсия</div>
            <div className="tips__el">Пособия</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
