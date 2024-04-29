function resolveAfter2Seconds() {
  return new Promise(resolve => {
  setTimeout(() => {
  resolve('resolved');
  }, 2000);
  });
  }

const handlePromise = (response)=> {
  console.log("on a eu un retour : ", response)
}

const handleError = err => {
  console.log(err)
}

const promesse =  resolveAfter2Seconds()

promesse
  .then(handlePromise)
  .catch(handleError)

console.log("ceci sera affiché en dernier")

