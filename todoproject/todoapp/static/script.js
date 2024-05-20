document.addEventListener('DOMContentLoaded', () => {
    fetchTasks();
});

async function fetchTasks() {
    const response = await fetch('/api/tasks/');
    const tasks = await response.json();
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task.title}</span>
            <div class="actions">
                <button onclick="deleteTask(${task.id})">Delete</button>
                <button onclick="editTask(${task.id}, '${task.title}')">Edit</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

async function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    const response = await fetch('/api/tasks/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: taskInput }),
    });
    if (response.ok) {
        fetchTasks();
        document.getElementById('taskInput').value = '';
    }
}

async function deleteTask(taskId) {
    await fetch(`/api/tasks/${taskId}/`, {
        method: 'DELETE',
    });
    fetchTasks();
}

async function editTask(taskId, taskTitle) {
    const newTitle = prompt('Edit task:', taskTitle);
    if (newTitle) {
        await fetch(`/api/tasks/${taskId}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: newTitle }),
        });
        fetchTasks();
    }
}
