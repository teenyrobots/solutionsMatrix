/* jQuery for Solutions Matrix */

$(document).ready(function(){

    // k we can do shit with the data okay, just to prove it
    for (i = 0; i < data.length; i++) {
        $(".tileContainer").append(
            '<div class="tile" style="background-color:'+colors[i]+'"><h2 style="background-color:'+colors[i]+'">' + data[i].title + '</h2><div class="tileInfo">'+ data[i].interventions + '</div></div>'
        );
    }

    $(".tile").click(function(){
        $(this).toggleClass('tile explodedTile');
        $(':nth-child(2)', this).toggle();
    })

});





// $(".tile").click(function(){
//     $(this).attr("class", "explodedTile");
//     console.log("ya clicked on a tile");
// });
//
// $(".explodedTile").click(function(){
//     $(this).attr("class", "tile");
//     console.log("ya clicked on a EXPLODED tile");
// });