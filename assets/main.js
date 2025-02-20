const randomEl = document.querySelectorAll('.random-number')
const inputEl = document.querySelectorAll('.input-numb')
const buttonEl = document.querySelector('.btn')

function generateRandom() {
  for (let i = 0; i < randomEl.length; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1
    randomEl[i].innerText = randomNumber
  }
  
  setTimeout (() => {
    for (let i = 0; i < randomEl.length; i++) {
      const randomNumber = Math.floor(Math.random() * 100) + 1
      randomEl[i].style.display = 'none'
    }
  }, 3000);
}


const randomNumber = generateRandom()



function showInput() {

  setTimeout(() => {
    for (let i = 0; i < inputEl.length; i++) {
      inputEl[i].classList.remove('d-none')
    }
  }, 3000);

}

const input = showInput()

