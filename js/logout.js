const logOutBtn = document.querySelector("#logout");
logOutBtn.addEventListener("click", resetUserInfo);

function resetUserInfo() {
	localStorage.clear();
	location.reload();
};