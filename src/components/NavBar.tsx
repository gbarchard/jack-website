import { Navbar } from "flowbite-react";

export default function App() {
  return (
    <Navbar>
      <Navbar.Brand className="text-xl font-semibold hover:text-cyan-700 dark:text-gray-400 dark:hover:text-white" href="/">Jack Teske</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/comics">Comics</Navbar.Link>
        <Navbar.Link href="/portfolio">Portfolio</Navbar.Link>
        <Navbar.Link href="/contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}