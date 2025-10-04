console.log("Welcome to marvel app !");

/**
 * Get characters from json file 
 * This function fetches character data from a local JSON file
 * and returns a promise that resolves to the character data.
 */
const getCharacters = () => {
    const API_URL = 'http://localhost:3000/data/characters.json';
    return fetch(API_URL)
        .then(response => response.json());

};

// Call getCharacters function, and add characters to the list
const characters = getCharacters().then(characters => {
    // Get the characters list element
    const charactersList = document.getElementById('characters');

    // Clear the list before adding new characters
    charactersList.innerHTML = '';

    // Loop through each character and create a list item
    characters.forEach(character => {
        const characterElement = document.createElement('li');
        characterElement.textContent = character.name;
        charactersList.appendChild(characterElement);
    });
});
