import './App.css';
import Dashboard from './screens/Dashboard/Dashboard';
import SignIn from './screens/SignIn/SignIn';
import SignUp from './screens/SignUp/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tables from './screens/Tables/Tables';
import Billing from './screens/Billing/Billing';
import Profile from './screens/Profile/Profile';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/tables" element={<Tables/>} />
        <Route path='/billing' element={<Billing/>} />
        <Route path='/profile' element={<Profile/>} />




      </Routes>
    </Router>
  );
}

export default App;
