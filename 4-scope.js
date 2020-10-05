var primerNombre = "iskra";

function nombreCompleto(){
    var segundoNombre = "fernanda";//local
    return `${primerNombre} ${segundoNombre}`
}

console.log(nombreCompleto());

//nuevo Caso
var primerNombre = "iskra"; //global
var segundoNombre = "Michi";

function nombreCompleto(){
    var segundoNombre = "fernanda";
    return `${primerNombre} ${segundoNombre}`
}

console.log(segundoNombre);
console.log(nombreCompleto());
