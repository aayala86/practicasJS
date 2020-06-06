

// //Practica1 Funciones
// function sumar ( a, b ) {
//   return a + b;
// }
// let total = sumar( 30, 20 )
// console.log(total)


function imprimirTabla ( base, limite ) {

  for ( let i = 1; i <= limite; i++ ) {
    let resultado = base * i;
    console.log( base + ' x ' + i + ' = ' + resultado )
  }

}


imprimirTabla(2,5);




//Caculando la nota


/*
    Cree un algoritmo  que permita determinar 
    la calificación en letras de un alumno

    Si la nota se encuentra entre 100 a 90 = A
    Si la nota se encuentra entre 80 a 89 = B
    Si la nota se encuentra entre 70 a 79 = C
    Si la nota se encuentra entre 60 a 69 = D
    Si la nota es inferior a 60 = F

 */

function calcularNota ( nota ) {

  let notaLetra = '';
  
  if (nota >= 90) {
      notaLetra = 'A';
  } else if (nota >= 80) {
      notaLetra = 'B';
  } else if (nota >= 70) {
      notaLetra = 'C';
  } else if (nota >= 60) {
      notaLetra = 'D';
  } else {
      notaLetra = 'F';
  }

  console.log(nota + ' es igual a ' + notaLetra);

}  

calcularNota(100);