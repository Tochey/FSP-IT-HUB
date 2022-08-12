import AppCards from './dashboard/AppCards';
import Navbar from './dashboard/Navbar';
import Sidebar from './dashboard/Sidebar';
import Assets from './components/asset/Assets'
import Analytics from './components/Analytics'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Verification from './components/verification/Verification';
import Offboard from './components/offboard/Offboard';
import Onboard from './components/onboard/Onboard';
import About from './components/About';
import ScheduleOffboard from './pages/ScheduleOffboard'
import UserOffboard from './pages/UserOffboard'


function App() {
  return (
    <div className="App">
      <div id="wrapper"  >
        <>
          <Router >
            <Sidebar />
            <Navbar />
            <Routes>
              <Route exact path="/" element={<AppCards />} />
              <Route exact path="/asset-automation" element={<Assets />} />
              <Route exact path="/user-offboard" element={<Offboard />} />
              <Route exact path="/user-onboard" element={<Onboard />} />
              <Route exact path="/verification-codes" element={<Verification />} />
              <Route exact path="/offboard/:id" element={<UserOffboard />} />
              <Route exact path="/schedule/:id" element={<ScheduleOffboard />} />
              <Route exact path="/analytics" element={<Analytics />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </Router>
        </>


      </div>
    </div>
  );
}

export default App;
