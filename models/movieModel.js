const db = require ('../config/connection');

function getAllMovies() {
  return db.any(`
    SELECT title, release_year, director.name, genre_type
    FROM movie
    JOIN movie_director
    ON movie.id = movie_director.movie_id
    JOIN director
    ON movie_director.dir_id = director.id
    JOIN movie_genre
    ON movie.id = movie_genre.movie_id
    JOIN genre
    ON movie_genre.genre_id = genre.id`)
}

function getOneMovie() {
  return db.one(`
    SELECT title, release_year, director.name, genre_type
    FROM movie
    JOIN movie_director
    ON movie.id = movie_director.movie_id
    JOIN director
    ON movie_director.dir_id = director.id
    JOIN movie_genre
    ON movie.id = movie_genre.movie_id
    JOIN genre
    ON movie_genre.genre_id = genre.id
    WHERE movie.id = $1`
    , id
  );
}

function get

