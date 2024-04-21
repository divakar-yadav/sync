import logo from './logo.svg';
import './App.css';
import LandingPage from './LandingPage'
import SignIn from './components/sign-in/SignIn';
import SignUp from './components/sign-up/SignUp'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard  from './components/dashboard/Dashboard'
import Profile from './components/Profile/Profile'
function App() {
  return (
    <div className="App">
      <Router>
    {/* <div className="App"> */}
<Routes>
<Route  path="/" element={<LandingPage/>}/>
<Route exact  path="/sign-in" element={<SignIn/>}/>
<Route exact  path="/sign-up" element={<SignUp/>}/>
<Route exact  path="/dashboard" element={<Dashboard/>}/>
<Route exact  path="/profile" element={<Profile/>}/>

</Routes>
    {/* </div> */}
  </Router>
    </div>
  );
}

export default App;
