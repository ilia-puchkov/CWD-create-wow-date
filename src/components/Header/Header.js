function Header() {
  return (
    <header className='header'>
      <ul className='header__navigation'>
        <li className='header__navigation-element'>
          <a className='header__navigation-link'>Форматы</a>
        </li>
        <li className='header__navigation-element'>
          <a className='header__navigation-link'>О нас</a>
        </li>
        <li className='header__navigation-element'>
          <a className='header__navigation-link'>Галерея</a>
        </li>
        <li className='header__navigation-element'>
          <a className='header__navigation-link'>Контакты</a>
        </li>
      </ul>
      <button className='header__button'>Заказать звонок</button>
    </header>
  );
}

export default Header;
