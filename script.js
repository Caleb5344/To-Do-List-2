document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    function addTodo() {
        const taskText = todoInput.value.trim();
        if (taskText !== '') {
            const todoItem = document.createElement('li');
            todoItem.classList.add('todo-item');

            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;
            taskSpan.addEventListener('click', () => {
                todoItem.classList.toggle('completed');
            });

            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = '&times;';
            deleteButton.addEventListener('click', () => {
                todoList.removeChild(todoItem);
            });

            todoItem.appendChild(taskSpan);
            todoItem.appendChild(deleteButton);
            todoList.appendChild(todoItem);

            todoInput.value = '';
        }
    }
});
