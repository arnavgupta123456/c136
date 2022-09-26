leftEyeX = 0;
leftEyeY = 0;
rightEyeX = 0;
rightEyeY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
 function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
 }
 function modelLoaded() {
    console.log('PoseNet Is Initialised!');
 }

 function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        leftEyeX = results[0].pose.leftEye.x;
        leftEyeY = results[0].pose.leftEye.y;
        rightEyeX = results[0].pose.rightEye.x;
        rightEyeY = results[0].pose.rightEye.y;
        

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
 }
 function draw() {
    background('blue');

    document.getElementById("square_side").innerHTML = "Width and Height of a Square will be =" + difference + "px";
    fill('white');
    stroke('black');
    square(leftEyeX -200,leftEyeY,difference)
    square(rightEyeX +200,rightEyeY,difference)
 }
