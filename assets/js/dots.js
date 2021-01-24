$(document).ready(function () {
  /*


Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. */

  let resizeReset = function () {
    w = canvasBody.width = window.innerWidth;

    h = canvasBody.height = window.innerHeight * 0.5;
  };

  const opts = {
    particleColor: 'rgb(180,180,180)',
    lineColor: 'rgb(80, 83, 97)',
    particleAmount: 50,
    defaultSpeed: 0.2,
    variantSpeed: 1,
    defaultRadius: 2,
    variantRadius: 0.5,
    linkRadius: 150,
  };

  window.addEventListener('resize', function () {
    deBouncer();
  });

  let deBouncer = function () {
    clearTimeout(tid);
    tid = setTimeout(function () {
      resizeReset();
    }, delay);
  };

  let checkDistance = function (x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  let linkPoints = function (point1, hubs) {
    for (let i = 0; i < hubs.length; i++) {
      let distance = checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
      let opacity = 1 - distance / opts.linkRadius;
      if (opacity > 0) {
        drawArea.lineWidth = 0.5;
        drawArea.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
        drawArea.beginPath();
        drawArea.moveTo(point1.x, point1.y);
        drawArea.lineTo(hubs[i].x, hubs[i].y);
        drawArea.closePath();
        drawArea.stroke();
      }
    }
  };

  Particle = function (xPos, yPos) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed;
    this.directionAngle = Math.floor(Math.random() * 360);
    this.color = opts.particleColor;
    this.radius = opts.defaultRadius + Math.random() * opts.variantRadius;
    this.vector = {
      x: Math.cos(this.directionAngle) * this.speed,
      y: Math.sin(this.directionAngle) * this.speed,
    };
    this.update = function () {
      this.border();
      this.x += this.vector.x;
      this.y += this.vector.y;
    };
    this.border = function () {
      if (this.x >= w || this.x <= 0) {
        this.vector.x *= -1;
      }
      if (this.y >= h || this.y <= 0) {
        this.vector.y *= -1;
      }
      if (this.x > w) this.x = w;
      if (this.y > h) this.y = h;
      if (this.x < 0) this.x = 0;
      if (this.y < 0) this.y = 0;
    };
    this.draw = function () {
      drawArea.beginPath();
      drawArea.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      drawArea.closePath();
      drawArea.fillStyle = this.color;
      drawArea.fill();
    };
  };

  function setup() {
    particles = [];
    resizeReset();
    for (let i = 0; i < opts.particleAmount; i++) {
      particles.push(new Particle());
    }
    window.requestAnimationFrame(loop);
  }

  function loop() {
    window.requestAnimationFrame(loop);
    drawArea.clearRect(0, 0, w, h);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    for (let i = 0; i < particles.length; i++) {
      linkPoints(particles[i], particles);
    }
  }

  const canvasBody = document.getElementById('canvas'),
    drawArea = canvasBody.getContext('2d');
  let delay = 200,
    tid,
    rgb = opts.lineColor.match(/\d+/g);
  resizeReset();
  setup();
});
