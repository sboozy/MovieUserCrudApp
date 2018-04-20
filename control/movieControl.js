const movieDB = require('../models/movieModel');

function getAll(req, res, next) {
  // console.log('gonna query the DB');
  movieDB.getAllMovies()
  .then(data => {
    // console.log('DB queried!')
    res.locals.movies = data;
    next();
  })
  .catch(err => {
    next(err);
  });
}

function getMovie(req, res, next) {
  // console.log(req.params.id);
  movieDB.getOneMovie(req.params.id)
  .then(data => {
    res.locals.movie = data;
    next();
  })
  .catch(err => {
    // console.log('I caught an error inside getMovie')
    next(err);
  });
}

// function getDirector(req, res, next) {
//   movieDB.getMoviesByDirector(req.params.director)
//   .then(data => {
//     res.locals.director = data;
//     next()
//   })
// }

function getAllGenres (req, res, next) {
  movieDB.getAllGenreTypes()
  .then(data => {
    res.locals.genres = data;
    next();
  })
  .catch(err => {
    next(err);
  });
}

function getOneGenre (req, res, next) {
  movieDB.getMoviesByGenre(req.params.id)
  .then(data => {
    res.locals.genre = data;
    next();
  })
  .catch(err => {
    next(err);
  });
}

module.exports = {
  getAll,
  getMovie,
  // getDirector,
  getAllGenres,
  getOneGenre,
}


