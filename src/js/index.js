import { Interfaz } from "./Interfaz.js";

const aplicacion = (interfaz) => {
    setTimeout(() => {
        interfaz.imprimirPregunta(interfaz.preguntasLiteraturaArray[0]);
        interfaz.validarPregunta(interfaz.preguntasLiteraturaArray[0], interfaz.buttonLeft || interfaz.buttonRight);
        interfaz.move();

        setTimeout(() => {
                 for (let i = 0; i <= 4; i++) {
                     (function proceso(num) {
                        const elem = document.getElementById("bar");
                        setTimeout(() => {
                            interfaz.siguienteContador();
                            elem.style.width = "1%";
                            interfaz.correcto.style.backgroundColor = "#FFFFFF";
                            interfaz.incorrecto.style.backgroundColor = "#FFFFFF";
                            $("#bloqueo").addClass("display");
                            interfaz.move();
                            interfaz.imprimirPregunta(interfaz.preguntasLiteraturaArray[num]);
                            interfaz.validarPregunta(interfaz.preguntasLiteraturaArray[num]);
                        }, 10000 * num - 10000);
                    })(i);
                }
            }, 10000);
    }, 5000);
}

function main() {
    const interfaz = new Interfaz();
  
    aplicacion(interfaz);
}

main();