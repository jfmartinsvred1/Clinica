import { FilterLeft } from 'react-bootstrap-icons'
import './App.css'
import SideBar from './components/sidebar'
import { useState } from 'react'
import RegisterDoctor, { Doctor } from './components/registerDoctor';
import Doctors from './components/doctors';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterAppointment from './components/registerAppointment';
import RegisterClient from './components/registerClient';

export type Client={
  name:string,
  lastName:string,
  cpf:string,
  cep:string
}

export type Appointment={
  client:Client,
  day:Date
  doctor:Doctor
}

function App() {
  const [valueLeftSidebar, setValueLeftSideBar] = useState("left-[-300px]");
  function openSidebar() {
    setValueLeftSideBar("")
  }
  function closeSideBar() {
    setValueLeftSideBar("left-[-300px]")
  }

  const [doctors, setDoctors] = useState<Doctor[]>(
    [] as Doctor[]
  )
  const [appointments, setAppointments]=useState<Appointment[]>(
    [] as Appointment[]
  );
  const [clients,setClients]=useState<Client[]>(
    [] as Client[]
  );

  return (
    <>
      <BrowserRouter>
        <span className='absolute text-white text-4xl top-5 left-4 cursor-pointer' onClick={() => openSidebar()}>
          <FilterLeft className='px-2 bg-gray-900 rounded-md' />
        </span>
        <div className={`bg-transparent relative gap-5 flex flex-col items-center top-[64px] md h-[calc(100vh-64px)] lg:left-[300px] lg:w-[calc(100%-300px)] sm:w-[100%] sm:left-[0px]`}>

          <Routes>
            <Route path='/doctors' element={<Doctors doctors={doctors} />} />
            <Route path='/createDoctor' element={<RegisterDoctor setDoctors={setDoctors} doctors={doctors} />} />
            <Route path='/createAppointment' element={<RegisterAppointment doctors={doctors} />}/>
            <Route path='createClient' element={<RegisterClient clients={clients} setClients={setClients}/>}/>
          </Routes>

        </div>
        <SideBar valueLeftSideBar={valueLeftSidebar} closeSideBar={closeSideBar} />
      </BrowserRouter>
    </>


  )
}

export default App
