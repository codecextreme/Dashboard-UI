import React, { useState } from "react";
import "./SignUp.css";
import background from "../../../src/assets/Media/Images/background.png";
import Navbar from "../../components/Navbar/Navbar";
import facebook from "../../../src/assets/Media/Icons/facebook.png";
import apple from "../../../src/assets/Media/Icons/apple.png";
import google from "../../../src/assets/Media/Icons/google.png";
import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router-dom";

// 🔥 Firebase Auth & Firestore
import { auth, db } from "../../../firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✨ Google Sign-Up Handler
  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // ✅ Check if user already exists in Firestore
      const userRef = doc(db, "Users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          name: user.displayName || "",
          email: user.email,
          id: user.uid,
        });
      }

      navigate("/dashboard");
    } catch (error) {
      console.error("Google Sign-Up error:", error.message);
      alert(error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "Users", user.uid), {
        name: name,
        email: user.email,
        id: user.uid,
      });

      alert("User registered and saved!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Signup error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="signup">
      <Navbar />
      <div className="signup-container">
        <div className="left-side">
          <img src={background} alt="background" className="img" />
          <div className="text-overlay">
            <p>INSPIRED BY THE FUTURE:</p>
            <h2>THE VISION UI DASHBOARD</h2>
          </div>
        </div>
        <div className="right-side">
          <div className="content1">
            <h2>Welcome!</h2>
            <p>Use these awesome forms to login or create new </p>
            <span>account in your project for free.</span>
          </div>

          <div className="signup-box">
            <h2>Register With</h2>
            <div className="icon3">
              <div className="icon-div">
                <img src={facebook} alt="" />
              </div>
              <div className="icon-div">
                <img src={apple} alt="" />
              </div>
              <div
                className="icon-div"
                onClick={handleGoogleSignUp}
                style={{ cursor: "pointer" }}
              >
                <img src={google} alt="Sign up with Google" />
              </div>
            </div>

            <h2 style={{ color: "rgba(160, 174, 192, 1)" }}>Or</h2>

            <p>Name</p>
            <input
              type="text"
              placeholder="Your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

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
              <Switch />
              <p>Remember me?</p>
            </div>

            <button onClick={handleSignUp}>SIGN UP</button>

            <div className="lastp">
              <p>Already have an account?</p>
              <span onClick={() => navigate("/")}>Sign in</span>
            </div>
          </div>

          <p className="para">
            @ 2021, Made with ❤️ by Simmmple & Creative Tim for a better web
          </p>
          <div className="end">
            <p>Marketplace</p>
            <p>Blog</p>
            <p>License</p>
          </div>
        </div>
      </div>
    </div>
  );
}
