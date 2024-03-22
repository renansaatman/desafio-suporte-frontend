// esse desafio foi feito em cima do layout da seguinte pagina: https://testes.autoforce.com.br/autoforce-ford/

// captura os elementos ancoras com os numeros de whatsapp
const contactLinks = document.getElementsByClassName('header-mobile__whatsapp-link')

// percorre a collection capturada anteriormente e remove o atributo "data-open-modal", que era responsavel pela a abertura do modal
for(let i = 0; i < contactLinks.length; i++) {
  contactLinks[i].removeAttribute('data-open-modal')
}