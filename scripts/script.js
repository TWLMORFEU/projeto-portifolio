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


const botoesCursos = document.querySelectorAll('#formacao-container .btn-vermais');
const cursos = document.querySelectorAll('#formacao-container .curso');

botoesCursos.forEach(botao => {
  botao.addEventListener('click', () => {
    const cursoAtual = botao.closest('.curso');
    const jaEstaAtivo = cursoAtual.classList.contains('ativo');

    // fecha todos os cursos
    cursos.forEach(curso => {
      curso.classList.remove('ativo');
      const btn = curso.querySelector('.btn-vermais');
      if (btn) btn.textContent = 'Ver conteúdo';
    });

    // abre apenas se não estava aberto
    if (!jaEstaAtivo) {
      cursoAtual.classList.add('ativo');
      botao.textContent = 'Ocultar conteúdo';

      cursoAtual.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

 
const botoesProjetos = document.querySelectorAll('#projeto-container .btn-vermais');
const projetos = document.querySelectorAll('#projeto-container .projeto');

botoesProjetos.forEach(botao => {
  botao.addEventListener('click', () => {
    const projetoAtual = botao.closest('.projeto');
    const jaEstaAtivo = projetoAtual.classList.contains('ativo');

    // fecha todos os projetos
    projetos.forEach(projeto => {
      projeto.classList.remove('ativo');
      const btn = projeto.querySelector('.btn-vermais');
      if (btn) btn.textContent = 'Saiba mais...';
    });

    // abre apenas se não estava aberto
    if (!jaEstaAtivo) {
      projetoAtual.classList.add('ativo');
      botao.textContent = 'Ver menos';

      projetoAtual.scrollIntoView({
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
