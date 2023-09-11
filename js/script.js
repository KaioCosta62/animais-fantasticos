const tabMenu = document.querySelectorAll(".js-tabmenu li")
const tabConteudos = document.querySelectorAll(".js-tabconteudo section")
const verificarItens = tabMenu.length > 0 && tabConteudos.length > 0

if (verificarItens) {
  tabConteudos[0].classList.add("ativo")

  function exibirConteudo(index) {
    tabConteudos.forEach((conteudo) => {
      conteudo.classList.remove("ativo")
    })
    tabConteudos[index].classList.add("ativo")
  }

  tabMenu.forEach((menuItem, index) => {
    menuItem.addEventListener("click", function () {
      exibirConteudo(index)
    })
  })
}


/* Accordion */

const perguntasFaq = document.querySelectorAll('.faq-lista dt')
const respostasFaq = document.querySelectorAll('.faq-lista dd')
const verificarItensAcordion = perguntasFaq.length > 0 && respostasFaq.length > 0

if(verificarItensAcordion){
  function exibirRespostaAccordion(e){
    const resposta = e.target.nextElementSibling
    resposta.classList.toggle('ativo')
    e.target.classList.toggle('ativo')
  }

  perguntasFaq.forEach((pergunta) => {
    pergunta.addEventListener('click', exibirRespostaAccordion)
  })
}