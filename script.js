document.getElementById('changeTextButton').addEventListener('click', function() {
    document.getElementById('greeting').textContent = 'Text Changed!';
});

document.getElementById('toggleColorButton').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
