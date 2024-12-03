import { useState } from 'react'
import Slider from './components/Slider'
import { MobileMenu } from './components/Header'
import AboutSection from './components/AboutSection'

function App() {
  const [showMenu, setShowMenu] = useState(false)

  function handleShowMenu() {
    setShowMenu(true)
  }

  function handleHideMenu() {
    setShowMenu(false)
  }

  return (
    <main className="relative">
      <Slider handleShowMenu={handleShowMenu} />
      <AboutSection />
      {showMenu && <MobileMenu handleHideMenu={handleHideMenu} />}
    </main>
  )
}

export default App
