// const rawInput = document.querySelector('.burger-render');
let getBurgerQuery;
let queryArray = [];
// const burgerArray = [];

function getBurgerSection() {
    getBurgerQuery = document.getElementsByTagName('section');
    // getBurgerQuery[0].attributes.id.value = id="1-burger"
    
    for (var i = 0; i < getBurgerQuery.length; i++) {
        // getBurgerQuery[i].querySelector(getBurgerQuery[i].attributes.id.value);
        queryArray.push(getBurgerQuery[i].attributes.id.value);
    }
}
getBurgerSection();
let burger = getBurgerQuery[1].innerHTML.split(' ').join('\n').split('\n');
burger = burger.filter(function(space) {
    return space.trim() != '';
});

console.log(burger);
function renderBurger() {
    
    burgerArray = getBurgerQuery[1].innerHTML.split(',');

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