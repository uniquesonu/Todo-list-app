const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


function addTodo(e){
    e.preventDefault();
    // todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')
    // create li
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Check mark button
    const transhButton = document.createElement('button');
    transhButton.innerHTML = '<i class="fas fa-trash"></i>';
    transhButton.classList.add("trash-btn");
    todoDiv.appendChild(transhButton);

    // Append to list
    todoList.appendChild(todoDiv);
    // clear todo input value
    todoInput.value = "";

}

function deleteCheck(e){
    const item = e.target;
    // delete todo
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        // animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend',()=>{
            todo.remove();
        })
    }

    // check mark
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}


todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
