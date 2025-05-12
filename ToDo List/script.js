
function addTodo() {
    const input = document.getElementById('todoInput');
    //Remove any leading or trailing whitespace thus avoiding empty tasks from the list.
    const task = input.value.trim();
    const feedback = document.getElementById('feedback');

    //Validate the input.
    // If the input is empty, add the 'is-invalid' class and show the feedback message.
    if (task === '') {
        input.classList.add('is-invalid');
        feedback.style.display = 'block';
        return;
    } else {
        input.classList.remove('is-invalid');
        feedback.style.display = 'none';
    }

    // Create a new list item
    const item = document.createElement('li');
    item.className = 'list-group-item d-flex justify-content-between align-items-center';
    item.textContent = task;
    //Create a remove button and style it.
    const removeTask = document.createElement('button');
    removeTask.textContent = 'Remove';
    removeTask.className = 'btn btn-danger btn-sm';
    // Add an event listener to the remove button
    // When clicked, remove the list item
    removeTask.onclick = () => item.remove();

    // Add the remove button to the list item
    item.appendChild(removeTask);
    
    // Add the list item to the list
    document.getElementById('todoList').appendChild(item);

    //Clear the input field
    input.value = '';
}//end of addTodo