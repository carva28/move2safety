
let poseNet;
let poses = [];

var video;
let counTrue = 0;

function setup() {
    createCanvas(400, 300);
    //createCanvas(window.innerWidth, window.innerHeight);
    video = createCapture(VIDEO);

    video.size(width, height);

    // Create a new poseNet method with a single detection
    poseNet = ml5.poseNet(video, modelReady);
    // This sets up an event that fills the global variable "poses"
    // with an array every time new poses are detected
    poseNet.on('pose', function(results) {
        poses = results;

    });
    
    // Hide the video element, and just show the canvas
    video.hide();

    document.getElementById('defaultCanvas0').style.left = "calc(50% - 200px)";
    document.getElementById('defaultCanvas0').style.zIndex = "-1";
    document.getElementById('defaultCanvas0').style.position = "absolute";
    document.getElementById('defaultCanvas0').style.bottom = "20px";

}

function modelReady() {
    //select('#status').html('Model Loaded');

    if (video.loadedmetadata) {
        //ligarCamara(video.loadedmetadata);
        videoValorTr = true;
        validarCamara(videoValorTr); 
    } else {
        //console.log("espera")
    }
}


function draw() {
    image(video, 0, 0, width, height);

    drawKeypoints();
    drawSkeleton();
}


function drawKeypoints() {
    for (let i = 0; i < poses.length; i++) {

        let pose = poses[i].pose;
        for (let j = 0; j < pose.keypoints.length; j++) {

            let keypoint = pose.keypoints[j];
            if (keypoint.score > 0.2) {

                if(pose.keypoints[j].part == "rightShoulder"){
                    document.getElementById("vacaLoura_img").style.left = pose.keypoints[j].position.x + 420 + "px"; 
                    //document.getElementById("vacaLoura_img").style.top = pose.keypoints[j].position.y + "px"; 
                }
            }
        }
    }
}

// A function to draw the skeletons
function drawSkeleton() {
    // Loop through all the skeletons detected
    for (let i = 0; i < poses.length; i++) {
        let skeleton = poses[i].skeleton;
        // For every skeleton, loop through all body connections
        for (let j = 0; j < skeleton.length; j++) {
            let partA = skeleton[j][0];
            let partB = skeleton[j][1];
            //            stroke(0, 255, 0);
            //            line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
        }
    }
}


function collides(VacaLoura, start) {
    document.getElementById("vacaLoura_img").style.transform = "scale(1)"; 

    return !(
        ( ( start.y + start.height ) < ( VacaLoura.y ) ) ||
        ( start.y > ( VacaLoura.y + VacaLoura.height ) ) ||
        ( ( start.x + start.width ) < VacaLoura.x ) ||
        ( start.x > ( VacaLoura.x + VacaLoura.width ) )
    );
}