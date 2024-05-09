
console.log("Mensaje de prueba");
let nombre = "John"
console.log(nombre)
alert("BIENVENIDO/A");

let saludo = "Hola";
let nombreIngresado = prompt("Ingrese su nombre");
let apellidoIngresado = prompt("Ingrese su apellido");

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("Nombre: "+nombreIngresado +"\nApellido: "+apellidoIngresado);
}else{
    alert("Error: Ingresar nombre y apellido");
}

let edad = prompt("Ingresa tu edad");

if (edad >= 18){
    console.log("Podes entrar.");
}
if (edad <= 18){
    console.log("No podes entrar.");
}
