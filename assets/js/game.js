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
//CREATING AS OBJECTS IN NEW VARIABLE playerInfo
var playerInfo = 
{
    name: "Viking",
    health: 100,
    attack: 10,
    money: 10,
    reset: function(){
        this.health = 100;
        this.money = 10;
        this.attack = 40;
    },//COMMA!!!!!!!!!!!!!
    refillHealth: function(){
        if (this.money >= 7){
            window.alert("Refilling player's health by 20 for 7 Rubles.");
            this.health +=20;
            this.money -= 7;
            console.log(this.name + "'s health is now: " + this.health);
            console.log(this.name + " has left the shop.")
        } else {
            window.alert("You don't have enough money!");
            console.log(this.name + " has left the shop.")
        }
    },// comma here please
    upgradeAttack: function(){
        if (this.money >= 7){
            window.alert("Upgrading player's attack by 6 for 7 Rubles.");
            this.attack += 6;
            this.money -= 7;
            console.log(this.name + "'s attack is now: " + this.attack);
            console.log(this.name + " has left this shop.");
        } else {
            window.alert("You don't have enough money!");
            console.log(this.name + " has left the shop.");
        }
    }//NO COMMA HERE NOT ADDING ANYTHING ELSE 
};

//declaring global variables for enemy names health and attack
//CREATING AS OBJECTS IN NEW VARIABLE ARRAY enemyInfo instead of the enemyInfo
//NEED TO DEFINE randomNumber() BEFORE ITS CALLED FROM THIS GLOBAL OBJECT VARIABLE FOR USE...BUT I CAN CALL THE FUNCTION EXPRESSION FROM WITHIN ANOTHER FUNCTION REGARDLESS OF WHERE THE FUNCTION EXPRESSION IS PLACED
var randomNumber = function (min, max){
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};

var enemyInfo = 
[
    {
        name: "Roborto",
        attack: randomNumber(10,14),
        // shield: {
        //     type: "wood",
        //     strength: 10
        // }//MAYBE IN THE FUTURE enemyInfo.shield.type: "string" | enemyInfo.shield.strength: number etc.
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];
//NO LONGER USING THESE
//enemy health is now defined and generated randomly within functions since global variables can always change within functions
//var enemyHealth = 13;
//var enemy.attack = 12;



//argument (pickedEnemyObj) is passed into this parameter (enemy) insie the for loop when calling fight(pickedEnemyObj)
var fight = function(enemy) {
    //repeat and execute as long as the enemy robot is alive AND if the player robot is alive
    while(enemy.health > 0 && playerInfo.health > 0){
        //ASK USER IF THEY WANT TO FIGHT OR SKIP
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        //IF USER TYPES fight OR FIGHT in the promptFight
        if(promptFight === "fight" || promptFight === "FIGHT"){
            console.log(enemy.name + " has approached the battle!");
            console.log(enemy.name + "'s stats:");
            console.log("Attack: " + enemy.attack);
            console.log("Health: " + enemy.health);
            //Subtract the value of `playerInfo.attack` from the value of `enemy.health` and use that result to update the value in the `enemy.health` variable
            //creating variable for player damage to be random against the enemy
            var damage = randomNumber(playerInfo.attack -3, playerInfo.attack);
            enemy.health = Math.max(0, enemy.health - damage);//CALCULATE THE PLAYER ATTACK AGAINST ENEMY HEALTH this will prevent negative health number values from appearing
            // Log a resulting message to the console so we know that it worked.
            console.log(playerInfo.name + " dealt " + damage + " damage!")
            console.log(
                playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
            );
    
            //CHECK ENEMY HEALTH
            if(enemy.health <= 0) {
                window.alert(enemy.name + " has died!");
                console.log(
                    enemy.name + " has died!"
                );
                playerInfo.money = playerInfo.money + 10;
                console.log("Viking has won money from winning the battle and now has: " + playerInfo.money + " Rubles.");
                break;//ENEMY HAS DIED BREAK OUT OF THE IF ELSE STATEMENT
            } else {
                window.alert(enemy.name + " still has " + enemy.health + " health left.");
                console.log(
                    enemy.name + " still has " + enemy.health + " health left."
                );
            }
            //ENEMY ATTACK
            var damage = randomNumber(enemy.attack -3, enemy.attack);
            playerInfo.health = Math.max(0, playerInfo.health - damage);//CALCULATE ENEMY ATTACK AGAINST PLAYER HEALTH NO NEGATIVE NUMBERS
            //Log the enemy attacking the player
            console.log(enemy.name + " dealt " + damage + " damage!")
            console.log(
                enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
            );
            //CHECK playerInfo.health
            if(playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!");
                console.log(
                    playerInfo.name + " has died!"
                );
                break;//PLAYER IS DEAD BREAK OUT OF THE IF ELSE STATEMENT
            } else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
                console.log(
                    playerInfo.name + " still has " + playerInfo.health + " health left."
                );
            }
        //IF USER TYPES skip OR SKIP in the promptFight 
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm that the user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes (confirmSkip = true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has chosen to skip the fight!");
                console.log(
                    playerInfo.name + " has chosen to skip the fight"
                );
                playerInfo.money = Math.max(0, playerInfo.money - 10); //MONEY NEVER GOES NEGATIVE IN THIS CASE
                console.log("Viking has lost money from skipping battle and now has: " + playerInfo.money + " Rubles.");
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


var startGame = function(){
    //debugger;
    playerInfo.reset();
    // playerInfo.health = 100;
    // playerInfo.money = 10;
    // playerInfo.attack = 40;
    console.log(playerInfo.name + " has entered the battlefield!");
    console.log(playerInfo.name + "'s current stats: ");
    console.log("Attack: " + playerInfo.attack);
    console.log("Health: " + playerInfo.health);
    console.log("Money: " + playerInfo.money);

    for(var i = 0; i < enemyInfo.length; i++){
        if(playerInfo.health > 0){
            //let user know what round they are in 
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
            console.log(
                "Welcome to Robot Gladiators! Round " + ( i + 1 ) 
            );
            //pick new enemy to fight based on the index number of the enemys array
            var pickedEnemyObj = enemyInfo[i];
            //reset pickedEnemyObj.health to a random number between 0 and 59.xx before starting new fight
            pickedEnemyObj.health = randomNumber(40, 60);
            //use debugger to pause the script from running and check what's going on at that moment in the code
            //debugger;
            //pass the pickedEnemyObj variable's value into the fight function, where it will assume the value of the enemy parameter
            fight(pickedEnemyObj);

            //if we're not at the last enemy in the array
            //ensures that shop() is called after every fight
            //but only if the loop iterator, i, still has room to increment
            // if i < the last index number in the array...basically
            if (i < enemyInfo.length - 1) {
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
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You have won a total of " + playerInfo.money + " Rubles.");
        console.log("Great job, you've survived the game! Here are your final character stats!");
        console.log(playerInfo.name + "'s current stats: ");
        console.log("Attack: " + playerInfo.attack);
        console.log("Health: " + playerInfo.health);
        console.log("Money: " + playerInfo.money);
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
    console.log(playerInfo.name + " entered the shop");
    // ask the player what they would like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'refill or REFILL', 'upgrade or UPGRADE', or 'leave or LEAVE' to make a choice."
    );
    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL"://new case same result
            playerInfo.refillHealth();
            break;
        case "upgrade":
        case "UPGRADE"://new case same result
            playerInfo.upgradeAttack();
            break;
        case "leave":
        case "LEAVE"://new case same result
            window.alert("Leaving the shop.");
            console.log(playerInfo.name + " has left the shop.")
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
//assigning parameters to the randomNumber() function - min, and max


