
var juguetes = ["muñeca","carro","balon"];
console.log(juguetes);

//Pueden guardar mas de un tipo de dato
var ejemplo = [1, "hola", "🎈","✨",{name : "javier", age: 21},true];
console.log(ejemplo);


//Cuantos elementos
var juguetes = ["muñeca","carro","balon"];
console.log(juguetes.length);


//indice
//                0         1       2
var juguetes = ["muñeca","carro","balon"];
console.log(juguetes[2]);

//Push --> Agregar a la lista un objeto al final
juguetes.push("Lego");
console.log(juguetes);

//pop --> Saca el ultimo elemento del arreglo
juguetes.pop();
console.log(juguetes);

//unshift --> Agregar elementos al inicio de la lista
juguetes.unshift("Lego");
console.log(juguetes);

//shift 
juguetes.shift();
console.log(juguetes);

//lifo - fifo
//pilas - folas(colas)

//indexOf --> posiciones donde se encuentra un elemento
var juguetes = ["muñeca","carro","balon"];
var indexCarro = juguetes.indexOf("carro");
console.log(indexCarro);

//metodos adicionales
var juguetes = ["muñeca","carro","balon"];
juguetes.reverse(); //girar toda la lista
console.log(juguetes);

//sort --Z ordena la lista
var juguetes = ["muñeca","carro","balon",1,"tractor",6,"lego",true,3];
juguetes.sort();
console.log(juguetes);

//slice --> corta la lista entre las posicoines indicadas
var juguetes = ["muñeca","carro","balon",1,"tractor",6,"lego",true,3];
var recorte = juguetes.slice(0,3);
console.log(recorte);

//COMO CREO UNA COPIA.
//Forma viejita
var juguetes = ["Muñeca", "Carro", "Balón", 1 , "Tractor", 6, "LEGO"];
var copiaJuguetes = juguetes.slice();
copiaJuguetes.reverse();
console.log(juguetes);
console.log(copiaJuguetes);

var juguetes = ["Muñeca", "Carro", "Balón", "Tractor"];
var copiaJuguetes = ["SOY UN ELEMENTO", ...juguetes, "estoy al final"];
//Spread operator
console.log(juguetes);
console.log(copiaJuguetes);

