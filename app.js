const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Vetor para armazenar os cálculos
let calculos = [];

// Chamada da função principal
exibirMenu();

// Função principal para exibir o menu
function exibirMenu() {
    console.log(`
        Bem Vindo ao Menu!

        1. Realizar novo cálculo
        2. Listar cálculos
        3. Atualizar cálculo
        4. Deletar cálculo
        5. Sair
    `);

    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                calculadora();
                break;
            case '2':
                listarCalculos();
                exibirMenu(); // Adicionar chamada recursiva para retornar ao menu
                break;
            case '3':
                atualizarCalculo();
                break;
            case '4':
                deletarCalculo();
                break;
            case '5':
                console.log("Tchaaaaaaaau");
                rl.close();
                break;
            default:
                console.log('\nOpção inválida! Tente novamente.');
                exibirMenu();
        }
    });
}

// Função principal da calculadora
function calculadora() {
    console.log(`
        1. Soma
        2. Subtração
        3. Multiplicação
        4. Divisão
        5. Porcentagem
    `);

    rl.question('Escolha a operação desejada: ', (escolha) => {
        if (escolha > 0 && escolha <= 5) {
            rl.question('Digite o primeiro número: ', (num1) => {
                let numero1 = parseFloat(num1);
                rl.question('Digite o segundo número: ', (num2) => {
                    let numero2 = parseFloat(num2);
                    let resultado;

                    switch (escolha) {
                        case '1':
                            resultado = numero1 + numero2;
                            break;
                        case '2':
                            resultado = numero1 - numero2;
                            break;
                        case '3':
                            resultado = numero1 * numero2;
                            break;
                        case '4':
                            if (numero2 !== 0) {
                                resultado = numero1 / numero2;
                            } else {
                                console.log('Divisão por zero não é permitida!');
                                return exibirMenu();
                            }
                            break; // Adicionar break aqui
                        case '5':
                            resultado = (numero1 * numero2) / 100;
                            break;
                    }

                    let calculo = {
                        operacao: escolha,
                        num1: numero1,
                        num2: numero2,
                        resultado: resultado
                    };
                    calculos.push(calculo);
                    console.log(`Resultado: ${resultado}`);
                    exibirMenu();
                });
            });
        } else {
            console.log('Opção inválida! Tente novamente.');
            exibirMenu();
        }
    });
}

// Função para exibir a lista de cálculos
function listarCalculos() {
    if (calculos.length === 0) {
        console.log("Nenhum cálculo no sistema.");
    } else {
        console.log('Lista de cálculos:');
        calculos.forEach((calculo, index) => {
            console.log(`
                ${index + 1}. Operação: ${calculo.operacao}
                Números: ${calculo.num1}, ${calculo.num2}
                Resultado: ${calculo.resultado}
            `);
        });
    }
}

// Função para atualizar um cálculo
function atualizarCalculo() {
    listarCalculos();
    rl.question("Digite o número do cálculo que deseja editar: ", (ind) => {
        let index = parseInt(ind) - 1;
        if (index >= 0 && index < calculos.length) {
            console.log(`
                1. Soma
                2. Subtração
                3. Multiplicação
                4. Divisão
                5. Porcentagem
            `);

            rl.question("Escolha a nova operação: ", (escolha) => {
                if (escolha > 0 && escolha <= 5) { // Corrigir aqui
                    rl.question("Digite o primeiro número: ", (num1) => {
                        let numero1 = parseFloat(num1);
                        rl.question("Digite o segundo número: ", (num2) => {
                            let numero2 = parseFloat(num2);
                            let resultado;

                            switch (escolha) {
                                case '1':
                                    resultado = numero1 + numero2;
                                    break;
                                case '2':
                                    resultado = numero1 - numero2;
                                    break;
                                case '3':
                                    resultado = numero1 * numero2;
                                    break;
                                case '4':
                                    if (numero2 !== 0) {
                                        resultado = numero1 / numero2;
                                    } else {
                                        console.log('Divisão por zero não é permitida!');
                                        return exibirMenu();
                                    }
                                    break; // Adicionar break aqui
                                case '5':
                                    resultado = (numero1 * numero2) / 100;
                                    break;
                            }

                            calculos[index] = {
                                operacao: escolha,
                                num1: numero1,
                                num2: numero2,
                                resultado: resultado
                            };
                            console.log(`Cálculo atualizado! Novo resultado: ${resultado}`);
                            exibirMenu();
                        });
                    });
                } else {
                    console.log('Opção inválida! Tente novamente.');
                    exibirMenu();
                }
            });
        } else {
            console.log("Índice inválido! Tente novamente.");
            exibirMenu();
        }
    });
}

// Função para deletar um cálculo
function deletarCalculo() {
    listarCalculos();
    rl.question("Digite o número do cálculo que deseja deletar: ", (ind) => {
        let index = parseInt(ind) - 1;
        if (index >= 0 && index < calculos.length) { // Corrigir aqui
            calculos.splice(index, 1);
            console.log("Cálculo deletado com sucesso.");
        } else {
            console.log("Índice inválido! Tente novamente.");
        }
        exibirMenu();
    });
}