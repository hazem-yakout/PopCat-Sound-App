window.onload = function () {
  var img = document.getElementById("pop1");
  var count = document.getElementById("score");
  var score = 0;
  var audio = new Audio("pop.wav");
  img.addEventListener("mousedown", function () {
    inc();
    img.src = "popcat2.png";
  });
  img.addEventListener("mouseup", function () {
    img.src = "popcat1.png";
    audio.play();
  });

  function inc() {
    score++;
    count.innerHTML = score;
  }
};
