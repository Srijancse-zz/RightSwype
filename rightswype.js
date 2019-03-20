// Step 1: Copy and paste this line into the Console and hit Enter
// tldr; using jquery, we're selecting the like button
var swype  = $("[aria-label='Like']");

// Step 2: Copy and paste this line into the Console and hit Enter
// tldr; using click(), we click the button--750 is the time (in ms) between swipes -- feel free to adjust this
func = setInterval(function() { swype.click() }, 750)
