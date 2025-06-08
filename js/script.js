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

function formatarCPF(e) {
  let v = e.target.value.replace(/\D/g, '');
  if (v.length > 11) v = v.slice(0,11);
  v = v.replace(/(\d{3})(\d)/, '$1.$2');
  v = v.replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
  v = v.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
  e.target.value = v;
}


function concluirCadastro() {
  const nome = document.querySelector('#formCadastro input[placeholder="Digite o seu nome"]').value.trim();
  const nasc = document.querySelector('#formCadastro input[type="date"]').value;
  const cpfField = document.querySelector('#formCadastro input[placeholder="Digite o seu CPF"]');
  const cpf = cpfField.value.replace(/\D/g, '');
  const email = document.querySelector('#formCadastro input[type="email"]').value.trim();
  const endereco = document.querySelector('#formCadastro input[placeholder="Digite o seu endereço"]').value.trim();

  if (!nome || !nasc || !cpf || !email || !endereco) {
    alert('Por favor, preencha todos os campos para concluir o cadastro.');
    return;
  }
  if (cpf.length !== 11) {
    alert('CPF inválido. Informe os 11 dígitos corretamente.');
    cpfField.focus();
    return;
  }