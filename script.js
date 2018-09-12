/* jQuery for Solutions Matrix */

$(document).ready(function(){

    $(".tile").click(function(){
        $(this).css("background-color", "red")
    });

    // k we can do shit with the data okay, just to prove it
    for (i = 0; i < data.length; i++) {
        console.log(data[i].interventions);
    }

})