//Game States
// "WIN" - Player robot has defeated all the enemy robots
//      * Fight all enemy robots
//      * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less


window.alert("warning javascript is running!");

var playerName = "Viking";
var playerHealth = 30;
var playerAttack = 12;
var playerMoney = 10;

var enemyNamesArray = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 13;
var enemyAttack = 12;


var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        //IF USER TYPES fight OR FIGHT in the promptFight
        if(promptFight === "fight" || promptFight === "FIGHT"){
                //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
            enemyHealth = enemyHealth - playerAttack;//CALCULATE THE PLAYER ATTACK AGAINST ENEMY HEALTH
            // Log a resulting message to the console so we know that it worked.
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );
    
            //CHECK ENEMY HEALTH
            if(enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                console.log(
                    enemyName + " has died!"
                );
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
                console.log(
                    enemyName + " still has " + enemyHealth + " health left."
                );
            }

            playerHealth = playerHealth - enemyAttack;//CALCULATE ENEMY ATTACK AGAINST PLAYER HEALTH
            //Log the enemy attacking the player
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );
            //CHECK playerHealth
            if(playerHealth <= 0) {
                window.alert(playerName + " has died!");
                console.log(
                    playerName + " has died!"
                );
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
            //if no (confirmSkip = false), ask question again by running fight() again
            } else {
                fight();
            }
        } else {//IF ANYTHING ELSE IS TYPED IN THE promptFight BESIDES fight OR skip
            window.alert("You need to pick a valid option. Try again!");
        }
};


// function fight() {
//     window.alert("The fight has begun!");
//     console.log(
//         playerName + " has joined the battlefield!"        
//     );
// }//dont need semicolon at the end of declaring a function

for(var i = 0; i < enemyNamesArray.length; i++){
    fight(enemyNamesArray[i]);
}   
