document.addEventListener("DOMContentLoaded", () => {
  installEventListeners()
});

function installEventListeners() {
    let form = document.getElementById("create-task-form")
    
    form.addEventListener("submit", addTask)
}

function addTask(e) {
    e.preventDefault()
    let toDoInput = document.getElementById("new-task-description")
    let ul = document.getElementById("tasks")
    let li = document.createElement("li")
    let deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "x"

    deleteBtn.addEventListener("click", (e) => {
        e.target.parentNode.remove()
    })
    

    li.innerHTML = `${toDoInput.value}  `
    li.appendChild(deleteBtn)
    ul.appendChild(li)

    toDoInput.value = ""
    
}
