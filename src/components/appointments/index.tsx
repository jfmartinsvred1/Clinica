import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Appointment } from "../../App";


type AppointmentsProps={
    appointments:Appointment[]
}
const Appointments =({appointments}:AppointmentsProps)=>{
    const columns: GridColDef[] = [
        { 
            field: "id", 
            headerName: "ID", 
            width: 180 
        },
        {
            field: 'client',
            headerName: 'Cliente',
            width: 250,
            renderCell: (params) => (
                <div className="flex">
                    <h1>{params.row.name+" "+params.row.lastName}</h1>
                </div>
            )
        },
        {
            field: "day",
            headerName: 'Data e hora',
            width: 180
        },
        {
            field: 'doctor',
            headerName: 'Doutor',
            width: 250,
            renderCell: (params) => (
                <div className="flex">
                    <h1>{params.row.name+" "+params.row.lastName}</h1>
                </div>
            )
        }
        
    ];
    
    return (
        <div className="bg-white p-5 rounded-xl shadow-2xl w-5/6 flex justify-center items-center">
            <div className="flex flex-col w-full gap-3 bg-white shadow mb-5 bg-body-tertiary rounded">
                <div style={{ height: 372, width: "100%", overflow: "auto" }}>
                    <DataGrid
                        rows={appointments || []}
                        columns={columns}
                        pageSizeOptions={[5]}
                        getRowId={(row) => row.cpf}
                        autoHeight 
                        disableColumnMenu 
                    />
                </div>
            </div>
        </div>
    );
}
export default Appointments