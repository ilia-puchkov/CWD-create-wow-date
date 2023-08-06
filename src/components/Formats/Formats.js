import birthdayImage from '../../images/format-HB.svg';
import date from '../../images/format-date.svg';
import proposal from '../../images/format-proposal.svg';
import party from '../../images/format-party.svg';
import bachelor from '../../images/format-bachelor.svg';
import game from '../../images/format-game.svg';

function Formats() {
  return (
    <section className="formats" id='formats'>
      <div className="formats__container">
        <div className="format">
          <img className="format__image" src={birthdayImage} alt='birthday' />
          <h2 className="format__title">ДЕНЬ РОЖДЕНИЯ</h2>
          <p className="format__text">Звезда ТВ-шоу или вечеринки на яхте, а может главный герой иммерсивного театра? Подарок для именинника, который точно запомнится!</p>
        </div>
        <div className="format">
          <img className="format__image" src={date} alt='date' />
          <h2 className="format__title">СВИДАНИЕ</h2>
          <p className="format__text">Незабываемый день для второй половинки может быть романтичным или экстремальным, трогательным или безбашенным, по поводу или без, решать вам!</p>
        </div>
        <div className="format">
          <img className="format__image" src={proposal} alt='proposal' />
          <h2 className="format__title">ПРЕДЛОЖЕНИЕ</h2>
          <p className="format__text">Вы вдвоем, то самое кольцо, заветное "да" и ничего кроме! А сделать из этого самую настоящую сказку поможем мы!</p>
        </div>
        <div className="format">
          <img className="format__image" src={party} alt='party' />
          <h2 className="format__title">ТЕМАТИЧЕСКАЯ ВЕЧЕРИНКА</h2>
          <p className="format__text">Устроим вечер в стиле любимых фильмов и сериалов? Перенесёмся в эпоху хиппи или стиляг? А может отметим Хэллоуин?</p>
        </div>
        <div className="format">
          <img className="format__image" src={bachelor} alt='bachelor' />
          <h2 className="format__title">МАЛЬЧИШНИК И ДЕВИЧНИК</h2>
          <p className="format__text">От нежности до пикантности, от камерного до грандиозного, организуем тусовку века в честь нового этапа жизни!</p>
        </div>
        <div className="format">
          <img className="format__image" src={game} alt='game' />
          <h2 className="format__title">ИГРЫ БЕЗ ПОВОДА</h2>
          <p className="format__text">Алкоквиз, бирпонг, городки из маршмеллоу и ещё сотня других вариаций игр. Собери компанию или присоединись к другим!</p>
        </div>
      </div>

    </section>
  )
}

export default Formats;