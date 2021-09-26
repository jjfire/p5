function preload(){

}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();

}
 function draw(){
     image(video, 190,100, 300, 230);

     fill(255,0,0);
     stroke(255,0,0);
     circle(50,50,80);

     fill(0,128,0);
     stroke(0,128,0);
    rect(90,40,460,20);

    fill(255,0,0);
     stroke(255,0,0);
    circle(590,50,80);

    fill(0,128,0);
     stroke(0,128,0);
    rect(580,90,20,300);

    fill(255,0,0);
    stroke(255,0,0);
   circle(50,425,80);

     fill(0,128,0);
     stroke(0,128,0);
rect(90,420,460,20);

fill(255,0,0);
    stroke(255,0,0);
   circle(590,425,80);

   fill(0,128,0);
     stroke(0,128,0);
    rect( 45,90,20,295);
    }

 function take_snapshot(){
     save('student_name.png');
 }

 