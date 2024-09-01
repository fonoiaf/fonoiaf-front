import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

interface SidebarItemProps extends React.ButtonHTMLAttributes<HTMLElement> {
    name: string
    icon: React.ReactNode
}

export default function SidebarItem({ name, icon }: SidebarItemProps) {
    return (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={name} />
            </ListItemButton>
        </ListItem>
    )
}
