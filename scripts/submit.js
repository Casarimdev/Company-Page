let inputName = document.getElementById("inputName")
let inputNumber = document.getElementById("inputNum")
let inputEmpresa = document.getElementById("inputEmp")
let inputEmail = document.getElementById("inputEmail")
let areaMensagem = document.getElementById("textArea")
let buttonSubmit = document.getElementById("Submit")

function Send(){
    if (inputName.value == ""){
        alert('Preencha o seu nome.')
    }
    
    else if (inputEmail.value == ""){
        alert('Preencha seu e-mail.')
    }

    else if (inputEmpresa.value == ""){
        alert('Preencha o nome de sua empresa.')
    }

    else if (inputNumber.value == ""){
        alert('Preencha seu número.')
    }

    else{
        alert('E-mail enviado com sucesso! Entraremos em contato.')
        inputEmail.value = ""
        areaMensagem.value = ""
        inputName.value = ""
        inputEmpresa.value = ""
        inputNumber.value = ""
    }
    
    
}