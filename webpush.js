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
    "https://fcm.googleapis.com/fcm/send/f6m1mG6J89w:APA91bFwWFgjM2L5aDjy0NSAKLlV6sPejFYtWk7jmdMqpgaq4dd4wxFzic_eXR3BnEAWUVWYgnj-t53YfRh9DCbRvK5FK8R762pEw0AJiAmOPTCSgfHvolR1GjtpNO6CN7m_5adHK4rG",
  expirationTime: null,
  keys: {
    p256dh:
      "BNc-HI2BPnngkGQwSVu02-2F6BfG2Tn4geWuQL87-sKJmxZVMfAv29aySGBdJ9t4Viwlhn1zBMo9WDr3JVpHhe8",
    auth: "3sLjjQgQFVwqRjGUdqqc1g",
  },
};

webpush.sendNotification(pushSubscription, "Your Push Payload Text");
