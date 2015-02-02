// This is a single line Comment in Javascript

/*

This is a Block Comment

*/

// Variables

/*

"=" Is an Assignment Operator

*/

// String Type of Data *****************************************************************
var userName;
userName = "Bruce";

var firstName = "Bruce";
var lastName = "Perry";



/*

Variables Should start with Letters
Don't user Reserve Key Words (var, time, function, true, etc.)
Use Varables that Make Sense for their use
Short Varable Names
Avoid Numbers

Single and Double Quotes:

" = Print what is within
' = Literal Characters
  var theQuote = '"All the worlds a stage"'
  var theQuoteEscape = '"All the world\'s a stage"'

Escape Character = "\"

*/

var theQuote = '"All the worlds a stage"'; // Use ' to encapulate the " in a statement
var theQuoteEscape = '"All the world\'s a stage"'; // Use \ to Escape the ' within the literal statement
var theQuoteEscapeII = "\"All the world's a stage\""; // Using the Escape Character instead of the Literal '
var theCopyright = "Copyright = "; // Using the Escape Character instead of the Literal '
var message = theQuote + " " + userName; // Joining two variables

var string1Message = firstName + " " + lastName;

//console.log(theQuote); // Shows the value of "theQuote" to the console when it reloads
//console.log(theQuoteEscape); // Shows the value of "theQuote" to the console when it reloads
//console.log(theQuoteEscapeII); // Shows the value of "theQuote" to the console when it reloads
// Target and Replace Elements on the Page, Bookmark, Find Element (ID) on the HTML Page

var paragraphRef = document.getElementById("replace");
paragraphRef.innerHTML = message;

var string1 = document.getElementById("string1");
string1.innerHTML = string1Message;


// Number

// Number *****************************************************************

var level = 1;
var lives = 3;
var ssNumber = 3333334444;
//console.log(level);

// Array *****************************************************************

var imageList = new Array; // Zero Indexed Array = Index that starts with 0 (Zero)

imageList[0] = "images/oil/thumbs/artwork_1.jpg";
//imageList[1] = "images/oil/thumbs/artwork_2.jpg";
//imageList[2] = "images/oil/thumbs/artwork_3.jpg";
//imageList[3] = "images/oil/thumbs/artwork_4.jpg";
//imageList[4] = "images/oil/thumbs/artwork_5.jpg";
//imageList[5] = "images/oil/thumbs/artwork_6.jpg";
//imageList[6] = "images/oil/thumbs/artwork_7.jpg";
//imageList[7] = "images/oil/thumbs/artwork_8.jpg";

//imageList.push("images/oil/thumbs/artwork_1.jpg");
imageList.push("images/oil/thumbs/artwork_2.jpg");
imageList.push("images/oil/thumbs/artwork_3.jpg");
imageList.push("images/oil/thumbs/artwork_4.jpg");
imageList.push("images/oil/thumbs/artwork_5.jpg");
imageList.push("images/oil/thumbs/artwork_6.jpg");
imageList.push("images/oil/thumbs/artwork_7.jpg");
imageList.push("images/oil/thumbs/artwork_8.jpg");

var imagePlaceholder = document.getElementById("placeholder");
imagePlaceholder.setAttribute("src", imageList[0]); //Update the Source of the Image from and Array

//console.log(imageList[0] + " " + imageList.length);

//console.log(imageList.length);


// Boulean *****************************************************************
// True or False, Yes or No, 1 or 0

var oldEnough = false;
var hasContent = true;

// ifthen Statements *****************************************************************
// Branching Logic, Application Logic, Business Logic
// == is equal to


if(oldEnough == true){  // More Code Here
  
  console.log("Old Enough");

} else{
  
  console.log("Not Old Enough");

}


var age = 20;

if(age <= 20 && firstName != "Bruce"){ //Compound If Statements
  
  oldEnough = false;
  
} else{
  
  oldEnough = true;
  
}
  

if(oldEnough == true){  // More Code Here
  
  console.log("You can go on the Rollar Coaster");

} else{
  
  console.log("Go the hell home!");

}

// Functions *****************************************************************
// Functions = Reusable chunks of code that can be called at any time
// Methods = Functions that belong to Objects
// Objects = Collection of Properties and Methods

function dynamicGreeting(){
  
  var now = new Date(); // Create built-in date object
  var time = now.getHours(); // Extract the Hours from the date
  
    if(time < 12){
      alert("Good Morning");
    }
    if(time == 12){
      alert("Time to Eat Lunch at Luna Park");
    }
    if(time > 12){
      alert("Good Evening " + now.toLocaleString());
    }
}

dynamicGreeting();
