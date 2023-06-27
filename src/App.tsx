import { MantineProvider } from '@mantine/core'
import Navigation from './components/Navigation'
import { Hero } from './components/Hero'
import Markets from './components/Markets'

const App = () => {
  return (
    <MantineProvider withGlobalStyles theme={{ fontFamily: "Roboto, sans-serif", }}>
      <Navigation />
      <Hero />
      <Markets />
    </MantineProvider>
  )
}

export default App