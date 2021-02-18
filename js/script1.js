'use strict'

let numberOfFilms;


function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


    
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const firstQuestion = prompt('Один из последних просмотренных фильмов?', ''),
              secondQuestion = prompt('На сколько оцените его?', '');
    
        if (firstQuestion != null && secondQuestion != null && firstQuestion != '' && secondQuestion != '' && firstQuestion.length < 50) {
    
        personalMovieDB.movies[firstQuestion] = secondQuestion;
        console.log ('Done!');
        } else {
            console.log('Error!');
            i--;
        } 
    
    }
}

// rememberMyFilms();
writeYourGenres();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Prosmotreno sliwkom malo filmov');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 50) {
        console.log('Vi classi4eskiy zritel');
    } else if (personalMovieDB.count >= 50) {
        console.log('Vi kinoman');
    } else {
        console.log ('OWIBKA');
    }
}

// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }

}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`); 
    }
}

