const form = document.querySelector("#new-todo")
const todoList = document.querySelector("#todo-list")
const todoText = document.querySelector("#todo-text")

form.addEventListener("submit", addTodo)

todoList.addEventListener("click", done)

//Toast 
//var empToast = new bootstrap.Toast(document.getElementById("toast-empty"));
//var insToast = new bootstrap.Toast(document.getElementById("toast-ins"));
//var delToast = new bootstrap.Toast(document.getElementById("toast-del"));


//add new list item 
function newListItem(todo) {
    const todoLi = document.createElement("Li")
    todoLi.classList = "d-flex todoListItem"
    todoList.appendChild(todoLi)

    //new list element
    const todoText = document.createElement('p')
    todoText.classList = "list-group-item text-left w-100 m-1 text-dark"
    todoText.innerText = todo
    todoLi.appendChild(todoText)

    //create delete button
    const deleteBtn = document.createElement("Button")
    deleteBtn.classList = "btn btn-danger w-20 ms-auto h-100 my-auto"
    deleteBtn.innerText = "X"
    deleteBtn.onclick = deleteTodo
    todoLi.appendChild(deleteBtn)
}


//Check the added content
function addTodo(event) {
    if (todoText.value.length === 0) {
        //empToast.show()
        event.preventDefault()
    } else {
        newListItem(todoText.value)
        todoText.value = ''
        //insToast.show()
        event.preventDefault()
    }
}

//Delete an element
function deleteTodo() {
    const todoText = this.parentElement.querySelector('p').innerText
    const todoListElements = [...document.querySelectorAll(".todoListItem")]
    todoListElements.filter(element => element.querySelector('p').innerText === todoText)
        .forEach(element => element.remove())
    delToast.show()
}


//Choose an element
function done() {
    const todoText = this.parentElement.querySelector('p').innerText
    const todoListElements = [...document.querySelectorAll(".todoListItem")]
    todoListElements.filter(element => element.querySelector('p').innerText === todoText)
        .forEach(element => element.classList.add("checked"))
}


//TODO: tost kullanımı - seçim yapma kaldırma - local storage
