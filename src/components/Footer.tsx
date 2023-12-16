import { Footer } from 'flowbite-react'
import { Instagram, Twitter } from 'react-bootstrap-icons'
import Kofi from './Kofi'

export default function App() {
  return (
    <Footer
      className="rounded-none shadow-none md:justify-end bg-gray-100"
      container
    >
      <div className="mt-4 flex space-x-6 sm:mt-0">
        <Footer.Icon
          className="hover:text-cyan-700"
          href="https://www.instagram.com/teskeboyart/"
          target="blank"
          icon={Instagram}
        />
        <Footer.Icon
          className="hover:text-cyan-700"
          href="https://twitter.com/TeskeBoyArt/"
          target="blank"
          icon={Twitter}
        />
        <Footer.Icon
          className="hover:text-cyan-700"
          href="https://ko-fi.com/teskeboy"
          target="blank"
          icon={Kofi}
        />
      </div>
    </Footer>
  )
}
