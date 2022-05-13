// const rawInput = document.querySelector('.burger-render');
let getBurgerQuery;
let queryArray = [];
let burgerArray = [];

function getBurgerSection() {
    getBurgerQuery = document.getElementsByTagName('section');
    for (var i = 0; i < getBurgerQuery.length; i++) {
        queryArray.push(getBurgerQuery[i].attributes.id.value);
    }
}

function returnBurgerArray() {
    let pattern = /^[0-9]+\D+((\d+,?\s?)+).*/g;
    for(var i = 0; i < getBurgerQuery.length; i++) {
        var str  = getBurgerQuery[i].innerText;
        const match = str.replace(pattern, "$1");
        let arr = match.split(',');
        burgerArray.push(arr);
    }
    console.log(burgerArray);
}

console.log(burgerArray);

function renderBurger() {

    // getBurgerQuery[0].attributes.id.value
    // queryArray[0]
    
    for(var i = 0; i < queryArray.length; i++) {
        var name = '#' + queryArray[i];
        var burgerGen = document.querySelector(name);

        console.log(burgerGen)
        console.log(queryArray[i])

        var burger = document.createElement('div');
            burger.setAttribute('id', `burger-${i}`);

        for (var j = burgerArray.length - 1; j >= 0; j--) {
        var image = document.createElement('img');
            image.setAttribute('style',
                `z-index: ${j};
                position: relative;`);
            image.setAttribute('class',
                'ingredient p-3');
            image.setAttribute('src',
                '/assets/ingredients/ingredient-' + burgerArray[i][j] + '.png');
        burger.appendChild(image);
        console.log(burger);
        burgerGen.appendChild(burger);
        }
        document.querySelector('#delete-me').removeChild()
    }
}

getBurgerSection();
returnBurgerArray();
renderBurger();