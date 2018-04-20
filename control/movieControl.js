const movieDB = require('../models/movieModel');

function getAll(req, res, next) {
  console.log('gonna query the DB');
  movieDB.getAllMovies()
  .then(data => {
    console.log('DB queried!')
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
    console.log('I caught an error inside getMovie')
    next(err);
  });
}

function getDirector(req, res, next) {
  movieDB.getOneDirector(req.params.id)
  .then(data => {
    res.locals.directors = data;
    next()
  })
}

module.exports = {
  getAll,
  getMovie,
  getDirector,
}


