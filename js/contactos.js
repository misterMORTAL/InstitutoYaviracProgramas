const $btnSignIn = document.querySelector('.sign-in-btn'),
    $btnSignUp = document.querySelector('.sign-up-btn'),
    $signUp = document.querySelector('.sign-up'),
    $signIn = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active');
    }
});

function datos() {
    var self = this;
    var Nombres = document.getElementById('Nombres').value;
    var Apellidos = document.getElementById('Apellidos').value;
    var celular = document.getElementById('celular').value;
    var email = document.getElementById('correo').value;
    

    console.log('REGISTRO DE CONTACTANOS');
    console.log('El nombre es' + Nombres );
    console.log('El apellido es' + Apellidos );
    console.log('El celular es:' + celular);
    console.log('El email es: ' + email);
    alert('HOLA.!! \n' + Nombres +'   '+ Apellidos + '\nGRACIAS POR ENVIARNOS TU INFORMACION \nNOS CONTACTAREMOS CONTIGO MEDIANTE TU EMAIL')
   

}

