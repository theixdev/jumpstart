import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { Routes } from '@generouted/react-router';

const Root = () => {
    return (
        <React.StrictMode>
            <Auth0Provider
                domain={import.meta.env.VITE_APP_AUTH0_DOMAIN}
                clientId={import.meta.env.VITE_APP_AUTH0_CLIENT_ID}
                authorizationParams={{
                    redirect_uri: window.location.origin + '/callback'
                }}
                cacheLocation="localstorage"
            >
                <Routes />
            </Auth0Provider>
        </React.StrictMode>
    );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<Root />);
