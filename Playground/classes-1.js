
class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name
    this.age = age
  }
  getGreeting() {
    return `Hi! I am ${this.name}. :D`
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

const me = new Person("Joe", 29)

console.log(me)
const bridget = new Person()
console.log(bridget.name)
console.log(me.getDescription())
console.log(bridget.getDescription())

class Student extends Person {
  constructor(name, age, major) {
    super()
    this.major = major
  }
  hasMajor() {
    return !!this.major
  }
  getDescription() {
    let description = super.getDescription()

    if (this.hasMajor()) {
      return description += ` Their major is ${this.major}.`
    } else {
      return description
    }
  }
}

const marissa = new Student('Marissa', 30, "Computer Science")
console.log(marissa)
console.log(marissa.getDescription())
console.log(marissa.hasMajor())
console.log(marissa.getDescription())
