var luke =
{
    name: "Luke",
    hitPoints: 100,
    attackPower: 100,
    counterAttackPower: 10,
    playerIMG: 'assets/images/luke.jpg',
    chosen: false,
    opponent: false
};
var bane =
{
    name: "Bane",
    hitPoints: 80,
    attackPower: 150,
    counterAttackPower: 10,
    playerIMG: 'assets/images/bane.jpg',
    chosen: false,
    opponent: false
};
var revan =
{
    name: "Revan",
    hitPoints: 130,
    attackPower: 100,
    counterAttackPower: 10,
    playerIMG: 'assets/images/revan.jpg',
    chosen: false,
    opponent: false
}
var vader =
{
    name: "Vader",
    hitPoints: 200,
    attackPower: 40,
    counterAttackPower: 10,
    playerIMG: 'assets/images/vader.jpeg',
    chosen: false,
    opponent: false
}

var isCharaterChosen = false;
var isEnemyChosen = false;

var character = "";
var opponent = "";
var jediChosen = "";
var roundsWon = 0;

function characterArray() {

    $("#character-row").append(`<button id="Luke" type="button" class="btn btn-outline-success btn-primary btn-lg Character" value="Luke"><h3>${luke.name}</h3><a href=""><img src= ${luke.playerIMG}></a><h5 id=health>${luke.hitPoints}</h5></button>`);
    $("#character-row").append(`<button id="Bane" type="button" class="btn btn-outline-success btn-primary btn-lg Character" value="Bane"><h3>${bane.name}</h3><a href=""><img src=${bane.playerIMG}></a><h5 id=health>${bane.hitPoints}</h5></button>`);
    $("#character-row").append(`<button id="Vader" type="button" class="btn btn-outline-success btn-primary btn-lg Character" value="Vader"><h3>${vader.name}</h3><a href=""><img src=${vader.playerIMG}></a><h5 id=health>${vader.hitPoints}</h5></button>`);
    $("#character-row").append(`<button id="Revan" type="button" class="btn btn-outline-success btn-primary btn-lg Character" value="Revan"><h3>${revan.name}</h3><a href=""><img src=${revan.playerIMG}></a><h5 id=health>${revan.hitPoints}</h5></button>`);


}

//i tried doing an array at first but i ended up never being able to reference my array so i dropped it in favor of just simple object manipultion using functions
//Populate Players
// for (var i = 0; i < characterArray.length; i++) {

//     var counterAttackRef = characterArray[i].counterAttackPower;// tracks attack power for selected character 
//     var characterRef = "character" + (i); //establish which player
//     var healthRef = characterArray[i].hitPoints;// track health 

//     var characterWrapper = $("<button>"); //establish wrapper div
//     characterWrapper.addClass("player-wrapper");
//     characterWrapper.addClass("btn btn-outline-success btn-primary btn-lg")
//     characterWrapper.addClass("Ready-" + characterRef);
//     characterWrapper.attr("player-ref", characterRef);
//     characterWrapper.attr("id", characterArray[i].name);
//     characterWrapper.attr("health", characterArray[i].hitPoints);
//     characterWrapper.addClass(characterRef);

//     var playerName = $("<div>");
//     playerName.addClass("player-name");
//     playerName.append("<p3 class='name-tag'>" + characterArray[i].name + "</p3>");
//     characterWrapper.append(playerName);

//     var character = $("<img>");
//     character.addClass("player-image");
//     character.addClass(characterRef);

//     character.attr("src", characterArray[i].playerIMG);
//     characterWrapper.append(character);

//     var playerHP = $("<div>");
//     playerHP.addClass("player-HP");
//     playerHP.addClass(healthRef);
//     playerHP.text(characterArray[i].hitPoints);
//     characterWrapper.append(playerHP);

//     $("#character-row").append(characterWrapper);

//End Players
characterArray();
//select
$(".Character").on("click", function () {

    jediChosen = $(this).attr("id")
    if (!isCharaterChosen && !isEnemyChosen) {
        characterSelectionMatrix();
    } else if (isCharaterChosen && !isEnemyChosen) {
        opponent = $(this).attr("name");
        enemySelect();
    };



})

function characterSelectionMatrix() {
    isCharaterChosen = true;
    character = jediChosen;
    if (jediChosen === "Luke") {
        character = luke;
        $("#Luke").appendTo("#player");
        $("#Vader").appendTo("#enemies");
        $("#Bane").appendTo("#enemies");
        $("#Revan").appendTo("#enemies");
    }
    else if (jediChosen === "Revan") {
        character = revan;
        $("#Revan").appendTo("#player");
        $("#Luke").appendTo("#enemies");
        $("#Bane").appendTo("#enemies");
        $("#Vader").appendTo("#enemies");
    }
    else if (jediChosen === "Bane") {
        character = bane;
        $("#Bane").appendTo("#player");
        $("#Luke").appendTo("#enemies");
        $("#Vader").appendTo("#enemies");
        $("#Revan").appendTo("#enemies");
    }
    else if (jediChosen === "Vader") {
        character = vader;
        $("#Vader").appendTo("#player");
        $("#Luke").appendTo("#enemies");
        $("#Bane").appendTo("#enemies");
        $("#Revan").appendTo("#enemies");
    }
}


function enemySelect() {
    isEnemyChosen = true;
    if (jediChosen === "Luke") {
        opponent = luke;
        $("#Luke").addClass("bad");
        $("#Luke").appendTo("#deffend");
    }
    else if (jediChosen === "Vader") {
        opponent = vader;
        $("#Vader").addClass("bad");
        $("#Vader").appendTo("#deffend");
    }
    else if (jediChosen === "Bane") {
        opponent = bane;
        $("#Bane").addClass("bad");
        $("#Bane").appendTo("#deffend");
    }
    else if (jediChosen === "Revan") {
        opponent = revan;
        $("h5").addClass("bad");

        $("#Revan").appendTo("#deffend");
    }
}
function attack() {
    opponent.hitPoints -= 20;
    healthRef = opponent.hitPoints;
    var health = ("" + opponent) + "-health"
    console.log(health);
    // $("" + opponent + "-health").text(opponent.hitPoints);

    console.log(healthRef);
    // healthRef -= 20;
    $(".bad").text(healthRef);
    console.log(healthRef);


}
function damage() {


}
$("#attack").on("click", function () {
    if (isCharaterChosen && isEnemyChosen) {
        attack();
    }
    else if (!isCharaterChosen && !isEnemyChosen) {
        alert("Select Character");
    }
    else if (isCharaterChosen && !isEnemyChosen) {
        alert("Select Enemy");
    }
})
    //reset state or clean state 






