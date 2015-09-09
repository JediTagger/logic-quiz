/*
  Create an `xmas` function that accepts an integer
  as an argument. The function should create a Christmas
  tree out of asterisks in the browser console. The 
  height is whatever is passed as an argument to the 
  function.
  
  Example output with argument value of 5
  
            *
           ***
          *****
         *******
        *********
  
*/

// Create your function here. Make sure it takes the height argument.

function xmas(height) {
  var spaceCounter = height;
  var spaces = "";
  var stars = "*";
  for (var j = 0; j < height; j++) {
    spaceCounter -= 1;
    for (var i = 0; i < spaceCounter; i++) {
      spaces += " ";
    }
  console.log(spaces + stars);
  spaces = "";
  stars += "**";
  }
};

xmas(12);