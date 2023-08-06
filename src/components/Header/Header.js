function Header() {
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
      <button className='header__button'>Заказать звонок</button>
    </header>
  );
}

export default Header;
