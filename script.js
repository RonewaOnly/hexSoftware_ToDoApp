  // JavaScript to handle task addition dynamically
  document.getElementById('task-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const taskInput = document.getElementById('task');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a delete button for each task
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.marginLeft = '10px';
        deleteButton.style.backgroundColor = '#e74c3c';
        deleteButton.style.color = 'white';
        deleteButton.style.border = 'none';
        deleteButton.style.borderRadius = '4px';
        deleteButton.style.cursor = 'pointer';

        // Append the delete button to the task
        li.appendChild(deleteButton);

        // Event listener for toggling the task completion (crossing it out)
        li.addEventListener('click', function() {
            li.classList.toggle('crossed-out');
        });

        // Event listener for deleting the task
        deleteButton.addEventListener('click', function() {
            li.remove();
        });

        // Append the task to the list
        document.getElementById('task-list').appendChild(li);
        taskInput.value = '';  // Clear the input after adding the task
    }
});