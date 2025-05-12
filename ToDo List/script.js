
function addTodo() {
    const input = document.getElementById('todoInput');
    const task = input.value.trim();
    const feedback = document.getElementById('feedback');

    //Validate the input.
    // If the input is empty, add the 'is-invalid' class and show the feedback message.
    if (task === '') {
        input.classList.add('is-invalid');
        feedback.style.display = 'block';
    } else {
        input.classList.remove('is-invalid');
        feedback.style.display = 'none';
    }

    // Create a new list item
    const item = document.createElement('li');
    item.className = 'list-group-item d-flex justify-content-between align-items-center';
    item.textContent = task;


    const removeTask = document.createElement('button');
    removeTask.textContent = 'Remove';
    removeTask.className = 'btn btn-danger btn-sm';

    removeTask.onclick = () => item.remove();


    item.appendChild(removeTask);
document.getElementById('todoList').appendChild(item);

    //Clear the input field
    input.value = '';
}//end of addTodo