

function formatarTelefone(input) {
    input = document.getElementById("call")
    // Remove qualquer caractere que não seja número
    const numeroApenas = input.value.replace(/\D/g, '');
  
    // Formata o número conforme (xx)xxxxx-xxxx
    const regex = /^(\d{2})(\d{5})(\d{4})$/;
    const telefoneFormatado = numeroApenas.replace(regex, '($1)$2-$3');
  
    // Atualiza o valor do input com o número formatado
    input.value = telefoneFormatado;
  }
  