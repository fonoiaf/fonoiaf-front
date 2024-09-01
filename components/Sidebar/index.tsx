'use client'

import InboxIcon from '@mui/icons-material/MoveToInbox'
import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import { useRouter } from 'next/navigation'
import * as React from 'react'
import SidebarItem from './item'

interface SidebarItemOptions {
    name: string
    icon: React.ReactNode
    path: string
    onClick: () => void
}

interface Props {
    open: boolean
    toggle: (value: boolean) => () => void
}

export default function Sidebar({ open, toggle }: Props) {
    const router = useRouter()

    const items: SidebarItemOptions[] = [
        {
            name: 'Home',
            icon: <InboxIcon />,
            path: '/painel',
            onClick: () => router.push('/painel'),
        },
        {
            name: 'Palavras',
            icon: <InboxIcon />,
            path: '/painel/palavras',
            onClick: () => router.push('/painel/palavras'),
        },
        {
            name: 'Figuras',
            icon: <InboxIcon />,
            path: '/painel/figuras',
            onClick: () => router.push('/painel/figuras'),
        },
        {
            name: 'Fonemas',
            icon: <InboxIcon />,
            path: '/painel/fonemas',
            onClick: () => router.push('/painel/fonemas'),
        },
    ]
    const others: SidebarItemOptions[] = [
        {
            name: 'Pacientes',
            icon: <InboxIcon />,
            path: '/painel/pacientes',
            onClick: () => router.push('/painel/pacientes'),
        },
        {
            name: 'Transcricoes',
            icon: <InboxIcon />,
            path: '/painel/transcricoes',
            onClick: () => router.push('/painel/transcricoes'),
        },
        {
            name: 'Usuarios',
            icon: <InboxIcon />,
            path: '/painel/usuarios',
            onClick: () => router.push('/painel/usuarios'),
        },
        {
            name: 'Tutorial',
            icon: <InboxIcon />,
            path: '/painel/tutorial',
            onClick: () => router.push('/painel/tutorial'),
        },
        {
            name: 'Configuracoes',
            icon: <InboxIcon />,
            path: '/painel/configuracoes',
            onClick: () => router.push('/painel/configuracoes'),
        },
    ]

    const to = (path: string) => router.push(path)

    return (
        <div>
            <Drawer open={open} onClose={toggle(false)}>
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggle(false)}
                >
                    <List>
                        {items.map((item, index) => (
                            <SidebarItem key={index} {...item} />
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {others.map((item, index) => (
                            <SidebarItem key={index} {...item} />
                        ))}
                    </List>
                </Box>
            </Drawer>
        </div>
    )
}
