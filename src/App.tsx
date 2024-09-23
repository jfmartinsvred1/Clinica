import { FilterLeft } from 'react-bootstrap-icons'
import './App.css'
import SideBar from './components/sidebar'
import { useState } from 'react'
import Footer from './components/footer';

function App() {
  const [valueLeftSidebar, setValueLeftSideBar] = useState("left-[-300px]");
  const [valueClassMain, setValueClassMain] = useState("")
  function openSidebar() {
    setValueLeftSideBar("")
    setValueClassMain("left-[300px] ")
  }
  function closeSideBar() {
    setValueLeftSideBar("left-[-300px]")
    setValueClassMain("")
  }

  return (
    <>
      <span className='absolute text-white text-4xl top-5 left-4 cursor-pointer' onClick={() => openSidebar()}>
        <FilterLeft className='px-2 bg-gray-900 rounded-md' />
      </span>
      <SideBar valueLeftSideBar={valueLeftSidebar} closeSideBar={closeSideBar} />
      <div className={`relative top-[64px] h-[calc(100vh-64px)] lg:w-[calc(100%-300px)] ${valueClassMain===""?"w-100%":"w-[calc(100%-300px)]"} w-full ${valueClassMain}`}>
        <Footer valueClassMain={valueClassMain} />
      </div>

    </>
  )
}

export default App
