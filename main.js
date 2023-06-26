songOne = "";
songTwo = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload() {
    songOne = loadSound("music.mp3");
    songTwo = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 350);
    canvas.position(385, 350);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotResult);
}

function modelLoaded() {
    console.log("PoseNet is ready!");
}

function gotResult(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("left wrist x=" + leftWristX + " left wrist y=" + leftWristY);
        console.log("right wrist x=" + rightWristX + " right wrist y=" + rightWristY);
    }
}

function draw() {
    image(video, 0, 0, 600, 350);
}

function play() {
    songOne.play();
    songTwo.play();
}