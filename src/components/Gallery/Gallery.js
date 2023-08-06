import testImage from '../../images/test.jpg';

function Gallery() {
  return (
    <section className="gallery" id='gallery'>
      <h2 className="gallery__title">ГАЛЕРЕЯ</h2>
      <p className="gallery__text">посмотрите, как может выглядеть ваше уникальное мероприятие</p>
      <img className="gallery__image" src={testImage} alt='gallery' />
    </section>
  )
}

export default Gallery;