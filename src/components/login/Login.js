import React, {useEffect} from "react";
import { useOktaAuth } from "@okta/okta-react";
import { useHistory } from "react-router-dom";
import './login.css'

const Login = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const history = useHistory()

    //   if(authState?.isAuthenticated) {
    //     return history.push('/dashboard')
    // }

// useEffect(() => {
//     if(authState?.isAuthenticated) {
//         return history.push('/dashboard')
//     }
// }, [])

  const loginWithRedirect = () => oktaAuth.signInWithRedirect({ originalUri: "/dashboard" });

  const logOut = () => oktaAuth.signOut();


  const buttonText = authState?.isAuthenticated ? "Logout" : "Login";
  const btnLogic = authState?.isAuthenticated ? logOut : loginWithRedirect;
  
    if(authState?.isAuthenticated) return null

  return (

        <div className="Container">
            <div className="modal2">
                <div className="header">
                  <img src="https://ok7static.oktacdn.com/fs/bco/1/fs0lpaqyuGwmQWvC8356" alt ="" className="logo"/>

                </div>
                <div className="body">
                    <p> FSP IT HUB</p>
                </div>
                <div className="logindiv">
                <button className ="loginbtn" onClick={btnLogic}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login ;


