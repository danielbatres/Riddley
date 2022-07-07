import { primeraSeccion } from "./elements.js";
import { segundaSeccion } from "./elements.js";
import { terceraSeccion } from "./elements.js";
import { cuartaSeccion } from "./elements.js";
import { quintaSeccion } from "./elements.js";
import { preguntasLiteratura } from "./litPreguntas.js";
import { preguntasComic } from "./comicPreguntas.js";
import { puntuacion } from "./Interfaz.js";

const preguntaAleatorias = array => {
    return array.sort(() => Math.random() - 0.5);
}

const preguntasRandom = preguntas => {
    return preguntaAleatorias(preguntas);
}

const preguntasLiteraturaArray = preguntasRandom(preguntasLiteratura);
const preguntasComicArray = preguntasRandom(preguntasComic);
const primero = "#primero";
const segundo = "#segundo";
const tercero = "#tercero";
const cuarto = "#cuarto";
const quinto = "#quinto";

const interfaces = (interfaz, pregunta, num, seccion, bar) => {
    const elem = document.getElementById(bar);
    $(seccion).removeClass("display");

    elem.style.width = "1%";
    interfaz.correcto.style.backgroundColor = "#FFFFFF";
    interfaz.incorrecto.style.backgroundColor = "#FFFFFF";
    $("#bloqueo").addClass("display");
    interfaz.imprimirPregunta(pregunta[num]);
    interfaz.validarPregunta(pregunta[num], interfaz.left || interfaz.right);
    interfaz.move(bar);

    setTimeout(() => {
        $(seccion).addClass("display");
        interfaz.siguienteContador();
    }, 8000);
}

const aplication = (preguntas) => {
    setTimeout(() => {
        interfaces(primeraSeccion, preguntas, 0, primero, "bar1");

        const timer = (interfaz, pregunta, num, time, seccion, bar) => {
            setTimeout(() => {
                interfaces(interfaz, pregunta, num, seccion, bar);
            }, time);
        };

        timer(segundaSeccion, preguntas, 1, 11000, segundo, "bar2");
        timer(terceraSeccion, preguntas, 2, 22000, tercero, "bar3");
        timer(cuartaSeccion, preguntas, 3, 33000, cuarto, "bar4");

        setTimeout(() => {
            const elem = document.getElementById("bar5");
            $(quinto).removeClass("display");

            elem.style.width = "1%";
            quintaSeccion.correcto.style.backgroundColor = "#FFFFFF";
            quintaSeccion.incorrecto.style.backgroundColor = "#FFFFFF";
            $("#bloqueo").addClass("display");
            quintaSeccion.imprimirPregunta(preguntas[4]);
            quintaSeccion.validarPregunta(preguntas[4], quintaSeccion.left || quintaSeccion.right);
            quintaSeccion.move("bar5");

            setTimeout(() => {
                $(quinto).addClass("display");
            }, 8000);
        }, 44000)

        setTimeout(() => {
            $("main").addClass("display");
            $("#bloqueo").addClass("display");
            $("#final").removeClass("display");
            const puntuacionFinal = document.getElementById("puntuacionFinal");
            const mensajeFinal = document.getElementById("mensajeFinal");

            puntuacionFinal.innerHTML = puntuacion;

            puntuacion >= 7
                ? mensajeFinal.innerHTML = "¡Felicitaciones!"
                : mensajeFinal.innerHTML = "Suerte para la proxima";

        }, 52000);
    }, 5000);
};

export const literatura = () => {
    aplication(preguntasLiteraturaArray);
};

export const comic = () => {
    aplication(preguntasComicArray);
}