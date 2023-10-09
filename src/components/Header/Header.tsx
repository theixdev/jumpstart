import Avatar from '@/components/Header/Avatar'
import DarkModeToggle from './DarkModeToggle'
import NavMenuHeader from '@/components/Navigation/NavMenuHeader'
import { useAuth0 } from '@auth0/auth0-react'
import { LoginButton } from './LoginButton'
import HamburgerButton from './HamburgerButton'
import { useState } from 'react'
import NavSideBar from '@/components/Navigation/NavSidebar'

export const PageHeader = () => {
    const { isAuthenticated } = useAuth0()
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <header className="navbar bg-base-300 min-h-20 px-6">
            <HamburgerButton setMenuOpen={setOpenMenu} />
            <NavSideBar />
            <NavMenuHeader openMenu={openMenu} />
            <DarkModeToggle className="mr-4 ml-auto " />
            {isAuthenticated ? <Avatar /> : <LoginButton />}
        </header>
    )
}

export default PageHeader
