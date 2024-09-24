import { Doctor } from "../registerDoctor"

type RegisterAppointmentProps = {
    doctors: Doctor[]
}
const RegisterAppointment = ({ doctors }: RegisterAppointmentProps) => {
    return (
        <div className="bg-white p-5 rounded-xl shadow-2xl w-5/6 flex justify-center items-center">
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Nome
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            // onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
                            // value={newDoctor.name}
                            type="text"
                            placeholder="Nome..."
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Sobrenome
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            // onChange={(e) => setNewDoctor({ ...newDoctor, lastName: e.target.value })}
                            // value={newDoctor.lastName}
                            type="text"
                            placeholder="Sobrenome..."
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6 items-center">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Dia
                        </label>
                        <input
                            type="date"
                            name={"date"}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            value=""
                        // onChange={(e) => handleTimeChange(d, "startTime", e.target.value)}
                        />

                    </div>

                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Hora
                        </label>
                        <input
                            type="time"
                            name={"time"}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            value=""
                        // onChange={(e) => handleTimeChange(d, "startTime", e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            State
                        </label>
                        <div className="relative">
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                {doctors.map((d)=>(
                                    <option value={d.id} key={d.id} >{d.name}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-full flex-wrap -mx-3 mb-6 grid justify-items-end">
                    <button
                        // disabled={(newDoctor.name.length<=2 || newDoctor.name.length<=2 || newDoctor.openingDaysAndTimes.length===0)?true:false}
                        className="hover:bg-blue-700 p-3 rounded-lg hover:shadow-2xl hover:text-white"
                    // onClick={(e) => registerNewDoctor(e)}
                    >
                        Adicionar
                    </button>
                </div>
            </form>
        </div>
    )
}
export default RegisterAppointment