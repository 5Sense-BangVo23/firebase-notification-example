// importScripts('https://www.gstatic.com/firebasejs/10.2.0/firebase-app-compat.js');
// importScripts('https://www.gstatic.com/firebasejs/10.2.0/firebase-messaging-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.2.0/firebase-messaging-compat.js');
// importScripts('/__/firebase/10.2.0/firebase-app-compat.js');
// importScripts('/__/firebase/10.2.0/firebase-messaging-compat.js');
// importScripts('/__/firebase/init.js');

var firebaseConfig = {
    apiKey: "AIzaSyDyryAYPpletpWH-qdD02GHFVu8r_VOpDY",
    authDomain: "push-notification-5sense.firebaseapp.com",
    projectId: "push-notification-5sense",
    storageBucket: "push-notification-5sense.appspot.com",
    messagingSenderId: "588468879732",
    appId: "1:588468879732:web:c379a24a70b86525b1ac21",
    measurementId: "G-5EBTZ7JEY4"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = '<h1 style="text-align:center; color: red;">Background Message Title</h1>';
    const notificationOptions = {
      body: 
            " <div style='height: 60px; widtd: 135px; background: lightblue;'> Content text </div>",
      icon: '/firebase-logo.png',
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });






//   messaging.setBackgroundMessageHandler(function (payload) {
//     console.log('setBackgroundMessageHandler background message ', payload);

//     const promiseChain = clients
//        .matchAll({
//            type: "window",
//            includeUncontrolled: true
//        })
//       .then(windowClients => {
//            for (let i = 0; i < windowClients.length; i++) {
//               const windowClient = windowClients[i];
//               windowClient.postMessage(payload);
//            }
//       })
//       .then(() => {
//            return self.registration.showNotification("my notification title");
//        });
//       return promiseChain;
//   });