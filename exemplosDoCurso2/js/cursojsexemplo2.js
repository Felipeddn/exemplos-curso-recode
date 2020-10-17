// variaveis para mudar cor da tela
var corpo = window.document.body
var corazul = document.getElementById('corazul')
var corverde = document.getElementById('corverde')
var corbranca = document.getElementById('corbranca')

// implementação de interação
corazul.addEventListener('mouseenter', mudarCorpoAzul)
corbranca.addEventListener('mouseenter', mudarCorpoBranca)
corverde.addEventListener('mouseenter', mudarCorpoVerde)


var btn = window.document.querySelector("button#acessar")
var user = window.document.querySelector('input#usuario')
var password = window.document.querySelector('input#senha')
var resp = window.document.querySelector('div#resposta')
var email = window.document.getElementById('email')

btn.addEventListener('click', acessar)

function acessar() {
    // var usuario = user.value
    // var senha = password.value
    if (user.value == 'ana' && password.value == 'recodepro') {
        // (`Bem vindo! ${usuario}, agora você pode acessar todas as funcionalidades do site! `)
        resp.innerHTML = `<p> ${user.value} fez login no site com sucesso!</p>`
        resp.style.color = 'green'
        resp.style.fontSize = '20px'
    } else if (email.value == 'ana@recode.org.br' && password.value == 'recodepro') {
        resp.innerHTML = `<p>Você fez login com sucesso!! usando ${email.value} </p>`
        resp.style.color = 'violet'
        resp.style.fontSize = '20px'
    } else {
        // alert('Usuario ou senhas erradas')
        resp.innerHTML = `<p> Não foi possivel fazer login no site</p>`
        resp.style.color = 'red'
        resp.style.fontSize = '20px'
    }
}

//funções para mudar cor da tela
function mudarCorpoAzul() {
    corpo.style.backgroundColor = 'rgb(106, 181, 241)'
}
function mudarCorpoVerde() {
    corpo.style.background = 'rgb(164, 252, 164)'
}
function mudarCorpoBranca() {
    corpo.style.background = 'white'
}

// exemplo de switch case trimestre
var mes = document.getElementById('mes')
// var valorMes = mes.value
// var numero_do_mes = (valorMes.split("-", 1))    
var btnmostrar_mes = window.document.querySelector('button#mostrar_mes')
var btnmostrar_trimestre = window.document.querySelector('button#mostrar_trimestre')

btnmostrar_mes.addEventListener('click', mostrarMes)
btnmostrar_trimestre.addEventListener('click', verTrimestre)

function mostrarMes() {
    alert(mes.value)
    alert(valorMes)
    alert(numero_do_mes)
    // alert(typeof(mes.value))
    // alert(numero_do_mes)
}
/*${numero_do_mes}*/
function verTrimestre() {
    switch (mes.value) {
        case '2020-01':
        case '2020-02':
        case '2020-03':
            alert(`Quando o mês é ${mes.value} estamos no primeiro Trimestre!!`)
            break
        case '2020-04':
        case '2020-05':
        case '2020-06':
            alert(`Quando o mês é ${mes.value} estamos no segundo Trimestre!!`)
            break
        case '2020-07':
        case '2020-08':
        case '2020-09':
            alert(`Quando o mês é ${mes.value} estamos no terceiro Trimestre!!`)
            break
        case '2020-10':
        case '2020-11':
        case '2020-12':
            alert(`Quando o mês é ${mes.value} estamos no quarto Trimestre!!`)
            break
        default:
            alert('[ERRO] : mês invalido!')
            break
    }
}

var mes2 = document.getElementById('mes2')
var btnmostrar2_mes = window.document.querySelector('button#mostrar2_mes')
var btnmostrar2_trimestre = window.document.querySelector('button#mostrar2_trimestre')

btnmostrar2_mes.addEventListener('click', mostrarMes2)
btnmostrar2_trimestre.addEventListener('click', verTrimestre2)

function mostrarMes2() {
    alert(mes2.value)
    alert(valorMes)
    alert(numero_do_mes)
    // alert(typeof(mes.value))
    // alert(numero_do_mes)
}

