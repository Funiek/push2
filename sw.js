self.addEventListener('push', function(e) {
  var options = {
    body: 'Nowe produkty od GAIA',
    icon: 'images/icon.jpg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions: [
      {action: 'explore', title: 'Sprawdź',
        icon: 'images/checkmark.png'},
    ]
  };
  e.waitUntil(
    self.registration.showNotification('GAIA', options)
  );
});