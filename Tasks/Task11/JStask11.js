let tasks = [];

function addTask(task) {
  if (!task.trim()) {
    console.log("Task cannot be empty!");
    return;
  }
  tasks.push(task);
  displayTasks();
}

function displayTasks() {
  for (let i = 0; i < tasks.length; i++) {
    console.log(i + 1 + ". " + tasks[i]);
  }
}

console.log("Adding tasks..");
setTimeout(() => addTask("Learn JavaScript"), 1000);
setTimeout(() => addTask(""), 2000);
setTimeout(() => addTask("Build a project"), 3000);