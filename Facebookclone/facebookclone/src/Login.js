import React from 'react'
import "./Login.css"
import Divider from '@material-ui/core/Divider';
import Footer from "./Footer"
import { auth , provider} from "./firebase";
import { Button } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';


function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        //connexion
        auth.signInWithPopup(provider)
        .then((result) => {
          
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        
        }).catch((error) => alert(error.message))
    };
    
    return (
        <div className="login">

            <div className="login__body">
                <div className="login__left">
                    <img  src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt=""/>
                    <p>Facebook helps you connect and share <br/> with the people in your life.</p>
                </div>

                <div className="login__right">
                    <div className="login__form">
                        <input 
                            placeholder="Adresse e-mail ou numéro de tél"
                            className="login__imput"
                        />
                        <input 
                            placeholder="Mot de passe"
                            className="login__imput"
                        />
                        <button className="login__submit" >
                            Connexion 
                        </button>
                        
                    </div>

                        <p className="login__PasswordForget"><a href="#">Mot de passe oublié ? </a></p>

                        <Divider variant="middle" />

                        <button className="login__submit_google">
                            Créer un compte
                        </button>

                        <p className="text__infos"><span className="text__bold">Créer une Page</span> pour une célébrité, un groupe ou une entreprise. <br/>
                        <Button className="login__submit" type="submit" onClick={signIn}>
                            Connexion avec google
                        </Button></p>
                </div>
            </div> 

            < Footer/>

        </div>
    )
}

export default Login
