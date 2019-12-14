let canvas = document.getElementById("ctx");
let c = canvas.getContext("2d");
let frameCount = 0;
let mouse = {
    x: 0,
    y: 0,
    click: false
};

let gameStates = {
    MENU: "menu",
    GAME: "game"
};

let gameState = gameStates.GAME;

let imgs = [
        "https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2FdariusLeftEye.png?v=1574463768480",
        "https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2FdariusRightEye.png?v=1574463768787",
        "https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2FdariusNose.png?v=1574463768697",
        "https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2FdariusMouth.png?v=1574463768592",
        "https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2FdariusLeftEyebrow.png?v=1574463768564",
        "https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2FdariusRightEyebrow.png?v=1574463768904",
        "https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2FdariusDimple.png?v=1574463768349"
];

let BodyPart = function(x, y, rotation, url) {
    this.x = x;
    this.y = y;
    this.rotation = rotation;
    this.img = new Image();
    this.img.src = url;
    
    this.width = this.img.width;
    this.height = this.img.height;
}

BodyPart.prototype.draw = function() {
    
    c.save();
    c.rotate(this.rotation);
    c.drawImage(this.img, this.x, this.y);
    c.restore();
    
}

BodyPart.prototype.isHovered = function() {
    return (mouse.x > this.x && mouse.x < this.x+this.width && mouse.y > this.y && mouse.y < this.y+this.height) ? true : false;
}

BodyPart.prototype.update = function() {
    
    if (this.isHovered && mouse.click) {
        this.x = mouse.x-this.width/2;
        this.y = mouse.y-this.height/2;
    }
    
}

let Game = function() {
    this.darius = new Image();
    this.darius.src = "https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fdarius5.png?v=1574461203412";
    this.bodyParts = [
        new BodyPart(100, 218, 0, "https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2FdariusLeftEye.png?v=1574463768480"),
        new BodyPart(190, 215, 0, "https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2FdariusRightEye.png?v=1574463768787"),
        new BodyPart(130, 215, 0, "https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2FdariusNose.png?v=1574463768697"),
        new BodyPart(122, 302, 0, "https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2FdariusMouth.png?v=1574463768592"),
        new BodyPart(82, 200, 0, "https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2FdariusLeftEyebrow.png?v=1574463768564"),
        new BodyPart(185, 192, 0, "https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2FdariusRightEyebrow.png?v=1574463768904"),
        new BodyPart(95, 302, 0, "https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2FdariusDimple.png?v=1574463768349")
    ];
}

Game.prototype.run = function() {
    c.fillStyle = "white";
    c.fillRect(0, 0, 700, 500);
    
    c.drawImage(this.darius, 0, 60);
    
    let setMouse = false;
    let pointer = "default";
    for (let i = 0 ; i < this.bodyParts.length ; i++) {
        this.bodyParts[i].draw();
        if (this.bodyParts[i].isHovered()) {
        this.bodyParts[i].update();
            setMouse = true;
            pointer = (mouse.click) ? "grabbing" : "grab";
        }
    }
    if (setMouse) {
        document.body.style.cursor = pointer;
    }
    else {
        document.body.style.cursor = "default";
    }
    
}

let game = new Game();

function init() {
    window.requestAnimationFrame(draw);
}
init();

function draw() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    
    switch(gameState) {
        case gameStates.MENU:
            
            break;
        case gameStates.GAME:
            game.run();
            break;
    }
    
    frameCount++;
    window.requestAnimationFrame(draw);
}

canvas.addEventListener("mousemove", function(e) {
    mouse.x = e.offsetX/canvas.clientWidth*canvas.width;
    mouse.y = e.offsetY/canvas.clientHeight*canvas.height;
}, true);

canvas.addEventListener("mousedown", function(e) {
    mouse.click = true;
    //console.log("mouse down");
});

canvas.addEventListener("mouseup", function(e) {
    mouse.click = false;
    //console.log("mouse up");
});


