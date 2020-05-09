let toDoList = [];

let toDOName = document.getElementById('toDoName');
let toDoDescription = document.getElementById('toDoDesc');
let saveButton = document.getElementById('saveTodo');

function ToDoItem(name, desc) {
  this.name = name;
  this.description = desc;
  this.done = false;
}

function fullfill(id) {
  toDoList[id].done = true;
  writeList();
}

toDoList.push(new ToDoItem("test", "Test"));

function makeNewToDo(){
  toDoList.push(new ToDoItem(toDoName.value, toDoDescription.value));
  toDoName.value = "";
  toDoDesc.value = "";
  writeList();
}

function writeList() {
  let html = '';
  for (var i = 0; i < toDoList.length; i++) {
    let completed = "Nie ukończono";
    if (toDoList[i].done === true) {
      completed = "Ukończono";
    }
    html += `<div class="ToDoItem"><div class="ToDoName">${toDoList[i].name}</div> <div class="ToDoDesc"><p>${toDoList[i].description}<p></div><button onclick="fullfill(${i})">zakończ</button><div class="ToDoCompleted">${completed}</div></div>`;
  }
  document.getElementById('ToDoList').innerHTML = html;
}

writeList();
saveButton.addEventListener('click', function () {makeNewToDo();})
