import imageDark from '../assets/image-about-dark.jpg'
import imageLight from '../assets/image-about-light.jpg'

function AboutSection() {
  return (
    <div className="flex flex-col md:flex-row">
      <ImageDark />
      <About />
      <ImageLight />
    </div>
  )
}

function ImageDark() {
  return (
    <div className="flex-shrink-1 overflow-hidden">
      <img
        className="h-full w-full flex-shrink-0 object-cover"
        src={imageDark}
        alt="Modern dark theme living room"
      />
    </div>
  )
}

function ImageLight() {
  return (
    <div className="flex-shrink-1 overflow-hidden">
      <img
        className="h-full w-full flex-shrink-0 object-cover"
        src={imageLight}
        alt="Minimalist chair on a white background"
      />
    </div>
  )
}

function About() {
  return (
    <section className="flex-shrink-0 flex-grow space-y-4 self-center px-8 py-12 text-left sm:max-w-none sm:self-start md:max-w-[36.25rem]">
      <h3 className="text-sm font-bold uppercase tracking-wide text-black">
        About our furniture
      </h3>
      <p className="text-base font-medium tracking-tightest text-darkGray sm:max-w-[37.875rem]">
        Our multifunctional collection blends design and function to suit your
        individual taste. Make each room unique, or pick a cohesive theme that
        best express your interests and what inspires you. Find the furniture
        pieces you need, from traditional to contemporary styles or anything in
        between. Product specialists are available to help you create your dream
        space.
      </p>
    </section>
  )
}

export default AboutSection
