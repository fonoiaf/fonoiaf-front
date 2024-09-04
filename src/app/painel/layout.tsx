'use client'

import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { Container } from '@mui/material'
import * as React from 'react'

interface Props {
    children: React.ReactNode
}

export default function DashboardLayout({ children }: Props) {
    const [open, setOpen] = React.useState(false)
    const toggleSidebar = (newOpen: boolean) => () => setOpen(newOpen)

    return (
        <div>
            <Header toggle={toggleSidebar} />
            <Sidebar open={open} toggle={toggleSidebar} />
            <main>
                <Container>
                    {children}
                </Container>
            </main>
        </div>
    )
}
