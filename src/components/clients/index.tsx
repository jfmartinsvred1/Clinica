import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Client } from "../../App";

type ClientsProps={
    clients:Client[]
}
const Clients=({clients}:ClientsProps)=>{
    const columns: GridColDef[] = [
        { field: "cpf", headerName: "CPF", width: 180 },
        { field: "name", headerName: 'Nome', width: 180 },
        {
            field: "lastName",
            headerName: 'Sobrenome',
            width: 180
        },
        {
            field: "cep",
            headerName: 'CEP',
            width: 180
        },
        
    ];
    return (
        <div className="bg-white p-5 rounded-xl shadow-2xl w-5/6 flex justify-center items-center">
            <div className="flex flex-col w-full gap-3 bg-white shadow mb-5 bg-body-tertiary rounded">
                <div style={{ height: 372, width: "100%", overflow: "auto" }}>
                    <DataGrid
                        rows={clients || []}
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
export default Clients