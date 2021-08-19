
document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)


// este é um bloco especifico ou seja uma funçao que só servirá 1uando clicar no bottão de enviar do formulário
function validaFormulario(){
  if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone") != ""){
    alert("Prontinho! Você receberá as novidades por email.")
  
  }else{  
    alert("Por favor, preencha os campos nome, email contato!")
    
  }
  
}


// if()&& document.getElementById()){

// }