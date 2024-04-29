const form = document.querySelector('#form')
form?.addEventListener('submit', (e)=> {
  e.preventDefault()
  const input = document.querySelector("#input")
  if(!input) return
  const searchValue = input.value
  fetch(`https://api.github.com/users/${searchValue}`)
    .then(data => data.json())
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
})