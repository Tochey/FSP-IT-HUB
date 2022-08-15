import React from "react";
import { useOktaAuth } from "@okta/okta-react";
// import './login.css'

const Login = () => {
  // const { authState, oktaAuth } = useOktaAuth();
  // const loginWithRedirect = () =>
  // console.log("notauthfdnlsanfldjk")
  //   oktaAuth.signInWithRedirect({ originalUri: "/" });
  // const logOut = () => oktaAuth.signOut();

  // const buttonText = authState.isAuthenticated ? "Logout" : "Login";
  // const btnLogic = authState.isAuthenticated ? logOut : loginWithRedirect;

  return (
    <div className="info-container">
        <div className="brand-logo">
        {/* <img src={logo} alt={"d"}/> */}
        </div>
        <div className="text-field">
            <h1>AssetSloth</h1>
            <h3> - Asset Automation Software </h3>
        </div>
        <div className="logindiv">
            <a >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
             cscs
            </a>
        </div>

    </div>
);
}

export default Login ;


