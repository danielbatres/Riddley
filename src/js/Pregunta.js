class Pregunta {
    constructor(tema, enunciado, opcionCorrecta, opcionIncorrecta) {
        this.tema = tema;
        this.enunciado = enunciado;
        this.opcionCorrecta = opcionCorrecta;
        this.opcionIncorrecta = opcionIncorrecta;
        this.opciones = [opcionCorrecta, opcionIncorrecta];
    }
}