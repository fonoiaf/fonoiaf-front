import AppBar from '@/components/AppBar'
import { Nav } from '@/components/Nav'
import Sidebar from '@/components/Sidebar'

interface Props {
    children: React.ReactNode
}

export default function DashboardLayout({ children }: Props) {
    return (
        <div>
            <AppBar />
            <Sidebar />
            <Nav />
            <main>{children}</main>
        </div>
    )
}
