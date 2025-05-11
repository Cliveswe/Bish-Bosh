
function addTodo() {
    const input = document.getElementById('todoInput');
    const task = input.value.trim();
    const feedback = input.nextElementSibling.nextElementSibling;

    if (task === '') {
        input.classList.add('is-invalid');
        feedback.style.display = 'block';
    } else {
        input.classList.remove('is-invalid');
        feedback.style.display = 'none';

        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.textContent = task;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'btn btn-sm btn-danger';
        removeBtn.onclick = () => li.remove();

        li.appendChild(removeBtn);
        document.getElementById('todoList').appendChild(li);

        input.value = '';
    }
}
