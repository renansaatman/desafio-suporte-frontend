// esse desafio foi feito em cima do layout da seguinte pagina: https://testes.autoforce.com.br/autoforce-ford/

// busca os itens da barra de navegação
const navList = document.getElementsByClassName('nav')[0]

// exclui os links "Novos" e "Seminovos" da lista
navList.removeChild(navList.childNodes[1]) // Novos
navList.removeChild(navList.childNodes[1]) // Seminovos

// criando o listItem para "Veículos"
const navListItem = document.createElement('li')
navListItem.style = "--animation-index: 1" // coloca o style do li
navListItem.className = "nav-item nav-simple__item" // adiciona as classes do li

// criando o link
const veiculosLink = document.createElement('a')
veiculosLink.href = "/autoforce-ford#"
veiculosLink.className = "nav-link nav-simple__link"
veiculosLink.setAttribute('data-toggle', 'dropdown')
veiculosLink.setAttribute('aria-expanded', 'false')
veiculosLink.innerHTML = "Veículos"

// icone que vem apos o texto "Veiculos"
const dropDownIcon = document.createElement('i')
dropDownIcon.className = "icon icon-dropdown icon-arrow-d"

veiculosLink.appendChild(dropDownIcon) // inserindo o icone no link apos o texto "Veiculos"

// cria a div que irá conter a lista do dropdown
const veiculosDiv = document.createElement('div')
veiculosDiv.className = "nav-simple-sub card-collapse-deep dropdown-menu"

// cria a lista de fato do dropdown
const veiculosList = document.createElement('ul')
veiculosList.className = "list list--border-bottom"

const novosListItem = document.createElement('li') // cria li para a opção de Novos
const novosLink = document.createElement('a')
novosLink.href = "/autoforce-ford/novos"
novosLink.className = "card-collapse-deep__title"
novosLink.innerHTML = "Novos"
novosListItem.appendChild(novosLink) // insere a tag a dentro do li

const seminovosListItem = document.createElement('li') // cria li para a opção de Seminovos
const seminovosLink = document.createElement('a')
seminovosLink.href = "/autoforce-ford/seminovos"
seminovosLink.className = "card-collapse-deep__title"
seminovosLink.innerHTML = "Seminovos"
seminovosListItem.appendChild(seminovosLink)

veiculosList.appendChild(novosListItem) // insere dentro do ul o item Novos
veiculosList.appendChild(seminovosListItem) // insere dentro do ul o item Seminovos

veiculosDiv.appendChild(veiculosList) // insere a ul dentro da div

// insere tanto a tag a quanto a div dentro da li que irá para o nav list
navListItem.appendChild(veiculosLink)
navListItem.appendChild(veiculosDiv)

navList.insertBefore(navListItem, navList.childNodes[1]) // insere a li Veiculos completa logo depois do li de inicio

let toggleFlag = false //flag para saber se o dropdown esta ativo ou nao

function handleClick(event) {
  if(event.target === veiculosLink || event.target === dropDownIcon) { // verifica qual item esta sendo clicado, podendo ser tanto o link a quanto o icone dropdown
    if(toggleFlag) { // se o dropdown estiver ativo ao clicar, ele ira remover as classes e fechar o dropdown
      navListItem.classList.remove('show')
      veiculosDiv.classList.remove('show')
      veiculosLink.setAttribute('aria-expanded', 'false')
      toggleFlag = false
    }
    else { // se o dropdown nao estiver ativo ao clicar, ele ira adicionar as classes e abrir o dropdown
      navListItem.classList.add('show')
      veiculosDiv.classList.add('show')
      veiculosLink.setAttribute('aria-expanded', 'true')
      toggleFlag = true
    }
  }
  else { // se clicar em qualquer outro lugar, o dropdown fecha
    navListItem.classList.remove('show')
    veiculosDiv.classList.remove('show')
    veiculosLink.setAttribute('aria-expanded', 'false')
    toggleFlag = false
  }
}

addEventListener("click", handleClick) // escuta o click do mouse

navList.removeChild(navList.childNodes[4]) // remove o Consórcios atual

// li Consórcios
const consorciosListItem = document.createElement('li')
consorciosListItem.className = "nav-item nav-simple__item"
consorciosListItem.style = "--animation-index: 2"

const consorciosLink = document.createElement('a')
consorciosLink.href = "/autoforce-ford/consorcios"
consorciosLink.className = "nav-link nav-simple__link"
consorciosLink.innerHTML = "Consórcios"

consorciosListItem.appendChild(consorciosLink)

// li Ofertas Unicas
const ofertasUnicasListItem = document.createElement('li')
ofertasUnicasListItem.className = "nav-item nav-simple__item"
ofertasUnicasListItem.style = "--animation-index: 4"

const ofertasUnicasLink = document.createElement('a')
ofertasUnicasLink.href = "/autoforce-ford#"
ofertasUnicasLink.className = "nav-link nav-simple__link"
ofertasUnicasLink.innerHTML = "Ofertas Únicas"

ofertasUnicasListItem.appendChild(ofertasUnicasLink)

// li Contato
const contatoListItem = document.createElement('li')
contatoListItem.className = "nav-item nav-simple__item"
contatoListItem.style = "--animation-index: 6"

const contatoLink = document.createElement('a')
contatoLink.href = "/autoforce-ford#"
contatoLink.className = "nav-link nav-simple__link"
contatoLink.innerHTML = "Contato"

contatoListItem.appendChild(contatoLink)

// insere os 3 ultimos itens criados na ordem correta
navList.insertBefore(consorciosListItem, navList.childNodes[2])

navList.insertBefore(ofertasUnicasListItem, navList.childNodes[4])

navList.appendChild(contatoListItem)

navList.childNodes[5].style = "--animation-index: 5" //modificando o atributo style do Vendas Diretas

/* como já existe a parte de contato logo acima da navbar, achei redundante fazer um dropdown
  para não deixar sem o item, optei por criar esse listener para que com o click ele scrolle a tela para o fim, 
  onde tambem estao os contatos
*/
navList.childNodes[6].addEventListener('click', () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  })
})