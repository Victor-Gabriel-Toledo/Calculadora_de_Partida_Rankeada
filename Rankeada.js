//função com entrada de dados
function rankeada(vitorias, derrotas){
    let soma = vitorias - derrotas
    let raking

    //calcula o ranking
    if(soma <= 10){
        raking = "Ferro"
    }
    else if (soma >= 11 && soma < 21){
        raking = "Bronze"
    }
    else if (soma >= 21 && soma < 51){
        raking = "Prata"
    }
    else if (soma >= 51 && soma < 80){
        raking = "Ouro"
    }
    else if (soma >= 80 && soma < 90){
        raking = "Diamante"
    }
    else if (soma >= 90 && soma < 100){
        raking = "Lendário"
    }
    else {
        raking = "Imortal"
    }

    return `O herói tem saldo de ${vitorias} vitórias e seu nível é ${raking}`
}

//retorna o resultado da função
let resultado = rankeada(200, 11)

//menssagem de saída
console.log(resultado)