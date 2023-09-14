import { PropsWithChildren } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Contact from './pages/Contact'
export default function App() {
  return (
    <Providers>
      <div className="flex flex-col grow overflow-hidden">
        <NavBar />
        <div className="flex flex-col grow overflow-scroll">
          <div className="flex flex-col grow p-6">
          <ToastContainer className="z-40 absolute bottom-10 right-5 w-48" />
            <Routes>
              <Route path="/" element={<div>home</div>} />
              <Route path="/comics" element={<div>comics</div>} />
              <Route path="/portfolio" element={<div>portfolio</div>} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<div>not found</div>} />
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