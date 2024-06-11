import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
        <div className="header__left"> 
      <Link to="/" className="logo" >
        <p className="logo__blue">СКУФ</p><p className="logo__red">УСЛУГИ</p>
      </Link>
      <div className="header__skyf">Скуфам </div>
      <svg class="header__skyf_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
      </div>
      <nav className="header__nav">
        <p className="header__nav_el">Услуги</p>
        <p className="header__nav_el">Документы</p>
        <p className="header__nav_el">Заявления</p>
        <p className="header__nav_el">Платежи</p>
        <p className="header__nav_el">Помощь</p>
        <svg className="header__nav_search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
      </nav>
    </header>
  );
}

export default Header;
