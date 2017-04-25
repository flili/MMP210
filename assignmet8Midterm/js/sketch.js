// midterm - generative pattern

function setup() {
    createCanvas(640, 640);
    background(255);
    
   noStroke();
    
    var numberOfRectangles = 200;
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
            
//palms
            if (y < height/2.5) {
// random ocean blue color
                r = random(229, 236);
                g = random(121, 59);
                b = random(27, 59);
//random ocean size and position
                x += random(-50, 10);
                w = random(100, 200);
                
            } else if (y > height * 3/4) {
// random ocean color
                r = random(0, 50);
                g = random(150, 255);
                b = random(200, 255);
                
                
// random ocean waves size
                w = h = random(50, 90);
                
            } else {
// random sand color
                r = random(206, 210);
                g = random(139, 165);
                b = random(84, 109);
                ellipse(x,y,h,w);
            }
            
// all of the color fills
            fill(r,g, b);            
            
// oean
            if ( y > height * 3/4) {
// ocean
                ellipse(x, y, w, h);
//ocean
                fill(
                    random(0, 50),
                    random(150, 255),
                    random(200, 255)
                );
                ellipse(x, y, w/3, h/3);
            } else {
// palm and sand
                rect(x, y, w, h);
            }
            
            x = tempX;
            w = tempW;
            h = tempH;
        }
    }
}