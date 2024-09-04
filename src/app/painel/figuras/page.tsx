import { Box, Container, Typography } from '@mui/material'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Fono IAF | Figuras',
    description: 'Fonoiaf software',
}

export default function Figuras() {
    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Welcome to Figures
                </Typography>
            </Box>
        </Container>
    )
}
