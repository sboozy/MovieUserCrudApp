const movieRouter = require('express').Router();
const movieControl = require('../control/movieControl');
const movieViewControl = require('../control/movieViewControl');
//bring in the models
const movieDb = require('../models/movieModel');

function sendError(err, req, res, next){
  console.log('sending errors');
  res.status(500).json({
    status: 'error',
    message: err.message
  })
}

movieRouter.route('/')
  .get(movieControl.getAll, movieViewControl.sendAll, sendError);

movieRouter.route('/:id')
  .get(movieControl.getMovie, movieViewControl.sendMovie, sendError)
  // .get(movieControl.getDirector, movieViewControl.sendDir, sendError)

module.exports = movieRouter;
