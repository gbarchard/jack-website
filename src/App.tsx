import { PropsWithChildren } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import NavBar from './components/NavBar'
import Breadcrumbs from './components/BreadCrumbs'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Comics from './pages/Comics'
export default function App() {
  return (
    <Providers>
      <div className="flex flex-col grow overflow-hidden">
        <NavBar />
        <div className="flex flex-col grow overflow-scroll">
          <div className="flex flex-col grow py-6 sm:px-6">
          <Breadcrumbs />
          <ToastContainer className="z-40 absolute bottom-10 right-5 w-48" />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/comics/*" element={<Comics />} />
              {/* <Route path="/portfolio" element={<div>portfolio</div>} /> */}
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Providers>
  )
}

function Providers(props: PropsWithChildren) {
  return (
    <BrowserRouter>{props.children}</BrowserRouter>
  )
}