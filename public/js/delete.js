// const deleteFormHandler = async (event) => {
//     event.preventDefault();

//     const burgerId = document.querySelector('.burgerInput').value.trim()
//     console.log(burgerId);

//     const response = await fetch(`/api/burger/${id}`, {
//         method: 'DELETE',
//         body: JSON.stringify({
//             burger_id: burgerId
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });
//     if (response.ok) {
//         document.location.replace('/dashboard/');
//     } else {
//         alert(response.statusText);
//     }
// }



const delButtonHandler = async (event) => {

    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/burger/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard/');
        } else {
            alert('Failed to delete Burger');
        }
    }
};

document
    .querySelector('.deleteForm')
    .addEventListener('click', delButtonHandler);