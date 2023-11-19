import { Navbar } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'

export default function App() {
  const navigate = useNavigate()
  return (
    <Navbar className="bg-gray-100">
      <Navbar.Brand
        className="text-xl font-semibold hover:text-cyan-700 dark:text-gray-400 dark:hover:text-white"
        href="/"
        onClick={(e) => {
          e.preventDefault()
          navigate('/')
        }}
      >
        Jack Teske
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          href="/"
          onClick={(e) => {
            e.preventDefault()
            navigate('/')
          }}
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          href="/comics"
          onClick={(e) => {
            e.preventDefault()
            navigate('/comics')
          }}
        >
          Comics
        </Navbar.Link>
        <Navbar.Link
          href="/portfolio"
          onClick={(e) => {
            e.preventDefault()
            navigate('/portfolio')
          }}
        >
          Portfolio
        </Navbar.Link>
        <Navbar.Link
          href="/contact"
          onClick={(e) => {
            e.preventDefault()
            navigate('contact')
          }}
        >
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
