$(document).ready(function () {

    //Variables= character containers
    var luke = [
        health = 100,
        baseAttack = 5,
        counterAttack = 15,
    ];
    var vader = [
        health = 100,
        baseAttack = 5,
        counterAttack = 15,
    ];
    var bane = [
        health = 100,
        baseAttack = 5,
        counterAttack = 15,
    ];
    var revan = [
        health = 100,
        baseAttack = 5,
        counterAttack = 15,
    ];
    //character selection Matrix
     $("#Luke").on("click", function(){

         $("#Luke").appendTo("#player");
         $("#Vader").appendTo("#enemies");
         $("#Bane").appendTo("#enemies");
         $("#Revan").appendTo("#enemies");
     });
     $("#Vader").on("click", function(){

        $("#Vader").appendTo("#player");
        $("#Luke").appendTo("#enemies");
        $("#Bane").appendTo("#enemies");
        $("#Revan").appendTo("#enemies");
    });
    $("#Bane").on("click", function(){

        $("#Bane").appendTo("#player");
        $("#Vader").appendTo("#enemies");
        $("#Luke").appendTo("#enemies");
        $("#Revan").appendTo("#enemies");
    });
    $("#Revan").on("click", function(){

        $("#Revan").appendTo("#player");
        $("#Vader").appendTo("#enemies");
        $("#Bane").appendTo("#enemies");
        $("#Luke").appendTo("#enemies");
    });



    

    



    // $(".Character").on("click", function () {
    //     $("#Luke").appendTo("#player")
    // });

    // $(".Character").on("click", function () {
    //     $("#Vader").appendTo("#enemies")
    // });

    // $(".Character").on("click", function () {
    //     $("#Bane").appendTo("#enemies")
    // });

    // $(".Character").on("click", function () {
    //     $("#Revan").appendTo("#enemies")
    // });


});