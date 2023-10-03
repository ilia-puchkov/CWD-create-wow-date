import headerBackground from '../../images/main-background.png';

function Header({ onContactsClick, onNavigationClick}) {
  return (
    <header className='header'>
      <ul className='header__navigation'>
        <li className='header__navigation-element'>
          <a className='header__navigation-link' href='#formats'>
            форматы
          </a>
        </li>
        <li className='header__navigation-element'>
          <a className='header__navigation-link' href='#about'>
            о нас
          </a>
        </li>
        <li className='header__navigation-element'>
          <a className='header__navigation-link' href='#gallery'>
            галерея
          </a>
        </li>
        <li className='header__navigation-element'>
          <a className='header__navigation-link' href='#contacts'>
            контакты
          </a>
        </li>
      </ul>
      <button className='header__button' onClick={onContactsClick}>
        заказать звонок
      </button>
      <button className='header__menu' onClick={onNavigationClick}></button>
      <div className='header__background'>
        <img src={headerBackground} className='header__background-main header__background-main-effect'/>
      </div>
    </header>
  );
}

export default Header;
