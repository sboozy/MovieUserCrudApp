const db = require ('../config/connection');

//add description later
function getAllDBMovies() {
  // console.log("this is db--->", db);
  return db.any(`
    SELECT DISTINCT movie.id, title, director, release_year, description, img_url
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
    SELECT movie.id, movie.title, movie.director, movie.release_year, movie.description, movie.img_url, movie_genre.genre_id, genre.genre_type
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
    SELECT DISTINCT id, genre_type, movie_genre.genre_id
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

//pg promise TASK
  return db.task (t => {
    return t.any(`
      INSERT INTO movie (title, director, release_year, description)
      VALUES ($/title/, $/director/, $/release_year/, $/description/)
      RETURNING movie.id
      `, data)
    .then( movieID => {
      console.log(movieID)
      return t.any(`
        INSERT INTO movie_genre (movie_id, genre_id)
        VALUES ($/m_id/, $/g_id/)
        `, {m_id:movieID[0].id, g_id: data.genre_id})
    })
  })
}

function updateMovieInDB (movie) {
  return db.one(`
    UPDATE movie
    SET
    title = $/title/,
    director = $/director/,
    release_year = $/release_year/,
    genre_id = $/genre_id/,
    description = $/description/
    WHERE id = $/id/
    RETURNING *
    `, movie
  )
}

module.exports = {
  getAllDBMovies,
  getOneDBMovie,
  getAllDBGenres,
  getDBMoviesInOneGenre,
  createMovieInDB,
  updateMovieInDB,
}
