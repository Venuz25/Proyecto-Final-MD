document.addEventListener('DOMContentLoaded', function() {
    var toggleBtn = document.getElementById('boton-indice');
    var indice = document.getElementById('indice');

    toggleBtn.addEventListener('click', function() {
        if (indice.style.display === 'none') {
            indice.style.display = 'block';
        } else {
            indice.style.display = 'none';
        }
    });
});