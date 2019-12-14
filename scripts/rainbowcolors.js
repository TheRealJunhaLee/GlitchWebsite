
let noiseX = 0;
let tagColors = {
    "p-bg": {},
    "section-bg": {},
    "li-bg": {},
    "h2": {},
    "p": {},
    "a": {},
    "nav-bg": {},
    "footer": {},
    "footer-bg": {},
    ".polaroid-bg": {},
    "h1": {},
    "#author": {},
    "li": {}
};
let originalColors = {
    "p-bg": {},
    "section-bg": {},
    "li-bg": {},
    "h2": {},
    "p": {},
    "a": {},
    "nav-bg": {},
    "footer": {},
    "footer-bg": {},
    ".polaroid-bg": {},
    "h1": {},
    "#author": {},
    "li": {}
};

let speedLimiter = $("#funSlider").attr("value");
let funSlider = document.getElementById("funSlider");

const simplex = new SimplexNoise();
const rgb = ["r", "g", "b"];

function initRainbow() {
    let iterator = 0;
    
    for (let key in tagColors) {
        if (tagColors.hasOwnProperty(key)) {
            
            if (key.replace(/-bg$/, "") === key) {
                originalColors[key] = $(key).css("color");
            }
            else {
                originalColors[key] = $(key.replace(/-bg$/, "")).css("background-color");
            }
            
            tagColors[key] = {
                r: Math.random()*255,
                g: Math.random()*255,
                b: Math.random()*255,
                noiseIndex: iterator*20
            };
            
        }
        iterator++;
    }
}

function handleRainbow() {
    
    
    if (funMode) {
        for (let key in tagColors) {
            if (tagColors.hasOwnProperty(key)) {
                
                let generatedColor = `rgb(${tagColors[key].r}, ${tagColors[key].g}, ${tagColors[key].b})`
                
                if (key.replace(/-bg$/, "") === key) {
                    
                    $(key).each((index, element) => {
                        $(element).css("color", `rgb(${tagColors[key].r}, ${tagColors[key].g}, ${tagColors[key].b})`);
                    });
                    
                }
                else {
                    $(key.replace(/-bg$/, "")).each((index, element) => {
                        $(element).css("background-color", `rgb(${tagColors[key].r}, ${tagColors[key].g}, ${tagColors[key].b})`);
                    });
                }
                
                for (let i in rgb) {
                    
                    tagColors[key][rgb[i]] = (simplex.noise2D(noiseX, tagColors[key].noiseIndex+i*3)+1)/2*255;
                    
                }
            }
        }
        
    }
    
    noiseX+=(speedLimiter/1000);
    
}

funSlider.oninput = function() {
    
    speedLimiter = this.value;
    
}
