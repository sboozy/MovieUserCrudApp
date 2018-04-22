const db = require ('../config/connection');

//add description later
function getAllDBMovies() {
  // console.log("this is db--->", db);
  return db.any(`
    SELECT DISTINCT movie.id, title, director, release_year, description
    FROM movie
    JOIN movie_genre
    ON movie.id = movie_genre.movie_id
    JOIN genre
    ON movie_genre.genre_id = genre.id
    `)
}

//add description later
function getOneDBMovie(id) {
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

function getAllDBGenres() {
  return db.any(`
    SELECT id, genre_type, movie_genre.genre_id
    FROM genre
    JOIN movie_genre
    ON genre.id = movie_genre.genre_id
    ORDER BY genre_type ASC`)
}

function getDBMoviesInOneGenre(id) {
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

function createMovieInDB (data) {
  return db.tx('movieTransaction', async (t) => {

    // inserts a movie entry and gets the movie.id
    const movieID = await t.one(`
      INSERT INTO movie (title, director, release_year, description)
      VALUES ($/title/, $/director/, $/release_year/, $/description/)
      RETURNING id
    `, data);

    //Insert into join table
    await t.one(`
      INSERT INTO movie_genre (movie_id, genre_id)
      VALUES ($1, $2)
      RETURNING movie_id
      `, (movieID, genre_id));  //currently not picking up genre_id even though it gets logged in req.body

    return movieID;
  })
}

// function updateMovieInDB (movie) {
//   return db.one(`
//     UPDATE movie
//     SET
//     title = $/title/,
//     director = $/director/,
//     release_year = $/release_year/,
//     description = $/description/
//     WHERE id = $/id/
//     RETURNING *
//     `, movie
//   )
// }

module.exports = {
  getAllDBMovies,
  getOneDBMovie,
  getAllDBGenres,
  getDBMoviesInOneGenre,
  createMovieInDB,
  // updateMovieInDB,
}
