import AppCards from './dashboard/AppCards';
import Navbar from './dashboard/Navbar';
import Sidebar from './dashboard/Sidebar';
import Assets from './components/asset/Assets'
import Analytics from './components/Analytics'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Verification from './components/verification/Verification';
import Offboard from './components/offboard/Offboard';
import Onboard from './components/onboard/Onboard';
import About from './components/About';
import ScheduleOffboard from './pages/ScheduleOffboard'
import UserOffboard from './pages/UserOffboard'
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { useHistory } from "react-router-dom"
// import Login from  "./components/login/Login"
let SCOPES = 'openid profile email'

console.log(process.env.REACT_APP_OKTA_ISSUER)
console.log(process.env.CLIENTID)
const config = {
  issuer: process.env.REACT_APP_OKTA_ISSUER,
  clientId: process.env.REACT_APP_CLIENTID,
  redirectUri: window.location.origin + '/login/callback',
  scopes: SCOPES.split(/\s+/),
};

const oktaAuth = new OktaAuth(config);

function App() {
  const history = useHistory();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || "/", window.location.origin)
    )
  };

  return (
    <div className="App">
      <div id="wrapper"  >
        <>
          <Security restoreOriginalUri={restoreOriginalUri} oktaAuth={oktaAuth}>
            <Sidebar />
            <Navbar />
            <SecureRoute exact path="/" component={AppCards} />
            <SecureRoute exact path="/asset-automation" component={Assets} />
            <SecureRoute exact path="/user-offboard" component={Offboard} />
            <SecureRoute exact path="/user-onboard" component={Onboard} />
            <SecureRoute exact path="/verification-codes" component={Verification} />
            <SecureRoute exact path="/offboard/:id" component={UserOffboard} />
            <SecureRoute exact path="/schedule/:id" component={ScheduleOffboard} />
            <SecureRoute exact path="/analytics" component={Analytics} />
            <Route path="/login/callback" component={LoginCallback} />
            <SecureRoute exact path="/about" component={About} />
          </Security>

        </>


      </div>
    </div>
  );
}


export default App;
