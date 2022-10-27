img = "";
status = "";
objects = "";

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function setup() 
{
    canvas = createCanvas (640, 420); 
    canvas.center(); 
    objectDetector = ml5. objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() 
{
    console.log("Model Loaded!") 
    status = true; 
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) 
{ 
    if (error) {
    console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() 
{ 
    image (img, 0, 0, 640, 420); 

    if (status !="")
    {

    }
    
    fill("#FF0000");
    text("Dog", 45, 75);
    noFill(); 
    stroke("#FF0000");
    rect (30, 60, 450, 350 );

    fill("#FF00FF"); 
    text("CAT", 320, 120);
    noFill(); 
    stroke("#FF00FF");
    rect (300, 90, 270, 320 );

    fill("#0000FF"); 
    text("BOWL", 320, 360);
    noFill(); 
    stroke("#0000FF");
    rect (280, 330, 110, 80 );

    fill("#FF0000");
    text("Handle", 99, 50);
    noFill(); 
    stroke("#FF0000");
    rect (89, 30, 49, 39 );

}