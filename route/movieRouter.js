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
  .get(movieControl.getAll, movieViewControl.sendAll, sendError)
  .post(movieControl.createMovie, movieControl.createGenre, movieViewControl.sendCreateMovie, sendError)

movieRouter.route('/update/:id')
  // .get(movieControl.getMovie, movieViewControl.sendUpdatedMovie)

movieRouter.route('/movie/:id') //this :id needs the /movie bc otherwise it conflicts with the /new route below
  .get(movieControl.getMovie, movieViewControl.sendMovie, sendError)
  // .put(movieControl.editMovie, movieViewControl.redirectMovieIndex)
  // .get(movieControl.getDirector, movieViewControl.sendDir, sendError)

movieRouter.route('/new')
  .get(movieControl.getAll, movieControl.getAllGenres, movieViewControl.sendNewMovie, sendError)



module.exports = movieRouter;
