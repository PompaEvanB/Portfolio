$(function(){
    // jQuery methods go here...
    //$("#QualificationsDiv").hide();
    $("#ProjectsDiv").hide();

    $("#QualificationsButton").click(function(){
        $("#QualificationsDiv").show();
        $("#ProjectsDiv").hide();
    });
    $("#ProjectsButton").click(function(){
        $("#ProjectsDiv").show();
        $("#QualificationsDiv").hide();
    });
});