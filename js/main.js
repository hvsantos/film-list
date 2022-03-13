const $select = document.querySelector('#select-value')
$select.addEventListener('input', verifyCategory)
const $card = document.querySelector('.film-list')
oneRun()
function verifyCategory() {
  let category = $select.value
  if (category == 'scifi') {
    $card.innerHTML = ''
    for (
      let counterScifi = 0;
      counterScifi < filmsScifi.length;
      counterScifi++
    ) {
      $card.innerHTML += `
      <div class="card">
        <p class="main-subtitle -filmtitle">${filmsScifi[counterScifi].name}</p>
        <img src="${filmsScifi[counterScifi].img}" alt=""/>
      </div>`
    }
  } else if (category == 'comedia') {
    $card.innerHTML = ''
    for (
      let counterComedy = 0;
      counterComedy < filmsComedy.length;
      counterComedy++
    ) {
      $card.innerHTML += `
      <div class="card">
        <p class="main-subtitle -filmtitle">${filmsComedy[counterComedy].name}</p>
        <img src="${filmsComedy[counterComedy].img}" alt=""/>
      </div>`
    }
  } else if (category == 'aventura') {
    $card.innerHTML = ''
    for (
      let counterAdventure = 0;
      counterAdventure < filmsAdventure.length;
      counterAdventure++
    ) {
      $card.innerHTML += `
      <div class="card">
        <p class="main-subtitle -filmtitle">${filmsAdventure[counterAdventure].name}</p>
        <img src="${filmsAdventure[counterAdventure].img}" alt=""/>
      </div>`
    }
  }
}

function oneRun() {
  for (let counterScifi = 0; counterScifi < filmsScifi.length; counterScifi++) {
    $card.innerHTML += `
    <div class="card">
      <p class="main-subtitle -filmtitle">${filmsScifi[counterScifi].name}</p>
      <img src="${filmsScifi[counterScifi].img}" alt=""/>
    </div>`
  }
  for (
    let counterComedy = 0;
    counterComedy < filmsComedy.length;
    counterComedy++
  ) {
    $card.innerHTML += `
    <div class="card">
      <p class="main-subtitle -filmtitle">${filmsComedy[counterComedy].name}</p>
      <img src="${filmsComedy[counterComedy].img}" alt=""/>
    </div>`
  }
  for (
    let counterAdventure = 0;
    counterAdventure < filmsAdventure.length;
    counterAdventure++
  ) {
    $card.innerHTML += `
    <div class="card">
      <p class="main-subtitle -filmtitle">${filmsAdventure[counterAdventure].name}</p>
      <img src="${filmsAdventure[counterAdventure].img}" alt=""/>
    </div>`
  }
}
