const prompt = require('prompt-sync')({siginit:true})

//vetor para armazenar os calculos
let calculos = []
//chamada da função principal
exibirMenu()

//função principal para exibir o menu 
function exibirMenu() {
    console.log(` 
        Bem Vindo ao Menu!

        1 - Realizar novo cálculo
        2 - Listar cálculos
        3 - Atualizar cálculo
        4 - Deletar cálculo
        5 - Sair

        Escolha uma opção:
    `)

    let opcao 
    switch(opcao) {
        case 1:
            calculadora()
            break
        case 2:
            listarCalculos()
            break
        case 3:
            atualizarCalculos()
            break
        case 4:
            deletarCalculo()
            break
        case 5:
            console.log('Tchaaaaaaaau')
            return
        default:
            console.log('Opcção inválida! Por favor, tente novamente.')
    }
    exibirMenu() //chamada recursiva
}

//função principal da calculadora
function calculadora() {
    console.log(`
        1 - Soma
        2 - Subtração
        3 - Multiplicação
        4 - Divisão
        5 - Porcentagem

        Escolha a operação desejada: `)

        let escolha 

        if (escolha > 0 && escolha <= 5) {
            let numero1 = parseFloat(prompt("Digite o primeiro número: "))
            let numero2 = parseFloat(prompt("Digite o segundo número: "))

            let resultado
            switch(escolha) {
                case 1: 
                    resultado = numero1 + numero2
                    break
                case 2:
                    resultado = numero1 - numero2
                    break
                case 3:
                    resultado = numero1 * numero2
                    break
                case 4:
                    if (numero2 !== 0) {
                    resultado = numero1 / numero2
                    } else {
                        throw new Error("Divisão por zero não é permitida!")
                    }
                    break
                case 5:
                    resultado = (numero1 * numero2) / 100
                    break
            }

            let calculo = {
                operacao: escolha,
                num1: numero1,
                num2: numero2,
                resultado: resultado
            }
            calculos.push(calculo)
            console.log(`Resultado: ${resultado}`)
        } else {
            throw new Error("Opção inválida! Por favor, tente novamente.")
        }
}

//função para exibir a lista de cálculos
function listarCalculos() {
    console.log("Lista de cálculos:")
    calculos.forEach((calculo, index) => {
        console.log(`
            ${index + 1}. Operação: ${calculo.operacao}
            Números: ${calculo.num1}, ${calculo.num2}
            Resultado: ${calculo.resultado}
            `)
    })
}

//função para atualizar um cálculo
function atualizarCalculos() {
    listarCalculos() 
    let index = parseInt(prompt("Digite o número do cálculo que deseja editar: ")) - 1
    if (index >= 0 && index <= calculos.length) {
        console.log(`
            1 - Soma
            2 - Subtração
            3 - Multiplicação
            4 - Divisão
            5 - Porcentagem

            Escolha a nova operação: `)

            let escolha
            if (escolha > 0 && escolha <= 5) {
                let numero1 = parseFloat(prompt("Digite o primeiro número: "))
                let numero2 = parseFloat(prompt("Digite o segundo número: "))
                let resultado

                switch(escolha) {
                    case 1:
                        resultado = numero1 + numero2
                        break
                    case 2:
                        resultado = numero1 - numero2
                        break
                    case 3:
                        resultado = numero1 * numero2
                        break
                    case 4:
                        if (numero2 !== 0) {
                        resultado = numero1 / numero2
                        } else {
                            throw new Error("Divisão por zero não é permitida!")
                        }
                        break
                    case 5:
                        resultado = (numero1 * numero2) / 100
                        break
                }

                calculos[index] = {
                    operacao: escolha,
                    num1: numero1,
                    num2: numero2,
                    resultado: resultado
                }
                console.log(`Cálculo atualizado. Novo resultado: ${resultado}`)
            } else {
                throw new Error("Opção inválida! Tente novamente.")
            }
    } else {
        throw new Error("Inválido! Tente novamente.")
    }
}

//função para deletar um calculo
function deletarCalculo() {
    listarCalculos()
    let index = parseInt(prompt("Digite o número do cálculo que deseja deletar: ")) - 1
    if (index >= 0 && index <= calculos.length) {
        calculos.splice(index, 1)
        console.log("Cálculo deletado com sucesso!")
        } else {
            throw new Error("Inválido! Tente novamente.")
        }
}
