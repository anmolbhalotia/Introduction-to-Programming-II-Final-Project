function EditShape()
{
    // Naming the Function
    this.name = "editShapeTool";
    // Setting the Icon
    this.icon = "assets/editshapeicon.png";
    
    // Initialising the edit button we want to click on when editing the shape 
    var editButton;
    // Initialising the edit button we want to click on when finishing the shape
    var finishButton;

    // Setting the edit mode at false initially
    var editMode = false;
    // Setting Current shape as null
    var currentShape = [];

    // Creating a draw funtion to draw the shapes on the canvas
    this.draw = function()
    {
        noFill();
        // Updating the pixels at the start of the draw
        updatePixels();
        // Setting instructions to determine when the shape is being drawn kon canvas
        if(mouseIsPressedOnCanvas(canvasContainer) && mouseIsPressed)
        {
            // When the user is editing the shape
            if(!editMode)
            {
                currentShape.push
                (
                    {
                        x: mouseX,
                        y: mouseY
                    }
                );
            }
            else
            {
                for(var i =0;i<currentShape.length; i++)
                {
                    if(dist(currentShape[i].x,
                            currentShape[i].y,
                            mouseX,mouseY)
                            < 15
                            )
                            {
                                currentShape[i].x = mouseX;
                                currentShape[i].y = mouseY;
                            };
                };
            };
        };

        beginShape();
        for(var i=0;i<currentShape.length;i++)
        {
            vertex(currentShape[i].x,currentShape[i].y);
            if(editMode)
            {
                fill('red');
                ellipse(currentShape[i].x,currentShape[i].y,10);
                noFill();
            };
        };
        endShape();
        
    };

    // Loading the pixels when the shape is being drawn
    loadPixels();
    // Creating a button for Edit Shape
	editButton = createButton('Edit Shape');
    // Setting instrutions when the user is drawing the shape they wanna edit
	editButton.mousePressed
    (
        function()
        {
            if(editMode)
            {
                editMode = false;
                editButton.html("Edit Shape");
            }
            else
            {
                // When the user is done with drawing, they can click on add vertices to edit the shape as per their choice
                editMode = true;
                editButton.html("Add Vertices");
            };
        }
    );

   // Setting instrutions when the user has edited the shape and they want the current shaoe to be the desired shape they want
	finishButton = createButton('Finish Shape');
	finishButton.mousePressed
    (
        function()
        {
            editMode = false;
            draw();
            loadPixels();
            currentShape = [];
        }
	);
};
