export class Interfaz {
    constructor() {}

    move() {
        let width = 1;
        let id = setInterval(frame, 80);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = `${width}%`;
            }
    
            if (width == 100) {
                $("#botonSiguiente").removeClass("display");
            }
        }
    }

    puntos(puntuacionNueva) {
        if (puntuacion != 10) {
            puntuacion += puntuacionNueva;
        }
    
        return puntuacionId.innerHTML = puntuacion;
    }

    imprimirPregunta(pregunta) {
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
    
        return buttonLeft.innerHTML = valor[0], buttonRight.innerHTML = valor[1];
    }

    validarPregunta() {
        const evento = (btn, btnValue) => {
            btn.addEventListener("click", () => {
                if (btnValue == pregunta.opcionCorrecta) {
                    correcto.style.backgroundColor = "#C0F2BC";
                    puntos(2);
                    console.log("estuvo correcta");
                } else {
                    incorrecto.style.backgroundColor = "#F2BCBC";
                    console.log("Estuvo incorrecta");
                }
    
                $("#bloqueo").removeClass("display");
            });
        };
    
        evento(buttonLeft, buttonLeft.innerHTML.toString());
        evento(buttonRight, buttonRight.innerHTML.toString());
    }

    preguntaAleatorias(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    preguntasRandom() {
        return this.preguntaAleatorias(preguntasLiteratura);
    }

    siguienteContador() {
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
    }
}