// esse desafio foi feito em cima do layout da seguinte pagina: https://testes.autoforce.com.br/autoforce-ford/
const mainDiv = document.getElementsByClassName('page page--home')[0]

const whatsappBtn = document.createElement('button') // botao que ira ativar o dropdown
whatsappBtn.className = "btn button button--whatsapp header__phones-button-toggler"
whatsappBtn.style.width = "60px"
whatsappBtn.style.height = "60px"
whatsappBtn.style.padding = "10px"
whatsappBtn.style.position = "fixed"
whatsappBtn.style.bottom = "20px"
whatsappBtn.style.left = "170px"
whatsappBtn.style.zIndex = "999"

const whatsappIcon = document.createElement('i') // icone de whatsapp aproveitado do icone ja utilizado na pagina
whatsappIcon.className = "icon icon-whatsapp"
whatsappIcon.style.fontSize = "35px"
whatsappIcon.style.margin = "0"

whatsappBtn.appendChild(whatsappIcon) // insere o icone no botao
// whatsappDiv.appendChild(whatsappBtn) // insere o botao na div principal

const dropdownList = document.createElement('ul') // cria a ul do dropdown
dropdownList.className = "list list--header-phones list--border-bottom"
dropdownList.style.listStyle = "none"
dropdownList.style.position = "fixed"
dropdownList.style.bottom = "20px"
dropdownList.style.left = "170px"
dropdownList.style.zIndex = "999"
dropdownList.style.backgroundColor = "white"
dropdownList.style.borderRadius = ".25rem"

dropdownList.style.display = "none"

// nessa etapa foram criados os lis e ja inseridos os links dentro deles
const dropdownItem1 = document.createElement('li')
dropdownItem1.className = "header__card-whatsapp-item"

const dropdownLink1 = document.createElement('a')
dropdownLink1.className = "header-mobile__whatsapp-link"
dropdownLink1.href = "https://api.whatsapp.com/send?phone=551199999999"
dropdownLink1.target = '_blank'
dropdownLink1.innerHTML = "<strong>Seminovos:</strong> +55 (11) 99999-9999"
dropdownItem1.appendChild(dropdownLink1)

const dropdownItem2 = document.createElement('li')
dropdownItem2.className = "header__card-whatsapp-item"

const dropdownLink2 = document.createElement('a')
dropdownLink2.className = "header-mobile__whatsapp-link"
dropdownLink2.href = "https://api.whatsapp.com/send?phone=5511111111111"
dropdownLink2.target = '_blank'
dropdownLink2.innerHTML = "<strong>Serviços:</strong> +55 (11) 11111-11111"
dropdownItem2.appendChild(dropdownLink2)

const dropdownItem3 = document.createElement('li')
dropdownItem3.className = "header__card-whatsapp-item"

const dropdownLink3 = document.createElement('a')
dropdownLink3.className = "header-mobile__whatsapp-link"
dropdownLink3.href = "https://api.whatsapp.com/send?phone=5511888888888"
dropdownLink3.target = '_blank'
dropdownLink3.innerHTML = "<strong>Central de Vendas:</strong> +55 (11) 88888-8888"
dropdownItem3.appendChild(dropdownLink3)

// inserindo os lis na ul
dropdownList.appendChild(dropdownItem1)
dropdownList.appendChild(dropdownItem2)
dropdownList.appendChild(dropdownItem3)

document.body.appendChild(whatsappBtn)
document.body.appendChild(dropdownList)

let dropdownFlag = false

function handleClick(event) {
  if(event.target === whatsappBtn || event.target === whatsappIcon) {
    if(dropdownFlag) { // se o dropdown estiver ativo ao clicar, ele ira fechar o dropdown
      dropdownList.style.display = "none"
      whatsappBtn.style.bottom = "20px"
      dropdownFlag = false
    }
    else { // se o dropdown nao estiver ativo ao clicar, ele ira abrir o dropdown
      dropdownList.style.display = "block"
      whatsappBtn.style.bottom = "180px"
      toggleFlag = true
    }
  }
  else {
    dropdownList.style.display = "none"
    whatsappBtn.style.bottom = "20px"
    dropdownFlag = false
  }
}

addEventListener("click", handleClick)

