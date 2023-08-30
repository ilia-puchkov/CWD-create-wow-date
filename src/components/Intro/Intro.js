import logo from '../../images/cwd-logo.png';
import calendarImage from '../../images/calendar.png';

function Intro({ onQuestionsClick }) {
  return (
    <section className='intro'>
      <img className='intro__logo' src={logo} />
      <div className='intro__block'>
        <div className='intro__block-info'>
          <h1 className='intro__header'>С НАМИ ЛЮБОЙ ДЕНЬ - ПРАЗДНИК!</h1>
          <p className='intro__text'>
            создаём незабываемые мероприятия по индивидуальному сценарию
          </p>
          <button className='intro__button' onClick={onQuestionsClick}>заполнить анкету</button>
        </div>
        <img className='intro__image' src={calendarImage} />
      </div>
    </section>
  );
}

export default Intro;
