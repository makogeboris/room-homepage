import Header from './Header'
import SliderButtons from './SliderButtons'
import mobileSlide1 from '../assets/mobile-image-hero-1.jpg'
import mobileSlide2 from '../assets/mobile-image-hero-2.jpg'
import mobileSlide3 from '../assets/mobile-image-hero-3.jpg'
import desktopSlide1 from '../assets/desktop-image-hero-1.jpg'
import desktopSlide2 from '../assets/desktop-image-hero-2.jpg'
import desktopSlide3 from '../assets/desktop-image-hero-3.jpg'

function Hero({ handleShowMenu, curSlide, nextSlide, prevSlide }) {
  return (
    <section className="relative w-full md:max-w-[52.5rem]">
      <h1 className="sr-only">Innovative Furniture for Modern Spaces</h1>
      <Header handleShowMenu={handleShowMenu} />
      <ImageSlider curSlide={curSlide} />
      <div className="block md:hidden">
        <SliderButtons nextSlide={nextSlide} prevSlide={prevSlide} />
      </div>
    </section>
  )
}

export default Hero

function ImageSlider({ curSlide }) {
  const slides = [
    {
      mobile: mobileSlide1,
      desktop: desktopSlide1,
      alt: 'Modern table with chairs',
    },
    {
      mobile: mobileSlide2,
      desktop: desktopSlide2,
      alt: 'Modern chairs',
    },
    {
      mobile: mobileSlide3,
      desktop: desktopSlide3,
      alt: 'Black foldable chair',
    },
  ]

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className="flex h-full w-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${curSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <picture key={index} className="h-full w-full flex-shrink-0">
            <source media="(min-width: 40rem)" srcSet={slide.desktop} />
            <img
              className="h-full w-full object-cover"
              src={slide.mobile}
              alt={slide.alt}
            />
          </picture>
        ))}
      </div>
    </div>
  )
}
