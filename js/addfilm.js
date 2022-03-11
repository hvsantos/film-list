const $add = document.querySelector('.container-input')
const $selectadd = document.querySelector('.select-input')
$selectadd.addEventListener('input', addAFilm)
function addAFilm() {
  let inputValue = $selectadd.value
  if (inputValue == 'addfilm') {
    $add.innerHTML = `<input type="text" class="input-name main-subtitle -small" placeholder="Insira o Nome">
    <input type="text" class="input-url main-subtitle -small" placeholder="Insira a URL da imagem">
    <button type="submit" class="main-subtitle main-button">Adicionar!</button>`
  } else {
    $add.innerHTML = ''
  }
}
