document.getElementById('mode-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    // Update button text based on mode
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = 'Switch to Light Mode';
    } else {
        this.textContent = 'Switch to Dark Mode';
    }
});
