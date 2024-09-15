function HideProjects(){
    $("#Evocation").hide();
    $("#Sledge").hide();
    $("#BitllutHill").hide();
    $("#TimeLine").hide();
    $("#YoureFired").hide();
 }

$(function(){
    // jQuery methods go here...

    // Set these to hidden by default...
    $("#QualificationsDiv").hide();
    $("#ProjectsDiv").hide();
    HideProjects(); // hides projects on start NOT by default

    // Shows qualifications, hides all projects and project container
    $("#QualificationsButton").click(function(){
        $("#QualificationsDiv").show();
        $("#ProjectsDiv").hide();
        HideProjects();
    });

    // Present the option to look at all projects
    $("#ProjectsButton").click(function(){
        $("#ProjectsDiv").show();
        $("#QualificationsDiv").hide();
    });

    // When Evocation is clicked. Hide other projects and show itself
    $("#EvocationButton").click(function(){
        HideProjects();
        $("#Evocation").show();
    });

    // When Sledge is clicked. Hide other projects and show itself
    $("#SledgeButton").click(function(){
        HideProjects();
        $("#Sledge").show();
    });

    // When BitllutHill is clicked. Hide other projects and show itself
    $("#BitllutHillButton").click(function(){
        HideProjects();
        $("#BitllutHill").show();
    });

    // When TimeLine is clicked. Hide other projects and show itself
    $("#TimeLineButton").click(function(){
        HideProjects();
        $("#TimeLine").show();
    });

    // When Youre Fired is clicked. Hide other projects and show itself
    $("#YoureFiredButton").click(function(){
        HideProjects();
        $("#YoureFired").show();
    });
});