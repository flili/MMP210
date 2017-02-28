function setup() {
    //use code to create and draw on browser
    //createCanvas(width, height)
    createCanvas(700, 450);
    
    
    
    var lines = color(100,149,237);
    var r = color (220,20,60);
    var p = color (255,192,203);
    var wh=color(255);
    var w = 10;
    
    background(p);
    //fane
    //F
    stroke(wh);
    strokeWeight(w);
    line(400, 100 , 500, 100);
    line(500, 100 , 500, 160);
    line(460, 100 , 460, 130);
    
    //A
    line(500,160,400,160);
    line(500,160,500,220);
    line(500,220,400,220);
    line(460,160,460,220);
    
    //N
    line(500,220,400,280);
    line(400,280,500,280);
    
    //E
    
    line(500,280,500,330);
    line(400,280,400,330);
    line(460,280,460,320);
    //line
    line(370,80,370,350)
    //TEXT
    fill(r);
    strokeWeight(w);
    stroke(wh);
    textSize(250);
    textFont("helvetica");
    textStyle(BOLD);
    text("李", 100, 300);
    
    
}
    

