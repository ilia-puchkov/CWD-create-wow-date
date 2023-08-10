import testImage from '../../images/test.jpg';

import ImageSlider from '../ImageSlider/ImagesSlider';

function Gallery({slides}) {
  return (
    <section className='gallery' id='gallery'>
      <h2 className='gallery__title'>ГАЛЕРЕЯ</h2>
      <p className='gallery__text'>
        посмотрите, как может выглядеть ваше уникальное мероприятие
      </p>
      <ImageSlider slides={slides} />
    </section>
  );
}

export default Gallery;
