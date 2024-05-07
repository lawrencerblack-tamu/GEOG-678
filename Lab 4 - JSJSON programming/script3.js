function Run5()
{
    // theJSON is a variable already created since it is loaded via a script tag in the HTML page.
    console.log(theJSON);

    // get the array of people from the JSON object's data property which contains the array
    // get the corners by creating functions which select an item from the data which has the correct values
var topLeftPoint = findTopLeft(data);
var topRightPoint = findTopRight(data);
var bottomLeftPoint = findBottomLeft(data);
var bottomRightPoint = findBottomRight(data);

var boundingBox = 
{
    topLeft: topLeftPoint,
    topRight: topRightPoint,
    bottomLeft: bottomLeftPoint,
    bottomRight: bottomRightPoint
}

    // print it out
console.log("Bounding box computed for person@tamu.edu: ");
console.log(boundingBox);
console.log(email);