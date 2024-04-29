class Vehicule {
  demarrer() {
    console.log('vroum')
  }
}

class Voiture extends Vehicule {
  constructor() {
    super()
    this.nombreRoues = 4
  }
  
}

class Moto extends Vehicule {
  constructor() {
    super()
    this.nombreRoues = 2
  }
  static hello () {
    console.log("hello moto")
    
  }
}


const car = new Voiture()
const mamoto = new Moto()

console.log(car.nombreRoues)
console.log(mamoto.nombreRoues)

car.demarrer()
mamoto.demarrer()
