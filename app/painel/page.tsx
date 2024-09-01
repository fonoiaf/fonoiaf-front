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

                <Typography variant='caption'>
                    Lorem ipsum dolor sit amet. Et explicabo alias ex officia
                    alias sed cupiditate natus aut atque doloremque et modi
                    fugit. Id quaerat suscipit sed sequi nemo qui recusandae
                    saepe qui quod itaque sit officiis quos ut repudiandae nemo?
                    Ut quia veniam aut fugiat nesciunt hic rerum quos est
                    blanditiis vero. Ad sapiente Quis eos error consequuntur quo
                    debitis inventore in maxime nobis. Et veniam galisum ut
                    ducimus dolores eos voluptas possimus est doloribus soluta
                    aut reprehenderit ipsa id possimus amet. Non expedita
                    corrupti eos eaque officiis ut nesciunt sequi aut omnis
                    mollitia At beatae incidunt qui delectus repellendus. In
                    debitis dolorum sit dolores exercitationem qui eveniet
                    laborum vel incidunt blanditiis? Nam pariatur nulla et
                    dolorum reiciendis est magnam galisum qui corporis incidunt
                    ad illo maxime sed quia cupiditate et illo eveniet.
                </Typography>
            </Box>
        </Container>
    )
}
