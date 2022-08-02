import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import Webcam from "react-webcam";
import axios from "axios";
import PropTypes from "prop-types";
import phrases from "../constants/phrases";


const videoConstraints = {
  width: 500,
  height: 500,
  screenshotQuality: 1,
  facingMode: "user"
};

const WebcamCapture = (props) => {
  const webcamRef = React.useRef(null);
  const [image, setImage] = React.useState('');
  
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot({width: 1920, height: 1920});
      setImage(imageSrc)
      props.handleCapturedImg(imageSrc)
      
      //send base64 image to flask
      axios.post("https://eaai23-spotify-chw35hhwvq-uc.a.run.app/webcam_capture", { imageSrc: imageSrc }).then((response) => {
        console.log(response)
      }).catch((err) => {
        console.log(err)
      })
    },
    [webcamRef]
  );
  
  return (
    <Container className="mt-20 mx-10">
      <h1 className="text-2xl font-bold text-center sm:text-3xl pt-5">{phrases.CAPTURE_TITLE}</h1>

      <p className="max-w-md mx-auto mt-4 text-center text-gray-500 pb-5">
          {phrases.CAPTURE_SUBTITLE}
      </p>

      <Row className="flex justify-center">
        <Col className="w-[500px] h-[500px]">
        {image !== '' ? 
          <img 
            src={image}
            alt="Preview image captured"
            className="rounded-md shadow-2xl"
          /> :
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints} 
            className="rounded-md shadow-2xl"
          />
        }
        </Col>
      </Row>
      
      {image !== '' ?
      <div className="justify-center text-center">
        <Row className="m-8"> 
            <Button onClick={(e) => {
                e.preventDefault();
                setImage('');
              }}
              className="px-5 py-2.5 text-md font-medium text-white bg-gray-800 rounded-md"
            >
              {phrases.BUTTON_RETAKE}
            </Button>
        </Row>
        <Row className="m-8">
            <Button 
              href="/result"
              className="px-5 py-2.5 text-md font-medium text-white bg-teal-600 rounded-md shadow"
            >
              {phrases.BUTTON_PREDICT}
            </Button>
        </Row>
      </div> : 
      <Row className="flex justify-center m-8">
        <Col>
          <Button 
            onClick={(e) => {
              e.preventDefault();
              capture();
            }}
            className="px-5 py-2.5 text-md font-medium text-white bg-teal-600 rounded-md shadow"
          >
            {phrases.BUTTON_CAPTURE}
          </Button>
        </Col>
      </Row>}
  
    </Container>
  );
};


WebcamCapture.propTypes = {
  handleCapturedImg: PropTypes.func.isRequired,
}

export default WebcamCapture;