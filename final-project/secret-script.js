$(document).ready(function() {
    var checking = false;
    
    $("#input").click(clearText);

    function clearText() {
        $("#input").attr('value',"");
        checking = true;
    }
    
    document.addEventListener("keydown", event => {
        if (checking==false || event.isComposing || event.keyCode !== 13) {
          return;
        }
        writeText();
      });

    $("#submit").click(writeText);

    function writeText() {
        checking=false;
        var txt = document.getElementById("input").value;
        $("#submit").css("display","none");
        $("#input").css("display","none");
        $("#unfolded").html(txt);
        $("#mini_menu").css("display","flex");

    }

    $("#crumple").click(function() {
        $("#paper").attr('src',"assets/paper2.png")
        selected();
    });
    $("#scrunch").click(function() {
        $("#paper").attr('src',"assets/paper1.png")
        selected();
    });
    $("#fold").click(function() {
        $("#paper").attr('src',"assets/paper3.png")
        selected();
    });
    $("#tear").click(function() {
        $("#paper").attr('src',"assets/paper4.png")
        selected();
    });
    function selected() {
        $("#unfolded").css("display","none");
        $("#mini_menu").css("display","none");
        $("#release").css("display","block");
    }

    $("#release").click(function() {
        $("#release").css("display","none");
        $("#paper").css("animation","drop 3s ease-in 0s 1");
        $("#paper").addClass("gone");
        $("#secret-button").css({"display":"block",
            "animation": "materialize 3s ease-in-out 0s 1", 
            "opacity": "1", "cursor":"pointer"});

    });




});