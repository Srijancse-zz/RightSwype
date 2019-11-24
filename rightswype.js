// Basically, what it does is, selects the right swipe button class name, and keeps clicking
setInterval(function() {
  const swype  = document.querySelector(".recsGamepad__button[aria-label=Like]");
  swype.click();
}, 1000)
