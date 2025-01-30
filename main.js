let input = document.getElementsByClassName("input")[0];
let submit = document.getElementsByClassName("add")[0];
let tasksShowing = document.getElementsByClassName("tasks")[0];
let tasks = [];

if (window.localStorage.tasks) {
  tasks = JSON.parse(window.localStorage.tasks);
  for (let i = 0; i < tasks.length; i++) {
    let div = document.createElement("div");
    div.className = "task";
    div.append(tasks[i].title);
    tasksShowing.append(div);
  }
}

submit.addEventListener("click", function (e) {
  if (input.value === "") e.preventDefault();
  else {
    let div = document.createElement("div");
    div.className = "task";
    div.append(input.value);
    tasksShowing.append(div);
  }
});

submit.addEventListener("click", addToLocalStorage);

function addToLocalStorage(e) {
  if (input.value === "") e.preventDefault();
  else {
    tasks.push({ id: Math.random(), title: input.value });
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
  }
}

function removeFromLocalStorage() {
  tasks = JSON.parse(window.localStorage.tasks);
  document.addEventListener("click", function (e) {
    tasks = tasks.filter(function (obj) {
      return obj.title !== e.target.innerHTML;
    });
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
    e.target.classList.contains("task") ? e.target.remove() : e.target;
  });
}
removeFromLocalStorage();
