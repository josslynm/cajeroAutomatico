const usuarioOsvaldo ={

    nombre: "Osvaldo",
    contrasena: "1234" ,
    saldo: 350
}
const btnNombre = document.querySelector("#botones");

// TODO: funcion que da accion a los botones para el usuario Jocelyn
function disparaAccionOsvaldo(event) {

    var saldoAccion = usuarioOsvaldo.saldo;
    const botonReact= event.target.textContent;
 
    switch (botonReact) {

        case 'Consultar saldo':

            document.querySelector("#resultadoBoton").innerHTML=`Tu saldo es de $${saldoAccion}`;
            
            break;

        case 'Ingresar monto':

        
            var ingreso= Number(prompt("Ingresa monto:"))
            var cantidadActual = usuarioOsvaldo.saldo;

            var prueba= ingreso+cantidadActual;
       


                if(cantidadActual < 990 && prueba <= 990){

                     var nuevaCantidad= cantidadActual+ingreso;
               
                    document.querySelector("#resultadoBoton").innerHTML=`Ingresó $${ingreso}. Tu saldo es de $${nuevaCantidad}`;

                    usuarioOsvaldo.saldo= nuevaCantidad;

                }else if(cantidadActual >= 990){

                        alert("Ya tienes el monto máximo. No puedes ingresar mas");

                        document.querySelector("#resultadoBoton").innerHTML=`Ya tienes el monto maximo.`;

                

                 }else if(prueba > 990){
                    var montoMax= 990-cantidadActual;
                     alert(`El monto máximo que puedes agregar es $${montoMax}. Intentalo de nuevo`);
                 document.querySelector("#resultadoBoton").innerHTML=`Ingresa una cantidad menor`
                    }

          break;

        case 'Retirar monto':

            var retiro= Number(prompt("Ingresa monto:"))
            var actual = usuarioOsvaldo.saldo;

            var prueba2= actual-retiro;

            if(actual > 10 && prueba2 >=10){
                var nuevoMonto = actual - retiro;
                
               document.querySelector("#resultadoBoton").innerHTML=`Retiraste $${retiro}. Tu saldo es de $${nuevoMonto}`;

                usuarioOsvaldo.saldo= nuevoMonto;


            }else if(actual <=10){
                
                alert("Ya tienes el monto mínimo.");
                document.querySelector("#resultadoBoton").innerHTML="Ya tienes el monto mínimo. No puedes retirar mas"

            }else if( prueba2 = 10){
                var retiroMax= actual-10;
                //console.log(`El monto maximo que puedes retirar es ${retiroMax}. Intentalo de nuevo`)
                alert(`El monto máximo que puedes retirar es $${retiroMax}. Intentalo de nuevo`);
                document.querySelector("#resultadoBoton").innerHTML=`Retira una cantidad menor.`
                // document.querySelector("#advertencia").style.color = "red";
            }

          break;
        
        default:
          console.log('default');
      }
    
    
}
    
btnNombre.addEventListener('click',disparaAccionOsvaldo);