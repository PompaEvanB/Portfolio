$(function(){
    // jQuery methods go here...
    $("#QualificationsDiv").hide();
    $("#ProjectsDiv").hide();
    $("#Evocation").hide();



    $("#QualificationsButton").click(function(){
        $("#QualificationsDiv").show();
        $("#ProjectsDiv").hide();
    });
    $("#ProjectsButton").click(function(){
        $("#ProjectsDiv").show();
        $("#QualificationsDiv").hide();
    });
    $("#EvocationButton").click(function(){
        $("#Evocation").show();
    });
});