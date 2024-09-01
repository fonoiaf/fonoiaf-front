'use client'

import AppBar from '@/components/AppBar'
import Sidebar from '@/components/Sidebar'
import * as React from 'react'

interface Props {
    children: React.ReactNode
}

export default function DashboardLayout({ children }: Props) {
    const [open, setOpen] = React.useState(false)
    const toggleSidebar = (newOpen: boolean) => () => setOpen(newOpen)

    return (
        <div>
            <AppBar toggle={toggleSidebar} />
            <Sidebar open={open} toggle={toggleSidebar} />
            <main>{children}</main>
        </div>
    )
}
