import { useEffect, useState } from 'react';

function ImageSlider({ slides }) {
  // Gallery indexes
  const [currentIndex, setCurrentIndex] = useState(1);
  const [secondIndex, setSecondIndex] = useState(2);
  const [thirdIndex, setThirdIndex] = useState(3);

  function goToPrevious() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    const newSecondIndex = isFirstSlide ? 0 : newIndex + 1;
    const newThirdIndex =
      newSecondIndex === slides.length - 1 ? 0 : newSecondIndex + 1;

    setCurrentIndex(newIndex);
    setSecondIndex(newSecondIndex);
    setThirdIndex(newThirdIndex);
  }

  function goToNext() {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    const newSecondIndex = newIndex === slides.length - 1 ? 0 : newIndex + 1;
    const newThirdIndex =
      newSecondIndex === slides.length - 1 ? 0 : newSecondIndex + 1;

    setCurrentIndex(newIndex);
    setSecondIndex(newSecondIndex);
    setThirdIndex(newThirdIndex);
  }

  function goToSlide(slideIndex) {
    const newSecondIndex =
      slideIndex === slides.length - 1 ? 0 : slideIndex + 1;
    const newThirdIndex =
      newSecondIndex === slides.length - 1 ? 0 : newSecondIndex + 1;

    setCurrentIndex(slideIndex);
    setSecondIndex(newSecondIndex);
    setThirdIndex(newThirdIndex);
  }

  return (
    <div className='slider'>
      <div className='slider__arrow slider__arrow-left' onClick={goToPrevious}>
        &#x2039;
      </div>
      <div className='slider__arrow slider__arrow-right' onClick={goToNext}>
        &#8250;
      </div>
      <div className='slider__block'>
        <div
          className='slider__element slider1'
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        ></div>
        <div
          className='slider__element slider2'
          style={{ backgroundImage: `url(${slides[secondIndex].url})` }}
        ></div>
        <div
          className='slider__element slider3'
          style={{ backgroundImage: `url(${slides[thirdIndex].url})` }}
        ></div>
      </div>
      <div className='slider__dots'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={`slider__dot ${
              slideIndex === currentIndex ? 'dot-active' : ''
            }`}
            onClick={() => goToSlide(slideIndex)}
          >
            &#9679;
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
