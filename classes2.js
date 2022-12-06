class playa {
    constructor(nominho, rataria, ratata) {
        this.nominho = nominho
        this.rataria = rataria
        this.ratata = ratata
    }

    sanadas() {
        console.log(`Esse ${this.nominho} fez safadeza ${this.rataria} e continua arrastando`)
    }
}

const Linguiceto = new playa('Linguiceto', 'varredor', 1920)
Linguiceto.sanadas()

const Linguicetero = new playa('Linguicetinho', 'limpero', 1920)
Linguicetero.sanadas()