let toastBtn = document.querySelector("#toastButton")
let todoList = document.querySelector("#todo-list")
let todoText = document.querySelector("#text")
let form = document.querySelector("#new-todo")
let ullength = document.getElementsByTagName("li");

let taskList = [];

if (localStorage.getItem("taskList") !== null) {
    taskList = JSON.parse(localStorage.getItem("taskList"));
}


form.addEventListener("submit", addTodo)

//Choose an element
function check() {
    this.classList.toggle("checked");
    localStorage.setItem("taskList", JSON.stringify(taskList));
}

function removeButton() {
    this.parentElement.remove();
    localStorage.setItem("taskList", JSON.stringify(taskList));
}

//add new list item
function newListItem() {
    let todoLi = document.createElement('li')
    todoList.appendChild(todoLi);
    todoLi.innerHTML = text.value;
    localStorage.setItem("taskList", JSON.stringify(taskList));

    //chosee
    todoLi.onclick = check;

    //create delete button
    let deleteBtn = document.createElement("span");
    deleteBtn.textContent = "\u00D7";
    deleteBtn.classList.add("close");
    deleteBtn.onclick = removeButton;

    todoLi.append(deleteBtn);

}


//Check the added content
function addTodo(event) {
    if (todoText.value.length === 0) {
        $(".toast-empty").toast("show");
        event.preventDefault();
    } else {
        newListItem(todoText.value);
        todoText.value = '';
        $(".toast-add").toast("show");
        event.preventDefault();
    }
}

//Delete an element
function deleteTodo() {
    for (let i = 0; i < ullength.length; i++) {
        let deleteBtn = document.createElement("span");
        deleteBtn.textContent = "\u00D7";
        deleteBtn.classList.add("close");
        deleteBtn.onclick = removeButton;
        ullength[i].append(deleteBtn);
        ullength[i].onclick = check;
        localStorage.setItem("taskList", JSON.stringify(taskList));
    }
}


//TODO: Local Storage Çalışmıyor
