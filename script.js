document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation (in a real application, you'd send data to a server)
    if (username && email && password) {
        document.getElementById('message').textContent = "Sign up successful!";
        document.getElementById('message').style.color = "green";
    } else {
        document.getElementById('message').textContent = "Please fill in all fields.";
    }
});

// Back button functionality
document.getElementById('back-button').addEventListener('click', function () {
    window.history.back();
});