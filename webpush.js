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
    "https://fcm.googleapis.com/fcm/send/fLcb8yqzoEQ:APA91bHkfW-Qxw-k9NkZ_1PnuYvNDNquN1N_ApfWMEl-LZZSHasF4FU8tTHc3P1om1v7WbHKvDiSUjeEhCir3ky-uG6l92Dp_yqOY0ZBaDiZsn7qMY4wEsFgzvGO2xTK53e9PwaZNeJp",
  expirationTime: null,
  keys: {
    p256dh:
      "BNvROs8su3ZgX0MevHcPMwX-ET2w6hqkOttm8XD26dXt4D7ZwEfEoEOny812zex-INUnwWbhlbfLpZrRkNVsmEo",
    auth: "qzYBXNPTJScgQDy-KLoPcw",
  },
};

webpush.sendNotification(pushSubscription, "GAIA");
