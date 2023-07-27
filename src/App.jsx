import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./components/pages/Home"
import Layout from "./components/pages/Layout"
import Contact from "./components/pages/Contact"
import Products from "./components/pages/ Products"
import Cards from "./components/pages/Cards"
import Promotion from "./components/pages/ Promotion"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/promotion" element={<Promotion />} />
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

