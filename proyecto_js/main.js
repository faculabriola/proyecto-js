let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

let arrayOfTasks = [];

// compruebo si hay tareas en el local storage
if (localStorage.getItem("tasks")) {
  arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
  getDataFromLocalStorage();
}

// agregar tarea
submit.onclick = function () {
  if (input.value !== "") {
    addTaskToArray(input.value);
    input.value = "";
  }
};

// uso de libreria sweet alert al agregar una tarea
submit.addEventListener("click", () => {
  Swal.fire({
    title: "Genial!",
    icon: "success",
    text: "Has agregado una tarea",
    confirmButtonText: "Ok!",
  });
});

// eliminar tarea
tasksDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("del")) {
    deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
    e.target.parentElement.remove();
  }
});

// identifico tareas con date.now, guardo en el array vacio y los agrego a la pantalla y local storage
function addTaskToArray(taskText) {
  const task = {
    id: Date.now(),
    title: taskText,
    completed: false,
  };
  arrayOfTasks.push(task);
  addElementsToPageFrom(arrayOfTasks);
  addDataToLocalStorageFrom(arrayOfTasks);
}

// por cada tarea creamos un div, boton de borrar y agregamos las tareas a los div
function addElementsToPageFrom(arrayOfTasks) {
  tasksDiv.innerHTML = "";

  arrayOfTasks.forEach((task) => {
    let div = document.createElement("div");
    div.className = "task";
    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));

    let span = document.createElement("span");
    span.className = "del";
    span.appendChild(document.createTextNode("Borrar"));
    div.appendChild(span);
    tasksDiv.appendChild(div);

    //uso de sweet alert al eliminar una tarea
    span.addEventListener("click", () => {
      Swal.fire({
        title: "Una menos!",
        icon: "info",
        text: "Has eliminado una tarea",
        confirmButtonText: "Ok!",
      });
    });
  });
}

// convierto el array en un string json y lo guardo en el local con la clave tasks
function addDataToLocalStorageFrom(arrayOfTasks) {
  window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

// recupero los datos de las tareas, los parseo y los muestro en pantalla
function getDataFromLocalStorage() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    addElementsToPageFrom(tasks);
  }
}

//elimino las tareas con su id
function deleteTaskWith(taskId) {
  arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
  addDataToLocalStorageFrom(arrayOfTasks);
}
