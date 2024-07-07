# Calculadora Interativa em Node.js

Este projeto implementa uma calculadora interativa baseada em linha de comando utilizando Node.js. A calculadora permite realizar operações básicas de matemática, armazenar cálculos realizados, atualizar e deletar cálculos existentes.

## Funcionalidades

1. **Realizar Novo Cálculo**: Escolha entre soma, subtração, multiplicação, divisão ou cálculo de porcentagem.
2. **Listar Cálculos**: Exibe todos os cálculos realizados até o momento.
3. **Atualizar Cálculo**: Permite editar um cálculo existente com novos valores.
4. **Deletar Cálculo**: Remove um cálculo da lista de cálculos realizados.
5. **Sair***: Encerra a execução da calculadora.

## Pré-requesitos

- Node.js instalado na máquina.

## Instalação e Execução

1. Clone o repositório para a sua máquina local:

```bash
git clone https://github.com/bianekkarina/calculadora.git
```
2. Navegue até o diretórtio do projeto:

```bash
cd calculadora
```

3. Instale as dependências necessárias:

```bash
npm install
```

4. Execute o programa:

```bash
node app.js
```

## Como Usar

- Ao iniciar o programa, um menu será exibido com as opções disponíveis.
- Escolha uma opção digitando o número correspondente e pressione Enter.
- Siga as instruções na tela para realizar operações de cálculo, listar, atualizar ou deletar cálculos.
- Para sair do programa, selecione a opção "Sair".

## Estrutura do Código

- O código está estruturado em funções que correspondem as funcionalidades da calculadora.
- A interação com o usuário é feita através do módulo readline do Node.js, que permite a leitura de entrada pelo terminal.

### Blocos do Código 

#### Importação do Módulo Readline

```javascript
const readline = require('readline')

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})
```
Importando o módulo readline do Node.js e criando uma interface para ler a entrada do usuário e escrever a saída no terminal.

#### Vetor para Armazenar os Cálculos
```javascript
let calculos = [];
```
Inicializando um vetor vazio chamado calculos, que será utilizado para armazenar todos os cálculos realizados.

#### Função Principal para Exibir o Menu
```javascript
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
        switch(opcao) {
            case '1':
                calculadora();
                break;
            case '2':
                listarCalculos();
                break;
            case '3':
                atualizarCalculos();
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
```
Definindo a função exibirMenu, que exibe o menu principal e processa a escolha do usuário. Dependendo da opção escolhida, a função chama a função correspondente para realizar a operação desejada.

#### Função Principal da Calculadora
```javascript
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

                    switch(escolha) {
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
                                exibirMenu();
                            }
                            break;
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
```
Esta função exibe o menu de operações matemáticas e lê os números inseridos pelo usuário. Em seguida, realiza a operação escolhida e armazena o resultado no vetor calculos.

#### Função para Listar os Cálculos
```javascript
function listarCalculos() {
    if (calculos.length === 0) {
        console.log("Nenhum cálculo no sistema.");
        exibirMenu();
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
```
Esta função exibe todos os cálculos armazenados no vetor calculos.

#### Função para Atualizar um Cálculo
```javascript
function atualizarCalculos() {
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
                if (escolha > 0 && escolha <= 5) {
                    rl.question("Digite o primeiro número: ", (num1) => {
                        let numero1 = parseFloat(num1);
                        rl.question("Digite o segundo número: ", (num2) => {
                            let numero2 = parseFloat(num2);
                            let resultado;

                            switch(escolha) {
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
                                        exibirMenu();
                                    }
                                    break;
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
            console.log('Índice inválido! Tente novamente.');
            exibirMenu();
        }
    });
}
```
Esta função permite ao usuário editar um cálculo existente. O usuário escolhe qual cálculo deseja atualizar, insere os novos números e operação, e o cálculo atualizado é salvo no vetor calculos.

#### Função para Deletar um Cálculo
```javascript
function deletarCalculo() {
    listarCalculos();
    rl.question("Digite o número do cálculo que deseja deletar: ", (ind) => {
        let index = parseInt(ind) - 1;
        if (index >= 0 && index < calculos.length) {
            calculos.splice(index, 1);
            console.log("Cálculo deletado com sucesso.");
        } else {
            console.log("Índice inválido! Tente novamente.");
        }
        exibirMenu();
    });
}
```
Esta função permite ao usuário deletar um cálculo existente. O usuário escolhe qual cálculo deseja deletar, e o cálculo é removido do vetor calculos.