 function HideAll(){
    $("#Evocation").hide();
    $("#Sledge").hide();
    $("#TimeLine").hide();
    $("#YoureFired").hide();
    $("#Bio").hide();
    $("#Contact").hide();
 }

$(function(){
    // jQuery methods go here...
    $("#dropdown-content").hide();
    HideAll(); // hides projects on start NOT by default
    $("#Bio").show(); // Start off with the BIO as the home screen

    $("#BioButton").click(function(){
        HideAll();
        $("#Bio").show();
    });

    $("#ContactButton").click(function(){
        HideAll();
        $("#Contact").show();
    });

    // When Evocation is clicked. Hide other projects and show itself
    $("#EvocationButton").click(function(){
        HideAll();
        $("#Evocation").show();
    });

    // When Sledge is clicked. Hide other projects and show itself
    $("#SledgeButton").click(function(){
        HideAll();
        $("#Sledge").show();
    });

    // When TimeLine is clicked. Hide other projects and show itself
    $("#TimeLineButton").click(function(){
        HideAll();
        $("#TimeLine").show();
    });

    // When Youre Fired is clicked. Hide other projects and show itself
    $("#YoureFiredButton").click(function(){
        HideAll();
        $("#YoureFired").show();
    });

    $("#ProjectsButton").hover(function(){
        $("#dropdown-content").show();
      }, function() {
        $("#dropdown-content").hide();
      }
    );
});