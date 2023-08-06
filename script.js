const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");

  addTaskButton.addEventListener("click", () => {
    const taskDescription = taskInput.value.trim();
    if (taskDescription !== "") {
      const li = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      const taskText = document.createElement("span");
      taskText.textContent = taskDescription;
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      li.appendChild(checkbox);
      li.appendChild(taskText);
      li.appendChild(removeButton);
      taskList.appendChild(li);
      taskInput.value = "";

      removeButton.addEventListener("click", () => {
        taskList.removeChild(li);
      });

      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          li.classList.add("completed");
        } else {
          li.classList.remove("completed");
        }
      });
    }
  });
