import { useEffect, useState } from 'react';

function ImageSlider({ slides, onImageClick }) {
  // Gallery indexes
  const [currentIndex, setCurrentIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(1);
  const [thirdIndex, setThirdIndex] = useState(2);
  const [fourthIndex, setFourthIndex] = useState(3);

  function goToPrevious() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    const newSecondIndex = isFirstSlide ? 0 : newIndex + 1;
    const newThirdIndex =
      newSecondIndex === slides.length - 1 ? 0 : newSecondIndex + 1;
    const newFourthIndex =
      newThirdIndex === slides.length - 1 ? 0 : newThirdIndex + 1;

    setCurrentIndex(newIndex);
    setSecondIndex(newSecondIndex);
    setThirdIndex(newThirdIndex);
    setFourthIndex(newFourthIndex);
  }

  function goToNext() {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    const newSecondIndex = newIndex === slides.length - 1 ? 0 : newIndex + 1;
    const newThirdIndex =
      newSecondIndex === slides.length - 1 ? 0 : newSecondIndex + 1;
    const newFourthIndex =
      newThirdIndex === slides.length - 1 ? 0 : newThirdIndex + 1;

    setCurrentIndex(newIndex);
    setSecondIndex(newSecondIndex);
    setThirdIndex(newThirdIndex);
    setFourthIndex(newFourthIndex);
  }

  function goToSlide(slideIndex) {
    const newSecondIndex =
      slideIndex === slides.length - 1 ? 0 : slideIndex + 1;
    const newThirdIndex =
      newSecondIndex === slides.length - 1 ? 0 : newSecondIndex + 1;
    const newFourthIndex =
      newThirdIndex === slides.length - 1 ? 0 : newThirdIndex + 1;

    setCurrentIndex(slideIndex);
    setSecondIndex(newSecondIndex);
    setThirdIndex(newThirdIndex);
    setFourthIndex(newFourthIndex);
  }

  function handleImageClick(e) {
    onImageClick(e.target);
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
        <img
          className='slider__element slider1'
          src={slides[currentIndex].url}
          alt={slides[currentIndex].title}
          onClick={handleImageClick}
        ></img>
        <div className='slider__middle'>
        <img
          className='slider__element slider__middle-image slider2'
          src={slides[secondIndex].url}
          alt={slides[secondIndex].title}
          onClick={handleImageClick}
        ></img>
        <img
          className='slider__element slider__middle-image slider3'
          src={slides[thirdIndex].url}
          alt={slides[thirdIndex].title}
          onClick={handleImageClick}
        ></img>
        </div>        
        <img
          className='slider__element slider4'
          src={slides[fourthIndex].url}
          alt={slides[fourthIndex].title}
          onClick={handleImageClick}
        ></img>
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
