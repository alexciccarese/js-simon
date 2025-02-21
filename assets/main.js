const randomEl = document.querySelectorAll('.random-number')
const inputEl = document.querySelectorAll('.input-numb')
const buttonEl = document.querySelector('.btn')

function generateRandom() {
const randomNumbers = []

  for (let i = 0; i < randomEl.length; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1
    randomEl[i].innerText = randomNumber
    randomNumbers.push(randomNumber)
  }
  
  setTimeout (() => {
    for (let i = 0; i < randomEl.length; i++) {
      const randomNumber = Math.floor(Math.random() * 100) + 1
      randomEl[i].style.display = 'none'
    }
  }, 3000);

  return randomNumbers
}


let randomNumbers = generateRandom()



function showInput() {

  setTimeout(() => {
    for (let i = 0; i < inputEl.length; i++) {
      inputEl[i].classList.remove('d-none')
    }
  }, 3000);

}

showInput()



// check numbers
function checkNumber() {
let correctNumber = true


 for (let i = 0; i < inputEl.length; i++) {
  const inputValue = parseInt(inputEl[i].value)
  if (inputValue !== randomNumbers[i]) {
    correctNumber = false
    break
  }
 }

 if (correctNumber) {
  alert('I numeri sono corretti')

 } else {
  alert('Alcuni numeri sono sbagliati')
 }

}


buttonEl.addEventListener('click', checkNumber)