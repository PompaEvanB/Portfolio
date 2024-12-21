 function HideAll(){
    $("#Evocation").hide();
    $("#Sledge").hide();
    $("#BitllutHill").hide();
    $("#TimeLine").hide();
    $("#YoureFired").hide();
    $("#Resume").hide();
    $("#Bio").hide();
    $("#Home").hide();
 }

$(function(){
    // jQuery methods go here...

    HideAll(); // hides projects on start NOT by default

    $("#HomeButton").click(function(){
        HideAll();
        $("#Home").show();
    });

    $("#BioButton").click(function(){
        HideAll();
        $("#Bio").show();
    });

    // Shows qualifications, hides all projects and project container
    $("#ResumeButton").click(function(){
        HideAll();
        $("#Resume").show();
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