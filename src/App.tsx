import { PropsWithChildren } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
export default function App() {
  return (
    <Providers>
      <div className="flex grow">
        <Sidebar />
        <div>
          <Routes>
            <Route path="/" element={<div>home</div>} />
            <Route path="/comics" element={<div>comics</div>} />
            <Route path="/contact" element={<div>contact</div>} />
            <Route path="*" element={<div>not found</div>} />
          </Routes>
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