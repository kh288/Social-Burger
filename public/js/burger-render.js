// const rawInput = document.querySelector('.burger-render');
let getBurgerQuery;
let queryArray = [];
let burgerArray = [];
console.log("FILE IS WORKING");
function getBurgerSection() {
    getBurgerQuery = document.getElementsByTagName('section');
    // getBurgerQuery[0].attributes.id.value = id="1-burger"
    
    for (var i = 0; i < getBurgerQuery.length; i++) {
        // getBurgerQuery[i].querySelector(getBurgerQuery[i].attributes.id.value);
        queryArray.push(getBurgerQuery[i].attributes.id.value);
    }
    // console.log(queryArray);
}

getBurgerSection();

function returnBurgerArray() {
    // .split(' ').join('\n').split('\n')
    for(var i = 0; i < getBurgerQuery.length; i++) {
        var burger = getBurgerQuery[i].innerText;
        // burger = burger.filter(function(space) {
        //     return space.trim() != '';
        // });
        // burger[2] is ACTUAL burger ID in SQL DB
        // let str = burgerArray[9];
        var str = burger;
        let pattern = /^[0-9]+\D+((\d+,?\s?)+).*/g;
        const match = str.replace(pattern, "$1");
        let arr = match.split(',');
        burgerArray.push(arr);

        // burgerArray[i] = burgerArray[i].split(' ');
        // if (burgerArray[j].includes(',')) {
        //     burgerArray[j].pop();
        // }
        // for (var j = 0; j < burgerArray[i].length; j++) {
        //     if (burgerArray[j] === "23,20,17,14") {
        //         burgerArray[j].pop();
        //     }
        // }
    }
    // burgerArray = burgerArray.filter(isNaN);
}

returnBurgerArray();

console.log(burgerArray);

// for (var i = 0; i < burgerArray[0]; i++) {
//     if (burgerArray[i].includes(',')){
//         console.log(burgerArray[i]);
//     }
// }

let str = burgerArray[9];
let pattern = /^[0-9]+\D+((\d+,?\s?)+).*/g;

const match = str.replace(pattern, "$1");
let arr = match.split(',');
console.log(arr);
// console.log(burgerArray);

function renderBurger() {
    burgerArray = getBurgerQuery[1].innerText.split(',');

    console.log('Created burgerArray: ' + burgerArray);
    console.log('Created burgerId: ' + burgerId);

    var burger = document.createElement('div');
        burger.setAttribute('id', `${burgerId}`);

    for (var i = burgerArray.length - 1; i >= 0; i--) {
    var image = document.createElement('img');
        image.setAttribute('style',
            `z-index: ${i};
            position: relative;`);
        image.setAttribute('class',
            'ingredient p-3');
        image.setAttribute('src',
            '/assets/ingredients/ingredient-' + burgerArray[i] + '.png');
    burger.appendChild(image);
    burgerGen.appendChild(burger);
    }
}

// renderBurger();