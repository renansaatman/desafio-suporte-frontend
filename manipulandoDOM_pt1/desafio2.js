// esse desafio foi feito em cima do layout da seguinte pagina: https://testes.autoforce.com.br/autoforce-ford/novos/territory-2022

const formDiv = document.getElementsByClassName('form-conversion__body')[0] // busca a div que contem os fieldsets

const textAreaDiv = document.createElement('div') // cria uma div para agrupar o textarea element
textAreaDiv.className = "form-group"

const textAreaElement = document.createElement('textarea') // cria o elemento textarea
textAreaElement.placeholder = "Mensagem"
textAreaElement.className = "form-control"
textAreaElement.name = "message"
textAreaElement.rows = 5

textAreaDiv.appendChild(textAreaElement) // insere o textarea na div

formDiv.childNodes[0].appendChild(textAreaDiv) // insere a div no fieldset com os campos de input

const selectFieldSet = document.createElement('fieldset') // cria um fieldset para o select
const selectLegend = document.createElement('legend') // cria a label do select
selectLegend.className = "conversion-form__control-label"
selectLegend.innerHTML = "Selecione o tipo de veículo"

selectFieldSet.appendChild(selectLegend) // insere a label no fieldset

const selectElement = document.createElement('select') // cria o elemento select
// estilizacao
selectElement.style.width = "100%"
selectElement.style.borderRadius = ".25rem"
selectElement.style.padding = ".9375rem .75rem"
selectElement.style.color = "#333"
selectElement.name = "carType"

const selectTypes = ['SUV', 'Sedan', 'Hatch', 'Pickup'] // array com as opcoes do select

// faz um map para criar cada opcao de acordo com o array acima e insere no select
selectTypes.map((type) => {
  const typeOption = document.createElement('option')
  typeOption.value = type.toLowerCase()
  typeOption.innerHTML = type
  selectElement.appendChild(typeOption)
})

selectFieldSet.appendChild(selectElement) // insere o select no fieldset

formDiv.insertBefore(selectFieldSet, formDiv.childNodes[3]) // insere o fieldset na posicao escolhida por mim

