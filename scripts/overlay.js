let overlay = document.getElementById("overlay");
let o = overlay.getContext("2d");

let frameCountOverlay = 0;

const VELOCITY_Y = 2;
const X_LIMITER = 30;
const X_AMPLIFIER = 4;

overlay.width = window.innerWidth;
overlay.height = window.innerHeight;

let Snowflake = function(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    
    this.offset = Math.random()*Math.PI*2;
    
    this.displayX = this.x;
}

Snowflake.prototype.draw = function() {
    o.fillStyle = "white";
    
    o.beginPath();
    o.arc(this.displayX, this.y, this.radius, 0, Math.PI*2);
    o.fill();
    
}

Snowflake.prototype.update = function() {
    
    this.displayX = Math.sin(frameCountOverlay/X_LIMITER+this.offset)*X_AMPLIFIER+this.x;
    this.y+=VELOCITY_Y;
    
}

let snowflakes = [];

for (let i = 0 ; i < 100 ; i++) {
    snowflakes.push(new Snowflake(Math.random()*overlay.width, Math.random()*overlay.height, 3));
}

function initOverlay() {
    window.requestAnimationFrame(drawOverlay);
}
initOverlay();

function drawOverlay() {
    o.clearRect(0, 0, overlay.width, overlay.height);
    
    for (let i = 0 ; i < snowflakes.length ; i++) {
        snowflakes[i].draw();
        snowflakes[i].update();
        
        if (snowflakes[i].y > overlay.height+snowflakes[i].radius) {
            snowflakes.splice(i, 1);
            i--;
            snowflakes.push(new Snowflake(Math.random()*overlay.width, -10, 3));
        }
    }
    
    frameCountOverlay++;
    window.requestAnimationFrame(drawOverlay);
}
