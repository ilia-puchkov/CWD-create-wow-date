import headerBackground from '../../images/header-background.png';

function Header({onContactsClick}) {
  return (
    <header className='header'>
      <ul className='header__navigation'>
        <li className='header__navigation-element'>
          <a className='header__navigation-link' href="#formats">Форматы</a>
        </li>
        <li className='header__navigation-element'>
          <a className='header__navigation-link' href="#about">О нас</a>
        </li>
        <li className='header__navigation-element'>
          <a className='header__navigation-link' href="#gallery">Галерея</a>
        </li>
        <li className='header__navigation-element'>
          <a className='header__navigation-link' href="#contacts">Контакты</a>
        </li>
      </ul>
      <button className='header__button' onClick={onContactsClick} >заказать звонок</button>
      <img className="header__background" src={headerBackground} alt='header-background'/>
    </header>
  );
}

export default Header;
