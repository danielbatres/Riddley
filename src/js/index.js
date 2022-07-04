const enunciado = document.getElementById("enunciado");
const buttonLeft = document.getElementById("left");
const buttonRight = document.getElementById("right");
const correcto = document.getElementById("correcto");
const incorrecto = document.getElementById("incorrecto");
const elem = document.getElementById("bar");
let puntuacionId = document.getElementById("puntuacion");
let puntuacion = 0;

const move = () => {
    let width = 1;
    let id = setInterval(frame, 100);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = `${width}%`;
        }

        if (width == 100) {
            siguienteContador();
        }
    }
}

const puntos = (puntuacionNueva) => {
    if (puntuacion != 10) {
        puntuacion += puntuacionNueva;
    }

    return puntuacionId.innerHTML = puntuacion;
}

const imprimirPregunta = (pregunta) => {
    enunciado.innerHTML = pregunta.enunciado;

    const valorRandom = () => {
        const arrayAleatorio = (array) => {
            return array.sort(() => Math.random() - 0.5);
        }

        let arrayValores = arrayAleatorio(pregunta.opciones);

        let primerValor = arrayValores[0];
        let segundoValor = arrayValores[1];

        return [primerValor, segundoValor];
    }

    const valor = valorRandom();

    buttonLeft.innerHTML = valor[0];
    buttonRight.innerHTML = valor[1];
}

const validarPregunta = (pregunta) => {
    const buttonLeftValue = buttonLeft.innerHTML;
    const buttonRightValue = buttonRight.innerHTML;

    const evento = (btn, btnValue,) => {
        btn.addEventListener("click", (e) => {

            if (btnValue.toString() == pregunta.opcionCorrecta) {
                correcto.style.backgroundColor = "#C0F2BC";
                puntos(2);
            } else {
                incorrecto.style.backgroundColor = "#F2BCBC";
            }

            e.stopPropagation();
        });
    };

    evento(buttonLeft, buttonLeftValue);
    evento(buttonRight, buttonRightValue);
}

const perguntasAleatorias = (array) => {
    return array.sort(() => Math.random() - 0.5);
}

const preguntasRandom = () => {
    return perguntasAleatorias(preguntasLiteratura);
}

const preguntasLiteraturaArray = preguntasRandom();
console.log(preguntasLiteraturaArray);

const siguienteContador = () => {
    $("main").addClass("display");
    $("#siguiente").removeClass("display");

    const contador = document.getElementById("contadorSiguiente");
    puntuacionId.innerHTML = puntuacion;

    const timer = (counter, value, time) => {
        setTimeout(() => {
            counter.innerHTML = value;
        }, time);
    };

    timer(contador, 3, 0);
    timer(contador, 2, 1000);
    timer(contador, 1, 2000);

    setTimeout(() => {
        $("main").removeClass("display");
        $("#siguiente").addClass("display");
    }, 3000);
};

const testCompleto = () => {
    setTimeout(() => {
        imprimirPregunta(preguntasLiteraturaArray[0]);
        validarPregunta(preguntasLiteraturaArray[0]);
        move();
    
        setTimeout(() => {
            for (let i = 0; i <= 4; i++) {
                (function proceso(num) {
                    setTimeout(() => {
                        elem.style.width = "1%";
                        correcto.style.backgroundColor = "#FFFFFF";
                        incorrecto.style.backgroundColor = "#FFFFFF";
                        move();
                        imprimirPregunta(preguntasLiteraturaArray[num]);
                        validarPregunta(preguntasLiteraturaArray[num]);
                    }, 10000 * num - 10000);
                })(i);
            }
        }, 10000);
    }, 5000);
}

testCompleto();