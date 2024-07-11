window.onload = function () {
    var img = document.getElementById("pop1");
    var count = document.getElementById("score");
    var score = 0;
    var audio = new Audio("pop.wav");
  
    // Function to increase score and update display
    function inc() {
      score++;
      count.innerHTML = score;
    }
  
    // Function to change the image to the pressed state
    function press() {
      inc();
      img.src = "popcat2.png";
    }
  
    // Function to change the image to the default state and play audio
    function release() {
      img.src = "popcat1.png";
      audio.play();
    }
  
    // Mouse events
    img.addEventListener("mousedown", press);
    img.addEventListener("mouseup", release);
  
    // Touch events
    img.addEventListener("touchstart", function (e) {
      e.preventDefault(); // Prevent default touch behavior
      press();
    });
    img.addEventListener("touchend", function (e) {
      e.preventDefault(); // Prevent default touch behavior
      release();
    });
  };
