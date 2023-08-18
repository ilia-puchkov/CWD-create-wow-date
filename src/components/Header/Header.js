import headerBackground from '../../images/header-background.png';
import headerBackgroundNoise from '../../images/header-background-noise.png';

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
      <div className="header__background">
<img className="header__background-main" src={headerBackground} alt='header-background'/>
<img className="header__background-noise" src={headerBackgroundNoise} alt='header-background'/>

      </div>
      
    </header>
  );
}

export default Header;
