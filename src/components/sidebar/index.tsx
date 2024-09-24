import { BoxArrowLeft, Github, House, Linkedin, List, PersonCircle, Plus, X } from 'react-bootstrap-icons'
import './sidebar.css'
import { useNavigate } from 'react-router-dom'
type SideBarProps = {
  valueLeftSideBar: string,
  closeSideBar: () => void
}
const SideBar = ({ valueLeftSideBar, closeSideBar }: SideBarProps) => {

  const navigate = useNavigate();

  
  return (
    <div className={'sidebar fixed top-0 bottom-0 lg:left-0 p-2  w-[300px] overflow-y-auto text-center bg-gray-900 ' + valueLeftSideBar}>
      <div className='text-gray-200 text-xl'>
        <div className='p-2.5 mt-1 flex items-center'>
          <h1 className="font-bold text-3xl">Clínica</h1>
          <X width="32px" className='cursor-pointer ml-28 lg:hidden ' onClick={() => closeSideBar()} />
        </div>
        <hr className='my-4 text-gray-600' />
      </div>
      <div className='p-2.5 mt-5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-sky-700 text-white '>
        <House className='text-sm' />
        <span className='text-[14px] ml-4 text-gray-200'>Home</span>
      </div>
      <div className='p-2.5 mt-5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-sky-700 text-white '>
        <Plus className='text-sm' />
        <span className='text-[14px] ml-4 text-gray-200'>Cadastrar Consulta</span>
      </div>

      <div onClick={()=>{navigate("/createDoctor")}} className='p-2.5 mt-5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-sky-700 text-white '>
        <Plus className='text-sm' />
        <span className='text-[14px] ml-4 text-gray-200'>Cadastrar Médico</span>
      </div>
      <div className='p-2.5 mt-5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-sky-700 text-white '>
        <List className='text-sm' />
        <span className='text-[14px] ml-4' text-gray-200>Consultas</span>
      </div>
      <div onClick={()=>{navigate("/doctors")}} className='p-2.5 mt-5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-sky-700 text-white '>
        <List className='text-sm' />
        <span className='text-[14px] ml-4 text-gray-200'>Médicos</span>
      </div>
      <hr className='my-4 text-gray-600' />
      <div className='group absolute bottom-24 p-2.5 flex items-center rounded-md px-4 duration-300 text-white cursor-pointer'>
        <PersonCircle className='text-sm group-hover:text-sky-400' />
        <span className='text-[14px] ml-4 text-gray-200 group-hover:text-sky-400'>Seu_Username</span>
      </div>
      <div className='group absolute bottom-16 p-2.5 flex items-center rounded-md px-4 duration-300 text-white cursor-pointer'>
        <BoxArrowLeft className='text-sm  group-hover:text-red-600' />
        <span className='text-[14px] ml-4 text-gray-200 group-hover:text-red-600'>Logout</span>
      </div>
      <div className='group absolute gap-5 bottom-4 p-2.5 flex items-center justify-center rounded-md px-4 duration-300 text-white cursor-pointer'>
        <a href="https://github.com/jfmartinsvred1" target="_blank" ><Github className="hover:scale-125 hover:cursor-pointer hover:text-sky-400" /></a>
        <a href="https://www.linkedin.com/in/jfmartinss21/" target="_blank" ><Linkedin className="hover:scale-125 hover:cursor-pointer hover:text-sky-400" /></a>
        <h1 className="text-white hover:scale-110 hover:text-sky-400">
          <a target="_blank" rel="noopener noreferrer" href="https://jfmartins.vercel.app/">Website</a>
        </h1>
      </div>
    </div>
  )
}
export default SideBar