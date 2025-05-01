 function HideAll(){
    $("#Evocation").hide();
    $("#Sledge").hide();
    $("#BitllutHill").hide();
    $("#TimeLine").hide();
    $("#YoureFired").hide();
    $("#Bio").hide();
    $("#Contact").hide();
 }

$(function(){
    // jQuery methods go here...

    HideAll(); // hides projects on start NOT by default
    $("#Bio").show();

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

    // When BitllutHill is clicked. Hide other projects and show itself
    $("#BitllutHillButton").click(function(){
        HideAll();
        $("#BitllutHill").show();
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
});