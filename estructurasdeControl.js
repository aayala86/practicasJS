//IF Else y Switch
let dia = 9; //Lunes

switch ( dia ) {

  case 0 :
    console.log('Es Domingo');
    break;
    
  case 1 :
    console.log('Es Lunes');
    break;
    
  case 2 :
    console.log('Es Martes');
    break;
    
  case 3 :
    console.log('Es Miercoles');
    break;
    
  case 4 :
    console.log('Es Jueves');
    break;
    
  case 5 :
    console.log('Es Viernes');
    break;
    
  case 6 :
    console.log('Es Sabado');
    break;
  default:
    console.log('No es un dia valido')

}



let diaIfElse = 6

if ( diaIfElse === 0 ) {
  console.log('Es Domingo')
} else if ( diaIfElse === 1 ) {
  console.log('Es Lunes')
} else if ( diaIfElse === 2 ) {
  console.log('Es Martes')
} else if ( diaIfElse === 3 ) {
  console.log('Es Miercoles')
} else if ( diaIfElse === 4 ) {
  console.log('Es Jueves')
} else if ( diaIfElse === 5 ) {
  console.log('Es Viernes')
} else if ( diaIfElse === 6 ) {
  console.log('Es Sabado')
} else {
  console.log('No es un dia Valido')
}