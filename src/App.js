import logo from './logo.svg';
import { useEffect } from 'react';
import jwt_decode from "jwt-decode"
import './App.css';

function App() {

  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token:" + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject)
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "1097504830403-uujkl2ue0n6ok3tchisr66ll0pq02cge.apps.googleusercontent.com",
      Callback: handleCallbackResponse
    })
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme:"outline", size:"large"}
    );
  }, []);

  return (
    <div className="App">
      <div id="signInDiv"></div>
    </div>
  );
}

export default App;
