const formulario = document.querySelector("#formulario")
const inputNombre = document.querySelector("#campo-nombre")
const inputApellido = document.querySelector("#campo-apellido")
const inputEdad = document.querySelector("#campo-edad")
const inputEmail = document.querySelector("#campo-email")
const submit = document.querySelector("#submit")


const clientes = []

class Cliente {
    constructor(nombre, apellido, edad, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
    }
}

formulario.onsubmit = (e) => {
    e.preventDefault()
    console.log(e)
    clientes.push(new Cliente(inputNombre.value, inputApellido.value, inputEdad.value, inputEmail.value))
    console.log(clientes)
}

