// src/components/NotificationHandler.jsx
import { useEffect } from "react";
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "../../firebase";

const NotificationHandler = () => {
  useEffect(() => {
    if ("Notification" in window && Notification.requestPermission) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          getToken(messaging, {
            vapidKey:
              "BEcSMxulh5K2ysR-61OuEpC0fWmelH-aFilqQOFp75Go3heKVqs4CIviKxGCI0NzeLo5tbJDGYX-oehyhXrmJz8",
          })
            .then((token) => {
              console.log("✅ FCM Token:", token);
              // Optionally send token to backend
            })
            .catch((err) => {
              console.error("❌ Failed to get token", err);
            });
        } else {
          console.warn("🛑 Notification permission not granted");
        }
      });
    } else {
      console.warn("🚫 This browser does not support notifications.");
    }

    onMessage(messaging, (payload) => {
      console.log("📩 Foreground message:", payload);
      alert(`${payload?.notification?.title}\n${payload?.notification?.body}`);
    });
  }, []);

  return null;
};

export default NotificationHandler;
