const db = require ('../config/connection');

//add description later
function getAllMovies() {
  // console.log("this is db:", db.tx);
  return db.any(`
    SELECT DISTINCT movie.id, title, director, release_year, description
    FROM movie
    JOIN movie_genre
    ON movie.id = movie_genre.movie_id
    JOIN genre
    ON movie_genre.genre_id = genre.id`)
}

//add description later
function getOneMovie(id) {
  return db.one(`
    SELECT movie.id, movie.title, movie.director, movie.release_year, movie.description, movie_genre.genre_id, genre.genre_type
    FROM movie
    JOIN movie_genre
    ON movie.id = movie_genre.movie_id
    JOIN genre
    ON movie_genre.genre_id = genre.id
    WHERE movie.id = $1
    LIMIT 1
    `, id
  )
}

// //add description later
// function getMoviesByDirector(director) {
//   return db.any(`
//     SELECT movie.director, movie.title, movie.release_year
//     FROM movie
//     WHERE director = 1$
//     ORDER BY movie.release_year`
//     , id
//   );
// }
function getAllGenreTypes() {
  return db.any(`
    SELECT id, genre_type
    FROM genre
    ORDER BY genre_type ASC`)
}

function getMoviesByGenre(id) {
  return db.any(`
    SELECT genre.id, genre.genre_type AS type, movie.title
    FROM genre
    JOIN movie_genre
    ON genre.id = movie_genre.genre_id
    JOIN movie
    ON movie_genre.movie_id = movie.id
    WHERE genre.id = $1`
    , id
  );
}

function createMovieEntry (movie) {
  return db.one(`INSERT INTO movie (title, director, release_year, description)
    VALUES ($/title/, $/director/, $/release_year/, $/description/)
    RETURNING *
    `, movie
  )
}

function createGenre (genre) {
  return db.one(`
  INSERT INTO genre (genre_type)
  VALUES ($/genre_type/)
  RETURNING *
  `, genre
  )
}

function updateMovie (movie) {
  return db.one(`
    UPDATE movie
    SET title = $/title/, director = $/director/, release_year = $/release_year/,
    description = $/description/
    WHERE id = $/id/
    RETURNING *
    `, movie
  )
}

module.exports = {
  getAllMovies,
  getOneMovie,
  // getMoviesByDirector,
  getAllGenreTypes,
  getMoviesByGenre,
  createMovieEntry,
  createGenre,
  updateMovie,
}
