import { useAuth0 } from '@auth0/auth0-react'
import { twMerge } from 'tailwind-merge'

export const LoginButton = (props: { className?: string }) => {
    const className = twMerge('min-h-12 btn btn-primary btn-sm', props.className)
    const { loginWithRedirect } = useAuth0()
    return (
        <button
            className={className}
            onClick={() =>
                loginWithRedirect({
                    appState: { returnTo: window.location.pathname },
                })
            }
        >
            Log in
        </button>
    )
}

export default LoginButton
