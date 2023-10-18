function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    if (taskText === "") return;

    var tasksContainer = document.getElementById("tasksContainer");

    var taskElement = document.createElement("div");
    taskElement.className = "task";
    taskElement.innerHTML = `${taskText} <button onclick="deleteTask(this)">Delete</button>`;

    tasksContainer.appendChild(taskElement);
    taskInput.value = "";
}

function deleteTask(button) {
    var taskElement = button.parentElement;
    taskElement.remove();
}
