import { Sidebar } from 'flowbite-react'

export default function App() {
  return (
    <Sidebar>
      <Sidebar.Logo href="/">Jack Teske</Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/">Home</Sidebar.Item>
          <Sidebar.Item href="/comics">Comics</Sidebar.Item>
          <Sidebar.Item href="/contact">Contact</Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
