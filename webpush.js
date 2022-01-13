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
    "https://fcm.googleapis.com/fcm/send/dU-Wqx9m9Bc:APA91bFb_ywRyYLpmOn3CirUNOKUeNiRqbSU3aMo8ZdRwfHO0yEU0dOx3l7uOEcaWgU-gaR97_qoJILXG7M7594_6Y1RUJI8CPplHkj8FQ8Jf-KBQ11QZHP3-KBeZstOo9uZrBw3QCOo",
  expirationTime: null,
  keys: {
    p256dh:
      "BIp66k4PrCLCHOzz6r30mbslWQV8yuZ3hAT--K7Ddz85G5wRqCQDqcMkwHlvrqa9GQdnRwjVIHKvXgH3Be-ubF0",
    auth: "NUOFyANR7HufMdvnR8XS5w",
  },
};

webpush.sendNotification(pushSubscription, "Your Push Payload Text");
