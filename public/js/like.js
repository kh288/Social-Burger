const likeBtn = document.querySelector(".like-btn");
let likeIcon = document.querySelector("#icon");
let count = document.querySelector("#count");

//button clicked
let clicked = false

likeBtn.addEventListener('click', () => {
    if(!clicked) {
        clicked = true
        count.textContent++;
    } else {
        clicked = false;
        count.textContent--;
    }
})
