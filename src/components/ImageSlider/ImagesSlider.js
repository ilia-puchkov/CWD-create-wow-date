import { useState } from 'react';

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function goToPrevious() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function goToNext() {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  function goToSlide(slideIndex) {
    setCurrentIndex(slideIndex);
  }

  return (
    <div className='slider'>
      <div className='slider__arrow slider__arrow-left' onClick={goToPrevious}>
        &#x2190;
      </div>
      <div className='slider__arrow slider__arrow-right' onClick={goToNext}>
        &#x2192;
      </div>
      <div
        className='slider__element'
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      <div className='slider__dots'>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} className='slider__dot' onClick={() => goToSlide(slideIndex)} >&#9679;</div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
