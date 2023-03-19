document.addEventListener("DOMContentLoaded", () => {
   addEventListenerToForm()
})

function addEventListenerToForm() {
    let form = document.getElementById("create-task-form")
    form.addEventListener("submit", handleFormSubmit)
}

function handleFormSubmit(e) {
    e.preventDefault()
    let todo = e.target[0].value
    postTodo(todo)
    e.target.reset()
}

function postTodo(todo) {
    let p = document.createElement('p')
    let deleteBtn = document.createElement('button')
    let list = document.getElementById("list")

    deleteBtn.textContent = "x"
    deleteBtn.addEventListener("click", deleteTask)

    p.textContent = `${todo} `
    p.appendChild(deleteBtn)

    list.appendChild(p)
}

function deleteTask(e) {
    e.target.parentNode.remove()
}
