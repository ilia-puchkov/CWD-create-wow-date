import logo from '../../images/cwd-logo.png';
import footerBackground from '../../images/header-background.png';

function Footer({ onContactsClick }) {
  return (
    <footer className='footer' id='contacts'>
      <h2 className='footer__title'>ОСТАЛИСЬ ВОПРОСЫ?</h2>
      <div className='footer__container'>
        <div className='footer__navigation'>
          <ul className='footer__navigation-list'>
            <li className='footer__navigation-link'>
              <a className='footer__navigation-link' href='#formats'>
                ФОРМАТЫ
              </a>
            </li>
            <li className='footer__navigation-link'>
              <a className='footer__navigation-link' href='#about'>
                О НАС
              </a>
            </li>
            <li className='footer__navigation-link'>
              <a className='footer__navigation-link' href='#how'>
                КАК ЭТО РАБОТАЕТ?
              </a>
            </li>
            <li className='footer__navigation-link'>
              <a className='footer__navigation-link' href='#gallery'>
                ГАЛЕРЕЯ
              </a>
            </li>
          </ul>
        </div>
        <div className='footer__middle'>
          <button className='footer__button' onClick={onContactsClick} type='button'>
            заказать звонок
          </button>
          <img className='footer__logo' src={logo} />
          <p className='footer__text'>CREATE WOW DATE, 2023</p>
        </div>
        <div className='footer__contacts'>
          <ul className='footer__contacts-list'>
            <li className='footer__contacts-link'>
              <p className='footer__contacts-link'></p>+79999999999
            </li>
            <li className='footer__contacts-link'>
              <a className='footer__contacts-link' href='#'>
                createwowdate@yandex.ru
              </a>
            </li>
            <li className='footer__contacts-link'>
              <a className='footer__contacts-link' href='#'>
                VK
              </a>
            </li>
            <li className='footer__contacts-link'>
              <a className='footer__contacts-link' href='#'>
                TELEGRAM
              </a>
            </li>
          </ul>
        </div>
      </div>
      <img
        className='footer__background'
        src={footerBackground}
        alt='footer-background'
      />
    </footer>
  );
}

export default Footer;
