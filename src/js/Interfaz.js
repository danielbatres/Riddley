let puntuacion = 0;

export class Interfaz {
    constructor(enunciado, left, right, correcto, incorrecto) {
        this.enunciado = document.getElementById(enunciado);
        this.buttonLeft = document.getElementById(left);
        this.buttonRight = document.getElementById(right);
        this.correcto = document.getElementById(correcto);
        this.incorrecto = document.getElementById(incorrecto);
        this.puntuacionId = document.getElementById("puntuacion");
    }

    move(bar) {
        let width = 1;
        let id = setInterval(frame, 80);
        const elem = document.getElementById(bar);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = `${width}%`;
            }
        }
    }

    puntos(puntuacionNueva) {
        if (puntuacion != 10) {
            puntuacion += puntuacionNueva;
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
    
        return this.buttonLeft.innerHTML = valor[0], this.buttonRight.innerHTML = valor[1];
    }

    validarPregunta(pregunta) {
        const evento = (btn, btnValue) => {
            btn.addEventListener("click", () => {
                if (btnValue == pregunta.opcionCorrecta) {
                    this.correcto.style.backgroundColor = "#C0F2BC";
                    this.puntos(2);
                    console.log("estuvo correcta");
                } else {
                    this.incorrecto.style.backgroundColor = "#F2BCBC";
                    console.log("Estuvo incorrecta");
                }
    
                $("#bloqueo").removeClass("display");
            });
        };
    
        evento(this.buttonLeft, this.buttonLeft.innerHTML.toString());
        evento(this.buttonRight, this.buttonRight.innerHTML.toString());
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