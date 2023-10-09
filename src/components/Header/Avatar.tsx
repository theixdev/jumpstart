import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import avatarPlaceHolder from '@/assets/avatar-placeholder.png'
import { LoginButton } from './LoginButton'

export const Avatar = () => {
    const { user, logout } = useAuth0()
    const navigate = useNavigate()

    return (
        <div className="dropdown dropdown-end">
            {/* Avatar /> */}
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar h-12">
                <img src={user?.picture ? avatarPlaceHolder : user?.picture} alt={user?.name} className="rounded-full h-12" />
            </label>
            {/* Menu /> */}
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52">
                <li>
                    <a onClick={() => navigate('/profile')}>Profile</a>
                </li>
                <li>
                    <a>Settings</a>
                </li>
                <div className="divider"></div>
                <li>
                    <a
                        onClick={() =>
                            logout({
                                logoutParams: {
                                    returnTo: window.location.origin,
                                },
                            })
                        }
                    >
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Avatar
