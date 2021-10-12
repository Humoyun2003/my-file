const elTodoForm = document.querySelector('.todo__form');
const elTodoInput = document.querySelector('.todo__input');
const elTodoList = document.querySelector('.todo__list');

const todos = [];

elTodoList.addEventListener('click', (evt) => {
	if (evt.target.matches('.todo__delete-btn')) {
		const todoId = Number(evt.target.dataset.todoId);

		const foundTodoIndex = todos.findIndex((todo) => todo.id === todoId);

		todos.splice(foundTodoIndex, 1);

		renderTodos(todos, elTodoList);
	} else if (evt.target.matches('.todo__checkbox')) {
		const todoId = Number(evt.target.dataset.todoId);

		const foundTodo = todos.find((todo) => todo.id === todoId);

		foundTodo.isCompleted = !foundTodo.isCompleted;

		renderTodos(todos, elTodoList);
	}
});

function renderTodos(arr, node) {
	node.innerHTML = null;

	arr.forEach((todo) => {
		const newLi = document.createElement('li');
		const newButton = document.createElement('button');
		const newCheckbox = document.createElement('input');

		newLi.textContent = todo.title;
		newButton.textContent = 'Delete';

		newCheckbox.type = 'checkbox';
		newButton.classList.add('todo__delete-btn');
		// newButton.setAttribute('class', 'fwef fwef wef wfe w fwef')
		newCheckbox.classList.add('todo__checkbox');
		newButton.dataset.todoId = todo.id;
		newCheckbox.dataset.todoId = todo.id;

		if (todo.isCompleted) {
			newCheckbox.checked = true;
			newLi.style.textDecoration = 'line-through';
		}

		newLi.appendChild(newCheckbox);
		newLi.appendChild(newButton);
		node.appendChild(newLi);
	});
}

elTodoForm.addEventListener('submit', (evt) => {
	evt.preventDefault();

	const inputValue = elTodoInput.value.trim();

	const newTodo = {
		id: todos[todos.length - 1]?.id + 1 || 0,
		title: inputValue,
		isCompleted: false,
	};

	todos.push(newTodo);

	renderTodos(todos, elTodoList);

	elTodoInput.value = null;
});
