let addBtn = document.querySelector("#addButton")
let todoList = document.querySelector("#todo-list")
let todoText = document.querySelector("#text")
let ullength = document.getElementsByTagName("li");

let taskList = [];

if (localStorage.getItem("taskList") !== null) {
    taskList = JSON.parse(localStorage.getItem("taskList"));
    showTasks();
}
addBtn.onclick = newTodo;

//show all todo items from local storage
function showTasks() {

    todoList.innerHTML = "";

    for (let i = 0; i < taskList.length; i++) {
        let todoLi = document.createElement('li')
        todoLi.innerHTML = taskList[i].todoName;
        todoLi.id = taskList[i].todoId;
        todoLi.onclick = check;
        if (taskList[i].isCompleted == 1) {
            todoLi.classList.toggle("checked");
        }

        let deleteBtn = document.createElement("span");
        deleteBtn.textContent = "\u00D7";
        deleteBtn.classList.add("close");
        deleteBtn.id = todoLi.id;
        deleteBtn.onclick = deleteTodo;

        todoLi.append(deleteBtn);

        todoList.appendChild(todoLi);
    }
}


//Delete an element with todoId
function deleteTodo() {
    this.parentElement.remove();
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].todoId == this.parentElement.id) {
            taskList.splice(i, 1);
        }
    }
    localStorage.setItem("taskList", JSON.stringify(taskList));
    $('.toast-del').toast('show');
}


//create new todo item and add to tasklist array for local storage
function newTodo() {
    if (todoText.value.length == 0) {
        $('.toast-empty').toast('show');
    } else {
        taskList.push({ "todoId": taskList.length, "todoName": todoText.value, "isCompleted": 0 });
    }
    todoText.value = "";
    showTasks();
    localStorage.setItem("taskList", JSON.stringify(taskList));
    $('.toast-add').toast('show');
}


//Mark todo item checked or unchecked
function check() {
    this.classList.toggle("checked");
    for (let i = 0; i < taskList.length; i++) {
        //check clicked todo item's id and change complete flag
        if (taskList[i].todoId == this.id) {
            if (taskList[i].isCompleted == 1) {
                taskList[i].isCompleted = 0;
            } else {
                taskList[i].isCompleted = 1;
            }
        }
    }
    localStorage.setItem("taskList", JSON.stringify(taskList));
}