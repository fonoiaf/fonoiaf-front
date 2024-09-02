import Table from '@/components/Table'
import { Box, Container, Typography } from '@mui/material'
import { GridColDef, GridRowsProp } from '@mui/x-data-grid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Fono IAF | Paciente',
    description: 'Fonoiaf software',
}

type Phoneme = {
    id: string
    name: string
    type: string
}

export default function Fonemas() {
    
    const fonemas: Phoneme[] = [
        { id: '1', name: 'p', type: 'consoante' },
        { id: '2', name: 'b', type: 'consoante' },
        { id: '3', name: 't', type: 'consoante' },
        { id: '4', name: 'd', type: 'consoante' },
        { id: '5', name: 'k', type: 'consoante' },
        { id: '6', name: 'g', type: 'consoante' },
        { id: '7', name: 'f', type: 'consoante' },
        { id: '8', name: 'v', type: 'consoante' },
        { id: '9', name: 's', type: 'consoante' },
        { id: '10', name: 'z', type: 'consoante' },
        { id: '11', name: 'ʃ', type: 'consoante' },
        { id: '12', name: 'ʒ', type: 'consoante' },
        { id: '13', name: 'ʁ', type: 'consoante' },
        { id: '14', name: 'h', type: 'consoante' },
        { id: '15', name: 'm', type: 'consoante' },
        { id: '16', name: 'n', type: 'consoante' },
        { id: '17', name: 'ɲ', type: 'consoante' },
        { id: '18', name: 'l', type: 'consoante' },
        { id: '19', name: 'ʎ', type: 'consoante' },
        { id: '20', name: 'ʀ', type: 'consoante' },
        { id: '21', name: 'j', type: 'consoante' },
        { id: '22', name: 'w', type: 'consoante' },
        { id: '23', name: 'i', type: 'vogal' },
        { id: '24', name: 'e', type: 'vogal' },
        { id: '25', name: 'ɛ', type: 'vogal' },
        { id: '26', name: 'a', type: 'vogal' },
        { id: '27', name: 'ɔ', type: 'vogal' },
        { id: '28', name: 'o', type: 'vogal' },
        { id: '29', name: 'u', type: 'vogal' },
    ]

    const fonemasEmOrdem = fonemas.sort((a, b) => a.name.localeCompare(b.name))

    // const rows: GridRowsProp<Phoneme>[] = [
    //     { id: '1', name: 'Hello', type: 'World' },
    //     { id: '2', name: 'MUI X', type: 'is awesome' },
    //     { id: '3', name: 'Material UI', type: 'is amazing' },
    //     { id: '4', name: 'MUI', type: '' },
    //     { id: '5', name: 'Joy UI', type: 'is awesome' },
    //     { id: '6', name: 'MUI Base', type: 'is amazing' },
    // ]

    const rows: GridRowsProp<Phoneme>[] =  fonemasEmOrdem.map((fonema) => {
        return {
            id: fonema.id,
            name: fonema.name,
            type: fonema.type,
        } as unknown as GridRowsProp<Phoneme>
    })

    const columns: GridColDef[] = [
        { field: 'id', hideable: true },
        { field: 'name', headerName: 'Nome', width: 150 },
        { field: 'type', headerName: 'Tipo', width: 150 },
    ]

    const data = {
        rows,
        columns,
    }

    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Welcome to Phonemes
                </Typography>

                <Table {...data} />
            </Box>
        </Container>
    )
}
