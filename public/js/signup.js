
const loginFormHandler = async (event) => {
    event.preventDefault();

    const usernameEl = document.querySelector('#signupUser');
    const passwordEl = document.querySelector('#signupPassword');

    const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({
            username: usernameEl.value,
            password: passwordEl.value,
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to Sign Up');
    }
};

document
    .querySelector('.signup-form')
    .addEventListener('submit', loginFormHandler);