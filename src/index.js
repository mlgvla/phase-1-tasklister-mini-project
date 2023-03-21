document.addEventListener("DOMContentLoaded", () => {
   addingEventListeners()
})

let todos = []

function addingEventListeners() {
   document
      .getElementById("create-task-form")
      .addEventListener("submit", handleFormSubmit)
   document
      .getElementById("sort")
      .addEventListener("change", sortAndDisplyTodos)
}

function handleFormSubmit(e) {
   e.preventDefault()

   let todo = { task: e.target[0].value, priority: e.target[1].value }

   addToArray(todo)
   sortAndDisplyTodos()

   e.target.reset()
}

function addToArray(todo) {
   todos.push(todo)
}

function displayTodos() {
   let tasks = document.getElementById("tasks")
   tasks.innerHTML = ""

   todos.forEach((todo) => {
      let p = document.createElement("p")
      let deleteBtn = document.createElement("button")

      deleteBtn.textContent = "x"
      deleteBtn.addEventListener("click", (e) => {
         deleteTask(e, todo)
      })

      p.textContent = `${todo.task} `

      if (Number(todo.priority) === 1) {
         p.style.color = "red"
      } else if (Number(todo.priority) === 2) {
         p.style.color = "green"
      } else {
         p.style.color = "blue"
      }

      p.appendChild(deleteBtn)

      tasks.appendChild(p)
   })
}

function deleteTask(e, todo) {
   todos = todos.filter((el) => el.task !== todo.task)
   e.target.parentNode.remove()
}

function sortAndDisplyTodos() {
   let sort = document.getElementById("sort")

   if (sort.value === "high-low") {
      todos.sort((a, b) => a.priority - b.priority)
   } else {
      todos.sort((a, b) => b.priority - a.priority)
   }
   
   displayTodos()
}
