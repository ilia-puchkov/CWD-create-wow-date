import aboutBackground from '../../images/about-background.png';

function About({ onQuestionsClick }) {
  return (
    <section className='about' id='about'>
          <img className='about__background' src={aboutBackground} />
          <button className='about__button' type="button" onClick={onQuestionsClick}>заполнить анкету</button>

        <div className='about__info'>
          <aside className='about__aside'>
            <h2 className='about__title'>О НАС</h2>
            <p className='about__subtitle'>
              мы Катя и Эрик - пара сумасшедших креативщиков, живущих по
              принципу "для праздника не нужен повод"!
            </p>
          </aside>
          <p className='about__text'>
            Все началось с оригинальных свиданий и организаций дней рождений
            друг для друга, а затем квартирники, массовые мероприятия,
            предсвадебная фотосессия под водой и свадьба с настоящими змеями,
            тараканами и приключениями в стиле Fort Boyard.
          </p>
          <p className='about__text'>
            Теперь мы постоянно набираем обороты и не можем остановиться дарить
            яркие впечатления себе и всем вокруг.
          </p>
          <p className='about__text'>
            Присоединяйтесь к нам и Вы получите те ивенты, которыми
            похвастаетесь в соцсетях, а через много-много лет Ваши внуки будут
            наизусть знать истории о ЛЕ-ГЕН-...подождите...подождите..-ДАР-НЫХ
            мероприятиях!
          </p>
        </div>

    </section>
  );
}

export default About;
