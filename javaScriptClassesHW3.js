// Hamster Class

class Hamster {
    constructor(name) {
        this.owner = ''
        this.name = name
        this.price = 15
    }

    wheelRun() {
        console.log('squeak squeak')
    }

    eatFood() {
        console.log('nibble nibble')
    }

    getPrice() {
        console.log(this.price)
    }
}

class Person {
    constructor(name) {
        this.age = 0
        this.height = 0
        this.weight = 0
        this.mood = 0
        this.hamster = []
        this.bankAccount = 0
    }

    getName() {
        return this.name
    }

    getAge() {
        return this.age
    }

    getWeight() {
        return this.weight
    }
    
    greet() {
        return 'Greetings ' + this.name + '!'
    }

    eat() {
        this.weight++
        this.mood++
    }

    exercise() {
        this.weight--
    }

    ageUp() {
        this.age++
        this.height++
        this.weight++
        this.mood--
        this.bankAccount += 10
    }

    buyHamster(hamster) {
        const newHamster = new Hamster(name)
        this.hamster.push(newHamster)
        this.mood += 10
        this.bankAccount -= getPrice()
    }
}