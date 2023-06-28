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

const App = () => {
  return (
    <React.Suspense fallback={<Loader variant='dots' />}>
      <MantineProvider withGlobalStyles theme={{ fontFamily: "Roboto, sans-serif", }}>
        <Navigation />
        <Hero />
        <About />
        <Category />
        <Markets />
        <ItemShowCase />
        <FooterLinks data={FooterData.data} />
      </MantineProvider>
    </React.Suspense>
  )
}

export default App