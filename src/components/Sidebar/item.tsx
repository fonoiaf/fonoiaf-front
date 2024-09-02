'use client'

import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Link from 'next/link'

interface SidebarItemProps {
    name: string
    path: string
    icon: React.ReactNode
}

export default function SidebarItem({ name, path, icon }: SidebarItemProps) {
    return (
        <Link href={path}>
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={name} />
            </ListItemButton>
        </ListItem>
        </Link>
    )
}
