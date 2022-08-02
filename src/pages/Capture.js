import React from "react"
import { NavBar } from "../components"
import { WebcamCapture } from '../compounds'
import phrases from "../constants/phrases";


const Capture = (props) => {
    return (
        <div>
            <NavBar active={phrases.MENU_CAPTURE}/>
            <WebcamCapture handleCapturedImg={props.handleCapturedImg}/>
        </div>
    )
};

export default Capture