var circles = document.getElementsByClassName('circle');

var addListener = function(circle, i) {
 circle.addEventListener('animationend', 
  function() {
    console.log('done ');
    //circles[i].style.zIndex = '1';
  }, false);
}

for(i = 0; i < circles.length - 1; i++) {
 addListener(circles[i], i);
}