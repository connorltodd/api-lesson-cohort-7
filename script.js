let charactersList = [];

// when the program loads use the api to return the list of characters
// store the characters in an array to display them to the screen later on
// create a function which will loop through the characters array
// inside the loop we will create a character card
// we will inject that character card into the html

// up until now you have been writing synchronous code

// api request is asynchronous 
function fetchCharacters () {
    fetch('https://rickandmortyapi.com/api/character/')
    // .then is a promise
    .then(response => response.json())
    .then(data => {
        charactersList = data.results
        console.log(charactersList)
        createCharacterCards()
    });
}


function createCharacterCards () {
    const charactersListDiv = document.getElementById('characters-list');
    
    for(let i = 0; i < charactersList.length; i++) {
        console.log(charactersList[i].name);
        const card = document.createElement('div');
        card.innerHTML = `
        <div>
            <img src=${charactersList[i].image} />
            <p>${charactersList[i].name}</p>
        </div>
        `
        charactersListDiv.appendChild(card);
    }
}

// version 2: show the characters only after button click
// wrap the fetch within a function
// 




