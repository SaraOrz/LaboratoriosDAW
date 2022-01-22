// Post
$("#ButtonPost").on("click", (event) => {
        event.preventDefault()
        let todo = $("#todoText").val()

        if (todo != "") {

            $("#todoList").prepend('<input type="checkbox" /> ' + todo + '<br />')


            $("#todoText").val("")
        }
    })

// Clear All
$("#ButtonClear").on("click", (event) => {
        event.preventDefault()
        let list = $("#todoList")

        $(":checkbox").prop('checked', false)
    })

// Mark All
$("#ButtonMark").on("click", (event) => {
        event.preventDefault()
        let list = $("#todoList")

        $(":checkbox").prop('checked', true)

    })

// Delete All
$("#ButtonDelete").on("click", (event) => {
        event.preventDefault()
        $("#todoList").html("")

    })

//------



