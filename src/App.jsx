import './App.css';
import Dashboard from './screens/Dashboard/Dashboard';
import Profile from './screens/Profile/Profile';
import SignIn from './screens/SignIn/SignIn';
import SignUp from './screens/SignUp/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tables from './screens/Tables/Tables';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/tables" element={<Tables/>} />

      </Routes>
    </Router>
  );
}

export default App;
