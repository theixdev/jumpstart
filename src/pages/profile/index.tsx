import Auth from '@/components/Auth'
import { useAuth0 } from '@auth0/auth0-react'

const ProfilePage = () => {
    const { user } = useAuth0()

    return (
        <Auth>
            <div className="flex-grow flex flex-col w-full h-full justify-center items-center bg-base-100 text-base-content">
                <img src={user?.picture} alt={user?.name} />
                <h2>{user?.name}</h2>
                <p>{user?.email}</p>
            </div>
        </Auth>
    )
}
export default ProfilePage
