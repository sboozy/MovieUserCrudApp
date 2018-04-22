const movieRouter = require('express').Router();
const movieControl = require('../control/movieControl');
const movieViewControl = require('../control/movieViewControl');
//bring in the models
const movieDb = require('../models/movieModel');

function sendError(err, req, res, next){
  console.log('sending errors from router');
  res.status(500).json({
    status: 'error',
    message: err.message
  })
}

movieRouter.route('/')
  .get(movieControl.getAllMovies, movieViewControl.sendAll, sendError)
  .post(movieControl.createMovie, movieViewControl.handleCreateMovie, sendError)

movieRouter.route('/update/:id')
  // .get(movieControl.getMovieByID, movieViewControl.sendUpdatedMovie)

movieRouter.route('/movie/:id') //this :id needs the /movie bc otherwise it conflicts with the /new route below
  .get(movieControl.getMovieByID, movieViewControl.sendMovie, sendError)
  // .put(movieControl.editMovie, movieViewControl.redirectMovieIndex)

movieRouter.route('/new')
  .get(movieControl.getAllMovies, movieControl.getAllGenres, movieViewControl.sendNewMovie, sendError)



module.exports = movieRouter;
