import { MantineProvider } from '@mantine/core'
import Navigation from './components/Navigation'
import { Hero } from './components/Hero'

const App = () => {
  return (
    <MantineProvider withGlobalStyles theme={{ fontFamily: "Poppins, sans-serif", }}>
      <Navigation />
      <Hero />
    </MantineProvider>
  )
}

export default App