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
    "https://fcm.googleapis.com/fcm/send/dE_tkILFD20:APA91bG_7Zd1hUmvDNh0O5jut7jYzkUvKCheD_nGbiHKCcbsODtvsTC71LalNCgCwYlGi1NGUoLlQBAqxd0xz1keWsc8dn2IIIxkOegdZ3KIPUrRtkQTbWnCQCPmteKHYRp6URhRgRVm",
  expirationTime: null,
  keys: {
    p256dh:
      "BOezgW7hkHevgrea2XECfpVgZWNnBOtXFYUFv5fWM_MoAK-yTE0kYx2gSMSrONSIZjEspdeyKOzIdth4FG7Yx_0",
    auth: "-uOmNLpoLKSegEVL-NFweg",
  },
};

webpush.sendNotification(pushSubscription, "Cycki Dupa");
