function SprayCanTool()
{
	//Name of the Tool 
	this.name = "sprayCanTool";
	// Setting the Icon
	this.icon = "assets/sprayCan.jpg";

	// Declaring Variables
	var points = 13;
	var spread = 10;

	// Creating a draw function
	this.draw = function()
	{
		// When the user has selected the tool from the tool box and chosen the color from the color pallette
		// and clicks on the canvas
		if(mouseIsPressed)
		{
			for(var i = 0; i < points; i++) // Creating a for loop
			{
				// Ccreating several points on the canvas to resemble spray like patterns when the user clicks on the canvas
				point
				(
					random(mouseX-spread, mouseX + spread), 
					random(mouseY-spread, mouseY+spread)
				);
			}
		}
	};
};