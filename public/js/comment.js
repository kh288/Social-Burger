
const commentFormHandler = async (event) => {
    event.preventDefault();

    const burgerId = document.querySelector('.burgerId-input').value.trim()
    console.log(burgerId);

    const commentContent = document.querySelector('.comment-input').value.trim()
    console.log(commentContent);

    const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
            text: commentContent,
            burger_id: burgerId,
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
    .querySelector('.commentForm')
    .addEventListener('submit', commentFormHandler);
