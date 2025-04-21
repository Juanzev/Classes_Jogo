class hero {
    constructor(nome,idade,tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        if (this.tipo === "mago"){
            return "magia"
        }
        else if (this.tipo === "guerreiro") {
            return "espada"
        }
        else if (this.tipo === "monge"){
            return "artes marciais"
        }
        else if (this.tipo === "ninja"){
            return "shuriken"
        }
    }

    escrever(){
        return (`o heroi ${this.nome}, do tipo ${this.tipo} atacou usando ${this.atacar()}`)
    }
}

let heroi = new hero ("juan", 19, "mago")
console.log(heroi.escrever())