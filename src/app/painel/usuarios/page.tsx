import Table from '@/components/Table'
import { Box, Container, Typography } from '@mui/material'
import { GridColDef, GridRowsProp } from '@mui/x-data-grid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Fono IAF | Usuarios',
    description: 'Fonoiaf software',
}

type UserType = 'INDIVIDUAL' | 'MULTUPLE'

type User = {
    id: string
    name: string
    type: UserType
    birthdate: Date,
    isAdmin: boolean
    // avatar: string,
}

export default function Usuarios() {
    const birthdateNow = new Date()

    const users: User[] = [
        { id: '1', name: 'Maria', type: 'INDIVIDUAL', birthdate: birthdateNow, isAdmin: true },
        { id: '2', name: 'Janaina', type: 'INDIVIDUAL', birthdate: birthdateNow, isAdmin: false },
        { id: '3', name: 'Lucas', type: 'INDIVIDUAL', birthdate: birthdateNow, isAdmin: true },
        { id: '4', name: 'Miranda', type: 'INDIVIDUAL', birthdate: birthdateNow, isAdmin: true },
        { id: '5', name: 'Bale', type: 'INDIVIDUAL', birthdate: birthdateNow, isAdmin: false },
        { id: '6', name: 'Mary', type: 'INDIVIDUAL', birthdate: birthdateNow, isAdmin: false },
        { id: '7', name: 'Omar', type: 'INDIVIDUAL', birthdate: birthdateNow, isAdmin: true },
        { id: '8', name: 'Samira', type: 'INDIVIDUAL', birthdate: birthdateNow, isAdmin: true },
        { id: '9', name: 'Luan', type: 'INDIVIDUAL', birthdate: birthdateNow, isAdmin: true },
        { id: '10', name: 'David', type: 'INDIVIDUAL', birthdate: birthdateNow, isAdmin: true },
        { id: '11', name: 'Jonathan', type: 'INDIVIDUAL', birthdate: birthdateNow, isAdmin: true },
        { id: '12', name: 'Felipe', type: 'INDIVIDUAL', birthdate: birthdateNow, isAdmin: true },
        { id: '13', name: 'Zendaya', type: 'INDIVIDUAL', birthdate: birthdateNow, isAdmin: true },
        { id: '14', name: 'Maria', type: 'INDIVIDUAL', birthdate: birthdateNow, isAdmin: true },
        { id: '15', name: 'Maria', type: 'INDIVIDUAL', birthdate: birthdateNow, isAdmin: true },
        { id: '16', name: 'Maria', type: 'INDIVIDUAL', birthdate: birthdateNow, isAdmin: true },
        { id: '17', name: 'Maria', type: 'INDIVIDUAL', birthdate: birthdateNow, isAdmin: true },
        { id: '18', name: 'Maria', type: 'INDIVIDUAL', birthdate: birthdateNow, isAdmin: true },
        { id: '19', name: 'Maria', type: 'INDIVIDUAL', birthdate: birthdateNow, isAdmin: true },
        { id: '20', name: 'Maria', type: 'INDIVIDUAL', birthdate: birthdateNow, isAdmin: true },
        { id: '21', name: 'Maria', type: 'INDIVIDUAL', birthdate: birthdateNow, isAdmin: true },
        { id: '22', name: 'Maria', type: 'INDIVIDUAL', birthdate: birthdateNow, isAdmin: true },
        { id: '23', name: 'Maria', type: 'MULTUPLE', birthdate: birthdateNow, isAdmin: true },
        { id: '24', name: 'Maria', type: 'MULTUPLE', birthdate: birthdateNow, isAdmin: false },
        { id: '25', name: 'Maria', type: 'MULTUPLE', birthdate: birthdateNow, isAdmin: true },
        { id: '26', name: 'Maria', type: 'MULTUPLE', birthdate: birthdateNow, isAdmin: true },
        { id: '27', name: 'Maria', type: 'MULTUPLE', birthdate: birthdateNow, isAdmin: true },
        { id: '28', name: 'Maria', type: 'MULTUPLE', birthdate: birthdateNow, isAdmin: true },
        { id: '29', name: 'Maria', type: 'MULTUPLE', birthdate: birthdateNow, isAdmin: true },
    ]

    const rows: GridRowsProp<User>[] =  users.map((user) => {
        return user as unknown as GridRowsProp<User>
    })

    const columns: GridColDef[] = [
        { field: 'id', hideable: true },
        { field: 'name', headerName: 'Nome', width: 150 },
        { field: 'type', headerName: 'Tipo', width: 150 },
        { field: 'birthdate', headerName: 'Data de Nascimento', width: 150, type: 'date' },
        { field: 'isAdmin', type: 'boolean', headerName: 'Admin', width: 100 },
    ]

    const data = {
        rows,
        columns,
    }

    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Welcome to users
                </Typography>

                <Table {...data} />
            </Box>
        </Container>
    )
}
