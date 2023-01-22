function EraserTool()
{
    // Name of the Tool
	this.name = "eraserTool";
    // Setting the icon
	this.icon = "assets/eraser.png";

    // Creating a draw Function to create an eraser on the canvas
	this.draw = function()
    {
        // when the user clicks on the canvas after choosing the tool from the toolbox
        if(mouseIsPressed)
        {
            fill(255);  // White Color
            noStroke(); // No Strokes
            ellipse(mouseX,mouseY,100); // Creating a white ellipse to create an overlap on the drawing acting as an eraser
        }
	};
};