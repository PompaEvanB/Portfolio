let brbL = $("#brbL");
let brbR = $("#brbR");
let brAssetImages = $("#brAssetImageWheel");
let brAssetIndex = 0;

brbL.click(function(){ 
    //console.log("left is clicked");
    brAssetImages.children('img').eq(brAssetIndex).hide();
    if(brAssetIndex == 0)
    {
        //brAssetImages.children('img').last().show();
        brAssetIndex = brAssetImages.children('img').length - 1;
    }
    else
    {
        brAssetIndex -= 1;
        //brAssetImages.children('img').prev().show();
    }
    brAssetImages.children('img').eq(brAssetIndex).show();
    
    
});
brbR.click(function(){ 
    //console.log("right is clicked");
    brAssetImages.children('img').eq(brAssetIndex).hide();
    if(brAssetIndex == brAssetImages.children('img').length - 1)
    {
        //brAssetImages.children('img').first().show();
        brAssetIndex = 0;
    }
    else
    {
        brAssetIndex += 1;
        //brAssetImages.children('img').next().show();
    }
    brAssetImages.children('img').eq(brAssetIndex).show();
});