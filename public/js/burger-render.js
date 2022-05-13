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

function cleanBurger() {
    let removeCrap = /^[0-9]+\D+((\d+,?\s?)+).*/g;
    let removeSpace = /\s/g;
    for(var i = 0; i < getBurgerQuery.length; i++) {
        var str  = getBurgerQuery[i].innerText;
        const match = str.replace(removeCrap, '$1');
        let arr = match.split(',');
        for (var j = 0; j < arr.length; j++) {
            arr[j] = arr[j].replace(removeSpace, '');
        }
        // const cleaned = arr.replace(removeSpace, '');
        burgerArray.push(arr);
    }
    console.log(burgerArray);
}

// console.log(burgerArray);

function renderBurger() {

    // getBurgerQuery[0].attributes.id.value
    // queryArray[0]
    
    for(var i = 0; i < queryArray.length; i++) {
        var name = '#' + queryArray[i];
        var burgerGen = document.querySelector(name);

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
        burgerGen.appendChild(burger);
        }
        document.querySelector('#delete-me').removeChild()
    }
}

getBurgerSection();
cleanBurger();
renderBurger();