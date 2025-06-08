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

    const usuario = { nome, nasc, cpf, email, endereco };
  localStorage.setItem('maisVidaUsuario', JSON.stringify(usuario));

  alert(`Cadastro concluído com sucesso! Bem-vindo(a), ${nome}!`);
  formCadastro.reset();
}

function loginUsuario() {
  const email = document.querySelector('#formLogin input[type="email"]').value.trim();
  const senha = document.querySelector('#formLogin input[type="password"]').value.trim();
  if (!email || !senha) {
    alert('Por favor, informe email e senha para fazer login.');
    return;
  }
  const dados = JSON.parse(localStorage.getItem('maisVidaUsuario') || '{}');
  if (dados.email === email) {
    alert('Login realizado com sucesso!');
    formLogin.reset();
  } else {
    alert('Credenciais inválidas. Verifique e tente novamente.');
  }
}

function enviarMensagemContato() {
  const nomeC = document.getElementById('nome').value.trim();
  const emailC = document.getElementById('email').value.trim();
  const assunto = document.getElementById('assunto').value.trim();
  const msg = document.getElementById('mensagem').value.trim();

  if (!nomeC || !emailC || !assunto || !msg) {
    alert('Por favor, preencha todos os campos do formulário de contato.');
    return;
  }

  console.log('Contato enviado:', { nomeC, emailC, assunto, msg });

  alert(`Mensagem enviada com sucesso! Obrigado pelo contato, ${nomeC}.`);
  document.getElementById('formContato').reset();
}
