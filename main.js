/* Variáveis */
const btnOpen = document.querySelector("#btnOpen")
const btnReset = document.querySelector("#btnReset")
const message = document.querySelector("#message")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let phrases = [
  "A gente todos os dias arruma os cabelos: por que não o coração?", 
  "A língua resiste porque é mole; os dentes cedem porque são duros.",
  "Uma longa viagem começa por um passo.",
  "Não há que ser forte. Há que ser flexível.",
  "Se não queres que ninguém saiba, não o faças."
]
let randomNumber = Math.round(Math.random() * phrases.length)

/* Eventos */
btnOpen.addEventListener('click', toggleScreenWithClick)
btnReset.addEventListener('click', toggleScreenWithClick)
document.addEventListener('keypress', toggleScreenWithClick)


/* Funções */
function toggleScreenWithClick() {
  generateSentences()
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
  randomNumber = Math.round(Math.random() * phrases.length)
}

function toggleScreenWithEnterKey(e) {
  if(e.key === 'Enter') {
    toggleScreenWithClick()
  }
}

function generateSentences() {
  if(randomNumber == 5) {
    randomNumber = randomNumber - 1
  }
  message.innerText = `${phrases[randomNumber]}`
}

