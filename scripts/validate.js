document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener('submit', validateForm); 
});

function validateForm(e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    if(name.length == 0) {
        alert('Ingrese nombre y apellido');
        return;
    }

    var subject = document.getElementById('subject').value;
    if (subject.length < 3) {
        alert('Escriba un asunto');
        return;
    }

    var email = document.getElementById('email').value;
    if (email.length < 10) {
        alert('Escriba su email');
        return;
    }

    var message = document.getElementById('message').value;
    if (message.length > 50) {
        alert('Max. 50 caracteres');
        return;
    }

    if(message.length == 0) {
        alert('Escriba su mensaje');
        return;
    }
    
    this.submit();
}