const API_KEY = "ab6f85e9e380e3f2ad3daf56d542c29b";

function onGeoOk(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}5&lon=${lon}&appid=${API_KEY}&units=metric`
	fetch(url)
		.then(response => response.json())
		.then((data) => {
			const weatherIcon = document.createElement("img");
			weatherIcon.src=`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
			weatherIcon.alt="";
			const weatherImg = document.querySelector("#weather .weather-ico");
			weatherImg.prepend(weatherIcon);
			const weatherText = document.querySelector("#weather .weather-text");
			const temper = document.querySelector("#weather .temper");
			const city = document.querySelector("#weather .city");
			weatherText.innerText = `${data.weather[0].main}`;
			temper.innerText = `${data.main.temp}°C`;
			city.innerText = data.name;
	});
}

function onGeoError() {
	const error = document.querySelector("#weather .error");
	error.innerText = "날씨 정보를 불러올 수 없습니다..ㅠㅠ";
	// console.log("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);