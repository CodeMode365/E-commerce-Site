import { MantineProvider, Loader } from '@mantine/core'
import Navigation from './components/Navigation'
import { Hero } from './components/Hero'
import Markets from './components/Markets'
import ItemShowCase from './components/ItemShowCase'
import About from './components/About'
import Category from "./components/Category"
import { FooterLinks } from './components/Footer'
import FooterData from './FooterData'
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Cart from './components/Pages/Cart'

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Category />
      <ItemShowCase title={"New Arrivals"} />
      <ItemShowCase title={"Popular Items"} />
      <Markets />
    </>
  )
}

const App = () => {
  return (
    <Router>

      <React.Suspense fallback={<Loader variant='dots' />}>
        <MantineProvider withGlobalStyles theme={{ fontFamily: "Roboto, sans-serif", }}>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <FooterLinks data={FooterData.data} />
        </MantineProvider>
      </React.Suspense>
    </Router>
  )
}

export default App