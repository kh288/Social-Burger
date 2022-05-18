// const delButtonHandler = async (event) => {
//     event.preventDefault();

//     const id = document.querySelector('.deleteBtn').id
//     console.log(id);

//     const response = await fetch(`/api/burger/${id}`, {
//         method: 'DELETE',
//         body: JSON.stringify({
//             burger_id: id
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });
//     if (response.ok) {
//         document.location.replace('/dashboard');
//     } else {
//         alert(response.statusText);
//     }
// }



const delButtonHandler = async (event) => {

    if (event.target.id) {
        const id = event.target.id;
        console.log('---------------------------------------', id);
        const response = await fetch(`/api/burger/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to delete Burger');
        }
    }
};

document
    .querySelector('.deleteBtn')
    .addEventListener('click', delButtonHandler);