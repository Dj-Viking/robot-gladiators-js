window.alert("warning javascript is running!");

var playerName = "Viking";
var playerHealth = 30;
var playerAttack = 12;

var enemyName = "Roborto"
var enemyHealth = 13;
var enemyAttack = 12;


var fight = function() {
    window.alert("Welcome to Robot Gladiators!");

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
};


// function fight() {
//     window.alert("The fight has begun!");
//     console.log(
//         playerName + " has joined the battlefield!"        
//     );
// }//dont need semicolon at the end of declaring a function

fight();
