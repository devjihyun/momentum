const quotes = [
	{
		quote: "인생에서 가장 큰 영광은 넘어지지 않는 것에 있는 것이 아니라 매번 일어선다는 데 있다.",
		author: "Nelson Mandela",
	},
	{
		quote: " 내 인생을 바꾸는 사람은 자신입니다. 아무도 대신해줄 수 없어요.",
		author: "Carol Burnett",
	},
	{
		quote: "인생은 불공평 합니다. 익숙해지세요.",
		author: "Bill Gates",
	}
	,{
		quote: "인생은 산이다. 당신의 목표는 정상에 도달하는 것이 아니라 당신의 길을 찾는 것이다.",
		author: "Maxime Lagacé",
	}
	,{
		quote: "인생은 거꾸로만 이해되지만 앞으로 살아야 한다.",
		author: "Søren Kierkegaard",
	}
	,{
		quote: "일기예보에도 불구하고, 봄처럼 살아라.",
		author: "Lilly Pulitzer",
	}
	,{
		quote: "위대한 이들은 목적을 갖고, 그 외의 사람들은 소원을 갖는다.",
		author: "Washington Irving",
	}
	,{
		quote: "웃음 없는 하루는 낭비한 하루다.",
		author: "Anonymous",
	},
	{
		quote: "상처를 지혜로 바꾸세요.",
		author: "Oprah Gail Winfrey",
	},
	{
		quote: "인생은 내면으로부터 나온다. 당신이 내면을 바꿀 때, 삶은 외부로 바뀐다.",
		author: "Kamal Ravikant",
	}
]

const quote = document.querySelector("#quote .quote");
const author = document.querySelector("#quote .author");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
