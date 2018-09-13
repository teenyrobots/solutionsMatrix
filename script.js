/* jQuery for Solutions Matrix */

$(document).ready(function(){

    // k we can do shit with the data okay, just to prove it
    for (i = 0; i < data.length; i++) {
        $(".tileContainer").append(
            '<div class="tile" id="'+data[i].slug+'"><h2>' + data[i].title + '</h2><div class="tileInfo">'+ intervene(data[i].interventions) + '</div></div>'
        );
        $('#'+data[i].slug).css("background-color", colors[i]);
    }

    function intervene(x) {
        var myStuff = [];
        for (j = 0; j < x.length; j++){
            myStuff.push("<p>"+x[j]+"</p>");
        }
        console.log(myStuff.join(" "));
        return myStuff.join(" ");
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