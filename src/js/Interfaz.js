export class Interfaz {
    constructor() {
        this.enunciado = document.getElementById("enunciado");
        this.buttonLeft = document.getElementById("left");
        this.buttonRight = document.getElementById("right");
        this.correcto = document.getElementById("correcto");
        this.incorrecto = document.getElementById("incorrecto");
        this.elem = document.getElementById("bar");
        this.puntuacionId = document.getElementById("puntuacion");
        this.puntuacion = 0;
        this.preguntasLiteraturaArray = this.preguntasRandom();
    }

    move() {
        let width = 1;
        let id = setInterval(frame, 80);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++;
                this.elem.style.width = `${width}%`;
            }
    
            if (width == 100) {
                $("#botonSiguiente").removeClass("display");
            }
        }
    }

    puntos(puntuacionNueva) {
        if (this.puntuacion != 10) {
            this.puntuacion += puntuacionNueva;
        }
    
        return this.puntuacionId.innerHTML = puntuacion;
    }

    imprimirPregunta(pregunta) {
        this.enunciado.innerHTML = pregunta.enunciado;

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
                    this.correcto.style.backgroundColor = "#C0F2BC";
                    puntos(2);
                    console.log("estuvo correcta");
                } else {
                    this.incorrecto.style.backgroundColor = "#F2BCBC";
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
        this.puntuacionId.innerHTML = puntuacion;

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