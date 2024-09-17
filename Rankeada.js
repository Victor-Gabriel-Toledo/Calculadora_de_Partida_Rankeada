rankeada()


function rankeada(vitorias = 200, derrotas = 11, raking){
    let soma = vitorias - derrotas
    if(soma <= 10){
        raking = "Ferro"
        console.log (`O herói tem saldo de ${vitorias} vitórias e seu nível é ${raking}`)
    }
    else if (soma >= 11 && soma < 21){
        raking = "Bronze"
        console.log (`O herói tem saldo de ${vitorias} vitórias e seu nível é ${raking}`)
    }
    else if (soma >= 21 && soma < 51){
        raking = "Prata"
        console.log (`O herói tem saldo de ${vitorias} vitórias e seu nível é ${raking}`)
    }
    else if (soma >= 51 && soma < 80){
        raking = "Ouro"
        console.log (`O herói tem saldo de ${vitorias} vitórias e seu nível é ${raking}`)
    }
    else if (soma >= 80 && soma < 90){
        raking = "Diamante"
        console.log (`O herói tem saldo de ${vitorias} vitótias e seu nível é ${raking}`)
    }
    else if (soma >= 90 && soma < 100){
        raking = "Lendário"
        console.log (`O herói tem saldo de ${vitorias} vitórias e seu nível é ${raking}`)
    }
    else {
        raking = "Imortal"
        console.log (`O herói tem saldo de ${vitorias} vitórias e seu nível é ${raking}`)
    }
}