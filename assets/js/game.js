//Game States
// startGame()
// "WIN" - Player robot has defeated all the enemy robots
//      * Fight all enemy robots
//      * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less | the game ends and all activity stops

//fight()
//  * make a fight sequence that loops through each robot until
//  player dies or robot dies

//endGame()
//  * alert player's total stats
//  * asks the player if they want to play again
//  * if yes call startGame() to restart the game
// - After skipping or defeating an enemy while theres more robots to fight still
//      * ask player if they want to "shop"
//      * if no continue as normal
//      * if yes call the shop() function
//      * in shop(), ask player if they want to refill health, upgrade attack, or leave the shop
//      * if refill, subtract money points from the player and increase health
//      * if upgrade, subtract money points from the play and increase power
//      * if leave, alert goodbye and exit the function
//      * if any other invalid option, call shop() again
//
//randomnumber()
//  * create function to generate random numbers for health and attacks
//  of the players and enemies


//caution! javascript started!
window.alert("Остарожно!! Джава-скрипт начался!");

//THESE GLOBAL VARIABLES CAN CHANGE WHEN DECLARED AGAIN INSIDE A FUNCTION
//declaring global variables for player name, health, and attack
var playerName = "Viking";
var playerHealth = 50;
var playerAttack = 40;
var playerMoney = 10;

//declaring global variables for enemy names health and attack
var enemyNamesArray = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 13;
var enemyAttack = 12;




var fight = function(enemyName) {
    //repeat and execute as long as the enemy robot is alive AND if the player robot is alive
    while(enemyHealth > 0 && playerHealth > 0){
        //ASK USER IF THEY WANT TO FIGHT OR SKIP
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        //IF USER TYPES fight OR FIGHT in the promptFight
        if(promptFight === "fight" || promptFight === "FIGHT"){
            console.log(enemyName + " has approached the battle!");
            console.log(enemyName + "'s stats:");
            console.log("Attack: " + enemyAttack);
            console.log("Health: " + enemyHealth);
            //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
            //creating variable for player damage to be random against the enemy
            var damage = randomNumber(playerAttack -3, playerAttack);
            enemyHealth = Math.max(0, enemyHealth - damage);//CALCULATE THE PLAYER ATTACK AGAINST ENEMY HEALTH this will prevent negative health number values from appearing
            // Log a resulting message to the console so we know that it worked.
            console.log(playerName + " dealt " + damage + " damage!")
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );
    
            //CHECK ENEMY HEALTH
            if(enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                console.log(
                    enemyName + " has died!"
                );
                playerMoney = playerMoney + 10;
                console.log("Viking has won money from winning the battle and now has: " + playerMoney + " Rubles.");
                break;//ENEMY HAS DIED BREAK OUT OF THE IF ELSE STATEMENT
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
                console.log(
                    enemyName + " still has " + enemyHealth + " health left."
                );
            }
            //ENEMY ATTACK
            var damage = randomNumber(enemyAttack -3, enemyAttack);
            playerHealth = Math.max(0, playerHealth - damage);//CALCULATE ENEMY ATTACK AGAINST PLAYER HEALTH NO NEGATIVE NUMBERS
            //Log the enemy attacking the player
            console.log(enemyName + " dealt " + damage + " damage!")
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );
            //CHECK playerHealth
            if(playerHealth <= 0) {
                window.alert(playerName + " has died!");
                console.log(
                    playerName + " has died!"
                );
                break;//PLAYER IS DEAD BREAK OUT OF THE IF ELSE STATEMENT
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
                console.log(
                    playerName + " still has " + playerHealth + " health left."
                );
            }
        //IF USER TYPES skip OR SKIP in the promptFight 
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm that the user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes (confirmSkip = true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight!");
                console.log(
                    playerName + " has chosen to skip the fight"
                );
                playerMoney = Math.max(0, playerMoney - 10); //MONEY NEVER GOES NEGATIVE IN THIS CASE
                console.log("Viking has lost money from skipping battle and now has: " + playerMoney + " Rubles.");
                break;
            //if no (confirmSkip = false), ask question again by running fight() again
            } else {
                fight();
            }
        } else {//IF ANYTHING ELSE IS TYPED IN THE promptFight BESIDES fight OR skip
            window.alert("You need to pick a valid option. Try again!");
        }
    }//END OF WHILE LOOP ENEMY'S HEALTH IS NOT GREATER THAN ZERO
};

// var fight = function(enemyName) {
//     while (playerHealth > 0 && enemyHealth > 0) {
//       // ask user if they'd liked to fight or run
//       var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
//       // if user picks "skip" confirm and then stop the loop
//       if (promptFight === "skip" || promptFight === "SKIP") {
//         // confirm user wants to skip
//         var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
//         // if yes (true), leave fight
//         if (confirmSkip) {
//           window.alert(playerName + ' has decided to skip this fight. Goodbye!');
//           // subtract money from playerMoney for skipping
//           playerMoney = playerMoney - 10;
//           console.log("playerMoney", playerMoney)
//           break;
//         }
//       }
  
