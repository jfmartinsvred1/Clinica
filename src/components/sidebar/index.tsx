import { BoxArrowLeft, List, PersonCircle, Plus, X } from 'react-bootstrap-icons'
import './sidebar.css'
type SideBarProps={
    valueLeftSideBar:string,
    closeSideBar:()=>void
}
const SideBar = ({valueLeftSideBar,closeSideBar}:SideBarProps) => {
    return (
        <div className={'sidebar fixed top-0 bottom-0 lg:left-0 p-2  w-[300px] overflow-y-auto text-center bg-gray-900 '+valueLeftSideBar}>
          <div className='text-gray-200 text-xl'>
            <div className='p-2.5 mt-1 flex items-center'>
              <h1 className="font-bold text-3xl">Clínica</h1>
              <X width="32px" className='cursor-pointer ml-28 lg:hidden ' onClick={()=>closeSideBar()}/>
            </div>
            <hr className='my-4 text-gray-600'/>
          </div>
          <div className='p-2.5 mt-6 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-sky-700 text-white '>
            <Plus className='text-sm' />
            <span className='text-[14px] ml-4 text-gray-200'>Cadastrar Consulta</span>
          </div>
          
          <div className='p-2.5 mt-6 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-sky-700 text-white '>
            <Plus className='text-sm' />
            <span className='text-[14px] ml-4 text-gray-200'>Cadastrar Médico</span>
          </div>
          <div className='p-2.5 mt-6 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-sky-700 text-white '>
            <List className='text-sm' />
            <span className='text-[14px] ml-4' text-gray-200>Consultas</span>
          </div>
          <div className='p-2.5 mt-6 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-sky-700 text-white '>
            <List className='text-sm' />
            <span className='text-[14px] ml-4 text-gray-200'>Médicos</span>
          </div>
          <hr className='my-4 text-gray-600'/>
          <div className='group absolute bottom-16 p-2.5 flex items-center rounded-md px-4 duration-300 text-white cursor-pointer'>
            <PersonCircle className='text-sm group-hover:text-sky-400' />
            <span className='text-[14px] ml-4 text-gray-200 group-hover:text-sky-400'>Seu_Username</span>
          </div>
          <div className='group absolute bottom-4 p-2.5 flex items-center rounded-md px-4 duration-300 text-white cursor-pointer'>
            <BoxArrowLeft className='text-sm  group-hover:text-red-600'/>
            <span className='text-[14px] ml-4 text-gray-200 group-hover:text-red-600'>Logout</span>
          </div>
        </div>
    )
}
export default SideBar