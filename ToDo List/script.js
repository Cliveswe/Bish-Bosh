
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


    //Clear the input field
    input.value = '';
}//end of addTodo