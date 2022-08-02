import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

const useProfile = (props) => {
    const [profile, setProfile] = React.useState([]);
    
    const handleUserProfile = async (access_token) => {
        if(props.logInAsGuest === 'true') return []
    
        const {data} = await axios.get("https://api.spotify.com/v1/me", {
            headers: {
                Authorization: `Bearer ${access_token}`,
            }
        })
    
        return data
    }
    
    React.useEffect(() => {
        handleUserProfile(props.access_token).then((data) => {
            setProfile(data)
        })
    }, []);
    
    return profile
}

useProfile.propTypes = {
    access_token: PropTypes.string.isRequired,
    logInAsGuest: PropTypes.bool.isRequired,
}

export default useProfile;