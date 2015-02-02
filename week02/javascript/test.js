// This is a single line Comment in Javascript

/*     

This is a Block Comment 

*/

// Variables

/*

"=" Is an Assignment Operator

*/

// String Type of Data
var userName;
userName = "Bruce";

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

//console.log(theQuote); // Shows the value of "theQuote" to the console when it reloads
//console.log(theQuoteEscape); // Shows the value of "theQuote" to the console when it reloads
//console.log(theQuoteEscapeII); // Shows the value of "theQuote" to the console when it reloads
// Target and Replace Elements on the Page, Bookmark, Find Element (ID) on the HTML Page

var paragraphRef = document.getElementById("replace");
paragraphRef.innerHTML = message;

// Number

var level = 1;
var lives = 3;
var ssNumber = 3333334444;
console.log(level);