const classicBtn = document.getElementById('classic-btn')
const arrowBtn = document.getElementById('arrow-btn')


function classicFunction(event) {
  console.log(this)
  console.log("fonction classique appellée")
} 

if (classicBtn) {
  classicBtn.addEventListener('click', classicFunction)
}
if (arrowBtn) {
  arrowBtn.addEventListener('click', () => {
    console.log(this)
    console.log('fonction flechée appelée')
  })
}
