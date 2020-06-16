

//var playerName = "Viking" //declare the name without prompting

//window.alert(playerName); //display variable playerName in the window prompt
//console.log(playerName); //display the variable value/string in the console window

//enter the string into the variable playerName using the window prompt
//var playerName = window.prompt("What is your robot's name?");

//console.log("this logs a string, good for leaving yourself a message");

//print the string 10 + 10 equals
//console.log("10 + 10 equals");
//the line below this comment will do math and print to the console log the number 20
//console.log(10+10);

// variation of printing the string - viking the Robot is ready for battle!
//console.log("Viking the robot" + " is ready for battle!");





//prompting input from user to enter a string for the variable playerName
/*var playerName = window.prompt("what is your robot's name?");*/
//print to the console the string of characters in the quotation marks
//console.log("Our robot's name is " + playerName);

window.alert("This is an alert! JavaScript is running!");


    

var playerName = "Viking" //declare the name without prompting
var playerHealth = 100;
var playerAttack = 10;

//then + (add) the value of the playerName string that we entered in the prompt
//you can also log multiple values at once like this
console.log("Your Name: " + playerName, "Player Attack " + playerAttack, "Player Health: " + playerHealth);

var enemyName = "Roborto";
var enemyHealth = 3;
var enemyAttack = 12;
console.log("Enemy Name " + enemyName, "Enemy Attack " + enemyAttack, "Enemy Health " + enemyHealth);

function fight(){
    window.alert("Welcome to Robot Gladiatoaaars!");
}
//no semicolon when declaring functions!!!!!
//this line above will not execute if the line below variable is declared!!


//function expression this takes precedence!!!
var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    
    //subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth variable
    enemyHealth = enemyHealth - playerAttack;
    
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
            //check player's health
            if (playerHealth <= 0){
                window.alert(playerName + " has died!");
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
            
            //check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                console.log()
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
            // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
            playerHealth = playerHealth - enemyAttack;
        
    
    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
};
//end the curly brace with a semicolon when declaring variables!!!!
        
fight();
        
        if (playerHealth > 0) {
            console.log("Your player is still alive!"); 
        }
        //check to see if the value of the playerHealth variable is greater than 0