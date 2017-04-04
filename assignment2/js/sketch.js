//variables
function setup() {
    //use code to create and draw on browser
    //createCanvas(width, height)
    createCanvas(700, 500);
    background("lightblue");
    
//colors
    var r = color(220,20,60);
    var b = color(128,0,0);
    var g = color(144,238,144);
    var t = color(255,228,196);
    var tb = color (139,69,19);
    
//values
    var a = 150;
    var c = 125;
    var d = 100;
    var e = 70;
    var f = 80;
    var h = 200;
    var i = 225;
    var j = 275;
    var k = 250;
    var l = 490;
    var m = 350;
    var n = 205;
    var o = 20;
    var p = 40;
    var q = 50;
    var s = 180;
    var u = 450;
    var v = 300;
    var w = 255;
    var x = 260;
    var y = 460;
    var z = 240;
    var aa = 390;
    var ab = 510;
    var ac = 410;
    var ad = 650;
    
    
//teapot
//sides,up-down
    fill (t);
    triangle (a,h,i,i,i,j);
    //
    ellipse (l,k,e,f);
    fill("lightblue");
    ellipse(l,k,p,q);
//body teapot
    fill(t);
    ellipse(m,k,j,n);
//top teapot
    arc(m, s, h, d, -PI, 0);
    ellipse(m,c,o,o);
    
    
    
//cupcake
//filling
    fill (g);
    arc(u, v, d, f, -PI, 0);
    fill(w);
//cherry
    fill (r);
    line(u,x,y,z);
    ellipse(u,x,o,o);
//bottom
    fill (b);
    quad (aa,v,ab,v,l,m,ac,m);

    
//table
    stroke(tb);
    strokeWeight(10);
    line(q,m,ad,m);
    
}