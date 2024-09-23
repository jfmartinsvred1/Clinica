import { AppIndicator, House, List, Plus, X } from 'react-bootstrap-icons'
import './sidebar.css'
const SideBar = () => {
    return (
        <div className='sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900'>
          <div className='text-gray-200 text-xl'>
            <div className='p-2.5 mt-1 flex items-center'>
              <AppIndicator className='px-2 py-1 bg bg-sky-700 rounded-md'/>
              <h1 className="font-bold">Clínica Lorem</h1>
              <X className='cursor-pointer lg:hidden'/>
            </div>
            <hr className='my-2 text-gray-600'/>
          </div>
          <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-sky-700 text-white '>
            <Plus className='text-sm' />
            <span className='text-[14px] ml-4 text-gray-200'>Cadastrar Consulta</span>
          </div>
          
          <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-sky-700 text-white '>
            <Plus className='text-sm' />
            <span className='text-[14px] ml-4 text-gray-200'>Cadastrar Médico</span>
          </div>
          <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-sky-700 text-white '>
            <List className='text-sm' />
            <span className='text-[14px] ml-4' text-gray-200>Consultas</span>
          </div>
          <div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-sky-700 text-white '>
            <List className='text-sm' />
            <span className='text-[14px] ml-4 text-gray-200'>Médicos</span>
          </div>
        </div>
    )
}
export default SideBar