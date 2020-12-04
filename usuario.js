const fs = require('fs');

let moduloUsuario = {
    archivo : './usuario.json',
    leerJSON : function(){
        let userLeido = fs.readFileSync(this.archivo, 'utf-8')
        let objetoUser = JSON.parse(userLeido)
        return objetoUser
    },
    guardarJSON : function(info){
        let formatoJSON = JSON.stringify(info)
        fs.writeFileSync(this.archivo, formatoJSON, 'utf-8')
    },
    loguear : function(email, contraseña){
        let listaUser = this.leerJSON();
        let logueoUser = listaUser.filter(usuario=>{
            return usuario.email == email && usuario.password == contraseña
        })
        return logueoUser
    },
    registrar : function(nombre, email, contraseña){
        let listaUser = this.leerJSON();
        let nuevoUser ={
            nombre : nombre,
            email : email,
            password : contraseña
        }
        listaUser.push(nuevoUser)
        this.guardarJSON(listaUser)
    },
    eliminar : function(email, contraseña){
        let listaUser = this.leerJSON();
        let nuevaLista = listaUser.filter(user=>{
            return user.email != email && usuario.password != contraseña
        })
        this.guardarJSON(nuevaLista)
    }
}


module.exports = moduloUsuario