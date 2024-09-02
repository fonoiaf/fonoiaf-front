import { Box, Button, Container, Typography } from '@mui/material'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Fono IAF',
    description: 'Fonoiaf software',
}

export default function Home() {
    const welcome = 'Welcome to '
    const link = 'App Fono IAF!'
    const description = 'Hello, Fono IAF(Instrumento de Avaliação Fonológica)!'

    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    {welcome}
                    <Link href="https://mui.com/toolpad/core/introduction">
                        {link}
                    </Link>
                </Typography>

                <Typography variant="body1">{description}</Typography>
                <Button variant="contained" href="/painel">
                    Painel
                </Button>
            </Box>
        </Container>
    )
}
