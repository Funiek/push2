self.addEventListener('push', function(e) {
  var options = {
    body: 'Nowe produkty od GAIA',
    icon: 'img/icon.jpg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions: [
      {action: 'explore', title: 'Nowe produkty od GAIA',
        icon: 'images/checkmark.png'},
    ]
  };
  e.waitUntil(
    self.registration.showNotification('GAIA', options)
  );
});