export class Pregunta {
    constructor(enunciado, opcionCorrecta, opcionIncorrecta) {
        this.enunciado = enunciado;
        this.opcionCorrecta = opcionCorrecta;
        this.opcionIncorrecta = opcionIncorrecta;
        this.opciones = [opcionCorrecta, opcionIncorrecta];
    }
}