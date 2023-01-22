function FillTool()
{	
    //Naming of the Tool
	this.name = "fillTool";
    //Setting the icon
	this.icon = "assets/filltool.png";
    // Creating a draw Function to fill the canvas
	this.draw = function()
    {
        // When the user has selected the tool from the tool box and 
        // clicks on the canvas after choosing the color from color pallette
		if(mouseIsPressed)
        {
            noStroke(); // No Stroke
            ellipse(mouseX,mouseY,10000,10000);  // Create an ellipse convering the whole canvas acting as a fill color on the canvas
        }
	};
};