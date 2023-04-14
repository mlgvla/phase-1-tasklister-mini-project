document.addEventListener("DOMContentLoaded", () => {
   addingEventListeners()
})

function addingEventListeners() {
   document
      .getElementById("create-task-form")
      .addEventListener("submit", handleFormSubmit)
}

function handleFormSubmit(e) {
   e.preventDefault()

   const task = e.target["new-task-description"].value
   // console.log(task)

   displayTask(task)
}

function displayTask(task) {
   // console.log(task)
   const taskUl = document.getElementById("tasks")
   // console.log(taskUl)

   const taskLi = document.createElement("li")

   taskLi.textContent = task
   // console.log(taskLi)
   taskUl.appendChild(taskLi)
}