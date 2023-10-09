import { useNavigate } from '@/router'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'

export const CallbackPage = () => {
    const { handleRedirectCallback } = useAuth0()
    const navigate = useNavigate()

    useEffect(() => {
        const handleCallback = async () => {
            const { appState } = await handleRedirectCallback()
            const { returnTo } = appState

            if (returnTo) {
                navigate(returnTo)
            } else {
                navigate('/')
            }
        }
        handleCallback()
    }, [handleRedirectCallback, navigate])

    return (
        <div>
            <p>Handling callback...</p>
        </div>
    )
}

export default CallbackPage
