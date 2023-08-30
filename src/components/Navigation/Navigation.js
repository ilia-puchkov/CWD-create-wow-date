function Navigation({isOpen, onClose}) {
  return (
    <aside className={`navigation ${isOpen ? 'navigation_opened' : ''}`}>
      <div className="navigation__container">
        <button className="navigation__button-close" type='button' onClick={onClose}></button>
        <nav>
          <ul className="navigation__links">
          <li className='navigation__links-element' onClick={onClose}>
          <a className='navigation__link' href='#formats'>
            форматы
          </a>
        </li>
        <li className='navigation__links-element' onClick={onClose}>
          <a className='navigation__link' href='#about'>
            о нас
          </a>
        </li>
        <li className='navigation__links-element' onClick={onClose}>
          <a className='navigation__link' href='#gallery'>
            галерея
          </a>
        </li>
        <li className='navigation__links-element'>
          <a className='navigation__link' href='#contacts' onClick={onClose}>
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