let moduloUsuario = require('./usuario');
const process = require('process');

let registro = process.argv[2]

switch (registro) {
    case 'registro':
        let nombre = process.argv[3]
        let email = process.argv[4]
        let password = process.argv[5]
        moduloLogin.agregarUsuario(nombre,email,password)
        console.log("Usuario registrado");
        break;

        case 'login':
            let passwordLogin = process.argv[4]
            let emailLogin = process.argv[3]
            let resultado = moduloLogin.loguearUsuario(emailLogin, passwordLogin)
            if (resultado.length == 1) {
                console.log("Bienvenido....");
            } else {
                console.log("Usuario invalido");
            }
            break;
        case 'eliminar':
            let passwordEliminar = process.argv[4]
            let mailEliminar = process.argv[3]
            let existe = moduloLogin.loguearUsuario(process.argv[3], process.argv[4])
            if (existe.length == 1){
                moduloLogin.eliminarUsuario(mailEliminar, passwordEliminar)
                console.log("Usuario borrado");

            }else {
                console.log("Este usuario no existe");
            }
                break;
    }