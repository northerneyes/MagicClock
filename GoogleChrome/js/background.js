chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('popup.html', {
    'width': 1920,
    'height': 1080
  });
});