let answerOne = 'y';
let answerTwo = 'n';
let theirName = "";

let interestBlackHoles = prompt("Hello space traveler! Are you interested in the awesomeness of black holes? (type 'y' for yes or 'n' for no)");

if (interestBlackHoles == answerOne){

  theirName = prompt("What's your name traveler!");
  document.write ("Welcome " + theirName + "! Below is some information for you to explore the wonders of black holes!");

} else if (interestBlackHoles == answerTwo) {
  alert("Sorry to hear that! Feel free to check out this website for info on black holes. You may find it interesting!");

} else {
  alert("Please enter a valid response ('y' for yes or 'n' for no");
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

