// midterm - generative pattern

function setup() {
    createCanvas(640, 640);
    background(255);
    
    
    noStroke();
    
    var numberOfRectangles = 300;
    var columns = Math.sqrt(numberOfRectangles);
    var rows = Math.sqrt(numberOfRectangles);
    
    var w = width / columns;
    var h = height / rows;
    
    for (var x = 0; x <= width; x += w) {
        for (var y = 0; y <= height; y += h) {
            
            var r, g, b;
            var tempX = x;
            var tempW = w;
            var tempH = h;
            
            if (y < height/2.5) {
                r = random(229, 236);
                g = random(121, 59);
                b = random(27, 59);
                x += random(-50, 10);
                w = random(100, 200);
                
            } else if (y > height * 3/4) {
                r = random(206, 210);
                g = random(139, 165);
                b = random(84, 109);
                
                

                w = h = random(50, 90);
                
            } else {

                r = random(0, 50);
                g = random(150, 255);
                b = random(200, 255);
                ellipse(x,y,h,w);
            }
            

            fill(r,g, b);            
            

            if ( y > height * 3/4) {

                ellipse(x-15, y-10, w+5, h-10);
                fill(
                    random(206, 210),
                    random(139, 165),
                    random(84, 109)
                
                );
                ellipse(x, y, w/3, h/3);
            } else {
                rect(x, y, w, h);
            }
            
            x = tempX;
            w = tempW;
            h = tempH;
        }
    }
    fill(r,g,b)
    fill(
        random(226,255),
        random(195,223),
        random(17,52)
    );
    ellipse(200,100,100);
}