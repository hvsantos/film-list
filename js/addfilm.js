const $selectadd = document.querySelector('#select-value')
$selectadd.addEventListener('input', checkAdd)

function checkAdd() {
  let inputValue = $selectadd.value
  $card.innerHTML = ''
  if (inputValue == 'addfilm') {
    unhideAdd()
  } else {
    hideAdd()
  }
}
function unhideAdd() {
  document.querySelector('#input-name').removeAttribute('hidden')
  document.querySelector('#input-category').removeAttribute('hidden')
  document.querySelector('#input-url').removeAttribute('hidden')
  document.querySelector('#input-submit').removeAttribute('hidden')
}
function hideAdd() {
  document.querySelector('#input-name').setAttribute('hidden', '')
  document.querySelector('#input-category').setAttribute('hidden', '')
  document.querySelector('#input-url').setAttribute('hidden', '')
  document.querySelector('#input-submit').setAttribute('hidden', '')
}

const $buttonAdd = document.querySelector('#input-submit')
$buttonAdd.addEventListener('click', checkInputs)
function checkInputs(event) {
  event.preventDefault()
  let $inputName = document.querySelector('#input-name').value
  let $inputCategory = document.querySelector('#input-category').value
  let $inputUrl = document.querySelector('#input-url').value
  if ($inputName) {
    if (
      $inputCategory == 'Sci-Fi' ||
      $inputCategory == 'Comédia' ||
      $inputCategory == 'Aventura'
    ) {
      if ($inputUrl.endsWith('.jpg') || $inputUrl.endsWith('.png')) {
        addFilm($inputName, $inputCategory, $inputUrl)
        document.querySelector('#input-name').value = ''
        document.querySelector('#input-category').value = ''
        document.querySelector('#input-url').value = ''
      } else {
        $card.innerHTML = 'Favor Inserir uma Imagem Válida'
      }
    } else {
      $card.innerHTML = 'Favor Inserir uma Categoria Válida'
    }
  } else {
    $card.innerHTML = 'Favor Inserir um Nome'
  }
}

function addFilm(name, category, img) {
  let array = [
    {
      name: `${name}`,
      img: `${img}`
    }
  ]
  if (category == 'Sci-Fi') {
    let check = checkIfWeHaveIt(name, img, filmsScifi)
    if (check == 1) {
      return
    }
    for (let i of array) {
      filmsScifi.push(i)
    }
  } else if (category == 'Comédia') {
    let check = checkIfWeHaveIt(name, img, filmsComedy)
    if (check == 1) {
      return
    }
    for (let i of array) {
      filmsComedy.push(i)
    }
  } else if (category == 'Aventura') {
    let check = checkIfWeHaveIt(name, img, filmsAdventure)
    if (check == 1) {
      return
    }
    for (let i of array) {
      filmsAdventure.push(i)
    }
  }
  $card.innerHTML = 'Filme Adicionado com Sucesso'
}

function checkIfWeHaveIt(name, img, category) {
  for (let i = 0; i < category.length; i++) {
    if (category[i].name == name) {
      $card.innerHTML = 'Você tentou inserir um Nome já existente'
      return 1
    } else if (category[1].img == img) {
      $card.innerHTML = 'Você tentou inserir uma Imagem já existente'
      return 1
    }
  }
  return 0
}
