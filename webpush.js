const webpush = require("web-push");

// let vapidKeys = webpush.generateVAPIDKeys();
// console.log(vapidKeys);

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    "BBqRzfqF_x2LxB-23TfyXjrFjQvgVoYJikJ6RZ5TSQQjFGkwric_gRPJNdMoID0f0x_Ypg4NzziuzgZNk9v-HhY",
  privateKey: "kYquKwcMajqi3XUPclaCZZYdUkIq-aRl4TQzAlnSrco",
};

webpush.setVapidDetails(
  "mailto:funkowski.krzysztof@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/csGxFMohTgE:APA91bGFUWT7Th7i207wIjVvte_BbTIk751UCXqR9SV137-jbLhNU6R5_Rahf3or6GXgsdoHKN-NazywT6fCYo5K6QmwIX4Fsg6lAQeAZpSA8t-Tf0SLWJWADOpQeytL7svid-vGv9Av",
  expirationTime: null,
  keys: {
    p256dh:
      "BIpHf1TlotzrF0G5vaim7A79QNm9vy0msGkQvl18FWvJuAlw9_OTYzGpONvjTEuF_PeZu1GXRSHZ6PqxYySVB1A",
    auth: "oW6KH32ualGOrdMdrS0DvA",
  },
};

webpush.sendNotification(pushSubscription, "Your Push Payload Text");
