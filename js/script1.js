"use strict"

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const firstQuestion = prompt('Один из последних просмотренных фильмов?', '');
const secondQuestion = prompt('Один из последних просмотренных фильмов?', '');
const thirdQuestion = prompt('На сколько оцените его?', '');
const fourthQuestion = prompt('На сколько оцените его?', '');

personalMovieDB.movies[firstQuestion] = thirdQuestion;
personalMovieDB.movies[secondQuestion] = fourthQuestion;

console.log(personalMovieDB);