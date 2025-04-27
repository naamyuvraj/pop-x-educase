import './App.css'
import { Routes, Route } from "react-router-dom";
import LandingPage from './components/landingpage';
import Login from './components/login';
import Profile from './components/profile';
import CreateAccount from './components/createaccount';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

    </>
  )
}

export default App
