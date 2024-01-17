const taskInput = document.getElementById('task');
const deadlineInput = document.getElementById('deadline');
const priorityInput = document.getElementById('priority');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value;
    const deadline = deadlineInput.value;
    const priority = priorityInput.value;

    if (taskText === '' || deadline === '') {
        alert('Please enter both task and deadline.');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span>${taskText} (Deadline: ${deadline}, Priority: ${priority})</span>
        <button class="delete-button" onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(taskItem);

    // Clear input fields
    taskInput.value = '';
    deadlineInput.value = '';
}

function deleteTask(button) {
    const listItem = button.parentNode;
    taskList.removeChild(listItem);
}
