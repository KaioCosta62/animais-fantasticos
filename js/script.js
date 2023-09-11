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

function exibirRespostaAccordion(e){
  const resposta = e.target.nextElementSibling
  respostasFaq.forEach((resposta) => {
    resposta.classList.remove('ativo')
  })
  resposta.classList.add('ativo')
}

perguntasFaq.forEach((pergunta) => {
  pergunta.addEventListener('click', exibirRespostaAccordion)
})