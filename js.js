

function validar(){
    var usuario1 = "diegoloperam1503@gmail.com"
    var contraseña1 = "1234"

    var usuario2 = "santiagotabares@gmail.com"
    var contraseña2 = "1234"

    var usuario3 = "proveedor1@gmail.com"
    var contraseña3 = "1234"

    if (document.form.user.value == usuario1 && document.form.pass.value == contraseña1 ) {
        alert("Bienvenido!!");
        window.location.href="homeUsuario.html"
    }
    else if (document.form.user.value == usuario2 && document.form.pass.value == contraseña2 ) {
        alert("Bienvenido!!");
        window.location.href="homeAdmin.html"
    }
    else if (document.form.user.value == usuario3 && document.form.pass.value == contraseña3 ) {
        alert("Bienvenido!!");
        window.location.href="homeProveedor.html"
    }
    else{alert("Usuario y/o contraseña incorrectos")}

}

