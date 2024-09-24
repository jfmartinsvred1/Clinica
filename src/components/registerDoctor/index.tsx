import { useState } from "react";
import {v4 as uuidv4} from 'uuid'

export type Doctor = {
    id:string;
    name: string;
    lastName: string;
    openingDaysAndTimes: {
        day: string;
        startTime: string;
        endTime: string;
    }[];
};
type RegisterDoctorProps = {
    setDoctors: (d: Doctor[]) => void,
    doctors: Doctor[]
}


const RegisterDoctor = ({ setDoctors, doctors }: RegisterDoctorProps) => {
    const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
    const [newDoctor, setNewDoctor] = useState<Doctor>({
        id:uuidv4(),
        name: "",
        lastName: "",
        openingDaysAndTimes:[]
    });

    const handleTimeChange = (day: string, type: "startTime" | "endTime", value: string) => {
        setNewDoctor(prevState => ({
            ...prevState,id:uuidv4(),
            openingDaysAndTimes: prevState.openingDaysAndTimes.map(item =>
                item.day === day ? { ...item, [type]: value } : item
            )
        }));
    };

    const handleCheckboxChange = (day: string, isChecked: boolean) => {
        if (!isChecked) {
            setNewDoctor(prevState => ({
                ...prevState,
                openingDaysAndTimes: prevState.openingDaysAndTimes.filter(item => item.day !== day)
            }));
        } else {
            setNewDoctor(prevState => ({
                ...prevState,
                openingDaysAndTimes: [
                    ...prevState.openingDaysAndTimes,
                    { day, startTime: "", endTime: "" }
                ]
            }));
        }
    };
    const doctorWithId = { ...newDoctor, id: uuidv4() };
    function registerNewDoctor(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
        e.preventDefault();
        setDoctors([...doctors,doctorWithId])
    }

    return (
        <div className="bg-white p-5 rounded-xl shadow-2xl w-5/6 flex justify-center items-center">
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Nome
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
                            value={newDoctor.name}
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
                            onChange={(e) => setNewDoctor({ ...newDoctor, lastName: e.target.value })}
                            value={newDoctor.lastName}
                            type="text"
                            placeholder="Sobrenome..."
                        />
                    </div>
                </div>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Dia e horário de atendimento
                </label>
                {days.map((d, index) => {
                    const dayData = newDoctor.openingDaysAndTimes.find(item => item.day === d);

                    return (
                        <div key={index} className="flex flex-wrap -mx-3 mb-6 items-center">
                            <div className="fw-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <div className="mb-[0.125rem] me-4 inline-block min-h-[1.5rem] ps-[1.5rem]">
                                    <input
                                        className="relative float-left -ms-[1.5rem] me-1 mt-0.5 h-5 w-5 appearance-none rounded border-2 border-solid border-secondary-500 checked:bg-blue-700 hover:cursor-pointer"
                                        type="checkbox"
                                        name={d}
                                        onChange={(e) => handleCheckboxChange(d, e.target.checked)}
                                        checked={!!dayData}
                                    />
                                    <label className="mt-px inline-block ps-[0.15rem] hover:cursor-pointer">
                                        {d}
                                    </label>
                                </div>
                            </div>
                            {dayData && (
                                <>
                                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Hora de entrada
                                        </label>
                                        <input
                                            type="time"
                                            name={"time" + d}
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            value={dayData.startTime}
                                            onChange={(e) => handleTimeChange(d, "startTime", e.target.value)}
                                        />
                                    </div>
                                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Hora de saída
                                        </label>
                                        <input
                                            type="time"
                                            name={"time" + d}
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            value={dayData.endTime}
                                            onChange={(e) => handleTimeChange(d, "endTime", e.target.value)}
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    );
                })}

                <div className=" w-full flex-wrap -mx-3 mb-6 grid justify-items-end">
                    <button
                        disabled={(newDoctor.name.length<=2 || newDoctor.name.length<=2 || newDoctor.openingDaysAndTimes.length===0)?true:false}
                        className="hover:bg-blue-700 p-3 rounded-lg hover:shadow-2xl hover:text-white"
                        onClick={(e) => registerNewDoctor(e)}
                    >
                        Adicionar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterDoctor;