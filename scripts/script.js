const botao = document.getElementById('botao-tema');
const body = document.body;

// Persistência do tema
const temasalvo = localStorage.getItem('tema');
temaEscuro(temasalvo === 'escuro');

// Função para alternar entre tema claro e escuro
function temaEscuro(tipo) {
  if (tipo == true) {
    body.classList.add('escuro');
    botao.innerHTML = '<i class="fa-solid fa-spray-can-sparkles"></i>';
  } else {
    body.classList.remove('escuro');
    botao.innerHTML = '<i class="fa-solid fa-spray-can"></i>';
  }
}

botao.addEventListener('click', () => {
  const isescuro = body.classList.toggle('escuro');
  temaEscuro(isescuro);
  localStorage.setItem('tema', isescuro ? 'escuro' : 'claro');
});


function toggleConteudo(botao) {
  const conteudo = botao.nextElementSibling;
  const visivel = conteudo.style.display === "block";

  conteudo.style.display = visivel ? "none" : "block";
  botao.textContent = visivel ? "Ver conteúdo" : "Ocultar conteúdo";
}

