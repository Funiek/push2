const webpush = require("web-push");

// let vapidKeys = webpush.generateVAPIDKeys();
// console.log(vapidKeys);

const vapidKeys = {
  publicKey:
    "BMGhTvZMnp2MIdajNZ6zsqTv7r6s27h3GhgFFYP4HvEuMLbBWkmPBbonNjXYK4ayv6gsOK3Jz3Y14jGCK9JsDlc",
  privateKey: "2NrDZrqazu8LweNto8PGLn_TyKDL8hWGiG-9L_4GTm0",
};

webpush.setVapidDetails(
  "mailto:funkowski.krzysztof@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

const pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/cF4S2GAPCpE:APA91bHV2ndAla2KUDibgFuVU_5QOZQotX8JrdU7rMdoZpvPTpudfQraicXCBRpWNI-Ooap7NFI9gHfSkYafZT4usjt3_rygqS9cog9u1yElHiGwog85x6G-VZXUonk-PJhrqvEWbZv4",
  expirationTime: null,
  keys: {
    p256dh:
      "BCUbmtacPv3b1NhNIIgxe2QDUOV8KKBP90NtZ2GEKNtZl4QgYzIW4N-FOmkqzzPiDee2VW6Y9q2xDRbKlGMlpaA",
    auth: "pEzUJCdbXHW8-KaIPlMFsg",
  },
};

webpush.sendNotification(pushSubscription, "GAIA");
