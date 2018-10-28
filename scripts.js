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

    // Should log: End of scripts.js file!
    console.log(`End of scripts.js file!`);
});