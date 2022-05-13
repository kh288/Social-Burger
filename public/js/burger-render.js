function renderBurger() {
    const burgerGen = document.querySelector('');
    const burgerId = document.querySelector('.burger-id');

    const burgerArray = burgerArray.ingredients.split(',');

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

renderBurger();