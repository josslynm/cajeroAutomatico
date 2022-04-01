// *Declaracion de usuarios por medio de objetos
const usuarioJoss ={

    nombre: "Jocelyn",
    contrasena: "1234" ,
    saldo: 150
}
    
const usuarioAlejandro ={

    nombre: "Alejandro",
    contrasena: "1234" ,
    saldo: 80
}

const usuarioOsvaldo ={

    nombre: "Osvaldo",
    contrasena: "1234" ,
    saldo: 350
}


//*Ingreso de usuario con funcion comparar

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



//* botones accion


const btnNombre = document.querySelector("#botones");

// TODO: funcion que da accion a los botones para el usuario Jocelyn

function disparaAccionJoss(event) {

    var saldoAccion = usuarioJoss.saldo;
    const botonReact= event.target.textContent;
 
    switch (botonReact) {

        case 'Consultar saldo': //*Consulta

            document.querySelector("#resultadoBoton").innerHTML=`Tu saldo es de $${saldoAccion}`;
          break;

        case 'Ingresar monto': //*Ingresar

        
            var ingreso= Number(prompt("Ingresa monto:"))
            var cantidadActual = usuarioJoss.saldo;

            var prueba= ingreso+cantidadActual;
       


           if(cantidadActual < 990 && prueba <= 990){ //! Condiciones para poder ingresar monto

                var nuevaCantidad= cantidadActual+ingreso;
               
                document.querySelector("#resultadoBoton").innerHTML=`Ingresó $${ingreso}. Tu saldo es de ${nuevaCantidad}`;

               usuarioJoss.saldo= nuevaCantidad;

           }else if(cantidadActual >= 990){  //! monto maximo alcanzado

            alert("Ya tienes el monto máximo. No puedes ingresar mas");
            document.querySelector("#resultadoBoton").innerHTML="Ya tienes el monto máximo."

           }else if(prueba > 990){ //! Supera monto maximo
                var montoMax= 990-cantidadActual;
                alert(`El monto máximo que puedes agregar es ${montoMax}. Intentalo de nuevo`);
                document.querySelector("#resultadoBoton").innerHTML=`Ingresa una cantidad menor`
           }

          break;

        case 'Retirar monto':

            var retiro= Number(prompt("Ingresa monto:"))
            var actual = usuarioJoss.saldo;

            var prueba2= actual-retiro;

            if(actual > 10 && prueba2 >=10){ //! Condiciones para poder retirar
                var nuevoMonto = actual - retiro;
                
                document.querySelector("#resultadoBoton").innerHTML=`Retiró $${retiro}. Tu saldo es de $${nuevoMonto}`;

                usuarioJoss.saldo= nuevoMonto;
            }else if(actual <=10){ //!Se alcanzo el monto minimo
                
                alert("Ya tienes el monto mínimo. No puedes retirar mas");
                document.querySelector("#resultadoBoton").innerHTML="Ya tienes el monto minimo."

            }else if( prueba2 = 10){  //!Monto maximo para retirar
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


    
btnNombre.addEventListener('click',disparaAccionJoss);

