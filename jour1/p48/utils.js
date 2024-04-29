

export function reducer (word, currentLetter) {
  return word + currentLetter
}


export function stringToEncodedArray(string, count) {
  const splittedString = string.split("")
  const asciiArray = splittedString.map(letter => incrementChar(letter, count))
  return asciiArray 
}

function incrementChar(letter, count) {
  if(letter.length !== 1) {
    throw new Error('Le format de lettre n\'est pas le bon')
  }
  const charCode = letter.charCodeAt(0)
  return String.fromCharCode(charCode + count)
}
