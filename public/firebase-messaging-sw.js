// public/firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyA0btAIaDUcZEHoNq6roAJUu5MzW8Qdbxw",
  authDomain: "vision-ui-73b05.firebaseapp.com",
  projectId: "vision-ui-73b05",
  storageBucket: "vision-ui-73b05.firebasestorage.app",
  messagingSenderId: "999954340452",
  appId: "1:999954340452:web:dee98b2fee0b18bef81d71",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
