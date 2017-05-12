class Animal {
  constructor (name, dob) {
    if (typeof name === 'string') {
      this.name = name
    }
    this.name = name
    this.dob = dob
  }

  getAge () {
    let today = new Date()
    let year = today.getFullYear()
    let age = year - this.dob
    return age
  }
  toString () {
    window.alert(this.name + ' ' + this.dob)
  }
}
class Mammal extends Animal {
  constructor (name, dob) {
    super(name, dob)
    this.name = name
    this.dob = dob
  }
  mammalBirth (name, dob) {
    let birth = new Mammal(name, dob)
    return birth
  }
  static getScienticName () {
    return 'Mammalia'
  }
  roar (decibel) {
    if (decibel > 10 || decibel < 1 || typeof decibel === 'string') {
      console.log('decibel must be between 1 and 10')
    }
    if (decibel >= 5) {
      console.log('all surrounding animals run in fear!!!')
    } else {
      console.log('nothing happens')
    }
  }
  toString () {
    console.log(this.name + ' ' + this.dob)
  }
}

class Reptile extends Animal {
  constructor (name, dob) {
    super(name, dob)
    this.name = name
    this.dob = dob
    this.swim = true
  }
  reptileBirth (name, dob) {
    let birth = new Reptile(name, dob)
    return birth
  }
  static getScienticName () {
    return 'Reptilia'
  }
  canSwim () {
    this.swim = false
  }
  toString () {
    console.log(this.name + ' ' + this.dob)
  }
}

let snake = new Reptile('snakey', 1987)
console.log(snake.reptileBirth('Dobie', 2001))
