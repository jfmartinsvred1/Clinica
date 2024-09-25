import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ErrorMessage from "../errorMessage";

export type Doctor = {
    id: string;
    name: string;
    lastName: string;
    openingDaysAndTimes: {
        day: string;
        startTime: string;
        endTime: string;
    }[];
};

type RegisterDoctorProps = {
    setDoctors: (d: Doctor[]) => void;
    doctors: Doctor[];
};

const RegisterDoctor = ({ setDoctors, doctors }: RegisterDoctorProps) => {
    const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
    const [newDoctor, setNewDoctor] = useState<Doctor>({
        id: "",
        name: "",
        lastName: "",
        openingDaysAndTimes: [],
    });

    const handleTimeChange = (day: string, type: "startTime" | "endTime", value: string) => {
        setNewDoctor(prevState => ({
            ...prevState,
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

    const registerNewDoctor = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const doctorWithId = { ...newDoctor, id: uuidv4() };
        setDoctors([...doctors, doctorWithId]);
        setNewDoctor({ id: "", name: "", lastName: "", openingDaysAndTimes: [] }); // Reset form
    };

    return (
        <div className="bg-white p-5 rounded-xl shadow-2xl w-5/6 flex justify-center items-center">
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            data-testid="nomeDoctorLabel"
                            htmlFor="nomeDoctor"
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        >
                            Nome
                        </label>
                        <input
                            data-testid="nomeDoctorInput"
                            id="nomeDoctor"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
                            value={newDoctor.name}
                            type="text"
                            placeholder="Nome..."
                        />
                        <ErrorMessage message="Nome deve ter 3 caracteres ou mais." testId="NomeDoctor" show={newDoctor.name.length<3 && newDoctor.name.length!=0}/>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label
                            data-testid="sobrenomeDoctorLabel"
                            htmlFor="sobrenomeDoctor"
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        >
                            Sobrenome
                        </label>
                        <input
                            data-testid="sobrenomeDoctorInput"
                            id="sobrenomeDoctor"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            onChange={(e) => setNewDoctor({ ...newDoctor, lastName: e.target.value })}
                            value={newDoctor.lastName}
                            type="text"
                            placeholder="Sobrenome..."
                        />
                         <ErrorMessage message="Sobrenome deve ter 3 caracteres ou mais." testId="lastNameDoctor" show={newDoctor.lastName.length<3 && newDoctor.lastName.length!=0}/>
                    </div>
                </div>
                <label
                    data-testid="diaEHorario"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                    Dia e horário de atendimento
                </label>
                {days.map((d,index) => {
                    const dayData = newDoctor.openingDaysAndTimes.find(item => item.day === d);

                    return (
                        <div key={d} className="flex flex-wrap -mx-3 mb-6 items-center">
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <div className="mb-[0.125rem] me-4 inline-block min-h-[1.5rem] ps-[1.5rem]">
                                    <input
                                        data-testid={`select-${index}`}
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
                                            data-testid={`startTimeInput-${index}`}
                                            type="time"
                                            name={`time-${d}`}
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
                                            data-testid={`endTimeInput-${index}`}
                                            type="time"
                                            name={`time-${d}`}
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
                <ErrorMessage message="Deve atender pelo menos 1 dia na semana." testId="diasDoctor" show={newDoctor.openingDaysAndTimes.length===0}/>

                <div className="w-full flex-wrap -mx-3 mb-6 grid justify-items-end">
                    <button
                        data-testid="btnAdicionarDoctor"
                        disabled={newDoctor.name.length <= 2 || newDoctor.lastName.length <= 2 || newDoctor.openingDaysAndTimes.length === 0}
                        className="hover:bg-blue-700 p-3 rounded-lg hover:shadow-2xl hover:text-white"
                        onClick={registerNewDoctor}
                    >
                        Adicionar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterDoctor;
