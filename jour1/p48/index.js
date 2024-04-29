import { stringToEncodedArray, reducer } from './utils.js'

const months = [
  "Janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "Juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];

const monthsLowerCase = months.map(mois => mois.toLowerCase())

const encodedMonth = monthsLowerCase.map(month => (
  stringToEncodedArray(month, 1).reduce(reducer)
))

console.log(encodedMonth)

const decodedMonth = encodedMonth.map(month => (
  stringToEncodedArray(month, -1).reduce(reducer)
))

console.log(decodedMonth)


