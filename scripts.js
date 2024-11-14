// Check for saved mode in localStorage
const savedMode = localStorage.getItem('mode') || 'light';

// Apply saved mode on page load
if (savedMode === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('mode-toggle').textContent = 'Switch to Light Mode';
}

// Toggle mode and update localStorage
document.getElementById('mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    // Update button text and save preference
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = 'Switch to Light Mode';
        localStorage.setItem('mode', 'dark');
    } else {
        this.textContent = 'Switch to Dark Mode';
        localStorage.setItem('mode', 'light');
    }
});
