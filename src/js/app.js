import { primeraSeccion } from "./elements.js";
import { segundaSeccion } from "./elements.js";
import { terceraSeccion } from "./elements.js";
import { cuartaSeccion } from "./elements.js";
import { quintaSeccion } from "./elements.js";
import { preguntasLiteratura } from "./litPreguntas.js";
import { preguntasComic } from "./comicPreguntas.js";

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
        timer(quintaSeccion, preguntas, 4, 44000, quinto, "bar5");
    }, 5000);
};

export const literatura = () => {
    aplication(preguntasLiteraturaArray);
};

export const comic = () => {
    aplication(preguntasComicArray);
}