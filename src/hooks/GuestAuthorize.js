import React from "react";
import { handleGuestToken } from "../api/handleGuestToken";
import { Capture } from "../pages";
import PropTypes from "prop-types";


const GuestAuthorize = (props) => {
    const [token, setToken] = React.useState(null);
    
    React.useEffect(() => {
        handleGuestToken().then((data) => {
            props.handleAccessToken(data.access_token)
            props.handleLogInAsGuest('true')
            setToken(data.access_token)
    
            // If success then cut the code string from the URL and execute the other thing
            window.history.pushState({}, null, "/capture");
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
        <Capture handleCapturedImg={props.handleCapturedImg}/>
    );
}

GuestAuthorize.propTypes = {
    handleAccessToken: PropTypes.func.isRequired,
    handleLogInAsGuest: PropTypes.func.isRequired,
}

export default GuestAuthorize;