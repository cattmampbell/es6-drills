// Run on load...
$(document).ready(() => {
    // console.log(`Testing... Testing... 1, 2, 3, ES6 Drills!`);
    
    // Should log: Start of script.js file!
    console.log(`Start of script.js file!`);
    
    console.log(`--- --- --- `);

    /* Template Literals and Default Parameters Value: */
    let favoriteMovie = (name = `World`, movie = `The Room`) => { console.log(`My name is ${name} and my favorite movie is ${movie}.`); };

    // Should log: My name is World and my favorite movie is The Room.
    favoriteMovie();

    // Should log: My name is World and my favorite movie is Die Hard.
    favoriteMovie(`Die Hard`);

    // Should log: My name is Matthew and my favorite movie is Die Hard.
    favoriteMovie(`Matthew`, `Die Hard`);

    console.log(`--- --- --- `);

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

    // Creates doTheMaths function.
    let doTheMaths = (x, y) => {
        let exponent = Math.pow(x, y);
        let product = x * y;

        // Returns object literal with exponent and product properties.
        return { exponent, product };
    };

    let results = doTheMaths(2, 3);

    // Should log: The exponent is 8. 
    console.log(`The exponent is ${results.exponent}.`);
    // Should log: The product is 6.
    console.log(`The product is ${results.product}.`);

    console.log(`--- --- --- `);

    /* Spread Syntax: */
    let spreadArray = [ `Matthew`, `Chattanooga`, `Pizza` ];

    let spreadFunction = (name, location, food) => {
        console.log(`My name is ${name}.`);
        console.log(`I live in ${location}.`);
        console.log(`My favorite food is ${food}.`);
    };

    // Should log:
    // My name is Matthew.
    // I live in Chattanooga.
    // My favorite food is Pizza.
    let spreadResults = spreadFunction(...spreadArray);

    let myName = `Matthew`;

    let anotherSpreadFunction = (anotherName) => {
        console.log(`Before: ${anotherName}`);
        let spreadName = [ ...anotherName ];
        console.log(`After:`);
        for(let i = 0; i < spreadName.length; i += 1) {
            console.log(spreadName[i]);
        };
    };

    // Should log:
    // Before: Matthew
    // After: 
    // M
    // a
    // t
    // t
    // h
    // e
    // w
    let spreadMyName = anotherSpreadFunction(myName);

    console.log(`--- --- --- `);

    // Should log: End of scripts.js file!
    console.log(`End of scripts.js file!`);
});