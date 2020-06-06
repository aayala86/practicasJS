

function describirPersona( p ) {

  console.log(`${p.nombre} tiene una edad de ${p.edad} y mide ${p.estatura}`);

}

//Declarando el objeto
let persona = {

  nombre: 'Fernando',
  edad: 32,
  estatura: 1.79

}

describirPersona(persona)





let persona1 = {
  nombre: 'Fernando',
  edad: 32,
};
let persona2 = {
  nombre: 'Melisa',
  edad: 27,
};
let persona3 = {
  nombre: 'Juan',
  edad: 40,
};

let personas = [persona1, persona2, persona3];


for (let i = 0; i<personas.length; i++) {
  console.log(`${personas[i].nombre} -- ${personas[i].edad}`);
}
