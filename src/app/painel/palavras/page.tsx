import Table from '@/components/Table'
import { Box, Container, Typography } from '@mui/material'
import { GridColDef, GridRowsProp } from '@mui/x-data-grid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Fono IAF | Palavras',
    description: 'Fonoiaf software',
}

type Word = {
    id: string
    name: string
    phonemeNumber: number
    phonemeFocus: string
}

export default function Palavras() {
    const words: Word[] = [
        { id: '1', phonemeNumber: 1, name: 'laranja', phonemeFocus: 'A' },
        { id: '2', phonemeNumber: 1, name: 'cafe', phonemeFocus: 'R' },
        { id: '3', phonemeNumber: 1, name: 'leite', phonemeFocus: 'D' },
        { id: '4', phonemeNumber: 1, name: 'xicara', phonemeFocus: 'T' },
        { id: '5', phonemeNumber: 1, name: 'chave', phonemeFocus: 'L' },
        { id: '6', phonemeNumber: 1, name: 'chave', phonemeFocus: 'S' },
        { id: '7', phonemeNumber: 1, name: 'chave', phonemeFocus: 'L' },
        { id: '8', phonemeNumber: 1, name: 'chave', phonemeFocus: 'L' },
        { id: '9', phonemeNumber: 1, name: 'chave', phonemeFocus: 'L' },
        { id: '10', phonemeNumber: 1, name: 'chave', phonemeFocus: 'L' },
        { id: '11', phonemeNumber: 1, name: 'chave', phonemeFocus: 'L' },
        { id: '12', phonemeNumber: 1, name: 'chave', phonemeFocus: 'L' },
        { id: '13', phonemeNumber: 1, name: 'chave', phonemeFocus: 'L' },
        { id: '14', phonemeNumber: 1, name: 'chave', phonemeFocus: 'L' },
        { id: '15', phonemeNumber: 1, name: 'chave', phonemeFocus: 'L' },
        { id: '16', phonemeNumber: 1, name: 'chave', phonemeFocus: 'L' },
        { id: '17', phonemeNumber: 1, name: 'chave', phonemeFocus: 'L' },
        { id: '18', phonemeNumber: 1, name: 'chave', phonemeFocus: 'L' },
        { id: '19', phonemeNumber: 1, name: 'chave', phonemeFocus: 'L' },
        { id: '20', phonemeNumber: 1, name: 'chave', phonemeFocus: 'L' },
        { id: '21', phonemeNumber: 1, name: 'chave', phonemeFocus: 'L' },
        { id: '22', phonemeNumber: 1, name: 'chave', phonemeFocus: 'L' },
        { id: '23', phonemeNumber: 1, name: 'chave', phonemeFocus: 'J' },
        { id: '24', phonemeNumber: 1, name: 'chave', phonemeFocus: 'J' },
        { id: '25', phonemeNumber: 1, name: 'chave', phonemeFocus: 'J' },
        { id: '26', phonemeNumber: 1, name: 'chave', phonemeFocus: 'J' },
        { id: '27', phonemeNumber: 1, name: 'chave', phonemeFocus: 'J' },
        { id: '28', phonemeNumber: 1, name: 'chave', phonemeFocus: 'J' },
        { id: '29', phonemeNumber: 1, name: 'chave', phonemeFocus: 'J' },
    ]

    const rows: GridRowsProp<Word>[] = words.map((word) => {
        return word as unknown as GridRowsProp<Word>
    })

    const columns: GridColDef[] = [
        { field: 'id', hideable: true },
        { field: 'name', headerName: 'Nome', width: 150 },
        { field: 'phonemeNumber', headerName: 'Qtd de Fonemas', width: 120, type: 'number', align: 'center' },
        { field: 'phonemeFocus', headerName: 'Fonema Foco', width: 150, align: 'center' },
    ]

    const data = {
        rows,
        columns,
    }

    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Welcome to Words
                </Typography>

                <Table {...data} />
            </Box>
        </Container>
    )
}
