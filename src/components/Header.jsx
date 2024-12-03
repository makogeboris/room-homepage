function Header({ handleShowMenu }) {
  return (
    <header className="absolute z-20 flex items-center ~/lg:~pt-12/16 ~/lg:~pl-6/16">
      <div className="flex items-center gap-28 sm:gap-14">
        <button
          className="block outline-none focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:hidden"
          onClick={handleShowMenu}
        >
          <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z"
              fill="#FFF"
              fillRule="evenodd"
            />
          </svg>
        </button>

        <a
          href="#"
          className="logo outline-none focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
        >
          <img src="/logo.svg" alt="room" />
        </a>

        <NavLinks className={'hidden sm:block'} />
      </div>
    </header>
  )
}

export default Header

function NavLinks({ className }) {
  return (
    <nav className={`${className}`}>
      <ul className="flex gap-8">
        <li>
          <a className="link" href="#">
            home
          </a>
        </li>
        <li>
          <a className="link" href="#">
            shop
          </a>
        </li>
        <li>
          <a className="link" href="#">
            about
          </a>
        </li>
        <li>
          <a className="link" href="#">
            contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export function MobileMenu({ handleHideMenu }) {
  return (
    <>
      <div className="absolute left-0 top-0 z-50 flex w-full items-center gap-16 bg-white px-6 py-12 sm:hidden">
        <button
          autoFocus
          onClick={handleHideMenu}
          className="outline-none focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
        >
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z"
              fill="#000"
              fillRule="evenodd"
              opacity=".201"
            />
          </svg>
        </button>

        <NavLinks className={'sm:hidden'} />
      </div>
      <div
        onClick={handleHideMenu}
        className="fixed inset-0 z-0 h-full w-full bg-black/50 backdrop-blur-sm transition-all duration-500 sm:hidden"
      ></div>
    </>
  )
}
