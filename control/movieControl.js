const movieDB = require('../models/movieModel');

function getAllMovies(req, res, next) {
  // console.log('gonna query the DB');
  movieDB.getAllDBMovies()
  .then(data => {
    res.locals.movies = data;
    // console.log(data)
    next();
  })
  .catch(err => {
    next(err);
  })
}

function getMovieByID(req, res, next) {
  // console.log(req.params.id);
  movieDB.getOneDBMovie(req.params.id)
  .then(data => {
    res.locals.movie = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function getAllGenres (req, res, next) {
  console.log('getAllGenres happened')
  movieDB.getAllDBGenres()
  .then(data => {
    res.locals.genres = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function getGenreByID (req, res, next) {
  movieDB.getDBMoviesInOneGenre(req.params.id)
  .then(data => {
    res.locals.genre = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}



function createMovie (req, res, next) {
  console.log('---->movieControl', req.body)
  movieDB.createMovieInDB(req.body)
  .then(newMovie => {
    // res.locals.movieID = newMovie;
    console.log('thennning!')
    next();
  })
  .catch(err => {
    next(err);
  })
}

// function createGenre (req, res, next) {
//   movieDB.createGenre(req.body.genre_type)
//   .then(data => {
//     console.log('we have successfully created a genre');
//     res.locals.genres = data;
//     next()
//   })
//   .catch(err => {
//     next(err);
//   })
// }

// function editMovie (req, res, next) {
//   req.body.id = req.params.id
//   movieDB.updateMovieInDB(req.body)
//   .then(data => {
//     res.locals.movie = data;
//     next()
//   })
//   .catch(err => {
//     next(err);
//   })
// }

module.exports = {
  getAllMovies,
  getMovieByID,
  getAllGenres,
  getGenreByID,
  createMovie,
  // createGenre,
}
