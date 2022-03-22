// Same keys and values
const createInstructor = (firstName, lastName) => ({
    firstName,
    lastName
})



// Computed Property Names
let favoriteNumber = 42;

const instructor2 = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}



// Object Methods
const instructor = {
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
}



// createAnimal function

const createAnimal = (species, verb, noise) => ({
    species,
    [verb]() {
        return noise;
    }
})