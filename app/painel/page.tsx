import { Box, Container, Typography } from '@mui/material'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Fono IAF | Painel',
    description: 'Fonoiaf software',
}

export default function Painel() {
    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Welcome to Painel
                </Typography>

                <Typography variant="body1">
                    Hello, Fono IAF(Instrumento de Avaliação Fonológica)!
                </Typography>
            </Box>
        </Container>
    )
}
