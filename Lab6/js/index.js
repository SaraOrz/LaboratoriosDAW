
 
let Lista = $(".Lista")
   
let newText = $("#newText")


$(".agregar").on("click",function(event) {
    event.preventDefault()

    

    /*
    <ul class="Lista">
            <div class = "lis">
            <li class = "itemShop">
                <p class = 'itemShop'> </p>
                <button class = 'checar'> Check </button>
                <button class = 'del'> Delete </button>
            </li>
            </div>
        </ul>

    */

    let lis = $("<div>").addClass("lis")
    let li = $("<li>")
    let itemShop = $("<p>").text(newText[0].value).addClass("itemShop")
    let checar = $("<button>").text("Check").addClass("checar")
    let del = $("<button>").text("Delete").addClass("del")

    // VALIDAR INPUT (para no agregar divs sin contenido)
    if (newText[0].value != ""){
        li.append(itemShop)
        li.append(checar)
        li.append(del)

        lis.append(li)
        Lista.append(lis)

        // LIMPIAR INPUT
        $("#newText").val("")
        
    }
   

})

    Lista.on("click", ".checar", function() {
        $(this).parent().toggleClass("chec")
    })
    
    Lista.on("click", ".del", function() {
        $(this).parent().parent().remove()
    })






