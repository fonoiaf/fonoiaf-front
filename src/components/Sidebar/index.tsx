'use client'

import DescriptionIcon from '@mui/icons-material/DescriptionOutlined'
import FaceIcon from '@mui/icons-material/FaceOutlined'
import GroupIcon from '@mui/icons-material/GroupOutlined'
import HelpIcon from '@mui/icons-material/HelpCenterOutlined'
import HomeIcon from '@mui/icons-material/HomeOutlined'
import MusicNoteIcon from '@mui/icons-material/MusicNoteOutlined'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibraryOutlined'
import SettingsIcon from '@mui/icons-material/SettingsOutlined'
import SpellcheckIcon from '@mui/icons-material/SpellcheckOutlined'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import { usePathname } from 'next/navigation'
import * as React from 'react'
import SidebarItem from './item'

interface SidebarItemOptions {
    name: string
    icon: React.ReactNode
    path: string
}

interface Props {
    open: boolean
    toggle: (value: boolean) => () => void
}

export default function Sidebar({ open, toggle }: Props) {
    const pathname = usePathname()
    const items: SidebarItemOptions[] = [
        {
            name: 'Home',
            icon: <HomeIcon />,
            path: '/painel',
        },
        {
            name: 'Palavras',
            icon: <SpellcheckIcon />,
            path: '/painel/palavras',
        },
        {
            name: 'Figuras',
            icon: <PhotoLibraryIcon />,
            path: '/painel/figuras',
        },
        {
            name: 'Fonemas',
            icon: <MusicNoteIcon />,
            path: '/painel/fonemas',
        },
    ]
    const others: SidebarItemOptions[] = [
        {
            name: 'Pacientes',
            icon: <FaceIcon />,
            path: '/painel/pacientes',
        },
        {
            name: 'Transcricoes',
            icon: <DescriptionIcon />,
            path: '/painel/transcricoes',
        },
        {
            name: 'Usuarios',
            icon: <GroupIcon />,
            path: '/painel/usuarios',
        },
        {
            name: 'Tutorial',
            icon: <HelpIcon />,
            path: '/painel/tutorial',
        },
        {
            name: 'Configuracoes',
            icon: <SettingsIcon />,
            path: '/painel/configuracoes',
        },
    ]

    return (
        <nav>
            <Drawer open={open} onClose={toggle(false)}>
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggle(false)}
                >
                    <List>
                        {items.map((item, index) => (
                            <SidebarItem key={index} {...item} isActive={item.path === pathname} />
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {others.map((item, index) => (
                            <SidebarItem key={index} {...item} isActive={item.path === pathname} />
                        ))}
                    </List>
                </Box>
            </Drawer>
        </nav>
    )
}
