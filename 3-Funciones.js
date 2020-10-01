//declarativas

function saludar(){
    console.log("Hola")
}

//Expresion

var saludarv2 = function (){
    console.log("Hola soy la funcion 2")    
}

saludarv2();


//-------Parametro

function suma(a,b){
    return a + b;
}

console.log(suma(5,10));

function saludarEstudiante (nombreEstudiante){
    console.log("Hola estudiante "+nombreEstudiante);
}

saludarEstudiante("Jose");

function saludarEstudiante(nombreEstudiante){
    console.log(` Hola estudiente ${nombreEstudiante}, te recuerdo que el nombre es ${nombreEstudiante}`) 
}

saludarEstudiante("Jose");

function sumar (a,b){
    var suma = a+b;
    return suma;
}
