// Basically, what it does is, selects the right swipe button class name, and keeps clicking

func = setInterval(function() {
 var swype  = document.getElementsByClassName("recsGamepad__button--like")
  swype[0].click()
}, 1000)
