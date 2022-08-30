/* 

Case Sensitive= reconhece letras maiúsculas e minúsculas
conseguimos acessar o DOM das seguintes formas:
por TAG: getElementByTagName()
por ID: getElementById() -> o mais usado 
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector() -> vamos usar esse, é a melhor prática e a última atualização 
VALIDAÇÃO DE CAMPO sempre dentro das funções 


o uso da # é só na querySelector, não se usa no getElementById
*/

let nome = window.document.getElementById ('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width='100%'
email.style.width='100%'
assunto.style.width='100%'

/*
não funcionou esse do nome style, nem no email 
*/

function validaNome() {
let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
       txtNome.innerHTML = 'Nome inválido'
       txtNome.style.color = 'red'
    }

    else { 
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
    }
}

function validaEmail(){
let txtEmail = document.querySelector('#txtEmail')

if (email.value.indexOf ('@') == -1){

    txtEmail.innerHTML = 'Email inválido'
    txtEmail;style.color = 'red'
} else {
    txtEmail.innerHTML = 'Email válido'
    txtEmail.style.color = 'green'
    emailOk = true
}

}
