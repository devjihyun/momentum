const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const logOutBtn = document.querySelector("#logout");
logOutBtn.addEventListener("click", resetUserInfo);

function resetUserInfo() {
	localStorage.clear();
	location.reload();
};

const toDoWrap = document.querySelector(".todo-wrap");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY="username";

function onLoginSubmit(event) {
	event.preventDefault();
	loginForm.classList.add(HIDDEN_CLASSNAME);
	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username);
	paintGreetings(username);
	logOutBtn.classList.remove(HIDDEN_CLASSNAME);
	toDoWrap.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username) {
	greeting.innerText = `Hello ${username}!`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
	// show the form
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	// show the greetings, logout btn, todo forms
	paintGreetings(savedUsername);
	logOutBtn.classList.remove(HIDDEN_CLASSNAME);
	toDoWrap.classList.remove(HIDDEN_CLASSNAME);
}