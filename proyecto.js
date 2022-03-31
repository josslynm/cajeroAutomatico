const usuarioJoss ={

    nombre: "Jocelyn",
    contrasena: "1234" ,
    saldo: 150
}
    
const usuarioAlejandro ={

    nombre: "Jocelyn",
    contrasena: "1234" ,
    saldo: 80
}

const usuarioOsvaldo ={

    nombre: "Osvaldo",
    contrasena: "1234" ,
    saldo: 350
}


//INGRESO DE USUARIO
function comparar(){

    const entrada1= document.querySelector("#sn").value;
    const contra1= document.querySelector("#passwd").value;

   

    if(entrada1== usuarioJoss.nombre && contra1 == usuarioJoss.contrasena){
        document.querySelector("#mensajeLogin").innerHTML="Clave correcta"
        location.href ="jocelyn.html";
    }else if( entrada1 == usuarioAlejandro.nombre && contra1 == usuarioAlejandro.contrasena){
        document.querySelector("#mensajeLogin").innerHTML="Clave correcta"
        location.href ="Alejandro.html";
    }else if(entrada1 == usuarioOsvaldo.nombre && contra1 == usuarioOsvaldo.contrasena){
        document.querySelector("#mensajeLogin").innerHTML="Clave correcta"
        location.href ="Marilyn.html";
    }else{
        document.querySelector("#mensajeLogin").innerHTML="Usuario y/o contraseña incorrecta"
    }

}

//* Calculo ingreso

function incrementoSaldo(cantidad1) {

    var nuevo = cantidad

    return cantidad1;
}




// botones accion


const btnNombre = document.querySelector("#botones");

function disparaAccionJoss(event) {

    var saldoAccion = usuarioJoss.saldo;
    const botonReact= event.target.textContent;
 
    //////
    switch (botonReact) {
        case 'Consultar saldo':
            document.querySelector("#resultadoBoton").innerHTML=`Tu saldo es de ${saldoAccion}`;
          break;

        case 'Ingresar monto':

        
            var ingreso= Number(prompt("Ingresa monto:"))
            var cantidadActual = usuarioJoss.saldo;

            var prueba= ingreso+cantidadActual;
       


           if(cantidadActual < 990 && prueba <= 990){

              var nuevaCantidad= cantidadActual+ingreso;
               
               document.querySelector("#resultadoBoton").innerHTML=`Tu saldo es de ${nuevaCantidad}`;

               usuarioJoss.saldo= nuevaCantidad;

           }else if(cantidadActual >= 990){

            alert("Ya tienes el monto máximo. No puedes ingresar mas");

            // document.querySelector("#resultadoBoton").innerHTML="Ya tienes el monto máximo. No puedes ingresar mas"
           }else if(prueba > 990){
               var montoMax= 990-cantidadActual;
                alert(`El monto maximo que puedes agregar es ${montoMax}. Intentalo de nuevo`);
            // document.querySelector("#resultadoBoton").innerHTML=`El monto maximo que puedes agregar es ${montoMax}. Intentalo de nuevo`
           }

          break;

        case 'Retirar monto':

            var retiro= Number(prompt("Ingresa monto:"))
            var actual = usuarioJoss.saldo;

            var prueba2= actual-retiro;

            if(actual > 10 && prueba2 >=10){
                var nuevoMonto = actual - retiro;
                document.querySelector("#resultadoBoton").innerHTML=`Tu saldo es de ${nuevoMonto}`;

                usuarioJoss.saldo= nuevoMonto;
            }else if(actual <=10){
                document.querySelector("#resultadoBoton").innerHTML="Ya tienes el monto minimo. No puedes retirar mas"

            }else if( prueba2 = 10){
                var retiroMax= actual-10;
                document.querySelector("#resultadoBoton").innerHTML=`El monto maximo que puedes retirar es ${retiroMax}. Intentalo de nuevo`

            }

          break;
        
        default:
          console.log('default');
      }
    
    
}
    
btnNombre.addEventListener('click',disparaAccionJoss);