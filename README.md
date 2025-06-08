# Mais Vida

**Mais Vida** é um aplicativo web responsivo para auxiliar comunidades em situações de emergência como enchentes, calor extremo, deslizamentos, terremotos e ruptura de barreiras de água.

---

## Índice

* [Visão Geral](#visão-geral)
* [Tecnologias](#tecnologias)
* [Estrutura de Arquivos](#estrutura-de-arquivos)
* [Instalação](#instalação)
* [Uso](#uso)
* [Responsividade](#responsividade)
* [Contribuição](#contribuição)
* [Licença](#licença)

---

## Visão Geral

Este projeto fornece páginas para:

1. **Home**: Apresentação do propósito, banner e formulários de login e cadastro.
2. **Integrantes**: Perfil dos desenvolvedores com foto, RM, turma e links para GitHub/LinkedIn.
3. **FAQ**: Perguntas frequentes organizadas em accordion.
4. **Contato**: Formulário de contato e canais de atendimento.
5. **Orientações**: Diretrizes práticas em caso de emergências, separadas por tipo de evento.

Todas as páginas compartilham o mesmo layout de cabeçalho e rodapé.

---

## Tecnologias

* **HTML5**
* **CSS3** (com media queries para breakpoints)
* **JavaScript **
* **LocalStorage** para simulação de cadastro e login

---

## Estrutura de Arquivos

```
/mais-vida
│
├── index.html              # Página Home
├── integrantes.html        # Página Integrantes
├── faq.html                # Página Perguntas Frequentes
├── contato.html            # Página Contato
├── orientacoes.html        # Página Orientações
│
├── css/
│   ├── home.css
│   ├── integrantes.css
│   ├── faq.css
│   ├── contato.css
│   └── orientacoes.css
│
├── js/
│   └── script.js           # Lógica de cadastro, login e form contato
│
└── assets/                 # Imagens e ícones
    ├── img/
    └── icons/
```

---

## Instalação

1. Clone o repositório:

git clone https://github.com/Cleidy-star/MAIS-VIDA-GS.git

## Uso

* **Cadastro**: informe nome, data de nascimento, CPF, e-mail e endereço. O campo de data usa o date-picker nativo e o CPF é formatado automaticamente.
* **Login**: utilize o e-mail cadastrado para simular autenticação.
* **Contato**: preencha o formulário; ao enviar você receberá um alerta de confirmação.
* **Orientações**: navegue por artigos de emergência com sinalização de perigo.

---

## Responsividade

A aplicação atende aos seguintes breakpoints:

* **≤ 600px**: Mobile — menu vertical, cards empilhados.
* **≥ 600px**: Menu horizontal centralizado, cards empilhados.
* **≥ 768px**: Tablets e small laptops — cards lado a lado.
* **≥ 992px**: Desktops médios — largura fixa de cards.
* **≥ 1300px**: Monitores grandes — containers maiores.
