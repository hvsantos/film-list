const $select = document.querySelector('.select-input')
$select.addEventListener('input', verifyCategory)

function verifyCategory() {
  let category = $select.value
  if (category == 'scifi') {
    console.log('SCIFI!')
  } else if (category == 'comedia') {
    console.log('COMEDIA!')
  } else if (category == 'aventura') {
    console.log('AVENTURA!')
  }
}
