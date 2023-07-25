import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Layout from "./components/pages/Layout"
import Contact from "./components/pages/Contact"
import Products from "./components/pages/ Products"
import Cards from "./components/pages/Cards"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/cards" element={<Cards />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

