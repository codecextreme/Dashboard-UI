import React, { useEffect } from 'react';
import { getToken, onMessage } from "firebase/messaging";
import {messaging} from '../../firebase'

function Notification() {
  useEffect(() => {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        getToken(messaging, {
          vapidKey: "BEcSMxulh5K2ysR-61OuEpC0fWmelH-aFilqQOFp75Go3heKVqs4CIviKxGCI0NzeLo5tbJDGYX-oehyhXrmJz8", // Get this from Firebase Console > Project Settings > Cloud Messaging
        }).then((token) => {
          console.log("FCM Token:", token);
          // Send token to your backend
        });
      }
    });

    onMessage(messaging, (payload) => {
      console.log("Message received in foreground: ", payload);
      alert(payload.notification.title + ": " + payload.notification.body);
    });
  }, []);

  return <h2>Push Notifications Enabled</h2>;
}

export default Notification;
