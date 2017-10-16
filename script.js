
//  Exercise 1   //
//Get number from user
var maxval = prompt("Enter a number")
//create a variable to store total
var total = 0
//For all numbers up to user input add to total.
for (i=0; i<=maxval; i++){
  total = total + i;
} console.log(total);


//Exercise 2  //
var userInput = prompt("do you want to play");
var userWord = ""
do {
    userWord += prompt("Enter a word");
  //  userWord = userWord + prompt("Enter a Word");
   userInput = prompt("do you want to play again?");
}while (userInput == "yes");
console.log(userWord);



//Exercise 3 //
var userPrint = prompt("would you like to print your name?")
var message = 'Hello. My name is Adam'

while (userPrint == "yes") {
  console.log(message);
  message = message + "!"
  userPrint = prompt("would you like to print this again?")
}


// Exercise 4 //
var userInput = prompt("What time of day is it?");
if (userInput == "morning") {
console.log("Since it is morning, you should be eating breakfast. We suggest eggs and toast")
}
if (userInput =="noon"){
  console.log("Since it is noon, you should be eating lunch. We suggest a salad.")
}

if (userInput =="evening") {
  console.log("Since it is evening, you should be eating dinner. We suggest chicken and rice.")
}
