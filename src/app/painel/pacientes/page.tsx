import Table from '@/components/Table'
import { Box, Container, Typography } from '@mui/material'
import { GridColDef, GridRowsProp } from '@mui/x-data-grid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Fono IAF | Paciente',
    description: 'Fonoiaf software',
}

type PatientType = 'CHILD' | 'ADULT'

type Patient = {
    id: string
    name: string
    type: PatientType
    birthdate: Date,
    // avatar: string,
}

export default function Pacientes() {
    const birthdateNow = new Date()

    const patients: Patient[] = [
        { id: '1', name: 'Maria', type: 'CHILD', birthdate: birthdateNow },
        { id: '2', name: 'Janaina', type: 'CHILD', birthdate: birthdateNow },
        { id: '3', name: 'Lucas', type: 'CHILD', birthdate: birthdateNow },
        { id: '4', name: 'Miranda', type: 'CHILD', birthdate: birthdateNow },
        { id: '5', name: 'Bale', type: 'CHILD', birthdate: birthdateNow },
        { id: '6', name: 'Mary', type: 'CHILD', birthdate: birthdateNow },
        { id: '7', name: 'Omar', type: 'CHILD', birthdate: birthdateNow },
        { id: '8', name: 'Samira', type: 'CHILD', birthdate: birthdateNow },
        { id: '9', name: 'Luan', type: 'CHILD', birthdate: birthdateNow },
        { id: '10', name: 'David', type: 'CHILD', birthdate: birthdateNow },
        { id: '11', name: 'Jonathan', type: 'CHILD', birthdate: birthdateNow },
        { id: '12', name: 'Felipe', type: 'CHILD', birthdate: birthdateNow },
        { id: '13', name: 'Zendaya', type: 'CHILD', birthdate: birthdateNow },
        { id: '14', name: 'Maria', type: 'CHILD', birthdate: birthdateNow },
        { id: '15', name: 'Maria', type: 'CHILD', birthdate: birthdateNow },
        { id: '16', name: 'Maria', type: 'CHILD', birthdate: birthdateNow },
        { id: '17', name: 'Maria', type: 'CHILD', birthdate: birthdateNow },
        { id: '18', name: 'Maria', type: 'CHILD', birthdate: birthdateNow },
        { id: '19', name: 'Maria', type: 'CHILD', birthdate: birthdateNow },
        { id: '20', name: 'Maria', type: 'CHILD', birthdate: birthdateNow },
        { id: '21', name: 'Maria', type: 'CHILD', birthdate: birthdateNow },
        { id: '22', name: 'Maria', type: 'CHILD', birthdate: birthdateNow },
        { id: '23', name: 'Maria', type: 'ADULT', birthdate: birthdateNow },
        { id: '24', name: 'Maria', type: 'ADULT', birthdate: birthdateNow },
        { id: '25', name: 'Maria', type: 'ADULT', birthdate: birthdateNow },
        { id: '26', name: 'Maria', type: 'ADULT', birthdate: birthdateNow },
        { id: '27', name: 'Maria', type: 'ADULT', birthdate: birthdateNow },
        { id: '28', name: 'Maria', type: 'ADULT', birthdate: birthdateNow },
        { id: '29', name: 'Maria', type: 'ADULT', birthdate: birthdateNow },
    ]

    const rows: GridRowsProp<Patient>[] =  patients.map((patient) => {
        return patient as unknown as GridRowsProp<Patient>
    })

    const columns: GridColDef[] = [
        { field: 'id', hideable: true },
        { field: 'name', headerName: 'Nome', width: 150 },
        { field: 'type', headerName: 'Tipo', width: 150 },
        { field: 'birthdate', headerName: 'Data de Nascimento', width: 150, type: 'date' },
    ]

    const data = {
        rows,
        columns,
    }

    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Welcome to Patients
                </Typography>

                <Table {...data} />
            </Box>
        </Container>
    )
}
