import Auth from '@/components/Auth'

const SomePage = () => {
    return (
        <Auth>
            <div className="flex-grow flex items-center justify-center">
                <p>If you can read this you are logged in.</p>
            </div>
        </Auth>
    )
}

export default SomePage
