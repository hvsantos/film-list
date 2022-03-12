const $selectremove = document.querySelector('#select-value')
$selectremove.addEventListener('input', checkRemove)
function checkRemove() {
  let inputValue = $selectremove.value
  $card.innerHTML = ''
  if (inputValue == 'removefilm') {
    unhideRemove()
  } else {
    hideRemove()
  }
}

function unhideRemove() {
  document.querySelector('#remove-name').removeAttribute('hidden')
  document.querySelector('#remove-submit').removeAttribute('hidden')
}
function hideRemove() {
  document.querySelector('#remove-name').setAttribute('hidden', '')
  document.querySelector('#remove-submit').setAttribute('hidden', '')
}

const $buttonRemove = document.querySelector('#remove-submit')
$buttonRemove.addEventListener('click', checkIfExist)

function checkIfExist(event) {
  event.preventDefault()
  let $inputRemove = document.querySelector('#remove-name').value
  if ($inputRemove) {
    let returnCheck = checkScifi($inputRemove)
    if (returnCheck != 1) {
      returnCheck = checkComedy($inputRemove)
    } else if (returnCheck != 1) {
      checkAdventure($inputRemove)
    }
  } else {
    $card.innerHTML = 'Favor Inserir um Nome'
  }
  document.querySelector('#remove-name').value = ''
}

function checkScifi(inputName) {
  let counter = filmsScifi.length
  for (let i = 0; i < counter; i++) {
    index = filmsScifi[i].name.indexOf(inputName)
    if (index > -1) {
      $card.innerHTML = 'Filme removido com sucesso!'
      filmsScifi.splice(i, 1)
      return 1
    }
  }
  $card.innerHTML = 'Nao foi encontrado um Filme com esse Nome'
}
function checkComedy(inputName) {
  let counter = filmsComedy.length
  for (let i = 0; i < counter; i++) {
    index = filmsComedy[i].name.indexOf(inputName)
    if (index > -1) {
      $card.innerHTML = 'Filme removido com sucesso!'
      return filmsComedy.splice(i, 1)
    }
  }
  $card.innerHTML = 'Nao foi encontrado um Filme com esse Nome'
}
function checkAdventure(inputName) {
  let counter = filmsAdventure.length
  let index = 0
  for (let i = 0; i < counter; i++) {
    index = filmsAdventure[i].name.indexOf(inputName)
    if (index > -1) {
      $card.innerHTML = 'Filme removido com sucesso!'
      return filmsAdventure.splice(i, 1)
    }
  }
  $card.innerHTML = 'Nao foi encontrado um Filme com esse Nome'
}
