
class Carro {
  constructor (marca, tipo, puertas) {
    this.marca = marca;
    this.tipo = tipo;
    this.puertas= puertas;
    this.encendido = false;
    this.gasolina = 100
  }

  encenderCarro() {
    if (this.encendido) {
      console.error('El Carro ya esta encendido')
    } else {
      this.encendido = true;
      console.log('El Carro esta encendido')
    }

    return this;
  }
  // Creando un metodo para que no realice viaje sin estar con el vehiculo encendido y sin tener combustible suficiente
  
  realizarViaje ( consumo ) {

    // Opcion 1 de resolver:
    // if ( this.encendido ) {
    //   if (this.gasolina > consumo) {
    //     this.gasolina = this.gasolina - consumo;
    //     return 'Le queda ' + this.gasolina + ' de gasolina'
    //   } else {
    //     console.log('No tiene suficiente gasolina para realizar el viaje, Gasolina = ' + this.gasolina);
    //   }
    // } else {
    //   console.error('No puede realizar un viaje sin Encender el Carro')
    // }

    // Opcion 2 de Resolver

    if ( !this.encendido ) return console.log('No puede realizar un viaje sin Encender el Carro');
    if ( consumo > this.gasolina) return console.log('No tiene suficiente gasolina para realizar el viaje, Gasolina = ' + this.gasolina);
      this.gasolina = this.gasolina - consumo;
      return 'Le queda ' + this.gasolina + ' de gasolina'



  }
}


let carro = new Carro('Mazda', 'Sedan', 2);

console.log(carro)