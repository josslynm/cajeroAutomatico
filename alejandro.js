const usuarioAlejandro ={

    nombre: "Alejandro",
    contrasena: "1234" ,
    saldo: 80
}

const btnNombre = document.querySelector("#botones");

// TODO: funcion que da accion a los botones para el usuario Jocelyn
function disparaAccionAlejandro(event) {

    var saldoAccion = usuarioAlejandro.saldo;
    const botonReact= event.target.textContent;
 
    switch (botonReact) {

        case 'Consultar saldo':

            document.querySelector("#resultadoBoton").innerHTML=`Tu saldo es de $${saldoAccion}`;
          break;

        case 'Ingresar monto':

        
            var ingreso= Number(prompt("Ingresa monto:"))
            var cantidadActual = usuarioAlejandro.saldo;

            var prueba= ingreso+cantidadActual;
       


           if(cantidadActual < 990 && prueba <= 990){

              var nuevaCantidad= cantidadActual+ingreso;
               
            document.querySelector("#resultadoBoton").innerHTML=`Ingresó $${ingreso}. Tu saldo es de $${nuevaCantidad}`;

               usuarioAlejandro.saldo= nuevaCantidad;

           }else if(cantidadActual >= 990){

            alert("Ya tienes el monto máximo. No puedes ingresar mas");

            document.querySelector("#resultadoBoton").innerHTML="Ya tienes el monto máximo."

           }else if(prueba > 990){
               var montoMax= 990-cantidadActual;
                alert(`El monto máximo que puedes agregar es ${montoMax}. Intentalo de nuevo`);
            document.querySelector("#resultadoBoton").innerHTML=`Ingresa una cantidad menor`
           }

          break;

        case 'Retirar monto':

            var retiro= Number(prompt("Ingresa monto:"))
            var actual = usuarioAlejandro.saldo;

            var prueba2= actual-retiro;

            if(actual > 10 && prueba2 >=10){
                var nuevoMonto = actual - retiro;
                
                document.querySelector("#resultadoBoton").innerHTML=`Retiró $${retiro} .Tu saldo es de $${nuevoMonto}`;

                usuarioAlejandro.saldo= nuevoMonto;
            }else if(actual <=10){
                
                alert("Ya tienes el monto mínimo. No puedes retirar mas");
                document.querySelector("#resultadoBoton").innerHTML="Ya tienes el monto minimo."

            }else if( prueba2 = 10){
                var retiroMax= actual-10;
                //console.log(`El monto maximo que puedes retirar es ${retiroMax}. Intentalo de nuevo`)
                alert(`El monto máximo que puedes retirar es ${retiroMax}. Intentalo de nuevo`);
                document.querySelector("#resultadoBoton").innerHTML=`Retira una cantidad menor`

            }

          break;
        
        default:
          console.log('default');
      }
    
    
}
    
btnNombre.addEventListener('click',disparaAccionAlejandro);