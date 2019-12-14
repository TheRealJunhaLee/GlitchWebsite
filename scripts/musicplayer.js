
let musicVolume = $("#volumeSlider").attr("value");
let volumeSlider = document.getElementById("volumeSlider");
let progressBar = document.getElementById("progressBar");

volumeSlider.oninput = function() {
    
    $("#currentVolume").html(this.value);
    musicVolume = this.value;
    
    for (let i = 0 ; i < songData.length ; i++) {
        
        if (!songData[i].sound.isPaused()) {
            songData[i].sound.setVolume(this.value);
        }
        
    }
    
}

progressBar.oninput = function() {
  
    for (let i = 0 ; i < songData.length ; i++) {
        
        if (!songData[i].sound.isPaused()) {
            
            songData[i].sound.setTime(this.value);
            $("#timer").html(buzz.toTimer(songData[i].sound.getTime()));
            
        }
        
    }
    
}

function playSong() {
    
    let dropdown = document.getElementById("musicSelector");
    
    for (let i = 0 ; i < songData.length ; i++) {
        
        if (!songData[i].sound.isPaused()) {
            songData[i].sound.stop();
        }
        
        if (songData[i].value === dropdown.value) {
            songData[i].sound.setVolume(musicVolume);
            songData[i].sound.play();
            $("#currently-playing").html(`CURRENTLY PLAYING: ${songData[i].text}`);
            progressBar.max = songData[i].sound.getDuration();
        }
    }
    
}

function pauseSong() {
    
    let dropdown = document.getElementById("musicSelector");
    
    for (let i = 0 ; i < songData.length ; i++) {
        
        if (!songData[i].sound.isPaused()) {
            songData[i].sound.pause();
            $("#currently-playing").html(`CURRENTLY PAUSED: ${songData[i].text}`);
        }
        
    }
    
}

function stopSongs() {
    
    for (let i = 0 ; i < songData.length ; i++) {
        if (!songData[i].sound.isPaused()) {
            songData[i].sound.stop();
            $("#currently-playing").html("NOTHING IS PLAYING");
            progressBar.max = 0;
            progressBar.value = 0;
            $("#timer").html("--:--");
            break;
        }
    }
    
}

function handleSongs() {
    
    let songIsPlaying = false;
    let key = "none";
    
    for (let i = 0 ; i < songData.length ; i++) {
        
        if (!songData[i].sound.isPaused()) {
            progressBar.value = songData[i].sound.getTime();
            $("#timer").html(buzz.toTimer(songData[i].sound.getTime()));
            songIsPlaying = true;
            key = i;
            break;
        }
        
    }
  
    if (!songIsPlaying) {
        
        $("#currently-playing").html("NOTHING IS PLAYING");
        progressBar.max = 0;
        progressBar.value = 0;
        $("#timer").html("--:--");
      
    }
  
}

function initSongs() {
  
    for (let i = 0 ; i < songData.length ; i++) {
        
        $("#musicSelector").append(`<option value="${songData[i].value}">${songData[i].text}</option>`);
        
    }
  
}
