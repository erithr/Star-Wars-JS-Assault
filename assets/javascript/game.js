$(document).ready(function () {
    // my variables set as objects
    var luke =
    {
        name: "Luke",
        hitPoints: 150,
        attackPower: 20,
        counterAttackPower: 15,
        playerIMG: 'assets/images/luke.jpg',
        chosen: false,
        opponent: false
    };
    var bane =
    {
        name: "Bane",
        hitPoints: 140,
        attackPower: 50,
        counterAttackPower: 30,
        playerIMG: 'assets/images/bane.jpg',
        chosen: false,
        opponent: false
    };
    var revan =
    {
        name: "Revan",
        hitPoints: 100,
        attackPower: 30,
        counterAttackPower: 40,
        playerIMG: 'assets/images/revan.jpg',
        chosen: false,
        opponent: false
    }
    var vader =
    {
        name: "Vader",
        hitPoints: 200,
        attackPower: 30,
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
    var enemyDefeated = 0;


    function characterArray() {

        $("#character-row").append(`<button id="Luke" type="button" class="btn btn-outline-success btn-primary btn-lg Character" value="Luke"><h3>${luke.name}</h3><a href=""><img src= ${luke.playerIMG}></a><h6 id=luke-health>${luke.hitPoints}</h6></button>`);
        $("#character-row").append(`<button id="Bane" type="button" class="btn btn-outline-success btn-primary btn-lg Character" value="Bane"><h3>${bane.name}</h3><a href=""><img src=${bane.playerIMG}></a><h6 id=bane-health>${bane.hitPoints}</h6></button>`);
        $("#character-row").append(`<button id="Vader" type="button" class="btn btn-outline-success btn-primary btn-lg Character" value="Vader"><h3>${vader.name}</h3><a href=""><img src=${vader.playerIMG}></a><h6 id=vader-health>${vader.hitPoints}</h6></button>`);
        $("#character-row").append(`<button id="Revan" type="button" class="btn btn-outline-success btn-primary btn-lg Character" value="Revan"><h3>${revan.name}</h3><a href=""><img src=${revan.playerIMG}></a><h6 id=revan-health>${revan.hitPoints}</h6></button>`);


    }

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
            $("#Revan").addClass("bad");

            $("#Revan").appendTo("#deffend");
        }
    }
    function attack() {
        opponent.hitPoints -= character.attackPower;
        character.hitPoints -= opponent.counterAttackPower;
        character.attackPower += 10;
        console.log(opponent.hitPoints);
        $("#results").html(`<p>You attacked ${opponent.name} for ${character.attackPower}</p><p>${opponent.name} attacked you back for ${opponent.counterAttackPower}`);
        updateWindowText();
        checkHealth();

    }

    function updateWindowText() {
        $("#attack-results").html(`<p>You attacked ${opponent.name} for ${character.attackPower}</p><p>${opponent.name} attacked you back for ${opponent.counterAttackPower}`);
        //Updates all the health of all the characters
        $("#revan-health").html(revan.hitPoints);
        $("#luke-health").html(luke.hitPoints);
        $("#bane-health").html(bane.hitPoints);
        $("#vader-health").html(vader.hitPoints);
    }

    // this function is to check the health of the player and the enemy and either end the game or delete the enemy and allow the user to select a new enemy 
    function checkHealth() {
        if (opponent.hitPoints < 0) {
            $("#attack-results").html(`<p>You Defeated ${opponent.name}!`);
            isEnemyChosen = false;
            $("#deffend").empty();
            enemyDefeated++;
            checkWin();
        }
        if (character.hitPoints < 0) {
            alert("You Lose. The Force was not with you. Click OK to try again.");
            window.location.reload(true);
        }
        console.log(opponent);


    }
    function checkWin() {
        if (enemyDefeated === 3) {
            console.log("it worked");
            alert("You WIN!! Click OK to play again.");
            window.location.reload(true);
        }

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
    //need to make a reset option for when the game ends

});




