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
  endpoint: ".....",
  keys: {
    auth: ".....",
    p256dh: ".....",
  },
};

webpush.sendNotification(pushSubscription, "Your Push Payload Text");