//       // remove enemy's health by subtracting the amount set in the playerAttack variable
//       enemyHealth = enemyHealth - playerAttack;
//       console.log(
//         playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
//       );
  
//       // check enemy's health
//       if (enemyHealth <= 0) {
//         window.alert(enemyName + ' has died!');
  
//         // award player money for winning
//         playerMoney = playerMoney + 20;
  
//         // leave while() loop since enemy is dead
//         break;
//       } else {
//         window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
//       }
  
//       // remove players's health by subtracting the amount set in the enemyAttack variable
//       playerHealth = playerHealth - enemyAttack;
//       console.log(
//         enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
//       );
  
//       // check player's health
//       if (playerHealth <= 0) {
//         window.alert(playerName + ' has died!');
//         // leave while() loop if player is dead
//         break;
//       } else {
//         window.alert(playerName + ' still has ' + playerHealth + ' health left.');
//       }
//     }
//   };

// function fight() {
//     window.alert("The fight has begun!");
//     console.log(
//         playerName + " has joined the battlefield!"        
//     );
// }//dont need semicolon at the end of a function declaration will need for function expressions though!!!

var startGame = function(){
    playerHealth = 100;
    playerAttack = 40;
    playerMoney = 10;
    console.log(playerName + " has entered the battlefield!");
    console.log(playerName + "'s current stats: ");
    console.log("Attack: " + playerAttack);
    console.log("Health: " + playerHealth);
    console.log("Money: " + playerMoney);
    for(var i = 0; i < enemyNamesArray.length; i++){
        if(playerHealth > 0){
            //let user know what round they are in 
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
            console.log(
                "Welcome to Robot Gladiators! Round " + ( i + 1 ) 
            );
            //pick new enemy to fight based on the index number of the enemyNames array
            var pickedEnemyName = enemyNamesArray[i];
            //reset enemyHealth to a random number between 0 and 59.xx before starting new fight
            enemyHealth = randomNumber(40, 60);
            //use debugger to pause the script from running and check what's going on at that moment in the code
            //debugger;
            //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);

            //if we're not at the last enemy in the array
            //ensures that shop() is called after every fight
            //but only if the loop iterator, i, still has room to increment
            // if i < the last index number in the array...basically
            if (i < enemyNamesArray.length - 1) {
                shop();
            }
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    //play again
    //startGame(); //when placed here calling a function inside its own function call causes an infinite loop
    //after all the robots are dead or your die, enter endGame() function
    endGame();//this enters the endGame sequence to choose if you want to play again or quit playing
};

var endGame = function(){
    window.alert("The game has ended. Let's see how you did!")
    console.log(
        "The game has ended. Let's see how you did!"
        );
    //if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You have won a total of " + playerMoney + " Rubles.");
        console.log("Great job, you've survived the game! Here are your final character stats!");
        console.log(playerName + "'s current stats: ");
        console.log("Attack: " + playerAttack);
        console.log("Health: " + playerHealth);
        console.log("Money: " + playerMoney);
    } else {
        window.alert("You've lost your robot in battle!");
        console.log(
            "You've lost your robot in battle!"
        );
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");
    //if user confirms yes OK playAgainConfirm = true
    if (playAgainConfirm) {
        //restart game
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
        console.log(
            "Thank you for playing Robot Gladiators! Come back soon!"
        );
    }
};//after the else statement there is no more instruction so the function ends and the game stops

var shop = function(){
    console.log(playerName + " entered the shop");
    // ask the player what they would like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'refill or REFILL', 'upgrade or UPGRADE', or 'leave or LEAVE' to make a choice."
    );
    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL"://new case same result
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 Rubles.");
                // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
                console.log(playerName + "'s health is now: " + playerHealth);
                console.log(playerName + " has left the shop.")
            } else {
                window.alert("You don't have enough money!");
                console.log("You don't have enough money!");
                console.log(playerName + " has left the shop.")
            }
            break;
        case "upgrade":
        case "UPGRADE"://new case same result
            if ( playerMoney >= 7){
                window.alert("Upgrading player's attack by 6 for 7 Rubles.");
                // increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney -7;
                console.log(playerName + "'s attack increased to: " + playerAttack)
                console.log(playerName + " has left the shop.")
            } else {
                window.alert("You don't have enough money!");
                console.log("You don't have enough money!");
                console.log(playerName + " has left the shop.")
            }
            break;
        case "leave":
        case "LEAVE"://new case same result
            window.alert("Leaving the shop.");
            console.log(playerName + " has left the shop.")
            //do nothing here so function ends
            break;
    default:
        window.alert("You did not pick a valid option. Try again.");
        console.log("You did not pick a valid option. Try again.");
        //call shop() again to force player to pick a valid option
        shop();
        break;
    }
}

//create function to execute to generate a number
//assigning parameters to the function min, and max
var randomNumber = function (min, max){
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};

