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

function getHoraFechaSalida() {
    var hora_salida, fecha_salida;
    hora_salida = document.getElementById('time_salida').value;
    fecha_salida = document.getElementById('date_salida').value;
    console.log('Su hora y fecha de salida registrada es: ', hora_salida, ' Y ', fecha_salida);
    window.location = "inicio.html"
    alert("ESTIMADO TRABAJADOR. \nHORA REGISTRADA A LAS : \n" + hora_salida + " HORAS \nFECHA REGISTRADA : \n" + fecha_salida + "");

  
}

function getHoraFechaEntrada() {
    var hora_entrada, fecha_entrada;
    hora_entrada = document.getElementById('time_entrada').value;
    fecha_entrada = document.getElementById('date_entrada').value;
    
    console.log('Su hora y fecha de entrada registrada es: ', hora_entrada, ' Y ', fecha_entrada);
    window.location = "inicio.html"
    alert("ESTIMADO TRABAJADOR. \nHORA REGISTRADA A LAS : \n" + hora_entrada + " HORAS \nFECHA REGISTRADA : \n" + fecha_entrada + "");
    
  
    
}
function datos(){
    document.write("HOLA SOY JOSE : ");
}