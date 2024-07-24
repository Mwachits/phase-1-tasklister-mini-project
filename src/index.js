document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    const taskInput = document.getElementById("new-task-description");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      addTask(taskText); 
      taskInput.value = ""; 
    }
  });

  function addTask(taskText) {
  
    const newTask = document.createElement("li");
    newTask.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    deleteButton.addEventListener("click", function() {
      taskList.removeChild(newTask); 
    });

    newTask.appendChild(deleteButton);

    taskList.appendChild(newTask);
  }
});
