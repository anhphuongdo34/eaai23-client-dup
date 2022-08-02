import { React , useEffect, useState } from "react";
import { handleTrack } from "../api/handleRequest";
import { Thumbs } from "../components";
import PropTypes from "prop-types";
import boldLink from "../images/link.svg";
import link from "../images/toLink.svg";

const Artist = (props) => {
    return(
        <a target="_blank" href={props.artist.external_urls?props.artist.external_urls.spotify:null}>
            {props.artist.name}{props.separator?", ":""}
        </a>
    )
}

const RecommendedTrack = (props) => {
    const [track, setTrack] = useState([])
    var artistCount=0
    
    useEffect(() => {
        handleTrack(props.access_token, props.track_id).then((response) => {
            setTrack(response.data)
        }).catch((err) => {
            console.log("error getting track from id", err)
        })
    }, [props.access_token, props.track_id])
    
    return (track.length === 0 ? 
        <div>
            Track Not Found
        </div> : 
        <div className="m-10">
            <a
                className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-teal-600/10 hover:border-teal-600/10"
            >

                <div className="flex justify-center">
                    <a 
                        href={(track.external_urls)?track.external_urls.spotify:null} 
                        className="text-2xl font-bold text-teal-600 mb-5"
                        target="_blank"
                    >
                            {track.name}
                    </a>
                    <img 
                        src={boldLink}
                        className="w-4 h-4 mt-1 ml-2" 
                    />
                </div>

                <div className="flex justify-between max-w-516px mt-3 mb-1">
                    <span className="text-lg font-bold">By</span>
                    <span className="flex justify-end">
                        <div>
                            {track.artists && track.artists.map((artist) => 
                                <Artist 
                                    key={artist.id} 
                                    artist={artist} 
                                    separator={++artistCount<track.artists.length}
                                />
                            )}
                        </div>
                        <img 
                            src={link}
                            className="w-4 h-4 ml-1" 
                        />
                    </span>

                </div>

                <hr className="mb-3"/>

                <div className="flex justify-between max-w-516px mb-1">
                    <span className="text-lg font-bold">Album</span> 
                    <span className="flex justify-end">
                        <a target="_blank" href={(track.album.external_urls)?track.album.external_urls.spotify:null}>
                            {track.album.name}
                        </a>
                        <img 
                                src={link}
                                className="w-4 h-4 ml-1" 
                        />
                    </span>
                </div>

                <hr className="mb-5"/>

                {!track.preview_url ? <span></span> : 
                    <div className="flex justify-center mb-5">
                        <audio className="relative z-0" src={track.preview_url} controls />
                    </div>
                }
                <div className="flex justify-end">
                    <span className="text-md font-bold pt-2">Rate</span> 
                    <Thumbs 
                        valence={props.predicted_valence}
                        arousal={props.predicted_arousal}
                        track_id={track.id}
                    />
                </div>
            </a>
        </div>
    )

};


RecommendedTrack.propTypes = {
    access_token: PropTypes.string.isRequired,
    track_id: PropTypes.string.isRequired,
}

export default RecommendedTrack