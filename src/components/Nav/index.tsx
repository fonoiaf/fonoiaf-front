'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Nav() {
    const pathname = usePathname()
    const nav = {
        index: '/painel',
        patients: '/painel/pacientes',
        words: '/painel/palavras',
    }

    const isActive = (path: string) => (pathname === path ? 'active' : '')

    return (
        <nav>
            <Link className={isActive(nav.index)} href={nav.index}>
                Home
            </Link>

            <Link className={isActive(nav.patients)} href={nav.patients}>
                Pacientes
            </Link>

            <Link className={isActive(nav.words)} href={nav.words}>
                Palavras
            </Link>
        </nav>
    )
}
