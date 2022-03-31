nose_x=0;
nose_y=0;

function preload() {
load_img=loadImage('https://i.postimg.cc/7P05RDLv/facemask-final.png');
}

function setup() {
canvas=createCanvas(350, 350);
canvas.center();
video=createCapture(VIDEO);
video.size(350, 350);
video.hide();

poseNet = ml5.poseNet(video, modelloaded);
poseNet.on('pose', gotposes);
}

function modelloaded() {
    console.log("Model is Loaded");
}

function gotposes(result) {
    if(result.length > 0){
        console.log(result);
        nose_x=result[0].pose.nose.x-65;
        console.log("nose x = " + nose_x);
        nose_y=result[0].pose.nose.y-118; 
        console.log("nose y = " + nose_y);
    }
} 

function draw() {
    image(video, 0, 0, 350, 350);
    image(load_img, nose_x, nose_y, 130, 130);
    }

function take_snapshot() {
    save('filter_image.png');
}

