import React from "react";
import {auth, provider, provider2} from '../firebase';
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import './login.css'
function Login({SetisAuth}){

    let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      SetisAuth(true);
      navigate("/");
    });
  };

    


    return( 
    
    <div className="main">
      <div className="leftSide">
        <p className="leftSideText">Sviluppa, chiedi e aiuta</p><br></br>
        <p className="textSlogan">Coltiva le connessioni intellettuali, iscriviti al nostro social network per universitari: dove il sapere si unisce, l'ispirazione fiorisce e le menti brillanti si incontrano!</p>
      </div>
      <div className="rightSide">
        <p>Comincia Subito</p>
          <button className="login-btn-google" onClick={signInWithGoogle}>< FaGoogle />Accedi con Google</button>
      </div>
    </div>
    
   )
}

export default Login;