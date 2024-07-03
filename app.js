const prompt = require('prompt-sync')({sigint: true}) 

//funções para as operações matemáticas
function soma(x, y) {
    return x + y
}

function subtracao(x, y) {
    return x - y
}

function multiplicacao(x, y) {
    return x * y
}

function divisao(x, y) {
    if (y !== 0) {
        return x / y
    } else {
        throw new Error("Operação por zero não é permitida!")
    }
}

function porcentagem(x, y) {
    return (x * y) / 100
}

//função principal da calculadora
function calculadora() {
    console.log("Bem Vindo à Calculadora!")
    // solicitar a escolha do usuário
    let escolha = parseInt(prompt(`
    1 - Soma
    2 - Subtração
    3 - Multiplicação
    4 - Divisão
    5 - Porcentagem
    Escolha a operação desejada: `))
    //verificar se a escolha é válida
    if (escolha >= 1 && escolha <= 5) {
        let numero1 = parseFloat(prompt("Digite o primeiro número: "))
        let numero2 = parseFloat(prompt("Digite o segundo número: "))

        let resultado 
        //executar a opção escolhida e exibir resultado
        switch (escolha) {
            case 1:
                resultado = soma(numero1, numero2)
                break
            case 2:
                resultado = subtracao(numero1, numero2)
                break
            case 3:
                resultado = multiplicacao(numero1, numero2)
                break
            case 4:
                resultado = divisao(numero1, numero2)
                break
            case 5:
                resultado = porcentagem(numero1, numero2)
                break
        } 
             console.log(`Resultado: ${resultado}`)
        } else {
            throw new Error("Opção inválida! Por favor, tente novamente.")
        }
}

//chamada da função principal
calculadora()