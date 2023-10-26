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

    eat(numberOfMeals) {
        while (numberOfMeals < 0){
            this.weight++
            this.mood++
            numberOfMeals--
        }        
    }

    exercise() {
        this.weight--
    }

    ageUp(numberOfYears) {
        for(let i = 0; i < numberOfYears; i++) {
            this.age++
            this.height++
            this.weight++
            this.mood--
            this.bankAccount += 10
        }
    }

    buyHamster(hamster) {
        const newHamster = new Hamster(name)
        this.hamster.push(newHamster)
        this.mood += 10
        this.bankAccount -= newHamster.getPrice()
    }
}

// 1. Instantiate a new Person named Timmy

const person1 = new Person("Timmy")

// 2. Age Timmy five years

for (let i = 0; i < 5; i++) {
    person1.ageUp()
}

// 3. Timmy eats 5 times

for (let i = 0; i < 5; i++) {
    person1.eat()
}

// 4. Have Timmy exercise five times

for (let i = 0; i < 5; i++) {
    person1.exercise()
}

// 5. Age Timmy 9 years

for (let i = 0; i < 9; i++) {
    person1.ageUp()
}

// 6. Create a hamster named "Gus"

hamster1 = new Hamster("Gus")

// 7. Set Gus's owner to the string "Timmy"

hamster1.owner = "Timmy"

// 8. Have Timmy "buy" Gus

person1.buyHamster()

// 9. Age Timmy 15 years

for (let i = 0; i < 15; i++) {
    person1.ageUp()
}

// 10. Have Timmy eat twice

person1.eat()
person1.eat()

// 11. Have Timmy exercise twice

person1.exercise()
person1.exercise()

// Chef makes Dinners

// Chef should be a factory of Dinner
class Dinner {
    // Add a constructor to dinner that sets the string properties, appetizer, entree and dessert.
    constructor(appetizer, entree, dessert) {
        this.appetizer = appetizer
        this.entree = entree
        this.dessert = dessert
    }
}

class Chef {
    constructor() {
        this.dinner = []
    }

    // Add a method on chef that takes three arguments and returns a new Dinner based on those arguments.

    makeDinner(appetizer, entree, dessert) {
        let newDinner = new Dinner(appetizer, entree, dessert)
        this.dinner.push(newDinner)
        return this.dinner
    }
}

// Have the Chef create 3 dinners, log the dinners

chef1 = new Chef

chef1.makeDinner("Breadsticks with Garlic Mannarina Sauce", "Chicken Parmasean", "Cheesecake")
chef1.makeDinner("Canjun Fries", "Beef Wellington with Rochester Sauce", "Strawberry Sorbet")
chef1.makeDinner("Chicken Tenders with Sauce", "Big Mac", "Apple Pie")






