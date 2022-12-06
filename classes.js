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