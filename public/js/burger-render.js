// const rawInput = document.querySelector('.burger-render');
let getBurgerQuery;
let queryArray = [];
let burgerArray = [];

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
    // var burger;
    const response = await fetch('/', {
        method: 'GET',
        
        headers: { 'Content-Type': 'application/json' },
    });

    // console.log(response);
    // console.log(burger);
    // .split(' ').join('\n').split('\n')
    for(var i = 0; i < getBurgerQuery.length; i++) {
        var burger = getBurgerQuery[i].innerText;
        // burger = burger.filter(function(space) {
        //     return space.trim() != '';
        // });
        // burger[2] is ACTUAL burger ID in SQL DB
        burgerArray.push(burger);

        burgerArray[i] = burgerArray[i].split(' ');
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