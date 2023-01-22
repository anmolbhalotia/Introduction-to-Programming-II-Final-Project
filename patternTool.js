function PatternTool()
{
	// Name of the Tool
	this.name = "patternTool";
	// Setting the icon for the tool
	this.icon = "assets/pattern.png";

	// Creating Variables
	var points = 13;
	var spread = 10;

	// Creating a draw function to draw random patterns on the Canvas once the user clicks on the tool from the toolbox
	// and then clicks on the canvas
	this.draw = function()
    {
		// When the user has clicked on the canvas after selected the tool
		if(mouseIsPressed){
			for(var i = 0; i < points; i++)
            {
				// Random Colors for the random patterns generated
                fill(random(0,255),random(0,255),random(0,255));
               	noStroke();
				//    Rectangle drawn on the place where mouse is clicked having random ratio of sides
				rect
				(
					random(mouseX-spread, mouseX + spread), 
					random(mouseY-spread, mouseY+spread),
					random(10,50),
					random(10,50)
				);

				//    Ellipse drawn on the place where mouse is clicked having random ratio of sides
				ellipse
				(
					random(mouseX-spread, mouseX + spread), 
					random(mouseY-spread, mouseY+spread),
					random(10,100),
					random(10,100)
				);
			}
		}
	};
};