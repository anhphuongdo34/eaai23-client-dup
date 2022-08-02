import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Profile, Capture, Result, FutureFeature, About, Survey } from './pages';
import { GuestAuthorize, UserAuthorize } from './hooks';

export default function App() {
  const [access_token, setAccessToken] = React.useState(
    () => window.localStorage.getItem('access_token') || ""
  );

  const handleAccessToken = (token) => {
    setAccessToken(token)
  }

  React.useEffect(() => {
    window.localStorage.setItem('access_token', access_token);
  }, [access_token]);

  const [capturedImg, setCapturedImg] = React.useState(
    () => window.localStorage.getItem('capturedImg') || ""
  );

  const handleCapturedImg = (imageSrc) => {
    setCapturedImg(imageSrc)
  }

  React.useEffect(() => {
    window.localStorage.setItem('capturedImg', capturedImg);
  }, [capturedImg]);

  const [logInAsGuest, setLogInAsGuest] = React.useState(
    () => window.localStorage.getItem('logInAsGuest') || 'true'
  );

  const handleLogInAsGuest = (logInAsGuest) => {
    setLogInAsGuest(logInAsGuest)
  }

  React.useEffect(() => {
    window.localStorage.setItem('logInAsGuest', logInAsGuest);
  }, [logInAsGuest]);


  return (
    <Router>
        <Routes>
          <Route path="/" 
              element={<Home handleAccessToken={handleAccessToken} handleLogInAsGuest={handleLogInAsGuest}/>}/>
          <Route path="/callback"
              element={<UserAuthorize handleAccessToken={handleAccessToken} handleLogInAsGuest={handleLogInAsGuest}/>}/>
          <Route path="/guestAuthorize"
              element={<GuestAuthorize handleAccessToken={handleAccessToken} handleCapturedImg={handleCapturedImg} handleLogInAsGuest={handleLogInAsGuest}/>}/>
          <Route path="/profile"
              element={<Profile access_token={access_token} logInAsGuest={logInAsGuest}/>}/>
          <Route path="/capture"
              element={<Capture handleCapturedImg={handleCapturedImg}/>}/>
          <Route path="/result"
              element={<Result access_token={access_token} capturedImg={capturedImg}/>}/>
          <Route path="/futureFeature"
              element={<FutureFeature/>}/>
          <Route path="/about"
              element={<About/>}/>
          <Route path="/survey"
              element={<Survey/>}/>
      </Routes>
    </Router>
  )

}
