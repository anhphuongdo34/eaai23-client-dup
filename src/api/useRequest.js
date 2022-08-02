import axios from "axios";
import React from "react";
import { handleAudioFeatures } from "./handleRequest"

export default function useRequest(access_token, logInAsGuest) {
    const [audio_features, setAudioFeatures] = React.useState([])

    React.useEffect(() => {
        var audio_features_response;
        if(logInAsGuest==='true') {
            audio_features_response = Promise.resolve([])
        }
        else{
            audio_features_response = handleAudioFeatures(access_token)
        }

        audio_features_response.then((data) => {
            setAudioFeatures(data)

            //send audio features to backend to save to csv
            axios.post("https://eaai23-spotify-chw35hhwvq-uc.a.run.app/data", { audio_features: data }).then((response) => {
                console.log(response)
            }).catch((err) => {
                console.log("error posting audio_features data to server", err)
            })
        })
    }, []);

    return audio_features
}