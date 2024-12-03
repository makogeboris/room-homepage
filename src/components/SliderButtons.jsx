function SliderButtons({ nextSlide, prevSlide }) {
  return (
    <div className="absolute bottom-0 right-0 w-fit md:left-0">
      <button
        aria-label="Previous slide"
        className="cursor-pointer bg-black px-6 py-5 outline-none transition-all hover:bg-veryDarkGray focus-visible:bg-veryDarkGray focus-visible:outline-dashed focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-black md:px-[2.0625rem] md:py-7"
        onClick={prevSlide}
      >
        <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13 0L1 12l12 12"
            stroke="#FFF"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <button
        aria-label="Next slide"
        className="cursor-pointer bg-black px-6 py-5 outline-none transition-all hover:bg-veryDarkGray focus-visible:bg-veryDarkGray focus-visible:outline-dashed focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-black md:px-[2.0625rem] md:py-7"
        onClick={nextSlide}
      >
        <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 0l12 12L1 24"
            stroke="#FFF"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
    </div>
  )
}

export default SliderButtons
