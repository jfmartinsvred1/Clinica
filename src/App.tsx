import { FilterLeft } from 'react-bootstrap-icons'
import './App.css'
import SideBar from './components/sidebar'
import { useState } from 'react'

function App() {
  const [valueLeftSidebar, setValueLeftSideBar]=useState("left-[-300px]");

  return (
    <>
      <span className='absolute text-white text-4xl top-5 left-4 cursor-pointer' onClick={()=>setValueLeftSideBar("")}>
                <FilterLeft className='px-2 bg-gray-900 rounded-md'/>
      </span>
      <SideBar valueLeftSideBar={valueLeftSidebar} setValueLeftSideBar={setValueLeftSideBar}/>
    </>
  )
}

export default App
