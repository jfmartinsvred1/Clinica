import { useState } from "react";
import { Appointment, Client } from "../../App";
import { Doctor } from "../registerDoctor";
import {v4 as uuidv4} from 'uuid'

type RegisterAppointmentProps = {
    doctors: Doctor[];
    lastClient: Client | null;
    clients: Client[];
    setAppointments:(s:Appointment[])=>void,
    appointments:Appointment[]
};

const RegisterAppointment = ({ doctors, lastClient, clients,setAppointments,appointments }: RegisterAppointmentProps) => {
    const specialtyM = [
        "Endocrinologista",
        "Cardiologista",
        "Pediatra",
        "Dermatologista",
        "Oftalmologista",
        "Ortopedista",
        "Ginecologista",
        "Urologista",
        "Neurologista",
        "Gastroenterologista",
        "Psiquiatra",
        "Reumatologista"
      ];
    const [appointment, setAppointment] = useState<Appointment>({
        id: "",
        client: lastClient ? lastClient : clients[0] || { name: "", lastName: "", cpf: "", cep: "" },
        day: new Date(10,10,2024),
        specialty:specialtyM[0],
        doctor: doctors[0] || { name: "", lastName: "", id: "", openingDaysAndTimes: [] } 
    });
    

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedDate = new Date(e.target.value);
        setAppointment(prev => ({ ...prev, day: selectedDate }));
    };

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const timeParts = e.target.value.split(":");
        const selectedDateTime = new Date(appointment.day); // Pega a data atual
        selectedDateTime.setHours(Number(timeParts[0]), Number(timeParts[1])); // Define as horas e minutos

        setAppointment(prev => ({ ...prev, day: selectedDateTime }));
    };
    const appointmentWithId = { ...appointment, id: uuidv4() };


    return (
        <div className="bg-white p-5 rounded-xl shadow-2xl w-5/6 flex justify-center items-center">
            <form className="w-full max-w-lg">
                {lastClient === null ? (
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Cliente
                            </label>
                            <div className="relative">
                                <select
                                    value={appointment.client?.cpf}
                                    onChange={(e) => {
                                        const selectedClient = clients.find(c => c.cpf === e.target.value);
                                        setAppointment(prev => ({ ...prev, client: selectedClient || { name: "", lastName: "", cpf: "",cep:"" } }));
                                    }}
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-state"
                                >
                                    {clients.map(client => (
                                        <option value={client.cpf} key={client.cpf}>{client.name} {client.lastName}</option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Cliente
                            </label>
                            <div className="relative">
                                <select
                                    onChange={(e) => {
                                        const selectedClient = clients.find(c => c.cpf === e.target.value);
                                        setAppointment(prev => ({ ...prev, client: selectedClient || { name: "", lastName: "", cpf: "",cep:"" } }));
                                    }}
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-state"
                                >
                                    <option value={lastClient.cpf}>{lastClient.name} {lastClient.lastName}</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Especialidade
                            </label>
                            <div className="relative">
                                <select
                                    onChange={(e) => {
                                        setAppointment(prev => ({ ...prev, specialty: e.target.value }));
                                    }}
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-state"
                                >
                                {specialtyM.map((s,index)=>(
                                    <option key={index} value={s}>{s}</option>
                                ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="flex flex-wrap -mx-3 mb-6 items-center">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Dia
                        </label>
                        <input
                            type="date"
                            name="date"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            onChange={handleDateChange}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Hora
                        </label>
                        <input
                            type="time"
                            name="time"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            onChange={handleTimeChange}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Doutor
                        </label>
                        <div className="relative">
                            <select
                                value={appointment.doctor?.id}
                                onChange={(e) => {
                                    const selectedDoctor = doctors.find(d => d.id === e.target.value);
                                    setAppointment(prev => ({ ...prev, doctor: selectedDoctor || { name: "",specialty:"", lastName: "", id: "", openingDaysAndTimes: [] } }));
                                }}
                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-state"
                            >
                                {doctors.map(doctor => (
                                   doctor.specialty===appointment.specialty && <option value={doctor.id} key={doctor.id}>{doctor.name} {doctor.lastName}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex-wrap -mx-3 mb-6 grid justify-items-end">
                    <button
                        className="hover:bg-blue-700 p-3 disabled:cursor-not-allowed disabled:bg-white disabled:hover:text-gray-700 rounded-lg hover:shadow-2xl hover:text-white"
                        onClick={(e)=>{
                            e.preventDefault()
                            setAppointments([...appointments,appointmentWithId])
                        }}
                    >
                        Adicionar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterAppointment;
