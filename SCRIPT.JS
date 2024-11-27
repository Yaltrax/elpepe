function mostrarSeccion(id) {
    // Ocultar todas las secciones
    document.querySelectorAll('.contenido').forEach(seccion => {
        seccion.style.display = 'none';
    });
    // Mostrar la sección seleccionada
    document.getElementById(id).style.display = 'block';
}

function enviarFormulario(event) {
    event.preventDefault();
    alert('Mensaje enviado');
    event.target.reset();
}