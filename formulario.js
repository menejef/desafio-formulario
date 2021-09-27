/** Por boas prativas todas as variáveis devem ficar nas primeiras linhas  Booleano: true (verdadeiro) ou false (falso)*/

/** variavel  campo Nome */
let nome = document.querySelector("#nome")
let labelNome = document.querySelector("#labelNome")
let validNome = false

/** variavel  campo CPF */
let cpf = document.querySelector("#cpf")
let labelCpf = document.querySelector("#labelCpf")
let validCpf = false

/** variavel  campo Endereço */
let endereco = document.querySelector("#endereco")
let labelEndereco = document.querySelector("#labelEndereco")
let validEndereco = false

/** variavel  campo Numero do Endereço */
let numero = document.querySelector("#numero")
let labelNumero = document.querySelector("#labelNumero")
let validNumero = false

/** variavel  campo numero de Celular */
let celular = document.querySelector("#celular")
let labelCelular = document.querySelector("#labelCelular")
let validCelular = false

/** FIM das variáveis */

/** Por boas prativas os eventos e funções ficam nas linhas abaixo das variáveis */

/** Evento de validação Nome */

nome.addEventListener("keyup", () => {
    if (nome.value.length <= 15) {
        labelNome.setAttribute("style", "color: red")
        labelNome.innerHTML = "Nome *Insira o nome completo"
        nome.setAttribute("style", "border-color: red")
        validNome = false
    } else {
        labelNome.setAttribute("style", "color: green")
        labelNome.innerHTML = "Nome"
        nome.setAttribute("style", "border-color: green")
        validNome = true

    }
})

/** Evento de validação CPF */

cpf.addEventListener("keyup", () => {
    if (cpf.value.length <= 10) {
        labelCpf.setAttribute("style", "color: red")
        labelCpf.innerHTML = "CPF *Insira o CPF completo"
        cpf.setAttribute("style", "border-color: red")
        validCpf = false
    } else {
        labelCpf.setAttribute("style", "color: green")
        labelCpf.innerHTML = "CPF"
        cpf.setAttribute("style", "border-color: green")
        validCpf = true

    }
})

/** Evento de validação Endereço */
endereco.addEventListener("keyup", () => {
    if (endereco.value.length <= 3) {
        labelEndereco.setAttribute("style", "color: red")
        labelEndereco.innerHTML = "Endereço *Insira o Endereço"
        endereco.setAttribute("style", "border-color: red")
        validEndereco = false
    } else {
        labelEndereco.setAttribute("style", "color: green")
        labelEndereco.innerHTML = "Endereço"
        endereco.setAttribute("style", "border-color: green")
        validEndereco = true


    }
})

/** Evento de validação Numero do endereço */
numero.addEventListener("keyup", () => {
    if (numero.value.length <= 1) {
        labelNumero.setAttribute("style", "color: red")
        labelNumero.innerHTML = "Número *Insira o Número"
        numero.setAttribute("style", "border-color: red")
        validNumero = false
    } else {
        labelNumero.setAttribute("style", "color: green")
        labelNumero.innerHTML = "Número"
        numero.setAttribute("style", "border-color: green")
        validNumero = true


    }
})

/** Evento de validação numero de Celular */
celular.addEventListener("keyup", () => {
    if (celular.value.length <= 10) {
        labelCelular.setAttribute("style", "color: red")
        labelNome.innerHTML = "Celular *Insira o número Celular"
        celular.setAttribute("style", "border-color: red")
        validCelular = false
    } else {
        labelCelular.setAttribute("style", "color: green")
        labelCelular.innerHTML = "Celular"
        celular.setAttribute("style", "border-color: green")
        validCelular = true


    }
})
/** Fim do evento de Validação */

/* function do botão: Quando é clicado apresenta as mensagens de Erro ou Sucesso */

function cadastrar() {
    if (validNome && validCpf && validEndereco && validNumero && validCelular) {
        alert("Cadastro efetuado com Sucesso!")
    } else {
        alert("Formulário Incompleto!")
    }
}