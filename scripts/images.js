
let imageMovementData = {};
let spinData = [];

function initImages() {
    
    for (let i = 0 ; i < coolVideos.length ; i++) {
        
        let alignTop = false;
        let alignLeft = false;
        
        let vertOffset = coolVideos[i].topOffset.replace(/^bottom-/, "");
        let horOffset = coolVideos[i].leftOffset.replace(/^right-/, "");
        
        $(".cool-images").append("<img class=\"funImage\" id=\""+coolVideos[i].id+"\" src=\""+coolVideos[i].src+"\">");
        $(".checkbox-wrapper").append("<input type=\"checkbox\" class=\"gifOption\" id=\""+coolVideos[i].checkboxId+"\" onclick=\"toggleImage(\'"+coolVideos[i].checkboxId+"\', \'"+coolVideos[i].id+"\')\"><span class=\"meme-font\">"+coolVideos[i].gifText+"</span><br>");
        
        if (coolVideos[i].topOffset.replace(/^bottom-/, "") === coolVideos[i].topOffset) {
            alignTop = true;
        }
        
        if (coolVideos[i].leftOffset.replace(/^right-/, "") === coolVideos[i].leftOffset) {
            alignLeft = true;
        }
        
        let vertAlign = (alignTop ? "top" : "bottom");
        let horAlign = (alignLeft ? "left": "right");
        
        $("#"+coolVideos[i].id).css({
            "display": "none",
            "width": coolVideos[i].size,
            "z-index": 2
        });
        $("#"+coolVideos[i].id).css(vertAlign, vertOffset);
        $("#"+coolVideos[i].id).css(horAlign, horOffset);
        
        imageMovementData[coolVideos[i].id] = {
            "x": 0,
            "y": 0,
            "velX": 0,
            "velY": 0,
            "enabled": false
        }
    }
    
    
    $("p").addClass("spinnable");
    $("h1").addClass("spinnable");
    $("li").addClass("spinnable");
    $("h2").addClass("spinnable");
    $("img").addClass("spinnable");
    
    $(".spinnable").each((index, element) => {
        
        spinData[index] = {
            a: 0,
            originalTransform: $(element).css("transform"),
            enabled: false
        };
        
    });
    
}

function handleImages() {
  
    $(".funImage").each((index, element) => {
        
        if (imageMovementData[$(element).attr("id")]["enabled"] === true) {
            
            imageMovementData[$(element).attr("id")].x += imageMovementData[$(element).attr("id")].velX;
            imageMovementData[$(element).attr("id")].y += imageMovementData[$(element).attr("id")].velY;
            
            if (imageMovementData[$(element).attr("id")].x > 100 || imageMovementData[$(element).attr("id")].x < 0) {
                imageMovementData[$(element).attr("id")].velX = -imageMovementData[$(element).attr("id")].velX;
            }
          
            if (imageMovementData[$(element).attr("id")].y > 100 || imageMovementData[$(element).attr("id")].y < 0) {
                imageMovementData[$(element).attr("id")].velY = -imageMovementData[$(element).attr("id")].velY;
            }
            
            $(element).css({
                "left": imageMovementData[$(element).attr("id")].x+"%",
                "top": imageMovementData[$(element).attr("id")].y+"%"
            });
            
        }
        
    });
    
    $(".spinnable").each((index, element) => {
        

        if (spinData[index]["enabled"]) {

            spinData[index]["a"] = (spinData[index]["a"]+10 > 360) ? 360-spinData[index]["a"]: spinData[index]["a"]+10;

            $(element).css("transform", `rotate(${spinData[index]["a"]}deg)`);

        }
        
    });
  
}

function toggleImage(checkBoxId, imageId) {
    
    let checkBox = document.getElementById(checkBoxId);
    
    if (checkBox.checked === true) {
        $("#"+imageId).css("display", "initial");
    }
    else {
        $("#"+imageId).css("display", "none");
    }
    
}

function selectAll(on) {
    
    if (on) {
        $(".gifOption").prop("checked", true);
        $(".funImage").css("display", "initial");
    }
    else {
        $(".gifOption").prop("checked", false);
        $(".funImage").css("display", "none");
    }
    
}

function bounceImages() {
    
    let checkBox = document.getElementById("bounce");
    
    if (checkBox.checked === true) {
        
        sfx["boing"].play();
        
        $(".funImage").each((index, element) => {
            
            let randomX = Math.round(Math.random()*100);
            let randomY = Math.round(Math.random()*100)
            
            $(element).css({
                "bottom": "",
                "right": "",
                "top": randomX+"%",
                "left": randomY+"%",
                "transform": "translate(-50%, -50%)"
            });
            
            imageMovementData[$(element).attr("id")] = {
                "x": randomX,
                "y": randomY,
                "velX": Math.random()*3-1.5,
                "velY": Math.random()*3-1.5,
                "enabled": true
            }
            
        });
    }
    else {
        
        sfx["boing"].stop();
        
        for (let i = 0 ; i < coolVideos.length ; i++) {

            let alignTop = false;
            let alignLeft = false;

            let vertOffset = coolVideos[i].topOffset.replace(/^bottom-/, "");
            let horOffset = coolVideos[i].leftOffset.replace(/^right-/, "");

            if (coolVideos[i].topOffset.replace(/^bottom-/, "") === coolVideos[i].topOffset) 
                alignTop = true;
            else 
                $("#"+coolVideos[i].id).css("top", "");
            

            if (coolVideos[i].leftOffset.replace(/^right-/, "") === coolVideos[i].leftOffset) 
                alignLeft = true;
            else
                $("#"+coolVideos[i].id).css("left", "");

            let vertAlign = (alignTop ? "top" : "bottom");
            let horAlign = (alignLeft ? "left": "right");
            
            $("#"+coolVideos[i].id).css("transform", "");
            $("#"+coolVideos[i].id).css(vertAlign, vertOffset);
            $("#"+coolVideos[i].id).css(horAlign, horOffset);

            imageMovementData[coolVideos[i].id] = {
                "x": 0,
                "y": 0,
                "velX": 0,
                "velY": 0,
                "enabled": false
            }
          
        }
    }
    
}

function spinEverything() {
    
    let checkBox = document.getElementById("spin");
  
    if (checkBox.checked === true) {
        
        sfx["speen"].play();
      
        $(".spinnable").each((index, element) => {
            let angle = Math.random()*360;
            spinData[index] = {
              a: angle,
              originalTransform: $(element).css("transform"),
              enabled: true
            };
            $(element).css("transform", `rotate(${angle}deg)`);
        });
        
    }
    else {
        
        sfx["speen"].stop();
        
        $(".spinnable").css("transform", "");
        
        for (let i = 0 ; i < spinData.length ; i++) {
            spinData[i]["a"] = spinData[i]["originalTransform"];
            spinData[i]["enabled"] = false;
        }
        
    }
    
}
