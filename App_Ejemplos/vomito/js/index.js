var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.globalAlpha = 0.5;
var circles = [];

for(var i = 0; i<200; i++) {
  addCircle(i*10, [15,12], '#e6101c');
  addCircle(i*10, [27,12], '#e6621c');
  addCircle(i*10, [39,7], '#ffd900');
  addCircle(i*10, [46,12], '#3f9837');
  addCircle(i*10, [58,12], '#0064b2');
  addCircle(i*10, [70,12], '#462f89');
}

function addCircle(delay, range, color) {
  setTimeout(function() {
    var c = new Circle(range[0]+Math.random()*range[1], Math.random()*4, color, {x: -0.15+Math.random()*0.3, y: 1+Math.random()*1}, range);  
  circles.push(c);
  },delay);
}

function Circle(x,y,c,v,range) {
  var _this = this;
  this.x = x;
  this.y = y;
  this.color = c;
  this.v = v;
  this.range = range;
  
  this.update = function() {
    if(_this.y > 170) {
      _this.y = Math.random()*4;
      _this.x = _this.range[0]+Math.random()*_this.range[1];
    }
		_this.y += _this.v.y;
     _this.x += _this.v.x;
     ctx.beginPath();
		ctx.arc(_this.x, _this.y, 4, 0, 2 * Math.PI, false);
		ctx.fillStyle = _this.color;
		ctx.fill();
	};
}

function animate() {
  ctx.clearRect(0,0,100,160);
  for(var i in circles) {
    circles[i].update();
  }
  requestAnimationFrame(animate);
}

animate();