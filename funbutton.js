
let funMode = false;
let originalImgUrls = [];

function initiateFun() {
    
    initSongs();
    
    initImages();
  
    initRainbow();
    
    $(".cheadle-ify").each((index, element) => {
        
        originalImgUrls.push($(element).attr("src"));
        
    });
    
}

initiateFun();

function funButtonClicked() {
    funMode = !funMode;
    if (funMode) {
        initiateAnarchy();
    }
    else {
        resetStyling();
    }
}

function initiateAnarchy() {
    
    alert("w̷̪̞͗̊̓̏ͅe̴̹̋̈́̍l̶̳͛̈c̶̠͓̞̪̎o̶̧͍͋͝m̸̗̤̲̿͛e̷̢̦̺̩̽̈́ ̷̝̦̮̆ͅt̸̰̫̰̀ỏ̵̘͖͇͝ ̴̤̮̙̊͝ṯ̷̎̋̒͝h̷̢̤̼̓̒̅̒͜e̴̗̒̈ ̸̧̻͉͑̽f̵͚̮͒u̸̜̹̔̽̈́̔ͅn̷̜̿̒ ̸̼͆z̶̼̩̊̕͜ö̴̮̭́̉n̴͎͇̋̐͐͠é̶͍͊̚͝");
    
    $("#funButton").html("<span class=\"meme-font\">Oh god make it stop</span>");
    
    $(".funDashboard").css("display", "initial");
    $(".cool-images").css("display", "initial");
    
    $("h1").html("Y̷̤̟͌͜ǒ̵̫̭̳̔̕u̴͎̣̤̿͝'̸̜̾̆v̶̺̣͍͘ȇ̸͈ ̸̘͑͋m̷̺̞̙̈̉a̸͖͆̏d̶̛̰̈́̄ĕ̴͓̥̅ ̸̹̇͋̉à̵̱̭͓̇̈́ ̵̤̫̦̉ǵ̴̢r̸̩͝a̶̙͓̪̾v̵͊̿̍͜é̴̫͈͋ ̶̺̈͜m̵͔̫̫͗̄i̴̥͝s̶͖͋̓t̴̢͆̿͜a̷͈̙̭͛͐̋ḵ̵̱̊e̷̦͗͋");
    
    $(".cheadle-ify").attr("src", "https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fchead.png?v=1574029922169");
    
    $("header").css("background-image", "url(https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fchead.png?v=1574029922169)");
}

function resetStyling() {
    
    $("#funButton").html("<span class=\"meme-font\">FUN BUTTON!!!111</span>");
    
    $(".funDashboard").css("display", "none");
    $(".cool-images").css("display", "none");
    
    $("h1").html("The Greatest Website That the World has EVER KNOWN!!!!&nbsp;<span id=\"author\">By Junha Lee</span>");
    
    $("header").css("background-image", "url(https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fbrighter.png?v=1574030029656)");
    
    $(".cheadle-ify").each((index, element) => {
        
        $(element).attr("src", originalImgUrls[index]);
        
    });
    
    for (let key in originalColors) {
        if (originalColors.hasOwnProperty(key)) {
            
            if (key.replace(/-bg$/, "") === key) {
                $(key).css("color", originalColors[key]);
            }
            else {
                $(key.replace(/-bg$/, "")).css("background-color", originalColors[key]);
            }
            
        }
    }
    
    for (let i = 0 ; i < songData.length ; i++) {
        songData[i].sound.stop();
    }
    
    $(".spinnable").css("transform", "");
    
    for (let i = 0 ; i < spinData.length ; i++) {
        spinData[i]["a"] = spinData[i]["originalTransform"];
        spinData[i]["enabled"] = false;
    }
    
}

setInterval(() => {
    
    handleRainbow();
    
    handleSongs();
    
    handleImages();
    
}, 1000/60);
