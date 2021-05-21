$(document).ready(function() {
    
    var image = new Array ();
    image[0] = "assets/paper1.png";
    image[1] = "assets/paper2.png";
    image[2] = "assets/paper3.png";
    image[3] = "assets/paper4.png";


    var x = Math.floor(image.length*Math.random())
    $('#paper').attr('src',image[x]);
    $("#paper").css("animation","float 3s linear 0.5s infinite running");

    var image2 = new Array ();
    image2[0] = "assets/worm.png";
    image2[1] = "assets/coins.png";
    image2[2] = "assets/fish.png";
    image2[3] = "assets/teeth.png";
    image2[4] = "assets/boot.png";

    var imageDesc = new Array ();
    imageDesc[0] = "a juicy worm";
    imageDesc[1] = "some pretty coins";
    imageDesc[2] = "rest in peace, cowboy";
    imageDesc[3] = "teeth?";
    imageDesc[4] = "a little red boot";

    var z1 = Math.floor(image2.length*Math.random());
    var z2 = Math.floor(image2.length*Math.random());
    while (z1==z2) {
        z2 = Math.floor(image2.length*Math.random());
    }

    $('#worm').attr('src',image2[z1]);
    $("#worm").css("animation","float 3s linear 0s infinite running");

    $('#other').attr('src',image2[z2]);
    $("#other").css("animation","float 3s linear 0s infinite reverse running");

    var text = new Array ();
    text[0] = "My hands smell like beef.";
    text[1] = "I have IBS.";
    text[2] = "i have a crush on you xoxox";
    text[3] = "I'm 20 and I still hate salad.";
    text[4] = "I believe in magic :-D";
    text[5] = "I think humans should go extinct";
    text[6] = "I eat flaming hot cheetos obsessively like it's actually a problem";

    
    var y = Math.floor(text.length*Math.random())

    $('#unfolded').html(text[y]);
    
    
    $("#water-top").click(waterGone);

    function waterGone() {
        // $("#water-top").addClass("water-gone");
        $("#water-top").css("display","none");
        $("#paper").css("animation", "paused");
        $("#worm").css("animation", "paused");
        $("#other").css("animation", "paused");
        $("#info").css("display","none");
    }

    $("#paper").click(viewPaper);

    function viewPaper() {
        $("#paper").css("display","none");
        $("#unfolded").css("display","block");

    }
    $("#unfolded").click(hidePaper);

    function hidePaper() {
        $("#paper").css("display","block");
        $("#unfolded").css("display","none");
    }

    $("#worm").mouseenter(function() {
        $("#info").html(imageDesc[z1]);
        $("#info").css("display","block");
    }).mouseleave(function() {
        $("#info").css("display","none");
    })

    $("#other").mouseenter(function() {
        $("#info").html(imageDesc[z2]);
        $("#info").css("display","block");
    }).mouseleave(function() {
        $("#info").css("display","none");
    })

});