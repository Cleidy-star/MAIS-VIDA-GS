document.addEventListener('DOMContentLoaded', () => {
 
  const cpfInput = document.querySelector('#formCadastro input[placeholder="Digite o seu CPF"]');
  if (cpfInput) {
    cpfInput.addEventListener('input', formatarCPF);
  }

   const formCadastro = document.getElementById('formCadastro');
  if (formCadastro) {
    formCadastro.addEventListener('submit', function(e) {
      e.preventDefault();
      concluirCadastro();
    });
  }

  const formLogin = document.getElementById('formLogin');
  if (formLogin) {
    formLogin.addEventListener('submit', function(e) {
      e.preventDefault();
      loginUsuario();
    });
  }

  const formContato = document.getElementById('formContato');
  if (formContato) {
    formContato.addEventListener('submit', function(e) {
      e.preventDefault();
      enviarMensagemContato();
    });
  }
});
