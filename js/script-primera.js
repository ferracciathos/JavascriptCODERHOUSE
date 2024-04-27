let resultado = ""
let nombre = prompt("Hola! Me alegro que esto funcione. Como te llamas?");
let numero1
let numero2
let operacion = prompt(nombre + ", permitime tutearte. Que queres hacer? Podes sumar, restar, multiplicar o dividir");

if (operacion === "sumar" || operacion === "restar" || operacion === "multiplicar" || operacion === "dividir") {
    numero1 = parseInt(prompt("Decime el número a " + operacion + "."));
    numero2 = parseInt(prompt("Ahora decime el segundo número que queres " + operacion + "."));
}
else {
    let mensaje = "Algo anduvo mal, eso no es un operador.";
    alert(mensaje);
}
function calculo() {
    if (operacion === "sumar") {
        resultado = numero1 + numero2;
        let mensaje = "El resultado es " + resultado + ". Es correcto?";
        let aprobacion = confirm(mensaje);

        if (aprobacion == true) {
            let mensaje2 = "Me alegro, de nada.";
            alert(mensaje2);
        }
        else if (aprobacion == false) {
            let mensaje2 = "Yo diria que si es correcto, fui programado por un hincha de river, no de boca.";
            let aprobacion2 = confirm(mensaje2);

            if (aprobacion2 == true) {
                let mensaje3 = "jajaja no me quieras engañar, basta.";
                let aprobacion3 = confirm(mensaje3);

                if (aprobacion3 == true) {
                    let mensaje4 = "Bueno listo, es obvio que el resultado de " + operacion + " " + numero1 + " y " + numero2 + " es " + resultado + ". rey.";
                    let aprobacion4 = confirm(mensaje4);

                    if (aprobacion4 == true) {
                        let mensaje5 = "Bueno termino esta discusion, yo tengo razon.";
                        alert(mensaje5);
                    }
                }
            }
        }
    }
    else if (operacion === "restar") {
        resultado = numero1 - numero2;
        let mensaje = "El resultado es " + resultado + ". Es correcto?";
        let aprobacion = confirm(mensaje);

        if (aprobacion == true) {
            let mensaje2 = "Me alegro, de nada."
            alert(mensaje2)
        }
        else if (aprobacion == false) {
            let mensaje2 = "Yo diria que si es correcto, fui programado por un hincha de river, no de boca.";
            let aprobacion2 = confirm(mensaje2);

            if (aprobacion2 == true) {
                let mensaje3 = "jajaja no me quieras engañar, basta.";
                let aprobacion3 = confirm(mensaje3);

                if (aprobacion3 == true) {
                    let mensaje4 = "Bueno listo, es obvio que el resultado de " + operacion + " " + numero1 + " y " + numero2 + " es " + resultado + ". rey.";
                    let aprobacion4 = confirm(mensaje4);

                    if (aprobacion4 == true) {
                        let mensaje5 = "Bueno termino esta discusion, yo tengo razon.";
                        alert(mensaje5);
                    }
                }
            }
        }
    }
    else if (operacion === "multiplicar") {
        resultado = numero1 * numero2;
        let mensaje = "El resultado es " + resultado + ". Es correcto? ";
        let aprobacion = confirm(mensaje);

        if (aprobacion == true) {
            let mensaje2 = "Me alegro, de nada."
            alert(mensaje2)
        }
        else if (aprobacion == false) {
            let mensaje2 = "Yo diria que si es correcto, fui programado por un hincha de river, no de boca.";
            let aprobacion2 = confirm(mensaje2);

            if (aprobacion2 == true) {
                let mensaje3 = "jajaja no me quieras engañar, basta.";
                let aprobacion3 = confirm(mensaje3);

                if (aprobacion3 == true) {
                    let mensaje4 = "Bueno listo, es obvio que el resultado de " + operacion + " " + numero1 + " y " + numero2 + " es " + resultado + ". rey.";
                    let aprobacion4 = confirm(mensaje4);

                    if (aprobacion4 == true) {
                        let mensaje5 = "Bueno termino esta discusion, yo tengo razon.";
                        alert(mensaje5);
                    }
                }
            }
        }
    }
    else if (operacion === "dividir") {
        if (numero2 == 0) {
            let mensaje = "Syntax Error. Intente nuevamente y no divida por 0 😒";
            alert(mensaje);

        }
        else if (operacion === "dividir") {
            resultado = numero1 / numero2;
            let mensaje = "El resultado es " + resultado + ". Es correcto?";
            let aprobacion = confirm(mensaje);

            if (aprobacion == true) {
                let mensaje2 = "Me alegro, de nada."
                alert(mensaje2)
            }
            else if (aprobacion == false) {
                let mensaje2 = "Yo diria que si es correcto, fui programado por un hincha de river, no de boca.";
                let aprobacion2 = confirm(mensaje2);

                if (aprobacion2 == true) {
                    let mensaje3 = "jajaja no me quieras engañar, basta.";
                    let aprobacion3 = confirm(mensaje3);

                    if (aprobacion3 == true) {
                        let mensaje4 = "Bueno listo, es obvio que el resultado de " + operacion + " " + numero1 + " y " + numero2 + " es " + resultado + ". rey.";
                        let aprobacion4 = confirm(mensaje4);

                        if (aprobacion4 == true) {
                            let mensaje5 = "Bueno termino esta discusion, yo tengo razon.";
                            alert(mensaje5);
                        }
                    }
                }
            }
        }
    }

    else {
        let mensaje = "Eso no es un operador rey!.";
        alert(mensaje);
    }
}
calculo()


let segundaOperacion = confirm("Queres hacer otra operación?")
do {
    operacion = prompt(nombre + ", Que queres hacer? Sumar, restar, multiplicar o dividir?");
    numero1 = parseInt(prompt("Decime el número a " + operacion + "."));
    numero2 = parseInt(prompt("Ahora decime el segundo número que queres " + operacion + "."));
    calculo();
}
while (segundaOperacion == true) {
}