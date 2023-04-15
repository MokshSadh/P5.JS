function preload(){

}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(180,250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,640,480);
    fill(260,0,0);
    circle(30,30,50);
    circle(600,30,50);
    circle(600,450,50);
    circle(30,450,50);
    fill(0,0,260);
    rect(54,20,522,20);
    rect(54,440,522,20);
    rect(20,55,20,370);
    rect(590,55,20,370);
   
}

function take_snapshot(){
    save("picture.png");
}