const playa = function(nominho, rataria, ratata) {
    nominho = nominho
    rataria = rataria
    ratata = ratata

    this.getIto = function() {
        return nominho
    }

    this.getEro = function() {
        return rataria
    }

    this.getEu = function() {
        return ratata
    }
}

const Linguiceto = new playa("lingui", "para", 540)

console.log(Linguiceto.getIto())
console.log(Linguiceto.getEro())
console.log(Linguiceto.getEu())

const Manero = new playa("marrone", "bruno", 79)

console.log(Manero.getIto())