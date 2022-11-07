const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deletToDo(event) {
	const li = event.target.parentElement;
	li.remove();
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
	saveToDos();
}

function paintToDo(newTodo) {
	const li = document.createElement("li");
	li.id = newTodo.id;
	const span = document.createElement("span");
	span.className = "todo-text";
	span.innerText = newTodo.text;
	const button = document.createElement("button");
	button.className = "delete-btn";
	// button.innerText = "delete";
	button.addEventListener("click", deletToDo);
	li.appendChild(span);
	li.appendChild(button);
	toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
	event.preventDefault();
	const newTodo = toDoInput.value; // input의 현재 value를 새로운 변수에 복사
	toDoInput.value = ""; // 입력상자 초기화 시키기
	const newTodoObj = {
		text: newTodo, 
		id: Date.now(),
	};
	toDos.push(newTodoObj); // 입력받은 텍스트를 toDos array에 저장
	paintToDo(newTodoObj); // 화면에 todo 텍스트 그리기
	saveToDos(); // todo들을 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
	const parseToDos = JSON.parse(savedToDos);
	toDos = parseToDos;
	parseToDos.forEach(paintToDo);
}