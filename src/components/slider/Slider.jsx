import React, { useState } from 'react'
import './slider.css'
import arrowPreview from '../../assets/arrowPreview4.png'
import arrowNext from '../../assets/arrowNext4.png'
import DefaultPicture from '../../assets/missing.png'

function Slider({ slides }) {
  const [currentIndex, setcurrentIndex] = useState(0)
  const slidesNbs = slides.length
  const currentSlide = currentIndex + 1
  const arrow = slidesNbs > 1

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setcurrentIndex(newIndex)
  }
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setcurrentIndex(newIndex)
  }
  return (
    <div className="slider_content">
      <img
        className="slider_img" src={slides[currentIndex]} alt="lodging details"
      />
      <div className="arrow_container">
        <button onClick={goToPrevious} className='slider_btn'>
          {arrow && <img src={arrowPreview} alt="preview button" />}
        </button>
        <button onClick={goToNext}  className='slider_btn'>
          {arrow && <img src={arrowNext} alt="next button" />}
        </button>
      </div>
      <div className="slide_nr">
        {currentSlide}/{slidesNbs}
      </div>
    </div>
  )
}
Slider.defaultProps = {
  slides: [DefaultPicture],
}
export default Slider