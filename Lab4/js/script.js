let post  = document.getElementById("ButtonPost");
let clear  = document.getElementById("ButtonClear");
let mark  = document.getElementById("ButtonMark");
let del  = document.getElementById("ButtonDelete");

post.addEventListener("click",TodoPost);
clear.addEventListener("click",TodoClear);
mark.addEventListener("click",TodoMark);
del.addEventListener("click",TodoDel);


function TodoPost(e){
e.preventDefault();
// Necesito obtener el valor de la caja
var todo = document.getElementById("todoText").value;
var list = document.getElementById("todoList");

let currentListHTML = list.innerHTML;
list.innerHTML = currentListHTML + '<input type = "checkbox" name="todo" /> ' + todo + '<br>';

// Clear To Do input 
document.getElementById("todoText").value = ''

}


function TodoClear(e){
    e.preventDefault();
    var todos = document.getElementsByName("todo");
    for(var i = 0; i < todos.length; i++){
        todos[i].checked = false;
    }
}

function TodoMark(e){
    e.preventDefault();
    var todos = document.getElementsByName("todo");
    for(var i = 0; i < todos.length; i++){
        todos[i].checked = true;
    }
}

function TodoDel(e){
    e.preventDefault();
    var list = document.getElementById("todoList");
    list.innerHTML = "";
}