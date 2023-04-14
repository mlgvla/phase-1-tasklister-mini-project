document.addEventListener("DOMContentLoaded", () => {
   addingEventListeners()
})

let taskArr = []

function addingEventListeners() {
   document
      .getElementById("create-task-form")
      .addEventListener("submit", handleFormSubmit)
   document.getElementById("sort-tasks").addEventListener("change", sortTasks)
}

function handleFormSubmit(e) {
   e.preventDefault()
   const task = e.target["new-task-description"].value
   const priorityLevel = parseInt(e.target.priority.value)

   const taskObj = { task, priorityLevel }
   taskArr.push(taskObj)
   sortTasks()
   displayTasks()

   e.target.reset()
}

function displayTasks() {
   const taskUl = document.getElementById("tasks")
   taskUl.innerHTML = ""

   taskArr.forEach((task) => {
      const taskLi = document.createElement("li")
      const deleteBtn = document.createElement("button")

      deleteBtn.textContent = "x"
      deleteBtn.addEventListener("click", (e) => deleteTask(e, task))

      taskLi.textContent = task.task + " "
      taskLi.style.color = getPriorityColor(task.priorityLevel)
      taskLi.appendChild(deleteBtn)
      taskUl.appendChild(taskLi)
   })
}

function deleteTask(e, currentTask) {
   console.log(e) // e.target is deleteBtn
   taskArr = taskArr.filter((arrTask) => arrTask.task !== currentTask.task)
   e.target.parentNode.remove()
}

function getPriorityColor(priorityLevel) {
   if (priorityLevel === 1) {
      return "red"
   } else if (priorityLevel === 2) {
      return "green"
   } else {
      return "blue"
   }
}

function sortTasks() {
   const sortTasksSelect = document.getElementById("sort-tasks")
   if (sortTasksSelect.value === "h-l") {
      taskArr.sort((a, b) => a.priorityLevel - b.priorityLevel)
   } else {
      taskArr.sort((a, b) => b.priorityLevel - a.priorityLevel)
   }
   displayTasks()
}
