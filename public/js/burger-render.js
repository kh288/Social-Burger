// const rawInput = document.querySelector('.burger-render');
let getBurgerQuery;
let queryArray = [];

function getBurgerSection() {
    getBurgerQuery = document.getElementsByTagName('section');
    // getBurgerQuery[0].attributes.id.value = id="1-burger"
    
    for (var i = 0; i < getBurgerQuery.length; i++) {
        // getBurgerQuery[i].querySelector(getBurgerQuery[i].attributes.id.value);
        queryArray.push(getBurgerQuery[i].attributes.id.value);
    }
}


getBurgerSection();
// how to get the name of the id
// console.log(getBurgerQuery[0].attributes[0].nodeValue);

function renderBurger() {
    // const burgerGen = rawInput.split(" ");
    // const generated = burgerGen.filter(function(space) {
    //     return space.trim() != '';
    // });
    // console.log(rawInput);
    // console.log(burgerGen[2]);

    // for(var i = 0; i < burgerGen.length; i++) {

    // }
    
    // const burgerArray = burgerArray.ingredients.split(',');

    // console.log('Created burgerArray: ' + burgerArray);
    // console.log('Created burgerId: ' + burgerId);

    // var burger = document.createElement('div');
    //     burger.setAttribute('id', `${burgerId}`);

    // for (var i = burgerArray.length - 1; i >= 0; i--) {
    // var image = document.createElement('img');
    //     image.setAttribute('style',
    //         `z-index: ${i};
    //         position: relative;`);
    //     image.setAttribute('class',
    //         'ingredient p-3');
    //     image.setAttribute('src',
    //         '/assets/ingredients/ingredient-' + burgerArray[i] + '.png');
    // burger.appendChild(image);
    // burgerGen.appendChild(burger);
    // }
}

// renderBurger();