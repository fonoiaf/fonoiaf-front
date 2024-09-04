import Table from '@/components/Table'
import { Box, Container, Typography } from '@mui/material'
import { GridColDef, GridRowsProp } from '@mui/x-data-grid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Fono IAF | Transcricoes',
    description: 'Fonoiaf software',
}

type Transcription = {
    id: string
    name: string
    patientName: string
    enforcementDate: Date,
    responsibleName: string
}

export default function Transcricoes() {
    const enforcementDateNow = new Date()

    const transcriptions: Transcription[] = [
        { id: '1', patientName: 'Maria', responsibleName: 'ADMIN', enforcementDate: enforcementDateNow, name: 'Exemplo 1' },
        { id: '2', patientName: 'Janaina', responsibleName: 'EXEMPLO', enforcementDate: enforcementDateNow, name: 'Exemplo 7' },
        { id: '3', patientName: 'Lucas', responsibleName: 'CLINICA 1', enforcementDate: enforcementDateNow, name: 'Exemplo 4' },
        { id: '4', patientName: 'Miranda', responsibleName: 'INDIVIDUAL', enforcementDate: enforcementDateNow, name: 'Exemplo 1' },
        { id: '5', patientName: 'Bale', responsibleName: 'INDIVIDUAL', enforcementDate: enforcementDateNow, name: 'Exemplo 1' },
        { id: '6', patientName: 'Mary', responsibleName: 'PSICOLOGO', enforcementDate: enforcementDateNow, name: 'Exemplo 2' },
        { id: '7', patientName: 'Omar', responsibleName: 'INDIVIDUAL', enforcementDate: enforcementDateNow, name: 'Exemplo 6' },
        { id: '8', patientName: 'Samira', responsibleName: 'INDIVIDUAL', enforcementDate: enforcementDateNow, name: 'Exemplo 1' },
        { id: '9', patientName: 'Luan', responsibleName: 'INDIVIDUAL', enforcementDate: enforcementDateNow, name: 'Exemplo 1' },
        { id: '10', patientName: 'David', responsibleName: 'INDIVIDUAL', enforcementDate: enforcementDateNow, name: 'Exemplo 1' },
        { id: '11', patientName: 'Jonathan', responsibleName: 'INDIVIDUAL', enforcementDate: enforcementDateNow, name: 'Exemplo 1' },
        { id: '12', patientName: 'Felipe', responsibleName: 'INDIVIDUAL', enforcementDate: enforcementDateNow, name: 'Exemplo 1' },
        { id: '13', patientName: 'Zendaya', responsibleName: 'INDIVIDUAL', enforcementDate: enforcementDateNow, name: 'Exemplo 1' },
        { id: '14', patientName: 'Maria', responsibleName: 'INDIVIDUAL', enforcementDate: enforcementDateNow, name: 'Exemplo 1' },
        { id: '15', patientName: 'Maria', responsibleName: 'INDIVIDUAL', enforcementDate: enforcementDateNow, name: 'Exemplo 1' },
        { id: '16', patientName: 'Maria', responsibleName: 'INDIVIDUAL', enforcementDate: enforcementDateNow, name: 'Exemplo 1' },
        { id: '17', patientName: 'Maria', responsibleName: 'INDIVIDUAL', enforcementDate: enforcementDateNow, name: 'Exemplo 1' },
        { id: '18', patientName: 'Maria', responsibleName: 'INDIVIDUAL', enforcementDate: enforcementDateNow, name: 'Exemplo 1' },
        { id: '19', patientName: 'Maria', responsibleName: 'INDIVIDUAL', enforcementDate: enforcementDateNow, name: 'Exemplo 1' },
        { id: '20', patientName: 'Maria', responsibleName: 'INDIVIDUAL', enforcementDate: enforcementDateNow, name: 'Exemplo 1' },
        { id: '21', patientName: 'Maria', responsibleName: 'INDIVIDUAL', enforcementDate: enforcementDateNow, name: 'Exemplo 1' },
        { id: '22', patientName: 'Maria', responsibleName: 'INDIVIDUAL', enforcementDate: enforcementDateNow, name: 'Exemplo 1' },
        { id: '23', patientName: 'Maria', responsibleName: 'MULTUPLE', enforcementDate: enforcementDateNow, name: 'Exemplo 1' },
        { id: '24', patientName: 'Maria', responsibleName: 'MULTUPLE', enforcementDate: enforcementDateNow, name: 'Exemplo 1' },
        { id: '25', patientName: 'Maria', responsibleName: 'MULTUPLE', enforcementDate: enforcementDateNow, name: 'Exemplo 1' },
        { id: '26', patientName: 'Maria', responsibleName: 'MULTUPLE', enforcementDate: enforcementDateNow, name: 'Exemplo 1' },
        { id: '27', patientName: 'Maria', responsibleName: 'MULTUPLE', enforcementDate: enforcementDateNow, name: 'Exemplo 1' },
        { id: '28', patientName: 'Maria', responsibleName: 'MULTUPLE', enforcementDate: enforcementDateNow, name: 'Exemplo 1' },
        { id: '29', patientName: 'Maria', responsibleName: 'MULTUPLE', enforcementDate: enforcementDateNow, name: 'Exemplo 1' },
    ]

    const rows: GridRowsProp<Transcription>[] =  transcriptions.map((transcription) => {
        return transcription as unknown as GridRowsProp<Transcription>
    })

    const columns: GridColDef[] = [
        { field: 'id', hideable: true },
        { field: 'name', headerName: 'Nome', width: 150 },
        { field: 'enforcementDate', headerName: 'Data de Aplicacao', width: 180, type: 'dateTime' },
        { field: 'responsibleName', headerName: 'Responsavel', width: 150 },
        { field: 'patientName', headerName: 'Paciente', width: 100 },
    ]

    const data = {
        rows,
        columns,
    }

    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Welcome to transcriptions
                </Typography>

                <Table {...data} />
            </Box>
        </Container>
    )
}
