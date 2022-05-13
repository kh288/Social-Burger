// const rawInput = document.querySelector('.burger-render');
let getBurgerQuery;
let getDeleteQuery;
let queryArray = [];
let burgerArray = [];

// Gets all the elements we need to iterate through
function getBurgerSection() {
    getBurgerQuery = document.getElementsByTagName('section');
    for (var i = 0; i < getBurgerQuery.length; i++) {
        queryArray.push(getBurgerQuery[i].attributes.id.value);
    }
}

// converts the burger string into an array
function cleanBurger() {
    for(var i = 0; i < getBurgerQuery.length; i++) {
        var str  = getBurgerQuery[i].innerText;
        let arr = str.split(',');
        burgerArray.push(arr);
    }
}

// Function to render the burger given the burger string on the page
function renderBurger() {
    for(var i = 0; i < queryArray.length; i++) {
        var name = '#' + queryArray[i];
        var burgerGen = document.querySelector(name);

        var burger = document.createElement('div');
            burger.setAttribute('id', `burger-${i}`);

        for (var j = burgerArray[i].length - 1; j >= 0; j--) {
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
    }
    var removeThis = document.querySelectorAll('article');
    for (let i = 0; i < removeThis.length; i++) {
        removeThis[i].remove();
    }
}

getBurgerSection();
cleanBurger();
renderBurger();