import React, { useState, useEffect } from "react";
import "./Index.css";
import background from "../../../src/assets/Media/Images/background.png";
import Navbar from "../../components/Navbar/Navbar";
import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

// ✅ Firebase imports
import { auth, db } from "../../../firebase"; 
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    const savedPassword = localStorage.getItem("rememberedPassword");

    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword)
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
        localStorage.setItem("rememberedPassword", password);

      } else {
        localStorage.removeItem("rememberedEmail");
        localStorage.removeItem("rememberedPassword");

      }

      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error.message);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signinj">
      <Navbar />

      <div className="signin-containerj">
        <div className="left-sidej">
          <div className="text-overlayj1">
            <p>INSPIRED BY THE FUTURE:</p>
            <h2>THE VISION UI DASHBOARD</h2>
          </div>
        </div>
        <div className="right-sidej">
          <div className="contentj">
            <h2>Nice to see you!</h2>
            <p>Enter your email and password to sign in</p>
          </div>
          <div className="signin-boxj1">
            <p>Email</p>
            <input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>Password</p>
            <input
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="switch">
              <Switch
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <p>Remember me?</p>
            </div>
            <button onClick={handleLogin} disabled={loading}>
              {loading ? (
                <CircularProgress
                  size={18}
                  sx={{ color: "white", marginRight: "8px" }}
                />
              ) : (
                "SIGN IN"
              )}
            </button>

            <div className="lastpj1">
              <p>Don't have an account? </p>
              <span onClick={() => navigate("/signup")}>Sign up</span>
            </div>
          </div>
          <p className="paraj">
            @ 2021, Made with ❤️ by Simmmple & Creative Tim for a better web
          </p>
          <div className="endj1">
            <p>Marketplace</p>
            <p>Blog</p>
            <p>License</p>
          </div>
        </div>
      </div>
    </div>
  );
}
