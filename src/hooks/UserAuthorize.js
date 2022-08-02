import React from "react";
import Profile from "../pages/Profile";
import { handleAuthorizationCode } from "../api/handleAuthorizationCode";
import PropTypes from "prop-types";

const UserAuthorize = (props) => {
    const [token, setToken] = React.useState(null)
    
    React.useEffect(() => {
        const code = new URLSearchParams(window.location.search).get('code')
        handleAuthorizationCode(code).then((data) => {
            props.handleAccessToken(data.refresh_token)
            props.handleLogInAsGuest('false')
            setToken(data.refresh_token)
    
            // If success then cut the code string from the URL and execute the other thing
            window.history.pushState({}, null, "/profile");
        })
    
    }, [])
    
    if(!token){
        return (
        <div>
            <p>No access token</p>
        </div>
        );
    }
    return (
        <Profile access_token={token} logInAsGuest={'false'}/>
    );
}

UserAuthorize.propTypes = {
    handleAccessToken: PropTypes.func.isRequired,
    handleLogInAsGuest: PropTypes.func.isRequired,
}

export default UserAuthorize;
