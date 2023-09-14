import { Footer } from 'flowbite-react'
import { Instagram, Twitter } from 'react-bootstrap-icons'

export default function App() {
  return (
    <Footer className="rounded-none shadow-none md:justify-end" container>
      <div className="mt-4 flex space-x-6 sm:mt-0">
        <Footer.Icon
          href="https://www.instagram.com/teskeboyart/"
          target="blank"
          icon={Instagram}
        />
        <Footer.Icon
          href="https://twitter.com/TeskeBoyArt/"
          target="blank"
          icon={Twitter}
        />
      </div>
    </Footer>
  )
}
