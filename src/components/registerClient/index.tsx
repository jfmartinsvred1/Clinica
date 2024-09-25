import { useState } from "react"
import { Client } from "../../App"
import { useNavigate } from "react-router-dom"

type RegisterClientProps = {
    clients: Client[],
    setClients: (c: Client[]) => void,
    setLastClient:(c: Client) => void,
}

const RegisterClient = ({ clients, setClients,setLastClient }: RegisterClientProps) => {

    const navigate=useNavigate();
    const [newClient, setNewClient] = useState<Client>({
        name: "",
        lastName: "",
        cpf: "",
        cep: ""
    });

    function createClient(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault()
        setClients([...clients, newClient]);
    }
    function createClientToAppointment(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        createClient(e)
        setLastClient(newClient)
        navigate("/createAppointment")
    }

    return (
        <div className="bg-white p-5 rounded-xl shadow-2xl w-5/6 flex justify-center items-center">
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label 
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="nomeClient"
                            >
                            Nome
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            onChange={(e) => setNewClient(prevState => ({ ...prevState, name: e.target.value }))}
                            value={newClient.name}
                            type="text"
                            placeholder="Nome..."
                            id="nomeClient"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label htmlFor="sobrenomeClient" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Sobrenome
                        </label>
                        <input
                            id="sobrenomeClient"
                            value={newClient.lastName}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            onChange={(e) => setNewClient(prevState => ({ ...prevState, lastName: e.target.value }))}
                            type="text"
                            placeholder="Sobrenome..."
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6 items-center">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Cpf
                        </label>
                        <input
                            placeholder="XXX.XXX.XXX-XX"
                            type="text"
                            name={"cpf"}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            value={newClient.cpf}
                            maxLength={14}
                            onChange={(e) => setNewClient(prevState => ({ ...prevState, cpf: e.target.value }))}
                        />

                    </div>

                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Cep
                        </label>
                        <input
                            type="text"
                            name={"text"}
                            maxLength={9}
                            placeholder="XXXXX-XXX"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            value={newClient.cep}
                            onChange={(e) => setNewClient(prevState => ({ ...prevState, cep: e.target.value }))}
                        />
                    </div>
                </div>

                <div className=" w-full  -mx-3 mb-6 grid flex-row justify-items-end">
                    <button
                        disabled={(newClient.name.length <= 2 || newClient.name.length <= 2 || newClient.cpf.length < 14 || newClient.cep.length < 9) ? true : false}
                        className="hover:bg-blue-700 p-3 rounded-lg hover:shadow-2xl hover:text-white"
                        onClick={(e) => { createClient(e) }}
                    >
                        Adicionar
                    </button>
                    <button
                        disabled={(newClient.name.length <= 2 || newClient.name.length <= 2 || newClient.cpf.length < 14 || newClient.cep.length < 9) ? true : false}
                        className="hover:bg-blue-700 p-3 rounded-lg hover:shadow-2xl hover:text-white"
                        onClick={(e) => createClientToAppointment(e)}
                    >
                        Adicionar e Registrar Consulta
                    </button>
                </div>
            </form>
        </div>
    )
}
export default RegisterClient