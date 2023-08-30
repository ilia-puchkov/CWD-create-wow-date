function Navigation() {
  return (
    <aside className='navigation'>
      <div className="navigation__container">
        <button className="navigation__button-close" type='button'></button>
        <nav>
          <ul className="navigation__links">
          <li className='navigation__links-element'>
          <a className='navigation__link' href='#formats'>
            форматы
          </a>
        </li>
        <li className='navigation__links-element'>
          <a className='navigation__link' href='#about'>
            о нас
          </a>
        </li>
        <li className='navigation__links-element'>
          <a className='navigation__link' href='#gallery'>
            галерея
          </a>
        </li>
        <li className='navigation__links-elementt'>
          <a className='navigation__link' href='#contacts'>
            контакты
          </a>
        </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
};

export default Navigation;