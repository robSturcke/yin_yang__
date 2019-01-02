function circle(x, y, radius, color) {
  context.fillStyle = color;
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI);
  context.fill();
}

function animate() {
  let x1=canvas.width/2+80*Math.sin(counter/Math.PI/4);
  let y1=canvas.height/2+80*Math.cos(counter/Math.PI/4);
  let x2=canvas.width/2+80*Math.sin(counter/Math.PI/4+Math.PI);
  let y2=canvas.height/2+80*Math.cos(counter/Math.PI/4+Math.PI);

  let slider = 2 * Math.abs(128-counter%255);

  circle(x1,y1,80, 'rgb('+(255-slider)+',0,'+slider+')');
  circle(x2,y2,80, 'rgb('+slider+',0,'+(255-slider)+')');
  circle(x1,y1,10, 'rgb('+slider+',0,'+(255-slider)+')');
  circle(x2,y2,10, 'rgb('+(255-slider)+',0,'+slider+')');
  counter++;
  window.requestAnimationFrame(animate);
}

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let counter = 0;

window.requestAnimationFrame(animate);
