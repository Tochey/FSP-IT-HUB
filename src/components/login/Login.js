import React from "react";
import { useOktaAuth } from "@okta/okta-react";

const Login = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const loginWithRedirect = () =>
    oktaAuth.signInWithRedirect({ originalUri: "/" });
  const logOut = () => oktaAuth.signOut();

  const buttonText = authState.isAuthenticated ? "Logout" : "Login";
  const btnLogic = authState.isAuthenticated ? logOut : loginWithRedirect;

  return (
    <>
      <div><h1>Okta React</h1></div>
      <button onClick={btnLogic}>{buttonText}</button>
    </>
  );
}

export default Login ;


