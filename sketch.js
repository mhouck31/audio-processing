var song;
var button, skipButton;
var volumeSlider, rateSlider, panSlider;
var amp, volume;
//var song2;

function preload(){
    song = loadSound("sound/2Pac-dearmama.mp3")
    //song2 = loadSound("sound/djjazzyjeff-summertime.mp3")
}

function setup(){
    createCanvas(600,400);
    background(0);
    
    button = createButton("Play 2Pac");
    button.mousePressed(togglePlaying);
    button.position(20, height-20);
    
    skipbutton = createButton("skip");
    skipbutton.mousePressed(skip);
    skipbutton.position(100, height-20);
    
    volumeSlider = createSlider(0, 1, 0.5, .05);
    volumeSlider.position(20,20);
    
    rateSlider = createSlider(0.5, 1.5, 1, 0.05);
    rateSlider.position(20, 50);
    
    panSlider = createSlider(-1, 1, 0, .05);
    panSlider.position(20,80);
    
    //addCue
    //song.addCue(5, song2);

    amp = new p5.Amplitude();
}

function draw(){
    background(song.currentTime()*5, 0,0)
    
    volume = amp.getLevel();
    size = map(volume, 0, 1, 50, 500);
    
    song.setVolume(volumeSlider.value());
    song.rate(rateSlider.value());
    song.pan(panSlider.value());
    
    fill(0,255,0);
    rectMode(CENTER);
    rect(width/2, height/2, size*3, size*3);
}

function togglePlaying(){
    if(song.isPlaying()){
        song.pause();
        button.html("Play 2Pac")
    }
    else{
        song.play();
        song.html("Pause");
    }
    
}

function skip(){
    if(song.isPlaying()){
        song.jump(song.currentTime()+5);
    }
    
}