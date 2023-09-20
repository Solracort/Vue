
describe ( 'Example Component', ()=>{
  
  test('Debe ser mayor a 10', ()=>{
    
    //Arreglar
    let value = 9;

    //Estimulo
    value = value+2;


    //Observar el resultado


    expect ( value).toBeGreaterThan(10)


    // if (value>10){
    //   // TODO : todo bien!!
    // } else {
    //   throw `${value} no es mayor a 10`
    // }
      


  })


})