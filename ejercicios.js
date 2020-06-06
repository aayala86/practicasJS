//  Ejercios 1 Convertiendo de lb a kg1 Libra = 0.45 kg

let libra = 160;


let kg = (libra)/2.2046
kg *= 100;
kg = Math.round(kg)
kg /= 100;

console.log(kg)
console.log('Fin del Ejecicio1')


// Convirtiende de km a mii, 1km = 0,62 mi

let km = 20;

let mi = km*0.62;
mi *= 100;
mi = Math.round(mi)
mi /= 100;

console.log(mi)
console.log('Fin del Ejecicio2')

//Ejercio 3 Calcular Area

let base = 10;

let altura = 5;

let area = (base*altura)/2;

console.log(area);
console.log('Fin del Ejecicio3')


// Ejercicio 4 Utilizar un ciclo for y determinar cual es el mayor;

let numeros = [ 1,6,8,4,2,7,10,3,5];
let mayor1= -999999;

for ( let i = 0; i <= numeros.length; i++) {
  if ( numeros[i] >= mayor1) {
    mayor1 = numeros[i];
  };
}

console.log('El numero mayor es ' + mayor1)

console.log('Fin del Ejecicio4')


//Ejercicio 5  Determinar cuales son pares y cuales impares

let numeros2 = [ 1,6,8,4,2,7,10,3,5];

  for ( let i = 0; i < numeros.length; i++) {

    let numero = numeros[i];

    if ( numero % 2 === 0) {
      console.log(numero + ' El numero es par')
    } else {
      console.log(numero + ' El numero es impar')
    }

  }

  console.log('fin del Ejecircio 5')

// Ejecricio 6

for (let i = 1; i <= 5; i++ ) {
  
  let reglon = '';
    for (let j = 1; j <= 5; j++ ) {
      reglon += `${ j * i }   `;
    }
    console.log(reglon)
}

console.log('Fin de Ejecicio 6');

//Ejercicio 7 Crear una funcion con 3 argumentos y determinar el numero mayor


function  max ( a, b, c ) {
  
  let mayor;
  if ( a > b ) {

    if ( a > c ) {
      mayor = a;
    } else {
      mayor = c;
    }
  } else {
    
    if ( b > c ) {
      mayor = b;
    } else {
      mayor = c;
    }
  }
  return mayor;

}

let mayor = max ( 5, 2, 6 );

console.log('El Mayor es ' + mayor);
