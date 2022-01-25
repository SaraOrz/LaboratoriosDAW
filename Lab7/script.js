$(document).ready(function() {
 
    let disney = ["Kuzco","Groot","Mulan","Baymax","Aristocats",
                    "Tangled","Dory","Grogu","The Incredibles"]


    for (let i = 0 ; i < disney.length ; i++) {
        let a = $("<button>")
        a.addClass("disney-button")
        a.attr("data-type",disney[i])
        a.text(disney[i])
        $("#disney-buttons").append(a)
    }

    $("#disney-buttons").on("click", ".disney-button", function() {
        $("#disney").empty()
        // empty para que siempre se limpie
        let search = $(this).attr("data-type")
        let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=EOV4Au9dpzZ44GC4fEYk6ugWbGrwf0Yd&limit=10"

        // alert(queryURL)

        $.ajax({
            url: queryURL
        })

        .then (function(response) {
            let results = response.data

            for (let i = 0; i < results.length ; i++) {
                let disneyDiv = $("<div class = \"disney-item\">")
                let rating = results[i].rating
                let p = $("<p>").text("Rating: " + rating)
                let disneyImage = $("<img>")
                disneyImage.attr("src", results[i].images.fixed_height_still.url)
                disneyImage.attr("data-still", results[i].images.fixed_height_still.url)
                disneyImage.attr("data-animate", results[i].images.fixed_height.url)
                disneyImage.attr("data-state", "still")
                disneyDiv.append(p)
                disneyDiv.append(disneyImage)
                $("#disney").append(disneyDiv)
            }
        })

    }) 
         
});


