$(function(){
    // jQuery methods go here...
    //$("#ResumeDiv").hide();
    $("#ProjectsDiv").hide();

    $("#ResumeButton").click(function(){
        $("#ResumeDiv").show();
        $("#ProjectsDiv").hide();
    });
    $("#ProjectsButton").click(function(){
        $("#ProjectsDiv").show();
        $("#ResumeDiv").hide();
    });
});