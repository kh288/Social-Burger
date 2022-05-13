const deleteFormHandler = async (event) => {
    event.preventDefault();

    const burgerId = document.querySelector('.burgerInput').value.trim()
    console.log(burgerId);

    const response = await fetch(`/api/burger/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
            burger_id: burgerId
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}


document
    .querySelector('.deleteForm')
    .addEventListener('submit', deleteFormHandler);