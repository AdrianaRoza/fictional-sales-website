import { useState } from 'react'
import { FaBars } from 'react-icons/fa'

const NavBar = () => {
  const  [showNav, setShowNav] = useState (false)

  const handleToggleNav = () => {
    setShowNav(!showNav)
  } 

  return(
    <nav 
      className="bg-gray-200 py-2 flex 
      items-center justify-between">

      <div 
        className="h-10 px-2 flex items-center">

        <img 
          src="/tabua-de-cortar.png" 
          alt="tabua-de-cortar" 
          className='h-full' 
        />
        <h1 
          className='flex px-2  text-violet-500'>
          NST ART CNC
        </h1>
      </div>

      <div 
        className="lg:hidden">
        <FaBars 
          onClick={handleToggleNav} 
          className="text-xl mr-3 cursor-pointer
          text-violet-500" />
      </div>

        <ul 
          className={`lg:flex px-4 gap-2
          ${ showNav ? (
            'flex flex-col absolute right-0 top-14 rounded-lg mr-1'
          ) : (
            'hidden'
          )}`}>
          <li>
            <a href="#home" 
              className="text-violet-500 hover:text-violet-700">
              Home
            </a>
          </li>
          
          <li>
            <a href="#about" 
              className="text-violet-500  hover:text-violet-700">
              About
            </a>
          </li>

          <li>
            <a href="#services" 
              className="text-violet-500  hover:text-violet-700	">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" 
            className="text-violet-500  hover:text-violet-700	">
              contact
            </a>
          </li>
        </ul>
    </nav>
  )
}
export default NavBar 