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

movieRouter.route('/new')
  .get(movieControl.getAllMovies, movieControl.getAllGenres, movieViewControl.sendNewMovie, sendError)

movieRouter.route('/:id') //this :id needs the /movie bc otherwise it conflicts with the /new route below
  .get(movieControl.getMovieByID, movieViewControl.sendMovie, sendError)
  .put(movieControl.editMovie)
  .delete(movieControl.deleteMovie, movieViewControl.redirectMovieIndex, sendError)

movieRouter.route('/:id/update')
.get(movieControl.getMovieByID, movieControl.getAllGenres, movieViewControl.sendUpdatedMovie)





module.exports = movieRouter;
