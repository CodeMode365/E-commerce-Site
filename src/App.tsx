import { MantineProvider } from '@mantine/core'
import Navigation from './components/Navigation'
import { Hero } from './components/Hero'
import Markets from './components/Markets'
import ItemShowCase from './components/ItemShowCase'
import About from './components/About'

const App = () => {
  return (
    <MantineProvider withGlobalStyles theme={{ fontFamily: "Roboto, sans-serif", }}>
      <Navigation />
      <Hero />
      <About />
      <Markets />
      <ItemShowCase />
    </MantineProvider>
  )
}

export default App