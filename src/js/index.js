const enunciado = document.getElementById("enunciado");
const buttonLeft = document.getElementById("left");
const buttonRight = document.getElementById("right");
const buttons = [buttonLeft, buttonRight];
const btn = document.querySelectorAll(".button");
const btnValue = document.querySelectorAll(".buttonValue");
const correcto = document.getElementById("correcto");
const incorrecto = document.getElementById("incorrecto");

const move = () => {
    const elem = document.getElementById("bar");
    let width = 1;
    let id = setInterval(frame, 100);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = `${width}%`;
        }
    }
}

setTimeout(() => {
    move();
}, 5500);

const imprimirPregunta = (pregunta) => {
    enunciado.innerHTML = pregunta.enunciado;

    const valorRandom = () => {
        let arrayAleatorio = (array) => {
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
    btn.forEach(item => {
        item.addEventListener("click", () => {
            const btnLeftValue = buttonLeft.innerHTML;
            const btnRightValue = buttonRight.innerHTML;

            const opcionSeleccionada = btnLeftValue || btnRightValue;

            switch (opcionSeleccionada) {
                case pregunta.opcionCorrecta:
                    correcto.style.backgroundColor = "#C0F2BC";
                    break;
                case pregunta.opcionIncorrecta:
                    incorrecto.style.backgroundColor = "#F2BCBC";
                    break;
            }
    
            // if (opcionSeleccionada == pregunta.opcionCorrecta) {
            //     correcto.style.backgroundColor = "#C0F2BC";
            // } else {
            //     incorrecto.style.backgroundColor = "#F2BCBC";
            // }

            console.log(btnLeftValue, btnRightValue);
        })
    });
}

imprimirPregunta(pregunta1);
validarPregunta(pregunta1);