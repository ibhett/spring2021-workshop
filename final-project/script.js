$(document).ready(function() {
    
    $("h1").click(goCrazy);

    function goCrazy() {
        $("body").toggleClass("crazy");
        $("h2").toggleClass("crazy");
        $("#well_images").toggleClass("shudder");

        // $("#well_images").css("animation", "shudder 100ms linear 0s infinite normal running");
    }

    $("#well_images").hover(shudder);

    function shudder() {
        $("#well_images").toggleClass("shudder");

    }

    var balls = document.getElementsByClassName("ball");

    document.onmousemove = function() {
        var x = event.clientX * 100 / window.innerWidth + "%";
        var y = event.clientY * 100 / window.innerHeight + "%";

        for(var i=0;i<2;i++) {
            balls[i].style.left = x;
            balls[i].style.top = y;
            balls[i].style.transform = "translate(-"+x+",-"+y+")";
        }
    }

});
