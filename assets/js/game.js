

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


/*PSEUDOCODE IDEAS*/
// Game States
// "WIN" - Player robot has defeated all enemy robots
//      * Fight all enemy robots
//      * Defeat each enemy robot        
// "LOSE" - Player robot's health is zero or less





window.alert("This is an alert! JavaScript is running!");



var playerMoney = 10;
//prompting input from user to enter a string for the variable playerName
//uncomment this and comment out the player name variable below if you want to choose a robots name
/* 
var playerName = window.prompt("what is your robot's name?");
console.log("Our robot's name is " + playerName); 
*/

/*  
*/ 
var playerName = "Viking" //declare the name without prompting
var playerHealth = 100;
var playerAttack = 10;

window.alert(playerName + " enters the battlefield!");//MUST GO BELOW VARIABLE TO DISPLAY THE VALUE, IF NOT DEFINED FIRST WILL GIVE AN ERROR CANT PRINT VALUE

//then + (add) the value of the playerName string that we entered in the prompt
//you can also log multiple values at once like this
console.log(
    "Your Name: " + playerName, "Player Attack: " + playerAttack, "Player Health: " + playerHealth
    );

var enemyNamesArray = ["Roborto", " Amy Android", " Robo Trumble"];
//window alert the robot names according to array number 
window.alert(enemyNamesArray [0] + ", " + enemyNamesArray [1] + ", and" + enemyNamesArray [2] + " have all entered the battlefield!")
//console log the robot names according to array number
console.log(
    enemyNamesArray.length + " - this is the number of robot names in the array"
    );


var enemyHealth = 50;
var enemyAttack = 12;

/*
function fight(){
    window.alert("Welcome to Robot Gladiatoaaars!");
}
*/
//no semicolon when declaring functions!!!!!
//this line above will not execute if the line below variable is declared simultaniously!!


//function expression this takes precedence!!!
//declaring the function expression whenever we want to call function fight();
//DEFINING THE PARAMETER enemyName HERE WHICH TAKES ON THE VALUE OF THE ARGUMENT enemyNamesArray[i] WHEN WE CALL THE FUNCTION BELOW THIS DECLARATION

var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators!");
    //after welcome prompt the user to do the fight or skip the battle
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP to choose.");

    //IF USER INPUTS fight OR (|| these two symbols side by side mean OR) FIGHT YOU ATTACK FIRST!!
    if (promptFight === "fight" || promptFight === "FIGHT"){
        //remove enemy's health by subtracting the amount set in the playerAttack variable.
        enemyHealth = enemyHealth - playerAttack;//change variable values because player is attacking
        window.alert("YOU ATTACK!!!");//WINDOW ALERT YOU ATACK!!!
        window.alert(enemyName + " takes a critical hit!!!")
        console.log(//RESULT OF ATTACK PRINTED INTO CONSOLE
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );//END CONSOLE LOG OF YOUR ATTACK

        //check enemy's health
        if (enemyHealth <= 0) {
            //WINDOW ALERT PRINT STRING! PRESS OK
            window.alert(enemyName + " has died!");
            //LOG THIS STRING IN THE CONSOLE
            console.log(//RESULT OF ENEMY DYING
                enemyName + " has died!"
            );//END CONSOLE LOG OF enemyName has died!
        } else {// OR ELSE PRINT THIS STRING IN THE PROMPT THE ENEMY IS STILL ALIVE SHOW ENEMY HEALTH
            
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
            console.log(
                enemyName + " still has " + enemyHealth + " health left."
            );
        }
        //ENEMY ATTACKS!!!
        window.alert(enemyName + " ATTACKS!! WATCH OUT!!");
        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        window.alert(enemyName + " JUST BARELY SKIMS YOUR CHEEK!!")
        console.log(
            "Viking's health has decreased to " + playerHealth
        );
        //check player's health
        if (playerHealth <= 0){
            //IF YOUR PLAYER LESS THAN ZERO HEALTH WINDOW ALERT THIS STRING PRESS OK
            window.alert(playerName + " has died!");
            console.log(
                playerName + " has died!"
            );
        } else {//ELSE WINDOW ALERT THIS STRING SHOW PLAYER HEALTH
            window.alert(playerName + " still has " + playerHealth + " health left.");
            console.log(
                playerName + " still has " + playerHealth + " health left."
                );
                //IF PLAYER IS STILL ALIVE HEALTH GREATER THAN ZERO
                //PRINT TO CONSOLE THIS STRING MESSAGE!
                //check to see if the value of the playerHealth variable is greater than 0
            }
        if (playerHealth > 0) {
            console.log(
                "Your player is still alive!"
            ); 
        }
    //IF USER TYPES SKIP AT THE BEGINNING FIGHT OR SKIP PROMPT WINDOW SCREEN PRINT PLAYER HAS CHOSEN TO SKIP THE FIGHT
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        window.alert(playerName + " has chosen to skip the fight!");
        console.log(
            playerName + " has chosen to skip the fight!"
        );
        //ASK THE USER TO CONFIRM OR DENY THEIR SKIP CHOICE BOOLEAN TRUE OR FALSE/OK OR CANCEL
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip){
            window.alert(playerName + " has decided to skip this fight. what a noob, " + playerName + " lost money");
            //subtract money from playerMoney variable for skipping
            playerMoney = playerMoney -2;
            console.log(
                playerName + " now has " + playerMoney + " Rubles."
            );
        }
        //IF NO (false), welcome the player to robot gladiators and then prompt the question again by running fight(); again
        else {
            fight();
        }
    //IF USER TYPES ANYTHING OTHER THAN THE TWO CHOICES WINDOW ALERT THIS MESSAGE!
    } else {
        window.alert("You need to pick a valid option. Try again!");
        fight();
    }   
};//END VARIABLE EXPRESSION DECLARATION OF THE FUNCTION EXPRESSION CALL fight();
// PLEASE NOTE end the curly brace with a semicolon when declaring variable expressions!!!!

//NOW SINCE WE DECLARED THE FUNCTION ABOVE THAT HAS THE ARGUMENT INSIDE THE FUNCTION WE WILL FIGHT EACH ROBOT IN A ROW IN THE INCREMENTING ARRAY INDEX NUMBER LOOP UNTIL WE ATTACK THE LAST ROBOT
for(var i = 0; i < enemyNamesArray.length; i++){
    //passing the argument WHICH REPLACES enemyName which is defined in the function expression above BUT ONLY FOR THE SCOPE OF THE FUNCTION fight(enemyName); ITSELF
    //RIGHT HERE WE ARE PASSING AN ARGUMENT into the function fight(enemyName); with the string values inside enemyNamesArray[i] which is incrementing up in the loop so we fight each robot in a row from index 0 to 1 to 2 and stopping there. 
    //THIS IS TO DEFINE WHAT WE WANT THE VALUE OF THE PARAMETER enemyName TO ACTUALLY BE FOR THE DURATION OF THE FUNCTION
    //REGARDLESS OF WHAT IS INSIDE THE () WHEN DEFINING THE FUNCTION EXPRESSION YOU CAN PASS AN ARGUMENT TO DEFINE WHAT VALUE YOU WANT YOUR PARAMETER TO BE INSIDE THE DEFINED FUNCTION EXPRESSION ABOVE

    fight(enemyNamesArray[i]);
}


