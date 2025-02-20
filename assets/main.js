const randomEl = document.querySelectorAll('.random-number')
const inputEl = document.querySelector('.input-numb')
const buttonEl = document.querySelector('.btn')

function generateRandom() {
  for (let i = 0; i < randomEl.length; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1
    randomEl[i].innerText = randomNumber
  }

}
generateRandom()

