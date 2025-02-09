document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("task-form");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  taskForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Evita que la página se recargue

      const taskText = taskInput.value.trim();
      if (taskText === "") return;

      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
      taskList.appendChild(taskItem);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Eliminar";
      deleteButton.classList.add("delete-btn");

      taskItem.appendChild(deleteButton);
      

      taskInput.value = ""; // Limpiar el input

      // Marcar tarea como completada
      taskItem.addEventListener("click", () => {
          taskItem.classList.toggle("completed");
      });

      // Eliminar tarea
      deleteButton.addEventListener("click", (e) => {
          e.stopPropagation(); // Evita que se active el evento de marcar completado
          taskItem.remove();
      });
  });
});
