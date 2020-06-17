//Game States
// "WIN" - Player robot has defeated all the enemy robots
//      * Fight all enemy robots
//      * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less | the game ends and all activity stops

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


window.alert("warning javascript is running!");

var playerName = "Viking";
var playerHealth = 50;
var playerAttack = 40;
var playerMoney = 10;

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
                    break;//ENEMY HAS DIED BREAK OUT OF THE FUNCTION CALL
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
                    break;//PLAYER IS DEAD BREAK OUT OF THE FUNCTION CALL
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
                    playerMoney = playerMoney - 10;
                    console.log(
                        "Viking has lost money from skipping battle and now has: " + playerMoney + " Rubles."
                    );
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


// function fight() {
//     window.alert("The fight has begun!");
//     console.log(
//         playerName + " has joined the battlefield!"        
//     );
// }//dont need semicolon at the end of declaring a function
var startGame = function(){
    for(var i = 0; i < enemyNamesArray.length; i++){
        if(playerHealth > 0){
            //let user know what round they are in 
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
            console.log(
                "Welcome to Robot Gladiators! Round " + ( i + 1 ) 
            );
            //pick new enemy to fight based on the index number of the enemyNames array
            var pickedEnemyName = enemyNamesArray[i];
            //reset enemyHealth before starting new fight
            enemyHealth = 50;
            //use debugger to pause the script from running and check what's going on at that moment in the code
            //debugger;
            //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    //play again
    //startGame(); //when placed here calling a function inside its own function call causes an infinite loop
}
