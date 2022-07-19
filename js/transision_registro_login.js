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

function getDataRegister() {
    var self = this;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var cedula = document.getElementById('cedula').value;
    var celular = document.getElementById('celular').value;
    var pswd = document.getElementById('pswd').value;
    console.log('ontencion de datos regitro');
    console.log(name) 
    console.log(email);
    console.log(cedula);
    console.log(celular);
    console.log(pswd);
    self.export_cedula = cedula;
    self.export_pswd = pswd;
    alert("BIENVENIDO " + name);
    alert(" TE HAS REGISTRADO CON EXITO ")

    
}

function iniciarSesion() {
    var cedula_login, pswd_login;
    cedula_login = document.getElementById("cedula_login").value;
    pswd_login = document.getElementById('pswd_login').value;
    console.log(self.export_name);
    if (cedula_login == "1725070310" && pswd_login == "123" || self.export_cedula == cedula_login && self.export_pswd == pswd_login || cedula_login == "1729391697" && pswd_login == "123" || cedula_login == "1722732698" && pswd_login == "123" || cedula_login == "1722385232" && pswd_login == "123" || cedula_login == "1729242980" && pswd_login == "123") {
        window.location = "entrada.html"
        alert('BIENVENIDO')
    } else if (cedula_login == '' && pswd_login == '') {
        alert('No se permite iniciar sesion con la cedula y la contrasena vacia');
    } else if (cedula_login == '' || pswd_login == '') {
        alert('No se permite iniciar sesion con la cedula o la contrasena vacia');
    } else {
        alert("Su usuario o contraseña son incorrectos");
    }

}