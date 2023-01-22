//global variables that will store the toolbox colour palette
//amnd the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;


function setup() 
{

	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent("content");

	//create helper functions and the colour palette
	helpers = new HelperFunctions();
	colourP = new ColourPalette();

	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	//add the tools to the toolbox.
	// Adding Freehand Tool to the toolbox
	toolbox.addTool(new FreehandTool());
	// Adding Line To Tool to the toolbox
	toolbox.addTool(new LineToTool());
	// Adding SprayCan Tool to the toolbox
	toolbox.addTool(new SprayCanTool());
	// Adding Mirror Draw Tool to the toolbox
	toolbox.addTool(new mirrorDrawTool());
	//Adding new extension to the toolbox
	// Adding Eraser Tool to the toolbox
	toolbox.addTool(new EraserTool());
	// Adding Fill Tool to the toolbox
	toolbox.addTool(new FillTool());	
	// Adding Stamp Tool to the toolbox
	toolbox.addTool(new StampTool());
	// Adding Edit Shape Tool to the toolbox
	toolbox.addTool(new EditShape());
	// Adding Pattern Tool to the toolbox
	toolbox.addTool(new PatternTool());
	// Adding Splash Tool to the toolbox
	toolbox.addTool(new SplashTool());

	background(255);

};

function draw() 
{
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user

	if (toolbox.selectedTool.hasOwnProperty("draw"))
	{
		toolbox.selectedTool.draw();
	} 
	else 
	{
		alert("it doesn't look like your tool has a draw method!");
	}
};

// EditShape Tool mousePressed on canvas detection
// Helper to detect if the mouse Function is on the Canvas or not
this.mouseIsPressedOnCanvas = function(canvas)
{

	if(
		mouseX > canvas.elt.offsetLeft &&
		mouseX < (canvas.elt.offsetLeft + canvas.width)&&
		mouseY> canvas.elt.offsetTop &&
		mouseY < canvas.elt.offsetTop + canvas.height)
	{
			return true;
	}
	return false;
};