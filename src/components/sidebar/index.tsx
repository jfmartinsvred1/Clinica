import './sidebar.css'
const SideBar = () => {
    return (
        <div className="bg-primary ">
            <div className='d-flex flex-column justify-content-around align-items-center'>
                <h5 className="text-light pags-link">Agendar Consulta</h5>
                <h5 className="text-light pags-link">Cadastrar Médico</h5>
                <h5 className="text-light pags-link">Consultas</h5>
                <h5 className="text-light pags-link">Médicos</h5>
            </div>
            <div className='d-flex flex-row justify-content-center gap-3 align-items-center'>
                <img src="" alt="Foto User" />
                <h5>Nome User</h5>
            </div>
        </div>
    )
}
export default SideBar