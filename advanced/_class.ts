class Animal {
  constructor(name) {
    this.name = name
  }
  sayHi() {
    return `My name is ${this.name}`
  }
}

let a = new Animal('Jack')
console.log(a.sayHi()) // My name is Jack

// 类的继承
class Cat extends Animal {
  constructor(name) {
    super(name) // 调用父类的 constructor(name)
    console.log(this.name)
  }
  sayHi() {
    return 'Meow, ' + super.sayHi() // 调用父类的 sayHi()
  }
}

let c = new Cat('Tom') // Tom
console.log(c.sayHi()) // Meow, My name is Tom

// 存取器
{
  class Animal {
    constructor(name) {
      this.name = name
    }
    get name() {
      return 'Jack'
    }
    set name(value) {
      console.log('setter: ' + value)
    }
  }

  let a = new Animal('Kitty') // setter: Kitty
  a.name = 'Tom' // setter: Tom
  console.log(a.name) // Jack
}

// 静态方法
{
  class Animal {
    static isAnimal(a) {
      return a instanceof Animal
    }
  }

  let a = new Animal('Jack')
  Animal.isAnimal(a) // true
  a.isAnimal(a) // TypeError: a.isAnimal is not a function
}

// 等实践过后来补齐
