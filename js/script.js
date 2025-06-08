document.addEventListener('DOMContentLoaded', () => {
 
  const cpfInput = document.querySelector('#formCadastro input[placeholder="Digite o seu CPF"]');
  if (cpfInput) {
    cpfInput.addEventListener('input', formatarCPF);
  }

 