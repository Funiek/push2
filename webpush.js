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
    "https://fcm.googleapis.com/fcm/send/cntV7aVST6I:APA91bGp8lN4IvWRwAGEAqS4CuWXl6a0caSbA4sG23TjYxFJBWXiOJhBczh56PR8M2jfROINz1Zbl1pyXw_ubymfUClv6k6wzwynrDoYwImmbVVYd1jCFnnG2sSScCvPjSsNxP-zpO5g",
  expirationTime: null,
  keys: {
    p256dh:
      "BDcQ3RT3HuobJjgLpq3DXtVM9SuoLh_5PHEZexihqp0wYO3Xg031-9zB-DpiSKTjguEdiEHO3UPMxkYN9U62mPw",
    auth: "npdkNuFyZvLhADw5nEFgDw",
  },
};

webpush.sendNotification(pushSubscription, "Your Push Payload Text");
