

const title = document.querySelector('h1')

title.addEventListener('click', ()=> console.log("hello supinfo"))

function tri(indice) {
  return indice === 2
}

const tableau = [1,2,3,4]

const tableau2 = tableau.filter((indice)=> indice === 2)

console.log(tableau2)
