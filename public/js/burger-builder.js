const ingredients = [
    {
        "name": "top-bun",
        "cost": 0.25
    },
    {
        "name": "bacon",
        "cost": 1.20
    },
    {
        "name": "pineapple",
        "cost": 0.50
    },
    {
        "name": "pickles",
        "cost": 0.15
    },
    {
        "name": "lettuce",
        "cost": 0.15
    },
    {
        "name": "bellpepper",
        "cost": 0.25
    },
    {
        "name": "bellpepper",
        "cost": 0.30
    },
    {
        "name": "cheese",
        "cost": 0.55
    },
    {
        "name": "tomato",
        "cost": 0.25
    },
    {
        "name": "beef",
        "cost": 2
    },
    {
        "name": "ketchup",
        "cost": 0.10
    },
    {
        "name": "onion",
        "cost": 0.50
    },
    {
        "name": "salami",
        "cost": 1.0
    },
    {
        "name": "avacado",
        "cost": 2.3
    },
    {
        "name": "onion-rings",
        "cost": 1.4
    },
    {
        "name": "mustard",
        "cost": 0.15
    },
    {
        "name": "arugula",
        "cost": 0.20
    },
    {
        "name": "fried-chicken",
        "cost": 2.00
    },
    {
        "name": "green-olives",
        "cost": 0.80
    },
    {
        "name": "black-olives",
        "cost": 0.80
    },
    {
        "name": "egg",
        "cost": 1.00
    },
    {
        "name": "salmon",
        "cost": 3.50
    },
    {
        "name": "bottom-bun",
        "cost": 0.25
    },
    {
        "name": "middle-bun",
        "cost": 0.25
    },
    {
        "name": "radishes",
        "cost": 0.25
    }
];

const ingredientsButtons = document.querySelector('#ingredients');
const burgerGen = document.querySelector('#burger-gen');

function addEventListeners() {
    for (var i = 0; i < ingredients.length; i++) {
        document.getElementById(i+1).addEventListener('click', appendIngredient);
    }
}

const burgerArray = [];

function generateIngredientButtons() {
    for (var i = 1; i <= ingredients.length; i++) {
        // create button
            // Give attributes "class: 'btn'"
        // create img
            // give attributes "class: 'ingredient card-img-top'"
            // img appendChild to button
        // button appendChild to ingredientsButtons

        // Create button
        var button = document.createElement('button');
            button.setAttribute('id', i);
            button.setAttribute('class', 'btn col-4');
        // Create image to then append to button
        var image = document.createElement('img');
            image.setAttribute('class', 'card-img-top');
            image.setAttribute('src', '../assets/ingredients/ingredient-' + i + '.png');
            button.appendChild(image);
            // ../assets/ingredients/ingredient-' + i + '.png
        ingredientsButtons.appendChild(button);
    }
}

function appendIngredient(e) {
    e.preventDefault();
    burgerArray.push(e.view.document.activeElement.id);

    if (burgerGen.firstChild) {
        while (burgerGen.firstChild) {
            burgerGen.removeChild(burgerGen.firstChild);
        }
    }

    var burger = document.createElement('div');
        burger.setAttribute('id', 'burger');

    for (var i = burgerArray.length; i >= 0; i--) {
        var image = document.createElement('img');
            image.setAttribute('style', `z-index: ${i}; margin-top: -100%; position: relative;`);
            image.setAttribute('class', 'ingredient');
            image.setAttribute('src', '../assets/ingredients/ingredient-'+ burgerArray[i] +'.png');
            burger.appendChild(image);
        burgerGen.appendChild(burger);
    }
}

generateIngredientButtons();

addEventListeners();