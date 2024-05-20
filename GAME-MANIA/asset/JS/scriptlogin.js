const emailInput = document.getElementById("email")

const senhaInput = document.getElementById("password")


function Login(){
    if(emailInput.value == "lucasgoncalodossantos2024@gmail.com" && senhaInput.value == "lucasdev"){
        alert("Login realizado com sucesso");
        window.location.href = "loja.html";
    }
    else{
        alert("A Senha ou Email está errada!! ")

    }
}