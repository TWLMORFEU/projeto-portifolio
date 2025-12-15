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

document.querySelectorAll('.btn-vermais').forEach(botao => {
  botao.addEventListener('click', () => {
    const curso = botao.closest('.curso');

    curso.classList.toggle('ativo');

    botao.textContent = curso.classList.contains('ativo')
      ? 'Ocultar conteúdo'
      : 'Ver conteúdo';

    // garante que o início do conteúdo fique visível
    if (curso.classList.contains('ativo')) {
      curso.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


// Scroll suave para links de navegação
const navlinks = document.querySelectorAll('#menu ul  a.link');
navlinks.forEach(link => {
  link.addEventListener(`click`, function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight -  20;
      window.scrollTo({
        top: targetPosition, 
        behavior: 'smooth'
      });
    }
  });
});
