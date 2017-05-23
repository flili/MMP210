// system variables
//logo
function setup() {
    //use code to create and draw on browser
    //createCanvas(width, height)
    createCanvas(700, 450);
    
//values 
    var u = 10;
    var f = 20;
    var j = 60;
    var i = 100;
    var t = 130;
    var s = 160;
    var v = 220;
    var g = 255;
    var e = 250;
    var h = 280;
    var d = 300;
    var a = 320;
    var b = 330;
    var c = 400;
    var y = 460;
    var q = 500;
    
    var m = 370;
    var n = 80;
    var o = 350;
// colors
    var r = color (v,f,j);
    var p = color (g,192,203);
    var wh=color(g);
    var w = u;
    var r1, g1, b1;
    
    background(p);
    //fane
    //F
    stroke(r1, g1, b1); 
    stroke(
        random(244,161),
        random(38,41),
        random(48,65)
    );
    pop();
    strokeWeight(w);
    line(c, i , q, i);
    line(q, i , q, s);
    line(y, i , y, t);
    
    //A
    line(q,s,c,s);
    line(q,s,q,v);
    line(q,v,c,v);
    line(y,s,y,v);
    
    //N
    line(q,v,c,h);
    line(c,h,q,h);
    
    //E
    
    line(q,h,q,b);
    line(c,h,c,b);
    line(y,h,y,a);
    //line
    
    line(m,n,m,o)
    //TEXT
    fill(r);
    strokeWeight(w);
    stroke(wh);
    textSize(e);
    textFont("helvetica");
    textStyle(BOLD);
    text("李", i, d);
}