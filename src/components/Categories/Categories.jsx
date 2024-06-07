import { Link } from "react-router-dom";

function Categories() {
    return (
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



<Link to="/heal" className="categories__el">
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
  </Link>



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

<a
  href="https://alexandersheps.ru/"
  target="_blank"
  className="categories__el"
>
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
</a>
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
<a
  href="https://www.minecraft.net/ru-ru"
  target="_blank"
  className="categories__el"
>
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
</a>

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
  );
}

export default Categories;