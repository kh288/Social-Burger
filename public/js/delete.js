const delButtonHandler = async (event) => {
    event.preventDefault();

    const id = document.querySelector('.deleteBtn').value.trim()
    console.log(id);

    const response = await fetch(`/api/burger/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
            burger_id: id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
        document.location.replace('/dashboard/');
    }
}



// const delButtonHandler = async (event) => {

//     if (event.target.hasAttribute('data-id')) {
//         const id = event.target.getAttribute('data-id');

//         const response = await fetch(`/api/burger/${id}`, {
//             method: 'DELETE',
//         });
//         if (response.ok) {
//             document.location.replace('/dashboard/');
//         } else {
//             alert('Failed to delete Burger');
//         }
//     }
// };

document
    .querySelector('.deleteForm')
    .addEventListener('submit', delButtonHandler);