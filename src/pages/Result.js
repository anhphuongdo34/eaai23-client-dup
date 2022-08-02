import { React, useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { EmotionResult, RecommendedTrack, EmotionGraph, EmptyContent } from "../compounds"
import axios from "axios"
import { NavBar, SurveyReminder } from "../components"
import phrases from "../constants/phrases"


const Result = (props) => {
    const [track_ids, setTrackIds] = useState([]);
    const [valence, setValence] = useState(0);
    const [arousal, setArousal] = useState(0);
    const [emotion, setEmotion] = useState(0);
    const [graphB64, setGraphB64] = useState(null);

    const [showGraph, setShowGraph] = useState(false);
    const [resultReady, setResultReady] = useState(false);
    const [hasError, setHasError] = useState(false);
    
    useEffect(() => {
        axios.get("https://eaai23-spotify-chw35hhwvq-uc.a.run.app/recommend_song").then((response) => {
                console.log(response)
                setTrackIds(response.data.track_ids)
                setEmotion(response.data.emotion)
                setValence(response.data.valence)
                setArousal(response.data.arousal)
                setGraphB64(response.data.plot)
                setShowGraph(true)
                setResultReady(true)
            }).catch((err) => {
                setHasError(true)
                console.log("error retrieving song recommendation", err)
            })
    }, []);

    const openGraph = () => {
        setShowGraph(true);
    }

    const hideGraph = () => {
        setShowGraph(false)
    }
    

    return (
        <div>
            <NavBar active={phrases.MENU_CAPTURE}/>
            {resultReady ? 
                (hasError ? 
                    <EmptyContent
                        contentType={phrases.ERROR}
                        title={`${phrases.ERROR}_TITLE`}
                        subtitle={`${phrases.ERROR}_SUBTITLE`}
                        body={`${phrases.ERROR}_BODY`}
                    /> :
                    <>
                        <Container className="justify-center text-center py-10 " >
                            <Row className="flex justify-center text-left">
                                <Col className="pl-3 mx-20">
                                    <EmotionResult
                                        user_image={props.capturedImg}
                                        predicted_emotion={emotion}
                                        predicted_valence={valence}
                                        predicted_arousal={arousal}
                                        openGraph={openGraph}
                                    />
                                </Col>
                            </Row>
                                    <section className="">
                                        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                                            <div className="max-w-lg mx-auto text-center">
                                                <h2 className="text-3xl font-bold sm:text-4xl">{phrases.RESULT_TRACKS}</h2>

                                                <p className="mt-4">
                                                    {phrases.RESULT_PROMPT}
                                                </p>
                                            </div>
                                            {track_ids.map((track_id) => 
                                                <RecommendedTrack 
                                                    key={track_id} 
                                                    access_token={props.access_token}
                                                    track_id={track_id}
                                                    predicted_valence={valence}
                                                    predicted_arousal={arousal}  
                                                />
                                            )}
                                        </div>
                                    </section>
                        </Container>
                        <SurveyReminder/>
                        <EmotionGraph 
                            hideGraph={hideGraph} 
                            showGraph={showGraph}
                            graphB64={graphB64}
                        />
                    </>
                ) : 
                <EmptyContent
                    contentType={phrases.LOADING}
                    title={`${phrases.LOADING}_TITLE`}
                    subtitle={`${phrases.LOADING}_SUBTITLE`}
                    body={`${phrases.LOADING}_BODY`}
                />
            }
        </div>
    )
}

export default Result;