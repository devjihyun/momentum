/* 

//array
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item from Array
console.log(daysOfWeek);

// Add one more day to the Array
daysOfWeek.push("sun");

console.log(daysOfWeek);



const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kimbab");

console.log(toBuy[100]); //undefined

*/


/*

// object
const player = {
    name: "sonia", // " name: 'sonia' "는 property
    points: 10,
    fat: true,
};

console.log(player);
console.log(player["name"]);
console.log(player.name);
// console is an object and that somewhere has a 'log'

player.fat = false; //const 안의 프로퍼티는 업데이트 가능

player.lastName = "potate"; //프로퍼티 추가도 가능
console.log(player);

player.points = player.points + 15;
console.log(player.points);

*/


//function 계속 반복해서 사용할 수 있는 코드 조각 
/*

function sayHello(nameOfPerson, age) { //nameOfPerson argument
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age + ".");
}

sayHello("Sonia", 34);
sayHello("Tom", 60);


*/
//argument는 function을 실행하는 동안 어떤 정보를 Function에게 보낼 수 있는 방법

/*
const calculator = {
    plus: function(a, b) {
        console.log(a + b);
    },
    minus: function(a, b) {
        console.log(a - b);
    },
    multiply: function(a, b) {
        console.log(a * b);
    },
    divide: function(a, b) {
        console.log(a / b);
    },
    power: function(a, b) {
        console.log(a ** b);
    }
};

calculator.plus(2, 7);
calculator.minus(3, 4);
calculator.multiply(5, 1);
calculator.divide(5, 10);
calculator.power(2, 5);

*/

/*
const calculator = {
    plus: function(a, b) {
        alert(a + b);
    },
    minus: function(a, b) {
        alert(a - b);
    },
    multiply: function(a, b) {
        alert(a * b);
    },
    divide: function(a, b) {
        alert(a / b);
    },
    power: function(a, b) {
        alert(a ** b);
    }
};

console.log(calculator.plus(2, 3));

*/


const calculator = {
    plus: function(a, b) {
        return a + b;
    },
    minus: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    },
    power: function(a, b) {
        return a ** b;
    }
};
const plusResult = calculator.plus(2, 3); //5
const minusResult = calculator.minus(plusResult, 10); //-5
const multiplyResult = calculator.multiply(10, minusResult); //-50
const divideResult = calculator.divide(multiplyResult, plusResult); //-10
const powerResult = calculator.power(divideResult, minusResult); //0.000009999999999999999
