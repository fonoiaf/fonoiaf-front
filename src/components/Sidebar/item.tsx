'use client'

import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

interface SidebarItemProps {
    name: string
    path: string
    icon: React.ReactNode
    isActive: boolean
}

export default function SidebarItem({ name, path, icon, isActive }: SidebarItemProps) {
    return (
        <ListItem disablePadding>
            <ListItemButton href={path} selected={isActive}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={name} />
            </ListItemButton>
        </ListItem>
    )
}
