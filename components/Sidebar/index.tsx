'use client'

import MailIcon from '@mui/icons-material/Mail'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import * as React from 'react'
import SidebarItem from './item'

export default function Sidebar() {
    const [open, setOpen] = React.useState(false)

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen)
    }

    const items = ['Home', 'Palavras', 'Figuras', 'Fonemas']
    const others = [
        'Pacientes',
        'Transcricoes',
        'Usuarios',
        'Tutorial',
        'Configuracoes',
    ]

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>Open drawer</Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                >
                    <List>
                        {items.map((text, index) => (
                            <SidebarItem
                                key={index}
                                index={index}
                                text={text}
                                icon={<InboxIcon />}
                            />
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {others.map((text, index) => (
                            <SidebarItem
                                key={index}
                                index={index}
                                text={text}
                                icon={<MailIcon />}
                            />
                        ))}
                    </List>
                </Box>
            </Drawer>
        </div>
    )
}
