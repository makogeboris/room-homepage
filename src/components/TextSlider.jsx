import SliderButtons from './SliderButtons'

function TextSlider({ nextSlide, prevSlide, curSlide }) {
  const slides = [
    {
      heading: 'Discover innovative ways to decorate',
      paragraph:
        'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    },
    {
      heading: 'We are available all across the globe',
      paragraph:
        "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
      heading: 'Manufactured with the best materials',
      paragraph:
        'Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
    },
  ]

  return (
    <section className="relative w-full self-center overflow-hidden px-8 pb-16 pt-14 sm:max-w-none sm:self-start md:max-w-[37.5rem] md:px-24 md:pb-[9.5625rem] md:pt-[6.6875rem]">
      <div className="relative flex w-full transition-transform duration-500 ease-in-out">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-full flex-shrink-0 ${curSlide === index ? 'opacity-100' : 'opacity-0'} `}
            style={{ transform: `translateX(-${curSlide * 100}%)` }}
          >
            <div className="flex flex-col gap-10 text-left md:gap-6">
              <div className="space-y-[1.125rem]">
                <h2 className="font-semibold tracking-tightest text-black ~/lg:~text-4xl/5xl md:tracking-wider">
                  {slide.heading}
                </h2>
                <p className="text-base font-medium tracking-tightest text-darkGray sm:max-w-[37.875rem]">
                  {slide.paragraph}
                </p>
              </div>

              <a className="btnShop" href="#">
                Shop Now
                <svg
                  className="transition-all group-hover:fill-darkGray"
                  width="40"
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                    fill="currentColor"
                    fillRule="nonzero"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:block">
        <SliderButtons nextSlide={nextSlide} prevSlide={prevSlide} />
      </div>
    </section>
  )
}

export default TextSlider
