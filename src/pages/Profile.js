import React from "react";
import useProfile from "../api/useProfile";
import useRequest from "../api/useRequest";
import { Container, Spinner, Button } from "react-bootstrap";
import { NavBar } from "../components";
import PropTypes from "prop-types";
import phrases from "../constants/phrases";


const Profile = (props) => {
    const profile = useProfile(props.access_token, props.logInAsGuest)
    const audio_features = useRequest(props.access_token, props.logInAsGuest)

    if(!profile){
        return (
            <Container className="profile_header">
                <div className="profile_title">User Not Found</div>
            </Container>
        );
    }

    return (
        <div className="profile">
            <NavBar active={phrases.MENU_PROFILE}/>
            <Container className="profile_header">
                <h1 className="text-color-primary">Profile</h1>
                <div className="profile_section">Name
                    <span className="profile_section">{profile.display_name}</span>
                </div>
                <div className="profile_section">Email
                    <span className="profile_section">{profile.email}</span> 
                </div>
                <div className="profile_section">Username
                    <span className="profile_section">{profile.id}</span>
                </div>
                <div className="profile_section">Country or region 
                    <span className="profile_section">{profile.country}</span>
                </div>
                
                {props.logInAsGuest === 'true' ? <div className="profile_section">Track History</div> : 
                    <div className="profile_section">Track History
                        {audio_features.length === 0 ?
                        <Spinner animation="border" role="status">
                            <span className="">Loading...</span>
                        </Spinner>
                        : <span className="profile_section">{audio_features.length} tracks</span>
                        }
                    </div>
                }
            </Container>
            <Container className="profile_body">
                {profile.external_urls === null ? "" : 
                    <Button href={profile.external_urls.spotify} className="button_primary" text="View Profile in Spotify"/>
                }
                <Button href="/capture" className="button_primary" text="Take Photo"/>
            </Container>
        </div>
    );
}

Profile.propTypes = {
    access_token: PropTypes.string.isRequired,
    logInAsGuest: PropTypes.bool.isRequired,
}


export default Profile;