

const commentFormHandler = async (event) => {
    event.preventDefault();

    const burgerId = document.querySelector('input[name="burger-id"]').value;
    console.log(burgerId);

    const commentContent = document.querySelector('#comment-body');
    console.log(commentContent);

    const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
            text: commentContent.value,
            burger_id: burgerId
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
        alert('Failed to add a comment');
    }
};


document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentFormHandler);
