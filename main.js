
Harry_Potter = "music.mp3";
Memories = "music2.mp3"
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
score_leftWrist= 0;
music_Harry_Potter= false;
music_Memories = false;

function preload(){
    Harry_Potter = loadSound("music.mp3");
    Memories = loadSound("music2.mp3");
}
function setup() {
    canvas = createCanvas(600, 540);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('Posenet Initialized');
}
function draw() {
    image(video, 0, 0, 600, 500);
    fill("##FBFF00");
    stroke("#000000");
    if( scoreLeftWrist > 0.2)
    {
    circle(leftWristX, leftWristY, 20);
    Memories.stop()
    if(music_Harry_Potter= false){
        Harry_Potter.play();
        document.getElementById(Song).innerHTML = "Song Name 🎵 - " +"Harry_Potter";
        document.getElementById('HP').border=1;

    }
    }
}
function play_Harry_Potter(){
    Harry_Potter.play();
    Harry_Potter.setVolume(1);
}
function play_Memories(){
    Memories.play();
    Memories.setVolume(1);
}
function gotPoses(results){
    if(results.length>0){
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log(" scoreLeftWrist = " + scoreLeftWrist)
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
    }
}
