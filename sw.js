self.addEventListener('push', function(e) {
  var options = {
    body: 'Gorące mamuśki w twojej okolicy!',
    icon: 'images/example.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions: [
      {action: 'explore', title: 'Kasia wróć do mnie',
        icon: 'images/checkmark.png'},
      {action: 'close', title: 'Małe stopy',
        icon: 'images/xmark.png'},
    ]
  };
  e.waitUntil(
    self.registration.showNotification('Cycki Dupa!', options)
  );
});