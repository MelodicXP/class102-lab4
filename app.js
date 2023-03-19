//First version of code without 'while loop'
/*function userInterest () {
  let interestBlackHoles = prompt("Hello space traveler! Are you interested in the awesomeness of black holes? (type 'y' for yes or 'n' for no)");
  if (interestBlackHoles == 'y'){
    let theirName = prompt("What's your name traveler!");
      if (theirName == "") {
        theirName = prompt("You did not enter your name traveler! Please enter your name");
      } 
    document.write ("Welcome " + theirName + "! Below is some information for you to explore the wonders of black holes!");   
  } else if (interestBlackHoles == 'n') {
    alert("Sorry to hear that! Feel free to check out this website for info on black holes. You may find it interesting!");

  } else {
    alert("Please enter a valid response ('y' for yes or 'n' for no");
  }
}*/


function userInterest () { 
 let interestBlackHoles = prompt("Hello space traveler! Are you interested in the awesomeness of black holes? (type 'y' for yes or 'n' for no)");
   while (interestBlackHoles != 'y' && interestBlackHoles != 'n') { //the '&&' means both conditions must evaluate to 'true' to continue
    prompt("Please enter a valid response! Press 'y' for yes or 'n' for no"); 
   }
   
   if (interestBlackHoles == 'y') {
    let theirName = prompt("What's your name traveler!");
    while (theirName == "") { // had to use '==' so that it could  compare if nothing entered.
      theirName = prompt("You did not enter your name traveler! Please enter your name");
    }
    document.write ("Welcome " + theirName + "! Below is some information for you to explore the wonders of black holes!");
   } else if (interestBlackHoles == 'n') {
    alert("Sorry to hear that! Feel free to check out this website for info on black holes. You may find it interesting!");
   }
}   

function changeBackgroundColor() {
    let text = "Press Ok to suck away the background color! Or press cancel to save it!";
    let color = "#000000";
    if (confirm(text) == true) {
        text = "Background color has been sucked away!";
        color = "#770000";   
    } else {
        text = "You have chosen to save the background color!";
        color ="#000000";
    }
    document.getElementById("decision-of-colors").innerHTML = text;
    document.body.style.background = color;  
 }

 function userRating() {
  let text = prompt("How many stars would you rate black holes! Enter a number between 1 thru 5. (5 is the highest, 1 is the lowest)");
 
  while (text != '1' && text != '2' && text != '3' && text != '4' && text != '5') {
    text = prompt ("Please enter a number 1 thru 5!");
  }

  for (let i = 0; i < text; i++){
      document.getElementById('stars').innerHTML += //finally got image to appear in html and repeat (by using '+=' symbol)
      " <img src = 'https://images.unsplash.com/photo-1542665174-31db64d7e0e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN0YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt = 'picture of star looking like black hole'>";   
    }    
}
 

//Results from researching online on Google, (code examples)
/* var paragraph = document.getElementById(paragraph_id);
    for (var i = 0; i < how_many_times; i++) {
        paragraph.innerHTML += "<img src='location_of_your_photo_file/file_name.jpg'";
    } */

/*tried but opens multiple images in a separate window.
document.write ("<img src='linkplaceholder' alt='placeholder' />")*/

/*function myFunction() {
  const element = document.getElementById("demo");
  element.innerHTML += element.innerHTML;*/

/*function myfunction(){
  document.getElementById('imagebox').innerHTML = 
  " <img src = 'https://dummyimage.com/200x100/000/fff' alt = 'infinix'>";
  }*/ 
  
