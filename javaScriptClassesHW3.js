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
        console.log(this.weight)     
        console.log(this.mood) 
    }

    exercise(numberOfWorkouts) {
        if (typeof numberOfWorkouts === 'number' && numberOfWorkouts > 0) {
            for (let i = 0; i < numberOfWorkouts; i++) {
                this.weight--
            }
        } else
            return "Enter a valid number of Workouts greater than zero."
        return this.weight
    }

    ageUp(numberOfYears) {
        for(let i = 0; i < numberOfYears; i++) {
            this.age++
            this.height++
            this.weight++
            this.mood--
            this.bankAccount += 10
        }
        return
    }

    buyHamster(hamster) {
        const newHamster = new Hamster(hamster)
        this.hamster.push(newHamster)
        this.mood += 10
        this.bankAccount -= newHamster.getPrice()
    }
}

// 1. Instantiate a new Person named Timmy

const person1 = new Person("Timmy")
console.log(person1)

// 2. Age Timmy five years

person1.ageUp(5)
console.log(person1)

// 3. Timmy eats 5 times

console.log(person1.eat(5))

// 4. Have Timmy exercise five times

console.log(person1.exercise(5))

// 5. Age Timmy 9 years

console.log(person1.ageUp(9))

// 6. Create a hamster named "Gus"

hamster1 = new Hamster("Gus")

// 7. Set Gus's owner to the string "Timmy"

hamster1.owner = "Timmy"

// 8. Have Timmy "buy" Gus

person1.buyHamster("Gus")

// 9. Age Timmy 15 years

person1.ageUp(15)
console.log(person1)

// 10. Have Timmy eat twice

person1.eat(2)
console.log(person1)

// 11. Have Timmy exercise twice

console.log(person1.exercise(2))


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
console.log(chef1.makeDinner("Chicken Tenders with Sauce", "Big Mac", "Apple Pie"))






