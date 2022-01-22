var qtodo = 0

// Post
$("#ButtonPost").on("click", function(event) {
    event.preventDefault()
    let todo = $("#todoText").val()

    if (todo != ""){
        
        $("#todoList").prepend('<input type="checkbox" /> ' + todo + '<br />')
        
        qtodo++
        $("#todoText").val("")
    }
})

// Clear All
$("#ButtonClear").on("click", function(event) {
    event.preventDefault()
    let list = $("#todoList")

    $(":checkbox").prop('checked', false);
})

// Mark All
$("#ButtonMark").on("click", function(event) {
    event.preventDefault()
    let list = $("#todoList")
    
    $(":checkbox").prop('checked', true);
    
})

// Delete All
$("#ButtonDelete").on("click", function(event) {
    event.preventDefault()
    $("#todoList").html("")
    qtodo = 0
})

//------



