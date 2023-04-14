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
   displayTask(task)
}

function displayTask(task) {
   const taskUl = document.getElementById("tasks")
   const taskLi = document.createElement("li")
   const deleteBtn = document.createElement("button")

   deleteBtn.textContent = "x"
   deleteBtn.addEventListener("click", deleteTask)

   taskLi.textContent = task + " "
   taskLi.appendChild(deleteBtn)
   taskUl.appendChild(taskLi)
}

function deleteTask(e) {
   console.log(e) // what to remove?
   e.target.parentNode.remove()

}
