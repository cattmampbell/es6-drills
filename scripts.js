// Run on load...
$(document).ready(() => {
    // console.log(`Testing... Testing... 1, 2, 3, ES6 Drills!`);
    
    // Should log: Start of script.js file!
    console.log(`Start of script.js file!`);

    /* Template Literals and Default Parameters Value: */

    let favoriteMovie = (name = `World`, movie = `The Room`) => { console.log(`My name is ${name} and my favorite movie is ${movie}.`); };

    // Should log: My name is World and my favorite movie is The Room.
    favoriteMovie();

    // Should log: My name is World and my favorite movie is Die Hard.
    favoriteMovie(`Die Hard`);

    // Should log: My name is Matthew and my favorite movie is Die Hard.
    favoriteMovie(`Matthew`, `Die Hard`);

    /* Arrow Functions: */
    // Should log: My name is Olivia and my favorite movie is A Bug's Life.
    favoriteMovie(`Olivia`, `A Bug's Life`);

    // Creates getFirstName function.
    let getFirstName = (fullName) => {
        return console.log(`Your first name is, "${fullName.split(' ')[0]}".`);
    };

    // Should log: Your first name is, "Matthew".
    getFirstName(`Matthew Campbell`);

    // Creates getLastName function.
    let getLastName = (fullName) => { return console.log(`Your last name is, "${fullName.split(' ')[1]}".`); };

    // Should log: Your last name is, "Campbell".
    getLastName(`Matthew Campbell`);

    let doTheMaths = (x, y) => {
        let exponent = Math.pow(x, y);
        let product = x * y;

        return { exponent, product };
    };

    let results = doTheMaths(2, 3);
    // Should log: The exponent is 8. 
    console.log(`The exponent is ${results.exponent}.`);
    // Should log: The product is 6.
    console.log(`The product is ${results.product}.`);

    // Should log: End of scripts.js file!
    console.log(`End of scripts.js file!`);
});