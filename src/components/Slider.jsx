import { useEffect, useState } from 'react'
import Hero from './Hero'
import TextSlider from './TextSlider'

function Slider({ handleShowMenu }) {
  const [curSlide, setCurSlide] = useState(0)
  const maxSlide = 3

  const nextSlide = () => {
    setCurSlide((prev) => (prev === maxSlide - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurSlide((prev) => (prev === 0 ? maxSlide - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex w-full flex-col md:flex-row">
      <Hero
        handleShowMenu={handleShowMenu}
        curSlide={curSlide}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
      <TextSlider
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        curSlide={curSlide}
      />
    </div>
  )
}

export default Slider
