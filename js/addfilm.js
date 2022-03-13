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
      } else {
        $card.innerHTML = 'Favor Inserir uma Imagem Válida'
      }
    } else {
      $card.innerHTML = 'Favor Inserir uma Categoria Válida'
    }
  } else {
    $card.innerHTML = 'Favor Inserir um Nome'
  }
  document.querySelector('#input-name').value = ''
  document.querySelector('#input-category').value = ''
  document.querySelector('#input-url').value = ''
}

function addFilm(name, category, img) {
  let array = [
    {
      name: `${name}`,
      img: `${img}`
    }
  ]
  if (category == 'Sci-Fi') {
    for (let i of array) {
      filmsScifi.push(i)
    }
  } else if (category == 'Comédia') {
    for (let i of array) {
      filmsComedy.push(i)
    }
  } else if (category == 'Aventura') {
    for (let i of array) {
      filmsAdventure.push(i)
    }
  }
  $card.innerHTML = 'Filme Adicionado com Sucesso'
}
