const readline = require('readline')

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nomeHeroi;
let idadeHeroi;
let tipoHeroi;

console.log(" ")
input.question('Informe o nome do herói: ', (resposta) => {
    nomeHeroi = resposta;

    console.log(" ")
    input.question('Informe a idade do herói: ', (resposta) => {
        idadeHeroi = resposta;

        console.log(" ")
        console.log("Tipos disponíveis de herói:")
        console.log(" ")
        console.log("guerreiro, mago, monge, ninja")
        console.log(" ")
        console.log("-----------------------")
        console.log(" ")
        input.question('Informe o tipo de herói: ', (resposta) => {
            tipoHeroi = resposta;

            const novoHeroi = new personagem (nomeHeroi, idadeHeroi, tipoHeroi);
            
            console.log(" ")
            console.log(novoHeroi);
    
            console.log(" ")
            novoHeroi.atacar();
    
            input.close();
        })
    })
})

class personagem {
    constructor(nome, idade, tipo){
        this.nomePersonagem = nome
        this.idadePersonagem = idade
        this.tipoPersonagem = tipo
    }

    atacar() {
        let tipoAtaque

        switch (this.tipoPersonagem){
            case 'guerreiro':
                tipoAtaque = "espada";
                break;
            case 'mago':
                tipoAtaque = "mágia";
                break;
            case 'monge':
                tipoAtaque = "artes marcias";
                break;
            case 'ninja':
                tipoAtaque = "shuriken";
                break;
            default:
                console.log ("Tipo de personagem não identificado")
        }

        console.log("***************************")
        console.log(" ")
        console.log(`O ${this.tipoPersonagem} atacou usando ${tipoAtaque}`)
        console.log(" ")
        console.log("***************************")
    }
}