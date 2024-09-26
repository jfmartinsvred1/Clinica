import { Doctor } from "../registerDoctor"
import { DataGrid, GridColDef } from "@mui/x-data-grid"

type DoctorsProps = {
    doctors: Doctor[]
}
export type DaysOfWork = {
    day: string,
    startTime: string,
    endTime: string;
}
const Doctors = ({ doctors }: DoctorsProps) => {
    const columns: GridColDef[] = [
        { field: "id", headerName: "Id", width: 110 },
        { field: "name", headerName: 'Nome', width: 110 },
        {
            field: "lastName",
            headerName: 'Sobrenome',
            width: 110
        },
        {
            field: "specialty",
            headerName: 'Especialidade',
            width: 110
        },
        {
            field: 'openingDaysAndTimes',
            headerName: 'Dias',
            width: 250,
            renderCell: (params) => (
                <div className="flex">
                    {params.value.map((d: DaysOfWork, index: number) => (
                        <div key={index}>
                           {index===0?"|":""} {d.day}: {d.startTime} - {d.endTime+" | "}
                        </div>
                    ))}
                </div>
            )
        }
    ];
    return (
        <div className="bg-white p-5 rounded-xl shadow-2xl w-5/6 flex justify-center items-center">
            <div className="flex flex-col w-full gap-3 bg-white shadow mb-5 bg-body-tertiary rounded">
                <div style={{ height: 372, width: "100%", overflow: "auto" }}>
                    <DataGrid
                        rows={doctors || []}
                        columns={columns}
                        pageSizeOptions={[5]}
                        getRowId={(row) => row.id}
                        autoHeight 
                        disableColumnMenu 
                    />
                </div>
            </div>
        </div>
    );
};
export default Doctors