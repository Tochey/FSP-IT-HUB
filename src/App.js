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
let SCOPES = 'openid profile email'


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
    <Security restoreOriginalUri={restoreOriginalUri} oktaAuth={oktaAuth}>
    <div className="App">
        <div id="wrapper"  >
          <>
            <Sidebar /> 
            <Navbar />
            <Route path="/login/callback" component={LoginCallback} />
            <SecureRoute exact={true} path="/schedule/:id" component={ScheduleOffboard} /> 
            <SecureRoute exact={true} path="/" component={AppCards} />
            <SecureRoute exact={true} path="/asset-automation" component={Assets} />
            <SecureRoute exact={true} path="/user-onboard" component={Onboard} />
            <SecureRoute exact={true} path="/verification-codes" component={Verification} />
            <SecureRoute exact={true} path="/analytics" component={Analytics} />
            <SecureRoute exact={true} path="/about" component={About} /> 
            <SecureRoute exact={true} path="/offboard/:id" component={UserOffboard} />
            <SecureRoute exact={true} path="/user-offboard" component={Offboard} />
            {/* component={LoginCallback}   */}
          </>
        </div>
      </div>
    </Security>
  );
}


{/* <Route path="/" exact={true} component={Login} /> */}
export default App;
