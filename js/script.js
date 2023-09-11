function initNavegacaoTab() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabConteudos = document.querySelectorAll(".js-tabconteudo section");
  const verificarItens = tabMenu.length > 0 && tabConteudos.length > 0;

  if (verificarItens) {
    tabConteudos[0].classList.add("ativo");

    function exibirConteudo(index) {
      tabConteudos.forEach((conteudo) => {
        conteudo.classList.remove("ativo");
      });
      tabConteudos[index].classList.add("ativo");
    }

    tabMenu.forEach((menuItem, index) => {
      menuItem.addEventListener("click", function () {
        exibirConteudo(index);
      });
    });
  }
}

initNavegacaoTab()

/* Accordion */

function initAccordion(){
  const perguntasFaq = document.querySelectorAll(".faq-lista dt");
  const verificarItensAcordion = perguntasFaq.length > 0;
  const ativarAccordion = 'ativo'
  perguntasFaq[0].classList.add(ativarAccordion);
  perguntasFaq[0].nextElementSibling.classList.add(ativarAccordion);

  if (verificarItensAcordion) {
    function exibirRespostaAccordion(e) {
      const resposta = e.target.nextElementSibling;
      resposta.classList.toggle(ativarAccordion);
      e.target.classList.toggle(ativarAccordion);
    }

    perguntasFaq.forEach((pergunta) => {
      pergunta.addEventListener("click", exibirRespostaAccordion);
    });
  }

}

initAccordion()


/* Scroll suave (links internos) */

function initScrollSuave(){
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

  function navegacaoInterna(e){
    e.preventDefault()
      const href = e.target.getAttribute('href')
      const section = document.querySelector(href)
      const alturaSection = section.offsetTop
      scrollTo({
        top: alturaSection,
        behavior: 'smooth'
      })
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', navegacaoInterna)
  })
}

initScrollSuave()


/* Animação ao scroll */

function initAnimacaoScroll(){
  
  function animacaoScroll(){
    const sections = document.querySelectorAll('.js-section-scroll')

    if(sections){
      sections.forEach((section) => {
        const metadeAltura = window.innerHeight * 0.6
        const distanciaSectionTopo = section.getBoundingClientRect().top - metadeAltura
        console.log(section.offsetTop)
        const exibirItem = distanciaSectionTopo < 0
        if(exibirItem){
          section.classList.add('ativo')
        }
      })
    }
  }

  window.addEventListener('scroll', animacaoScroll)
}

initAnimacaoScroll()