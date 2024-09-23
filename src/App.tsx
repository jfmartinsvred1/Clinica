import { FilterLeft } from 'react-bootstrap-icons'
import './App.css'
import SideBar from './components/sidebar'
import { useState } from 'react'
import Footer from './components/footer';
import RegisterDoctor, { Doctor } from './components/registerDoctor';

function App() {
  const [valueLeftSidebar, setValueLeftSideBar] = useState("left-[-300px]");
  function openSidebar() {
    setValueLeftSideBar("")
  }
  function closeSideBar() {
    setValueLeftSideBar("left-[-300px]")
  }

  const [doctors, setDoctors] = useState<Doctor[]>(
    []
  )

  return (
    <>
      <span className='absolute text-white text-4xl top-5 left-4 cursor-pointer' onClick={() => openSidebar()}>
        <FilterLeft className='px-2 bg-gray-900 rounded-md' />
      </span>
      <div className={`bg-transparent relative top-[64px] md h-[calc(100vh-64px)] lg:left-[300px] lg:w-[calc(100%-300px)] sm:w-[100%] sm:left-[0px]`}>
        <RegisterDoctor setDoctors={setDoctors} doctors={doctors as Doctor[]} />
      </div>
      <SideBar valueLeftSideBar={valueLeftSidebar} closeSideBar={closeSideBar} />
    </>


  )
}

export default App