function verTrimestre2() {
    if (mes2.value == '2020-01' || mes2.value == '2020-02' || mes2.value == '2020-03')
        alert(`Quando o mês for ${mes2.value} estaremos no primeiro trimestre`)
    else if (mes2.value == '2020-04' || mes2.value == '2020-05' || mes2.value == '2020-06')
        alert(`Quando o mês for ${mes2.value} estaremos no segundo trimestre`)
    else if (mes2.value == '2020-07' || mes2.value == '2020-08' || mes2.value == '2020-09')
        alert(`Quando o mês for ${mes2.value} estaremos no terceiro trimestre`)
    else if (mes2.value == '2020-10' || mes2.value == '2020-11' || mes2.value == '2020-12')
        alert(`Quando o mês for ${mes2.value} estaremos no quarto trimestre`)
    else
        alert('[ERRO]: Mês Invalido!')
}


// pegando elementos input
var opcao_menu = window.document.getElementById('opcao_menu')
var programa = window.document.getElementById('programa')
var programa_situacao = window.document.getElementById('programa_situacao')

// pegando elementos botões
var btn_executar = window.document.getElementById('acao_programa')
var btn_executar2 = window.document.getElementById('acao2_programa')
var btn_executar3 = window.document.getElementById('acao3_programa')

// observando ação para executar função
btn_executar.addEventListener('click', executarIfElse)
btn_executar2.addEventListener('click', executarIfElseAninhados)
btn_executar3.addEventListener('click', executarSwitchCase)


function executarIfElse() {
    if (opcao_menu.value == 1) {
        programa_situacao.value = "Programa iniciado!"
    } else {
        programa_situacao.value = "Qualquer outra ação entre 2 e 5!"
    }
}

function executarIfElseAninhados() {
    if (opcao_menu.value == 1)
        programa_situacao.value = "Programa iniciado!"
    else if (opcao_menu.value == 2)
        programa_situacao.value = "Programa Pausado!"
    else if (opcao_menu.value == 3)
        programa_situacao.value = "Programa Avançado!"
    else if (opcao_menu.value == 4)
        programa_situacao.value = "Programa Retrocedido!"
    else if (opcao_menu.value == 5)
        programa_situacao.value = "Programa Desligado!"
    else
        programa_situacao.value = "Opção invalida!"

}

function executarSwitchCase() {
    // por algum motivo quando coloquei o valor dos cases como sem aspas o programa não funcionou (for some reason it doenst work without '')
    switch (opcao_menu.value) {
        case '1':
            programa_situacao.value = "Programa iniciado!"
            break
        case '2':
            programa_situacao.value = "Programa pausado!"
            break
        case '3':
            programa_situacao.value = "Programa avançado!"
            break
        case '4':
            programa_situacao.value = "Programa retrocedido!"
            break
        case '5':
            programa_situacao.value = "Programa desligado!"
            break
        default:
            programa_situacao.value = "[ERRO]: Opção Invalida!"
            break
    }
}


let contador = 0
let tabuada = document.querySelector('#valor_da_tabuada')
// let tabuada = 3
let btn_multiplicar_facil  = window.document.getElementById('multiplicar_facil')

btn_multiplicar_facil.addEventListener('click', multipicacaoFacil)

function multipicacaoFacil(){
    while(contador <= 10){
        alert(`${(tabuada.value)} x ${contador} = ${(tabuada.value)*contador}`)
        // console.log(`${tabuada} x ${contador} = ${tabuada*contador}`)
        contador++;
    }
    contador = 0
}
let btn_verificar = document.getElementById('verificar')
// var campo1 = document.querySelector('#inputn1') esse funcionou
// var campo1 = document.div.tabuada.getElementsByTagName('input')[0]
let campo1 = document.getElementsByTagName('input')
let btn_ver_resultado = document.querySelector('#resultado_multiplicacao')

btn_verificar.addEventListener('click', verificar)
btn_ver_resultado.addEventListener('click', multipicacao)

function verificar(){
    // campo1[7].value = tabuada.value 
    // campo1.style.color = 'blue'
    alert(`A tabuada calculada será do valor ${tabuada.value}`)
}
let posicao = 8

function multipicacao(){
    while(contador <= 10){
        campo1[posicao].value = tabuada.value
        posicao++
        campo1[posicao].value = contador
        posicao++
        campo1[posicao].value = tabuada.value * contador
        posicao++
        contador++;
        // alert(contador)
    }
    // alert('clicou')
    contador = 0
}