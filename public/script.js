const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

window.onload = () => {
  loadTasks();
};

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const task = taskInput.value.trim();
  if (task) {
    addTask(task);
  }

  taskInput.value = ''; 
});

function addTask(task) {
  const taskItem = document.createElement('li');
  taskItem.textContent = task;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Eliminar';
  deleteButton.onclick = () => removeTask(taskItem);

  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);

  saveTask(task);
}

function removeTask(taskItem) {
  taskItem.remove();
  const taskText = taskItem.textContent.replace('Eliminar', '').trim();
  removeTaskFromStorage(taskText);
}

function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => {
    const taskItem = document.createElement('li');
    taskItem.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.onclick = () => removeTask(taskItem);

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
  });
}

function removeTaskFromStorage(task) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter(t => t !== task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
