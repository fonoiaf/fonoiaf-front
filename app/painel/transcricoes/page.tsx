import { Box, Container, Typography } from '@mui/material'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Fono IAF | Paciente',
    description: 'Fonoiaf software',
}

export default function Transcricoes() {
    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Welcome to transcriptions
                </Typography>
            </Box>
        </Container>
    )
}
