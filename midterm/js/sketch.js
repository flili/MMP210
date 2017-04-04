// windows
function setup() { 
    createCanvas (640,640);
    background(0);
    
    stroke ("green");
    
    var numberOfRectangles = 200;
    var columns = Math.sqrt(numberOfRectangles);
    var rows = 10;
    var size = width / columns;
    
    for (var x = 0; x <= width; x += size); {
        for ( var y = 0; y <= height; y += size);{
        rect(x, y, size, size);
        }
    }
}
