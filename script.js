document.getElementById('toggle-theme').addEventListener('click', function() {
    const body = document.body;
    if (body.classList.contains('day-mode')) {
        body.classList.remove('day-mode');
        body.classList.add('night-mode');
        this.textContent = 'Day Mode';
    } else {
        body.classList.remove('night-mode');
        body.classList.add('day-mode');
        this.textContent = 'Night Mode';
    }
});
