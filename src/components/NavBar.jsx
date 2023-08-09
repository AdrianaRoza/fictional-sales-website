import { useState } from 'react'
import { FaBars, FaShoppingCart } from 'react-icons/fa'
import { Link } from "react-router-dom"


const NavBar = () => {
  const  [showNav, setShowNav] = useState (false)

  const handleToggleNav = () => {
    setShowNav(!showNav)
  } 

  return(
    <nav 
      className="bg-teal-50 py-2 flex 
      items-center justify-between">

      <div 
        className="h-10 px-2 flex items-center">

        <img 
          src="/tabua-de-corta.png" 
          alt="tabua-de-cortar" 
          className='h-full' 
        />
        <h1 
          className='flex px-3 text-[20px] font-serif 
            font-bold text-teal-500'>
          NST ART CNC
        </h1>
      </div>

      <div 
        className="lg:hidden">
        <FaBars 
          onClick={handleToggleNav} 
          className="text-xl mr-3 cursor-pointer" />
      </div>

        {/*Menu for large screens */}
      <ul className="hidden lg:flex px-4 gap-2">
        <li>
          <Link to="/" className="text-green-950 
            hover:text-teal-500">
            Home
          </Link>
        </li>

        <li>
          <Link to="/products" className="text-green-950 
            hover:text-teal-500">
            Products
          </Link>
        </li>

        <li>
          <Link to="/promotion" className="text-green-950 
            hover:text-teal-500">
            Promotions
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-green-950 
            hover:text-teal-500">
            Contact
          </Link>
        </li>
      </ul>

      {/* Menu for small screens */}
      <ul
        className={`${
          showNav ? 'block' : 'hidden'
        } lg:hidden absolute right-0 top-14 rounded-lg 
        bg-teal-50 shadow-lg w-48 mt-2`}
      >
        <li className="p-2">
          <Link
            to="/"
            className="block text-green-950 hover:text-teal-500 text-center"
            onClick={() => setShowNav(false)}
          >
            Home
          </Link>
        </li>

        <li className="p-2">
          <Link
            to="/products"
            className="block text-green-950 hover:text-teal-500 text-center"
            onClick={() => setShowNav(false)}
          >
            Products
          </Link>
        </li>

        <li className="p-2">
          <Link
            to="/promotion"
            className="block text-green-950 hover:text-teal-500 text-center"
            onClick={() => setShowNav(false)}
          >
           Promotion
          </Link>
        </li>
        <li className="p-2">
          <Link
            to="/contact"
            className="block text-green-950 hover:text-teal-500 text-center"
            onClick={() => setShowNav(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
      {/* Cart icon */}
        <div className="flex items-center ml-[-460px]">
          <FaShoppingCart className="text-green-950 hover:text-teal-500 
            text-xl mr-6 cursor-pointer" />
        </div>
    </nav>
  )
}
export default NavBar 