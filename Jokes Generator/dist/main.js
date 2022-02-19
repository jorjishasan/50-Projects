'use strict';

const jokesBody = document.querySelector('.jokes__body');
const btnJoke = document.querySelector('.btn-joke');
async function generatejokes() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    const randomJoke = await (await fetch('https://icanhazdadjoke.com/', config)).json();
    jokesBody.innerHTML = randomJoke.joke;

}

generatejokes();


btnJoke.onclick = generatejokes;