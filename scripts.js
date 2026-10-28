// 1. Select the HTML elements we need to interact with
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// 2. Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    // Logic Check: Don't add empty tasks
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // 3. Create a new <li> element dynamically
    const li = document.createElement('li');
    li.innerText = taskText;

    // 4. Create the Delete button for this task
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'X';
    deleteBtn.classList.add('delete-btn');

    // 5. Logic for task interactions
    // Click task text -> Toggle completed state
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
    // Click delete button -> Remove element from DOM
    deleteBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevents triggering the completed toggle on the li
        li.remove();
    });

    // 6. Append the delete button to the li, and the li to the list
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // 7. Clear input box for the next entry
    taskInput.value = "";
}

// 8. Event Listeners for trigger actions
addBtn.addEventListener('click', addTask);
// Logic Check: Allow pressing "Enter" to add a task
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
