
var miNombre = "Javier Collazos";

//Existen 2 funciones: 
var miNombreMayus = miNombre.toUpperCase();
var miNombreMin = miNombre.toLowerCase();

console.log(miNombreMayus);
console.log(miNombreMin);

//Longitud
console.log(miNombre.length);

// 0    1    2    3    4    5
//["J", "a", "v", "i", "e", "r"]
var miNombre = "Javier";
var primeraLetra = miNombre.charAt(0);
var otraLetra = miNombre.charAt(2);
console.log(primeraLetra);
console.log(otraLetra);

var miNombre = "Javier";
var parteDeMiNombre = miNombre.charAt(1) + miNombre.charAt(2) + miNombre.charAt(3);

//La otra forma
parteDeMiNombre = miNombre.substr(3, 50);
parteDeMiNombre = miNombre.substr(50);

//AMBAS FUNCIONAN DISTINTO
parteDeMiNombre = miNombre.slice(3);
parteDeMiNombre = miNombre.slice(3, (3 + 50));
console.log(parteDeMiNombre);

//
var miNombre = "santiago";
var primeraLetraMayus = miNombre.charAt(0).toUpperCase() + miNombre.substring(1); //S

console.log(primeraLetraMayus);
//Santiago

//Primero la ultima letra en mayúscula // santiagO
var miNombre = "santiago";
var ultimaLetraMayus = miNombre.substring(0, 7) + miNombre.charAt(7).toUpperCase();

console.log(ultimaLetraMayus);


//Segundo ejercicio

var miNombre = "javier andres collazos gómez";
var miNombreDividido = miNombre.split(" ");

console.log(miNombreDividido);

var miNombreFinal = "";

for (var i = 0 ; i < miNombreDividido.length ; i++) {
    var miNombreMayus = [miNombreDividido[i].charAt(0).toUpperCase() + miNombreDividido[i].substring(1)];
    miNombreFinal = miNombreMayus + miNombreFinal + " ";
}

console.log(miNombreFinal);

//Javier Andres Collazos Gómez
//split



