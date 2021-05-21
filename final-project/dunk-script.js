$(document).ready(function() {

    $("#dunk-time").click(dunk);

    function dunk() {
        // $("#ropeBucket").addClass("dunking");
        $("#rope").addClass("dunking");
        $("#bucket").addClass("dunking");
        $("#dunk-time").addClass("byebye");
        $("#dunk-time").css("cursor","default")



        $("#secret-button").addClass("dunked");
        $("#secret-button").css({"display":"block",
            "animation": "materialize 9s ease-in-out 0s 1", 
            "opacity": "1", "cursor":"pointer"});

    }
});