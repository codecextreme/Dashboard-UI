import "./App.css";
import Dashboard from "./screens/Dashboard/Dashboard";
import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";
import Tables from "./screens/Tables/Tables";
import Billing from "./screens/Billing/Billing";
import Profile from "./screens/Profile/Profile";
import { useEffect } from "react";

import { onMessage } from "firebase/messaging";
import { messaging } from "./../firebase";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotificationHandler from "./components/NotificationHandler";

function App() {
  useEffect(() => {
    onMessage(messaging, (payload) => {
      console.log("Foreground message:", payload);
      alert(payload.notification.title + "\n" + payload.notification.body);
    });
  }, []);

  return (
    <Router>
      <NotificationHandler />

      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
