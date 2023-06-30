import { MantineProvider, Loader, Box, ColorScheme } from '@mantine/core'
import Navigation from './components/Navigation'
import { FooterLinks } from './components/Footer'
import FooterData from './FooterData'
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useSelector } from 'react-redux'
import { RootState } from './Redux/store'



const LazyCart = React.lazy(() => import('./components/Pages/Cart'))
const LazyAuth = React.lazy(() => import('./components/Pages/Auth'))
const LazyHome = React.lazy(() => import('./components/Pages/Home'))
const LazyProducts = React.lazy(() => import("./components/Pages/Products/"))

const LoadingBar = () => {
  return (
    <Box sx={{ height: "80vh", width: "100vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Loader variant={'dots'} />
    </Box>
  )
}


const App = () => {
  const colorMode = useSelector((state: RootState) => state.colorMode)
  return (
    <Router>

      <React.Suspense fallback={<Loader variant='dots' />}>
        <MantineProvider withGlobalStyles theme={{ colorScheme: colorMode as ColorScheme, fontFamily: "Roboto, sans-serif", }}>
          <Navigation />
          <Routes>
            <Route path="/" element={
              <React.Suspense fallback={<LoadingBar />}>
                <LazyHome />
              </React.Suspense>
            } />
            <Route path="/cart" element={
              <React.Suspense fallback={<LoadingBar />}>
                <LazyCart />
              </React.Suspense>
            } />
            <Route path="/auth" element={
              <React.Suspense fallback={<LoadingBar />}>
                <LazyAuth />
              </React.Suspense>
            } />
            <Route path="/products" element={
              <React.Suspense fallback={<LoadingBar />}>
                <LazyProducts />
              </React.Suspense>
            } />
          </Routes>
          <FooterLinks data={FooterData.data} />
        </MantineProvider>
      </React.Suspense>
    </Router>
  )
}

export default App