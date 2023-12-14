const toggleButton = document.getElementById('toggle-button');
const content = document.getElementById('contant');

toggleButton.addEventListener('click', () => {
    if (content.style.display === 'none') {
        content.style.display = 'block';
        toggleButton.textContent = 'Chupa Hua';
    } else {
        content.style.display = 'none';
        toggleButton.textContent = 'Favrate GaNA';
    }
});
