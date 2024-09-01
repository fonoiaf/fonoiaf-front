import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

interface SidebarItemProps {
    text: string
    index: number
    icon: React.ReactNode
}

export default function SidebarItem({ text, index, icon }: SidebarItemProps) {
    return (
        <ListItem key={index} disablePadding>
            <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
            </ListItemButton>
        </ListItem>
    )
}
