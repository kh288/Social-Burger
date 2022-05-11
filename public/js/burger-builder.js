const ingredients = [
    {
        "id": 1,
        "name": "top-bun",
        "cost": 0.25
    },
    {
        "id": 2,
        "name": "bacon",
        "cost": 1.20
    },
    {
        "id": 3,
        "name": "pineapple",
        "cost": 0.50
    },
    {
        "id": 4,
        "name": "pickles",
        "cost": 0.15
    },
    {
        "id": 5,
        "name": "mushroom",
        "cost": 0.25
    },
    {
        "id": 6,
        "name": "lettuce",
        "cost": 0.15
    },
    {
        "id": 7,
        "name": "bellpepper",
        "cost": 0.25
    },
    {
        "id": 8,
        "name": "cheese",
        "cost": 0.55
    },
    {
        "id": 9,
        "name": "tomato",
        "cost": 0.25
    },
    {
        "id": 10,
        "name": "beef",
        "cost": 2
    },
    {
        "id": 11,
        "name": "ketchup",
        "cost": 0.10
    },
    {
        "id": 12,
        "name": "onion",
        "cost": 0.50
    },
    {
        "id": 13,
        "name": "salami",
        "cost": 1.0
    },
    {
        "id": 14,
        "name": "avacado",
        "cost": 2.3
    },
    {
        "id": 15,
        "name": "onion-rings",
        "cost": 1.4
    },
    {
        "id": 16,
        "name": "mustard",
        "cost": 0.15
    },
    {
        "id": 17,
        "name": "arugula",
        "cost": 0.20
    },
    {
        "id": 18,
        "name": "fried-chicken",
        "cost": 2.00
    },
    {
        "id": 19,
        "name": "green-olives",
        "cost": 0.80
    },
    {
        "id": 20,
        "name": "black-olives",
        "cost": 0.80
    },
    {
        "id": 21,
        "name": "egg",
        "cost": 1.00
    },
    {
        "id": 22,
        "name": "salmon",
        "cost": 3.50
    },
    {
        "id": 23,
        "name": "bottom-bun",
        "cost": 0.25
    },
    {
        "id": 24,
        "name": "middle-bun",
        "cost": 0.25
    },
    {
        "id": 25,
        "name": "radish",
        "cost": 0.25
    }
];

const ingredientsButtons = document.querySelector('#ingredients');
const burgerGen = document.querySelector('#burger-gen');
const burgerArray = [];

function addEventListeners() {
    for (var i = 0; i < ingredients.length; i++) {
        document.getElementById(i+1).addEventListener('click', appendIngredient);
    }
}

// Function to generate the buttons for ingredients
function generateIngredientButtons() {
    for (var i = 0; i < ingredients.length; i++) {
        // Create button
        var button = document.createElement('button');
            button.setAttribute('id', i + 1);
            button.setAttribute('class', 'btn col-4');
            console.log(ingredients[i].name);
        // Create image to then append to button
        var image = document.createElement('img');
            image.setAttribute('class', 'card-img-top');
            image.setAttribute('src', '../public/assets/ingredients/ingredient-' + (i + 1) + '.png');
            button.appendChild(image);
        // Append to HTML buttons
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
        console.log(ingredients[e.view.document.activeElement.id].name + ' Added');
    }

    var burger = document.createElement('div');
        burger.setAttribute('id', 'burger');

    for (var i = burgerArray.length-1; i >= 0; i--) {
        var image = document.createElement('img');
            image.setAttribute('style', `z-index: ${i}; position: relative;`);
            image.setAttribute('class', 'ingredient p-3');
            image.setAttribute('src', '../public/assets/ingredients/ingredient-'+ burgerArray[i] +'.png');
            burger.appendChild(image);
        burgerGen.appendChild(burger);
    }
}

generateIngredientButtons();

addEventListeners();