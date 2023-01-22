function SplashTool()
{
	
    // Name of the Tool
	this.name = "splashTool";
    // Setting the Icon
	this.icon = "assets/splash.png";

    // Declaring Variables
	var points = 1;
	var spread = 1;

    // Creating a draw to add random splash like ellipse on the canvas
	this.draw = function()
    {
        // When the user has selected the tool from the tool box and clicks on the canvas
		if(mouseIsPressed)
        {
			for(var i = 0; i < points; i++) //Creating a for loop for the random patterns
            {
                fill(random(0,255),random(0,255),random(0,255));// Random Colors selected
                noStroke(); //No Stroke
                // Drawing ellipses on the canvas wherever the user clicks having random ratio of measurements
                ellipse
                (
                    mouseX-spread,
                    mouseY+spread,
                    random(10,100)
                );
			}
		}
	};
};