/* jQuery for Solutions Matrix */


$(document).ready(function(){

    for (let i = 0; i < data.length; i++) {
        $(".tileContainer").append(
            '<div class="tile" id="'+data[i].slug+'" style="display: none"><img src="assets/b.svg" class="icon"><h2>' + data[i].title + '</h2><div class="tileInfo" id="' + data[i].slug + 'Info"><h3>Solutions:</h3>' + intervene(data[i].interventions)
        )
        if (data[i].examples != undefined) {
            $('#' + data[i].slug+'Info').append(
                '<h4>Examples:</h4>' + examples(data[i].examples) + '</div></div>'
            )
        } else {
            $('#'+data[i].slug+'Info').append(
                '</div></div>'
            )
        }
        if (data[i].catA) {
            $('#'+data[i].slug).attr("data-catA", "true")
        }
        if (data[i].catB) {
            $('#'+data[i].slug).attr("data-catB", "true")
        }
        if (data[i].catC) {
            $('#'+data[i].slug).attr("data-catC", "true")
        }
        $('#'+data[i].slug).css("background-color", data[i].color);
    }

    function intervene(x) {
        var myStuff = [];
        for (j in x){
            myStuff.push("<li>"+x[j]+"</li>");
        }
        return myStuff.join(" ");
    }

    function examples(y) {
        if (y) {
            var myExamples = [];
            for (k in y){
                myExamples.push("<a href='" + y[k].url + "' target='_blank'>"+ y[k].title + "</a>");
            }
            return myExamples.join(" ");
        } else {
            console.log("no examples");
        }
    }

    $("button").click(function(){
        $(".tileInfo").hide();
        $(".tile").hide();
        if (this.id === "catA") {
            $('*[data-catA="true"]').show();
        } else if (this.id === "catB") {
            $('*[data-catB="true"]').show();
        } else if (this.id === "catC") {
            $('*[data-catC="true"]').show();
        } else {
            $(".tile").show();
        }
    })

    $(".tile").click(function(){
        $('.tileInfo', this).toggle();
    })

});