import { AppState, Auth0Provider } from "@auth0/auth0-react"
import { useNavigate } from "react-router-dom";

type Props = {
    children: React.ReactNode
}

const Auth0ProviderWithNavigate = ({ children }: Props) => {
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

    const navigate = useNavigate();

    if (!domain || !clientId || !redirectUri) {
        throw new Error("unable to intialize auth")
    }

    const onRedirectAfterLogin = (appstate?: AppState) => {
        navigate(appstate?.returnTo || "/home")
    }

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri: redirectUri
            }}
            onRedirectCallback={onRedirectAfterLogin}
        >
            {children}
        </Auth0Provider>
    )
}

export default Auth0ProviderWithNavigate